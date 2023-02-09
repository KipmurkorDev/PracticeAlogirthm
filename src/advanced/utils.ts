import { Scope } from "./models/Scope";


export function getValue(scope: Scope, value: string) {

    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
        return value.replace(/"/g, '').replace(/'/g, '');
    }

    if (value == 'null') return null;

    if (value == '$now') return new Date(getVariableValue(scope, value)).toISOString();

    if (value.startsWith('$')) return getVariableValue(scope, value);

    if (value.startsWith('DATESUB') || value.startsWith('DATEADD')) {
        const match = value.match(/\((.*?) (.*?)\)/);
        if (match == null) throw Error('ERROR ON PARSING - CHECK PLS');


        const [val, a, b] = Array.from(match);

        if (value.startsWith('DATESUB')) {
            return new Date(getVariableValue(scope, a) - getVariableValue(scope, b)).toISOString();
        } else {
            return new Date(getVariableValue(scope, a) + getVariableValue(scope, b)).toISOString();
        }

    }

    const result = parseFloat(value);
    if (!isNaN(result)) return result;
    return value;

}

export function getVariableValue(scope: Scope, name: string) {

    if (name.includes('_')) {
        const [base, exp] = name.split('_');
        const target = scope.variables.find(v => v.name == base);
        if (target) return target.value() * parseInt(exp);
    }

    const target = scope.variables.find(v => v.name == name);

    if (!target) {
        scope.warning('Variable', name, 'not found - Using', name, 'literal instead.');
        return name;
    }

    return target.value();

}