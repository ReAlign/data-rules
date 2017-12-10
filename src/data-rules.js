let _v = require('n-validator');

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

        const _keys = Object.keys(rules) || [];

        _keys.every((k) => {
            res.message[k] = [];
            // 规则项
            const _k = rules[k];
            // 默认规则项
            const _normalRules = _._r[_k.type];
            // 规则关键字
            const _regexKeys = Object.keys(_k.regex) || [];
            // alias
            const _et = _._e[_k.type];

            _regexKeys.every((regk) => {
                // 判断属性
                if(_normalRules.hasOwnProperty(regk)) {
                    res.success = _v[_et[regk].fn](obj[k], _k.regex);
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