module.exports = ((_) => {
    _._t = {
        typeOf(o) {
            return o == null ? String(o) : ({}).toString.call(o).slice(8, -1).toLowerCase();
        },
        extend(o1, o2, override) {
            const _keys = Object.keys(o2) || [];

            _keys.forEach((k) => {
                if (o1[k] == undefined || override) {
                    o1[k] = o2[k];
                }
            });

            return o1;
        },
        merge(obj1 = {}, obj2 = {}) {
            const type1 = _._t.typeOf(obj1);
            const type2 = _._t.typeOf(obj2);
            // let len;

            if (type1 !== type2) {
                return obj2;
            }

            switch(type2) {
                case 'object':
                    for (let i in obj2) {
                        if (obj2.hasOwnProperty(i)) {
                            obj1[i] = _._t.merge(obj1[i], obj2[i]);
                        }
                    }
                    break;
                case 'array':
                    for (let i = 0, lens = obj2.length; i < lens; i++) {
                        obj1[i] = _._t.merge(obj1[i], obj2[i]);
                    }
                    obj1.length = obj2.length;
                    break;
                default:
                    return obj2;
            }
            return obj1;
        }
    };
});