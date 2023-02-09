import { Variable } from "./Variable";

export class Scope {
    aggregation: any[] = [];
    warnings: string[] = [];
    variables: Variable[] = [];
    lastStatements: any[] = [];
    in: string;
    hasOn: boolean = false;
    accessedDocuments: any[] = [];
    scope: string = 'docs';

    debug() {
        console.log(JSON.stringify(this.aggregation));
    }

    constructor() {
        this.variables = this.getDefaultVariables();
    }

    getDefaultVariables() {
        return [
            { name: '$now', type: 'date', value: () => new Date().getTime() },
            { name: '$second', type: 'date', value: () => 1000 },
            { name: '$minute', type: 'date', value: () => 1000 * 60 },
            { name: '$hour', type: 'date', value: () => 1000 * 60 * 60 },
            { name: '$day', type: 'date', value: () => 1000 * 60 * 60 * 24 },
            { name: '$week', type: 'date', value: () => 1000 * 60 * 60 * 24 * 7 },
            { name: '$month', type: 'date', value: () => 1000 * 60 * 60 * 24 * 30 },
            { name: '$year', type: 'date', value: () => 1000 * 60 * 60 * 24 * 30 * 12 },
        ]
    }

    warning(...args) {
        this.warnings.push(args.join(' '));
    }
}