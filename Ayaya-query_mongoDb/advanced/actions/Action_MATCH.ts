
import { Scope } from "../models/Scope";
import { getValue } from "../utils";

// Action:      MATCH
// Signature:   ME KEY OP VALUE MIXIN


export function execute(scope: Scope, ME: string, KEY: string, OP: string, VALUE: string, MIXIN: string) {


    const values = [
        [KEY, OP, getValue(scope, VALUE)]
    ];

    const mixinValues = MIXIN ? MIXIN.split(' ') : [];

    for (let i = 0; i < mixinValues.length; i += 3) {
        const key = mixinValues[i];
        const op = mixinValues[i + 1];
        const value = getValue(scope, mixinValues[i + 2]);
        values.push([key, op, value]);
    }


    const matches: any[] = [];

    for (const [key, op, value] of values) {
        const completeKey = scope.in ? `${scope.in}.${key}` : key;
        if (op.toLowerCase() == 'eq') matches.push({ [completeKey]: value });
        if (op.toLowerCase() == 'neq') matches.push({ [completeKey]: { $ne: value } });
        if (op.toLowerCase() == 'like') matches.push({ [completeKey]: { $regexp: value } });
        if (op.toLowerCase() == 'gt') matches.push({ [completeKey]: { $gt: value } });
        if (op.toLowerCase() == 'lt') matches.push({ [completeKey]: { $lt: value } });
    }

    const aggregation = (ME.toLowerCase() == 'match') ?
        { $match: matches[0] } :
        { $match: { $or: matches } };

    scope.aggregation.push(aggregation);

}