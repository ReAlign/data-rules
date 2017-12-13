const _dr = require('./../index');
const _co = require('n-s-logs');

const obj1 = {
    name: '12',
    age: 12,
    tags: [1],
    birthday: '1994/12/10 01:01:01'
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
            required: true,
            min: 1,
            max: 100
        }
    },
    tags: {
        type: 'array',
        regex: {
            required: true
        }
    },
    birthday: {
        type: 'dateTime',
        regex: {
            required: true,
            separator: '/'
        }
    }
};

_co.json(_dr.dr(obj1, rules1));