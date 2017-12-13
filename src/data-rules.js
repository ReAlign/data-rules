let _v = require('n-validator');
let _t = require('n-tools');

module.exports = ((_) => {
    _.dr = (obj = {}, rules = {}) => {
        const _eo = {};

        // 没有参数、规则
        if(_v.compareObject(obj, _eo) || _v.compareObject(rules, _eo)) {
            return true;
        }

        let res = {
            success: true,
            message: {}
        };

        const _keys = Object.keys(rules || {}) || [];

        _keys.every((k) => {
            res.message[k] = [];
            // 规则项
            const _k = rules[k];
            // 默认规则项
            const _normalRules = _._r[_k.type];
            // 规则关键字
            const _regexKeys = Object.keys(_k.regex || {}) || [];
            const _regexDefault = _._d[_k.type] || [];
            const _defaultKeys = ['required'];
            let _defOptionsFlag = false;

            // 判断 options 内容，compare，进行默认校验
            if(_regexKeys.length == 0
                || _t.arrayEquals(_regexKeys, _defaultKeys, {keepOrder: false})) {
                _defOptionsFlag = true;
            }

            const _allRegexKeys = _regexDefault.concat(_regexKeys);
            // alias
            const _et = _._e[_k.type];

            console.log(_allRegexKeys);

            _allRegexKeys.every((regk) => {
                // 判断属性
                if(_normalRules.hasOwnProperty(regk)) {
                    res.success = (regk.indexOf('_') == 0 && _defOptionsFlag)
                                    ? _v[_et[regk].fn](obj[k])
                                    : _v[_et[regk].fn](obj[k], _k.regex);
                    if(!res.success) {
                        let _o = {};

                        _o[regk] = _et[regk].msg;

                        res.message[k].push(_o);
                    }
                } else {
                    console.warn('no');
                }

                // 遇到错误退出
                return res.success;
            });

            // 遇到错误退出
            return res.success;
        });

        return res;
    };
});