const _str = {
    min: 0,
    max: -1
};

const _int = {
    _isInt: true,
    min: 0,
    max: 0
};

const _array = {};

const _date = {
    _isDate: true,
    separator: '-'
};

const _dateTime = {
    _isDateTime: true,
    separator: '-',
    strictMode: true
};

let _normal = () => {
    let _normal = {
        required: true
    };

    return _normal;
};

module.exports = ((_) => {
    // 规则
    _._r = {
        str: _._t.merge(_normal(), _str),
        int: _._t.merge(_normal(), _int),
        array: _._t.merge(_normal(), _array),
        date: _._t.merge(_normal(), _date),
        dateTime: _._t.merge(_normal(), _dateTime)
    };
});