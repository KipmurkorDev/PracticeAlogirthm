
import * as Action_ON from './actions/Action_ON';
import * as Action_IN from './actions/Action_IN';
import * as Action_MATCH from './actions/Action_MATCH';
import * as Action_LIMIT from './actions/Action_LIMIT';
import * as Action_SORT from './actions/Action_SORT';
import * as Action_COUNT from './actions/Action_COUNT';
import * as Action_GET from './actions/Action_GET';
import * as Action_SCOPE from './actions/Action_SCOPE';


import { CODE } from './models/CODE';
import { Scope } from './models/Scope';


type ActionArrayElem = { id: string, syntax: CODE[], execute: (...args: any) => any };

const actions: ActionArrayElem[] = [
    { id: 'on', syntax: [CODE.ME, CODE.KEY_STAR, CODE.VALUE, CODE.MIXIN], execute: Action_ON.execute },
    { id: 'in', syntax: [CODE.ME, CODE.VALUE], execute: Action_IN.execute },
    { id: 'match', syntax: [CODE.ME, CODE.KEY, CODE.OP, CODE.VALUE, CODE.MIXIN], execute: Action_MATCH.execute },
    { id: 'matchor', syntax: [CODE.ME, CODE.KEY, CODE.OP, CODE.VALUE, CODE.MIXIN], execute: Action_MATCH.execute },
    { id: 'limit', syntax: [CODE.ME, CODE.VALUE], execute: Action_LIMIT.execute },
    { id: 'sort', syntax: [CODE.ME, CODE.KEY, CODE.ORDER], execute: Action_SORT.execute },
    { id: 'count', syntax: [CODE.ME, CODE.MIXIN], execute: Action_COUNT.execute },
    { id: 'count!', syntax: [CODE.ME, CODE.MIXIN], execute: Action_COUNT.execute },
    { id: 'get', syntax: [CODE.ME, CODE.KEY], execute: Action_GET.execute },
    { id: 'scope', syntax: [CODE.ME, CODE.KEY], execute: Action_SCOPE.execute },
]

function getPiece(left: string) {

    if (left.startsWith('DATESUB') || left.startsWith('DATEADD')) {
        return left.substring(0, left.length - 1);
    }

    const delimiters = [['\'', '\''], ['"', '"']];
    const target = delimiters.find(e => e[0] == left[0]);
    if (!target) return;
    const pieceMatch = left.match(/["|'](.*?)["|']/);
    const piece = pieceMatch?.at(1);
    return `"${piece}"`;


}

export function analyzeLine(scope: Scope, lineIndex: number, text: string) {

    const actionText = text.includes(' ') ? text.split(' ')[0] : text.split(';')[0];
    const action = actions.find(a => a.id == actionText.toLocaleLowerCase());
    if (!action) throw Error(`${actionText} is not a valid action on line ${lineIndex + 1}`);

    let textLeft: string = text;

    const pieces: string[] = [];

    for (const type of action.syntax) {

        if (type == CODE.MIXIN) {
            pieces.push(textLeft.substring(0, textLeft.length - 1));
            break;
        }

        const piece = getPiece(textLeft);

        if (piece) {
            const len = piece.length;
            textLeft = textLeft.substring(len + 1);
            pieces.push(piece);
            continue;
        }

        let splitIndex = textLeft.indexOf(textLeft.includes(' ') ? ' ' : ';');
        if (splitIndex == -1) {
            throw Error(`Error parsing line ${lineIndex + 1}` + JSON.stringify({ splitIndex, type, textLeft, text, action }));
        }
        const code = textLeft.substring(0, splitIndex);
        textLeft = textLeft.substring(splitIndex + 1);
        pieces.push(code);
    }

    action.execute(scope, ...pieces);

}