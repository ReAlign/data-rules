import _v from 'n-validator';
import _br from './lib/base/base-reqex';

let DataRules = {
    dr(obj = {}, rules = {}) {
        const _eo = {};

        if(_v.compareObject(obj, _eo) || _v.compareObject(obj, rules)) {
            return true;
        }

        // const result = {
        //     success: true,
        //     message: ''
        // };

        let _keys = Object.keys(rules) || [];

        _keys.forEach((k) => {
            // rule item
            let _k = rules[k];
            console.log(_k);

            // rule item type normal rules
            const _normalRules = _br[_k.type];
            console.log(_normalRules);

            // regex keys
            const _rulesKeys = Object.keys(_k.regex) || [];
            console.log(_rulesKeys);

            // rule.success = true;

            // // 为了兼容
            // if (rule.type === 'is') {
            //     rule.success = (rule.options || rule.reg).test(value);
            // } else if (rule.type === 'isNot') {
            //     rule.success = !(rule.options || rule.reg).test(value);
            // } else if (rule.type === 'isRequired' || rule.type === 'isFilled') {
            //     rule.success = !!validator.toString(value).trim();
            // } else if (rule.type === 'method' || rule.method) {
            //     rule.success = (rule.options || rule.method)(value, rule);
            // } else rule.success = !value || validator[rule.type](value, rule.options);

            // rule.callback && rule.callback(value, rule);

            // if (!rule.success && result.success) {
            //     result.success = false;
            //     result.firstRule = rule;
            //     // @deprecated
            //     result.message = rule.message;
            // }
        });

        // return result;
    }
};

export default DataRules;