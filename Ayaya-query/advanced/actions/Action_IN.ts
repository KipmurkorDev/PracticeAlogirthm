
import { Scope } from "../models/Scope";
import { getValue } from "../utils";

// Action:      IN
// Signature:   ME VALUE

export function execute(scope: Scope, ME: string, VALUE: string) {

    const value = getValue(scope, VALUE);

    scope.in = value;

    const aggregation = { $unwind: `$${scope.in}` }

    scope.aggregation.push(aggregation);

}