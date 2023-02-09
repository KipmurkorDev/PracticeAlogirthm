
import { analyzeLine } from "./lexer";
import { Scope } from "./models/Scope";

type Options = {
    skipOn?: boolean,
    vars?: { name: string, type: string, value: () => any }[]
}

export function createStatement(query: string, options?: Options, checkAccess = (accessed) => true) {

    options = options || {};

    const rows = query.split(';').map(e => e.trim() + ';').filter(e => e && e.length > 1);

    const scope = new Scope();

    scope.variables.push(...(options.vars || []));

    scope.lastStatements = [{ $group: { _id: 'QueryResult', data: { $push: "$docs" } } }];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        analyzeLine(scope, i, row);
    }

    scope.aggregation.push(...scope.lastStatements);

    if (!options.skipOn && !scope.hasOn) throw Error('ON is required');

    const hasAccess = checkAccess(scope.accessedDocuments);

    return hasAccess ? scope.aggregation : [];

}

createStatement(`
    ON customkey* t1;
    MATCH index GT DATESUB($now $month);
`);