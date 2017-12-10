// const _dr = require('./../index');

// const str1 = '12';

// test('normalInt', function() {
//     expect(_dr.isInt(str1)).toBe(true);
// });

const _dr = require('./../index');

const obj1 = {
    name: 'realign',
    age: 12
};

const rules1 = {
    name: {
        type: 'str',
        regex: {
            required: true,
            min: 1,
            max: 2
        },
        extra: (a) => {
            console.log(a);
        }
    }
};

_dr.dr(obj1, rules1);
test('normalInt', function() {
    expect(_dr.dr(obj1, rules1)).toBe(true);
});