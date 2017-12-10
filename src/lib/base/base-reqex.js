import _t from './util';

const _str = {
    min: 0,
    max: -1
};

let _normal = () => {
    let _normal = {
        required: true
    };

    return _normal;
};

let _ = {
    str: _t.merge(_normal(), _str)
};

export default _;