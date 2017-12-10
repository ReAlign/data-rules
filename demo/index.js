const _dr = require('./../index');

const obj1 = {
    name: 'realign',
    age: 12
};

const rules1 = {
    name: {
        type: 'str',
        regex: {
            min: 1,
            max: 10
        },
        extra: (a) => {
            console.log(a);
        }
    }
};

const rules2 = {
    name: {
        type: 'str',
        regex: {
            min: 1,
            max: 2
        },
        extra: (a) => {
            console.log(a);
        }
    }
};

console.log(_dr.dr(obj1, rules1));

// test('normalIntMsg', function() {
//     expect(_dr.dr(obj1, rules1).message).toBe('');
// });

// test('normalIntBool', function() {
//     expect(_dr.dr(obj1, rules2).success).toBe(false);
// });

// test('normalIntMsg', function() {
//     expect(_dr.dr(obj1, rules2).message).toBe('length error');
// });