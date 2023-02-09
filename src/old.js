
const variables = []

function getDefaultVariables() {
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

function getVariableValue(e) {
    if (e.includes('_')) {
        const [base, exp] = e.split('_');
        const target = variables.find(k => k.name == base);
        if (target) return target.value() * exp;
    }
    const target = variables.find(k => k.name == e);
    if (!target) return e;
    return target.value();
}

function getValue(e) {
    if ((e.startsWith('"') && e.endsWith('"')) || (e.startsWith('\'') && e.endsWith('\''))) {
        return e.replace(/"/g, '').replace(/'/g, '');
    }
    if (e == 'null') return null;

    if (e == '$now') return new Date(getVariableValue(e)).toISOString();

    if (e.startsWith('$')) return getVariableValue(e);

    if (e.startsWith('DATESUB')) {
        const [val, a, b] = e.match(/\((.*?) (.*?)\)/);
        return new Date(getVariableValue(a) - getVariableValue(b)).toISOString();
    }

    if (e.startsWith('DATEADD')) {
        const [val, a, b] = e.match(/\((.*?) (.*?)\)/);
        return new Date(getVariableValue(a) + getVariableValue(b)).toISOString();
    }

    const value = parseFloat(e);
    if (!isNaN(value)) return value;
    return e;
}

function getMatchSubStatement(op, key, _value, settings) {
    const value = getValue(_value);

    const completeKey = (settings && settings.in) ? `${settings.in}.${key}` : key;

    if (op.toLowerCase() == 'eq') return { [completeKey]: value };
    if (op.toLowerCase() == 'neq') return { [completeKey]: { $ne: value } };
    if (op.toLowerCase() == 'like') return { [completeKey]: { $regexp: value } };
    if (op.toLowerCase() == 'gt') return { [completeKey]: { $gt: value } };
    if (op.toLowerCase() == 'lt') return { [completeKey]: { $lt: value } };
}

const statementsFunctions = {
    'from': function (e) {
        let key = 'name';
        const hasCustomKey = e[0].endsWith('*');
        if (hasCustomKey) {
            const _customKey = e.splice(0, 1)[0];
            key = _customKey.substring(0, _customKey.length - 1)
        }
        return {
            $match: { [key]: { $in: e.map(k => getValue(k)) } }
        }
    },
    'limit': function (e) {
        return { $limit: parseInt(e) }
    },
    'match': function (e, settings) {
        const [key, op, value] = e;
        return { $match: getMatchSubStatement(op, key, value, settings) }
    },
    'sort': function (e, settings) {
        const [key, value] = e;
        const completeKey = (settings && settings.in) ? `${settings.in}.${key}` : key;
        return { $sort: { [completeKey]: getValue(value) } }
    },
    'matchor': function (e, settings) {
        const data = e;
        const ors = [];
        while (data.length > 0) {
            const [key, op, value] = data.splice(0, 3);
            const res = getMatchSubStatement(op, key, value, settings);
            ors.push(res);
        }
        return { $match: { $or: ors } }
    },
}

function createStatement(query, options, checkAccess = (accessed) => true) {

    options = options || {};

    variables.length = 0;
    variables.push(...getDefaultVariables());

    options.vars?.forEach(v => {
        variables.push(v);
    });

    const accessedDocuments = [];

    const isOk = { hasOn: false }

    const settings = {
        in: undefined,
        finalscope: 'docs'
    }

    const rows = query.split(';').map(e => e.trim()).filter(e => e && e.length > 0);

    const lastStatements = [{ $group: { _id: 'QueryResult', data: { $push: "$docs" } } }];

    const list = [undefined];

    for (const row of rows) {
        const [keyword, ..._body] = row.split(' ');

        const body = [];

        //-------- HANDLE SPACES ON STRINGS AND () -----------------

        const charsToOpenClose = [
            ["'", "'"],
            ['"', '"'],
            ['DATESUB(', ')'],
            ['DATEADD(', ')']
        ]

        let tmp = { val: undefined, index: 0, count: 0 };

        for (let i = 0; i < _body.length; i++) {

            const target = _body[i];

            //HAS SOMETHING OPEN ?
            if (tmp.val) {

                //Add 1 to count
                tmp.count++;

                // IS CLOSING ?
                if (target.endsWith(tmp.val[1])) {
                    //SAVE DATA AND RESET VAL
                    const subBody = [];
                    for (let k = 0; k < tmp.count + 1; k++) {
                        subBody.push(_body[tmp.index + k])
                    }
                    body.push(subBody.join(' '));
                    tmp.val = undefined;
                }

                // Has something open so continue with next iteration
                continue;
            }

            const startsWith = charsToOpenClose.find(e => target.startsWith(e[0]));

            //IS OPENING ?
            if (startsWith) {

                tmp.val = startsWith;
                tmp.index = i;
                tmp.count = 0;

                // IS CLOSING ?
                if (target.endsWith(tmp.val[1])) {
                    tmp.val = undefined;
                    body.push(target);
                }

                continue;
            }



            body.push(_body[i]);
        }

        //---------------------------------------------------------------------

        if (keyword == 'ON') {
            const from = statementsFunctions.from(body);
            console.log(from);
            list[0] = from;
            accessedDocuments.push(...body);
            isOk.hasOn = true;
            continue;
        }

        if (keyword == 'GET') {
            lastStatements[0].$group.data.$push = `$${settings.finalscope}.${body[0]}`;
            continue;
        }

        if (keyword == 'COUNT') {

            if (body.length > 0) {
                lastStatements[0] = { $group: { _id: `${settings.finalscope}.${body[0]}` } }
                lastStatements[1] = { $count: 'count' }
            } else {
                lastStatements[0] = { $count: 'count' }
            }

            continue;
        }


        if (keyword == 'COUNT!') {
            lastStatements[0] = { $group: { _id: `distinct`, uniques: { $addToSet: `$${settings.in}.${body[0]}` } } }
            lastStatements[1] = { $unwind: '$uniques' }
            lastStatements.push({ $count: 'count' });
            continue;
        }

        if (keyword == 'IN') {
            settings.in = body[0];
            list.push({ $unwind: `$${settings.in}` });
            continue;
        }

        if (keyword == 'SCOPE') {
            settings.finalscope = body[0];
            if (lastStatements[0].$group) {
                lastStatements[0].$group.data.$push = `$${settings.finalscope}`;
            }
            continue;
        }
        if (keyword == 'LIMIT') {
            const results = statementsFunctions.limit(body[0]);
            list.push(results)
            isOk.hasOn = true;
            continue;
        }



        const result = statementsFunctions[keyword.toLowerCase()](body, settings);
        list.push(result);
    }
    list.push(...lastStatements)

    if (!options.skipON) {
        if (!isOk.hasOn) return { error: 'ON is required' }
    }

    const hasAccess = checkAccess(accessedDocuments);

    return hasAccess ? list.filter(e => e != undefined) : [];
}

module.exports = { createStatement }

console.log(createStatement(`
LIMIT 10;
`, { skipOn:true }));