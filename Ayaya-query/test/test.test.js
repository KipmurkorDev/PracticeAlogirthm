const Live = require('../old.js');
const Adv = require('../dist/advanced/index');
const isAdv = process.argv.length > 2 && process.argv[2] == '-ad';

let createStatement = isAdv ? Adv.createStatement : Live.createStatement;



describe('Functionalities', () => {
    test('From 1 | Match eq | Limit NO', () => {

        const result = createStatement(`
            ON customkey* t1;
            IN docs;
            MATCH index EQ 2;
        `);

        expect(result).toEqual([
            { $match: { customkey: { "$in": ['t1'] } } },
            { $unwind: "$docs" },
            { $match: { "docs.index": 2 } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });
    test('From 1 | Match eq | Limit NO | String', () => {

        const result = createStatement(`
            ON name* t1;
            IN docs;
            MATCH index EQ "cacca";
        `);

        expect(result).toEqual([
            { $match: { name: { "$in": ['t1'] } } },
            { $unwind: "$docs" },
            { $match: { "docs.index": "cacca" } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });
    test('From 1 | Match eq | Limit YES', () => {

        const result = createStatement(`
            ON name* t1;
            IN docs;
            MATCH index EQ 2;
            LIMIT 4;
        `);

        expect(result).toEqual([
            { $match: { name: { "$in": ['t1'] } } },
            { $unwind: "$docs" },
            { $match: { "docs.index": 2 } },
            { $limit: 4 },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

    test('From 2 | Match eq | Limit NO', () => {

        const result = createStatement(`
            ON name* t1 t2;
            IN docs;
            MATCH index EQ 2;
        `);

        expect(result).toEqual([
            { $match: { name: { "$in": ['t1', 't2'] } } },
            { $unwind: "$docs" },
            { $match: { "docs.index": 2 } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });
    test('From 2 | Match eq | Limit YES', () => {

        const result = createStatement(`
            ON name* t1 t2;
            IN docs;
            MATCH index EQ 2;
            LIMIT 4;
        `);

        expect(result).toEqual([
            { $match: { name: { "$in": ['t1', 't2'] } } },
            { $unwind: "$docs" },
            { $match: { "docs.index": 2 } },
            { $limit: 4 },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

})

describe('Typings', () => {

    test('ON String', () => {

        const result = createStatement(`
            ON customkey* "123";
            IN docs;
            MATCH index EQ 2;
        `);

        expect(result).toEqual([
            { $match: { customkey: { "$in": ['123'] } } },
            { $unwind: "$docs" },
            { $match: { "docs.index": 2 } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

    test('ON Number', () => {

        const result = createStatement(`
            ON customkey* 123;
            IN docs;
            MATCH index EQ 2;
        `);

        expect(result).toEqual([
            { $match: { customkey: { "$in": [123] } } },
            { $unwind: "$docs" },
            { $match: { "docs.index": 2 } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

    test('ON String multi words', () => {

        const result = createStatement(`
            ON customkey* "abc def";
            IN docs;
            MATCH index EQ 2;
        `);

        expect(result).toEqual([
            { $match: { customkey: { "$in": ['abc def'] } } },
            { $unwind: "$docs" },
            { $match: { "docs.index": 2 } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

})

describe('Access', () => {

    test('Check access', () => {

        function checkAccess(accessed) {
            expect(accessed).toEqual(['t1', 't2']);
            return true;
        }

        const result = createStatement(`
            ON name* t1 t2;
            IN docs;
            MATCH index EQ 2;
        `, {}, checkAccess);

        expect(result.length).toBeGreaterThan(0);

    });

    test('Deny access', () => {

        function checkAccess(accessed) {
            expect(accessed).toEqual(['t1', 't2'])
            return false;
        }

        const result = createStatement(`
            ON name* t1 t2;
            IN docs;
            MATCH index EQ 2;
        `, {}, checkAccess);

        expect(result).toEqual([]);

    });

    test('Skip ON', () => {

        const result = createStatement(`
       LIMIT 10;
        `, { skipOn:true });
        expect(result).toEqual([
            { $limit: 10 },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" },
                }
            }
        ]);

    });

})

describe('Complex cases', () => {

    test('From 2 | Match eq | Match like | Limit YES', () => {

        const result = createStatement(`
            ON name* t1 t2;
            IN docs;
            MATCH index EQ 2;
            MATCH index2 LIKE /aa/;
            LIMIT 4;
        `);

        expect(result).toEqual([
            { $match: { name: { "$in": ['t1', 't2'] } } },
            { $unwind: "$docs" },
            { $match: { "docs.index": 2 } },
            { $match: { "docs.index2": { $regexp: "/aa/" } } },
            { $limit: 4 },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

    test('From 2 | Match eq OR Match like | Same key', () => {

        const result = createStatement(`
            ON name* t1 t2;
            IN docs;
            MATCHOR index EQ 2 index EQ 3;
        `);

        expect(result).toEqual([
            { $match: { name: { "$in": ['t1', 't2'] } } },
            { $unwind: "$docs" },
            { $match: { $or: [{ "docs.index": 2 }, { "docs.index": 3 }] } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

    test('Sorting', () => {

        const result = createStatement(`
            ON name* t1;
            SORT index 1;
            IN docs;
        `);

        expect(result).toEqual([
            { $match: { name: { "$in": ['t1'] } } },
            { $sort: { index: 1 } },
            { $unwind: "$docs" },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

    test('Sorting IN', () => {

        const result = createStatement(`
            ON name* t1;
            IN docs;
            SORT index 1;
        `);

        expect(result).toEqual([
            { $match: { name: { "$in": ['t1'] } } },
            { $unwind: "$docs" },
            { $sort: { 'docs.index': 1 } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });


    test('Count', () => {

        const result = createStatement(`
            ON name* t1;
            IN docs;
            COUNT;
        `);

        expect(result).toEqual([
            { $match: { name: { "$in": ['t1'] } } },
            { $unwind: "$docs" },
            { $count: 'count' }
        ]);

    });

    test('Custom sublist', () => {


        const result = createStatement(`
        ON customkey* t1;
        IN sublist;
        MATCH index EQ 2;
        `);

        expect(result).toEqual([
            { $match: { customkey: { "$in": ['t1'] } } },
            { $unwind: "$sublist" },
            { $match: { "sublist.index": 2 } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });


});

describe('Advanced features', () => {

    test('Group by property', () => {

        const result = createStatement(`
            ON name* t1;
            IN docs;
            SORT index 1;
            GET index;
        `);

        expect(result).toEqual([
            { $match: { name: { "$in": ['t1'] } } },
            { $unwind: "$docs" },
            { $sort: { 'docs.index': 1 } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs.index" },
                }
            }
        ]);

    });

    test('Count distinct', () => {

        const result = createStatement(`
            ON name* t1;
            IN docs;
            COUNT! name;
        `);

        expect(result).toEqual([
            { $match: { name: { "$in": ['t1'] } } },
            { $unwind: "$docs" },
            { $group: { _id: `distinct`, uniques: { $addToSet: '$docs.name' } } },
            { $unwind: "$uniques" },
            { $count: 'count' }
        ]);

    });

    test('Order Date', () => {

        const result = createStatement(`
            ON name* t1;
            MATCH a EQ "dio cane";
            COUNT;
        `);

        expect(result).toEqual([
            { $match: { name: { "$in": ['t1'] } } },
            { $match: { a: `dio cane` } },
            { $count: 'count' }
        ]);

    });

    test('Custom variable', () => {

        const result = createStatement(`
            ON customkey* t1;
            IN docs;
            MATCH index EQ $myvar;
        `, {
            vars: [
                { name: '$myvar', type: 'string', value: () => 'uwu' }
            ]
        });

        expect(result).toEqual([
            { $match: { customkey: { "$in": ['t1'] } } },
            { $unwind: "$docs" },
            { $match: { "docs.index": "uwu" } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

});

describe('Custom queries', () => {

    test('Custom 1', () => {

        const result = createStatement(`
            ON prjId* 111568;
            MATCHOR name EQ "ciao" name EQ "bho";
            IN docs;
            MATCH _name EQ 'Ciao1';
        `);

        expect(result).toEqual([
            { $match: { prjId: { "$in": [111568] } } },
            { $match: { $or: [{ 'name': 'ciao' }, { 'name': 'bho' }] } },
            { $unwind: '$docs' },
            { $match: { 'docs._name': 'Ciao1' } },
            { $group: { _id: 'QueryResult', data: { $push: '$docs' } } }]);
    });

    test('Custom 2', () => {

        const result = createStatement(`
            ON prjId* 111568;
            MATCHOR name EQ "ciao" name EQ "bho";
            IN cacca;
            MATCH _name EQ 'Ciao1';
            SCOPE cacchette;
        `);

        expect(result).toEqual([
            { $match: { prjId: { "$in": [111568] } } },
            { $match: { $or: [{ 'name': 'ciao' }, { 'name': 'bho' }] } },
            { $unwind: '$cacca' },
            { $match: { 'cacca._name': 'Ciao1' } },
            { $group: { _id: 'QueryResult', data: { $push: '$cacchette' } } }]);
    });


});

describe('Equalities', () => {

    test('EQ', () => {
        const result = createStatement(`
            ON customkey* t1;
            MATCH index EQ 2;
        `);

        expect(result).toEqual([
            { $match: { customkey: { "$in": ['t1'] } } },
            { $match: { "index": 2 } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

    test('NEQ', () => {
        const result = createStatement(`
            ON customkey* t1;
            MATCH index NEQ 2;
        `);

        expect(result).toEqual([
            { $match: { customkey: { "$in": ['t1'] } } },
            { $match: { "index": { '$ne': 2 } } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

    test('LIKE', () => {
        const result = createStatement(`
            ON customkey* t1;
            MATCH index LIKE /uwu/;
        `);

        expect(result).toEqual([
            { $match: { customkey: { "$in": ['t1'] } } },
            { $match: { "index": { '$regexp': "/uwu/" } } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

    test('GT', () => {
        const result = createStatement(`
            ON customkey* t1;
            MATCH index GT 2;
        `);

        expect(result).toEqual([
            { $match: { customkey: { "$in": ['t1'] } } },
            { $match: { "index": { '$gt': 2 } } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

    test('GT', () => {
        const result = createStatement(`
            ON customkey* t1;
            MATCH index LT 2;
        `);

        expect(result).toEqual([
            { $match: { customkey: { "$in": ['t1'] } } },
            { $match: { "index": { '$lt': 2 } } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

});

describe('Dates', () => {

    test('Now', () => {
        const result = createStatement(`
            ON customkey* t1;
            MATCH updated_at LT $now;
        `);

        const now = new Date().toISOString();

        expect(result).toEqual([
            { $match: { customkey: { "$in": ['t1'] } } },
            { $match: { "updated_at": { '$lt': now } } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

    test('Last month', () => {
        const result = createStatement(`
            ON customkey* t1;
            MATCH index GT DATESUB($now $month);
        `);

        const targetDate = new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 30).toISOString();

        expect(result).toEqual([
            { $match: { customkey: { "$in": ['t1'] } } },
            { $match: { "index": { '$gt': targetDate } } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });

    test('Last 2 days', () => {
        const result = createStatement(`
            ON customkey* t1;
            MATCH index GT DATESUB($now $day_2);
        `);

        const targetDate = new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 2).toISOString();

        expect(result).toEqual([
            { $match: { customkey: { "$in": ['t1'] } } },
            { $match: { "index": { '$gt': targetDate } } },
            {
                $group: {
                    _id: 'QueryResult',
                    data: { $push: "$docs" }
                }
            }
        ]);

    });


});