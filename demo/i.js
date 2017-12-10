let rules = {
    'key': {
        type: ['str', 'number', 'int', 'float', 'boolean', 'date', 'dateTime'],
        regex: {
            required: true
        },
        extra: (a) => {
            console.log(a);
        }
    }
};