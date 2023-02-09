
import { Scope } from "../models/Scope";

// Action:      SCOPE
// Signature:   ME KEY


export function execute(scope: Scope, ME: string, KEY: string) {

    scope.scope = KEY;

    if (
        scope.lastStatements[0].$group &&
        scope.lastStatements[0].$group.data &&
        scope.lastStatements[0].$group.data.$push
    ) {
        scope.lastStatements[0].$group.data.$push = `$${scope.scope}`;
    }

}
