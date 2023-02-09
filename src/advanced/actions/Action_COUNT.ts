
import { Scope } from "../models/Scope";

// Action:      COUNT
// Signature:   ME MIXIN

export function execute(scope: Scope, ME: string, MIXIN: string) {

    if (ME.toLowerCase() == 'count!') {
        //TODO: replace scope.in with scope.scope maybe ??
        scope.lastStatements[0] = { $group: { _id: `distinct`, uniques: { $addToSet: `$${scope.in}.${MIXIN}` } } }
        scope.lastStatements.push({ $unwind: '$uniques' });
        scope.lastStatements.push({ $count: 'count' });
        return;
    }

    if (MIXIN) {
        scope.lastStatements[0] = { $group: { _id: `${scope.scope}.${MIXIN}` } }
        scope.lastStatements.push({ $count: 'count' });
    } else {
        scope.lastStatements[0] = { $count: 'count' };
    }

}