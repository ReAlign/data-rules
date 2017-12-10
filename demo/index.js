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
            max: 10
        },
        extra: (a) => {
            console.log(a);
        }
    }
};

_dr.dr(obj1, rules1);