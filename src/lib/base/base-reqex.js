const _str = {
    min: 0,
    max: -1
};

const _int = {
    min: 0,
    max: 0
};

let _normal = () => {
    let _normal = {
        required: true
    };

    return _normal;
};

module.exports = ((_) => {
    _._r = {
        str: _._t.merge(_normal(), _str),
        int: _._t.merge(_normal(), _int)
    };
});