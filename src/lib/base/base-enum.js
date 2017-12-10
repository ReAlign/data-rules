module.exports = ((_) => {
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
            min: {
                fn: 'isInt',
                msg: 'length error'
            },
            max: {
                fn: 'isInt',
                msg: 'length error'
            }
        }
    };
});