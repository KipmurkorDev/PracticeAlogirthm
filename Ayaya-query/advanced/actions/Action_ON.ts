
import { log } from "console";
import { Scope } from "../models/Scope";
import { getValue } from "../utils";

// Action:      ON
// Signature:   ME KEY_STAR VALUE MIXIN


export function execute(scope: Scope, ME: string, KEY_STAR: string, VALUE: string, MIXIN: string) {
    const key = KEY_STAR.substring(0, KEY_STAR.length - 1);

    const mixinValues = MIXIN ? MIXIN.split(' ') : [];

    const values = [getValue(scope, VALUE)]

    const mixins = mixinValues.map(e => getValue(scope, e)).filter(e => e != undefined && e.length > 0);
    values.push(...mixins);

    const aggregation = { $match: { [key]: { $in: values } } }

    scope.accessedDocuments.push(...values);
    scope.hasOn = true;

    scope.aggregation.push(aggregation);

}
