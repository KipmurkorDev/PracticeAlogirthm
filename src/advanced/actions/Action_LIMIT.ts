
import { Scope } from "../models/Scope";

// Action:      LIMIT
// Signature:   ME VALUE

export function execute(scope: Scope, ME: string, VALUE: string) {

    const value = parseFloat(VALUE)

    const aggregation = { $limit: value }

    scope.aggregation.push(aggregation);

}