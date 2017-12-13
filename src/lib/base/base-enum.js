module.exports = ((_) => {
    // 默认
    _._d = {
        str: [],
        int: ['_isInt'],
        float: [],
        array: [],
        object: [],
        date: ['_isDate'],
        dateTime: ['_isDateTime']
    };

    // 枚举
    _._e = {
        str: {
            required: {
                fn: 'isRequired',
                msg: 'miss'
            },
            min: {
                fn: 'isLength',
                msg: 'length error'
            },
            max: {
                fn: 'isLength',
                msg: 'length error'
            }
        },
        int: {
            required: {
                fn: 'isRequired',
                msg: 'miss'
            },
            _isInt: {
                fn: 'isInt',
                msg: 'not int'
            },
            min: {
                fn: 'isInt',
                msg: 'length error'
            },
            max: {
                fn: 'isInt',
                msg: 'length error'
            }
        },
        array: {
            required: {
                fn: 'isRequired',
                msg: 'miss'
            }
        },
        object: {
            required: {
                fn: 'isRequired',
                msg: 'miss'
            }
        },
        date: {
            required: {
                fn: 'isRequired',
                msg: 'miss'
            },
            _isDate: {
                fn: 'isDate',
                msg: 'not date str'
            },
            separator: {
                fn: 'isDate',
                msg: 'separator error'
            }
        },
        dateTime: {
            required: {
                fn: 'isRequired',
                msg: 'miss'
            },
            _isDateTime: {
                fn: 'isDateTime',
                msg: 'not date time str'
            },
            separator: {
                fn: 'isDateTime',
                msg: 'separator error'
            },
            strictMode: {
                fn: 'isDateTime',
                msg: 'mode error'
            }
        }
    };
});