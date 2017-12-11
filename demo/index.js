const _dr = require('./../index');
const _co = require('n-s-logs');

const obj1 = {
    name: '12',
    age: 12,
    tags: [1]
};

const rules1 = {
    name: {
        type: 'str',
        regex: {
            required: true
        }
    },
    age: {
        type: 'int',
        regex: {
            min: 1,
            max: 100
        }
    },
    tags: {
        type: 'array',
        regex: {
            required: true
        }
    }
};

_co.json(_dr.dr(obj1, rules1));