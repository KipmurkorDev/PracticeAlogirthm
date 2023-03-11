
import { Scope } from "../models/Scope";

// Action:      GET
// Signature:   ME KEY


export function execute(scope: Scope, ME: string, KEY: string) {


    scope.lastStatements[0] = { $group: { _id: 'QueryResult', data: { $push: `$${scope.scope}.${KEY}` } } }

}
