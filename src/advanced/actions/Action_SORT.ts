
import { Scope } from "../models/Scope";
// Action:      SORT
// Signature:   ME KEY ORDER

export function execute(scope: Scope, ME: string, KEY: string, ORDER: string) {

    const key = scope.in ? `${scope.in}.${KEY}` : KEY;

    const order = ORDER == '-1' ? -1 : 1;

    const aggregation = { $sort: { [key]: order } }

    scope.aggregation.push(aggregation);

}