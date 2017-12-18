# data-rules

> 添加 mock 数据的类型检测，让前后端联调变得更简单

前提：前端 `mock`， 只做了 `url` & `method` 校验。

这种情况下，前端几乎不太会去关心接口 `具体参数` 的格式，所以，前端的自测，一般在 `mock` 环境下通过，就算是通过了。但是跟后端联调各种格式问题。

所以，想在前端 `mock` 环境下，搞一套类似 `静态类型检查` 的东西，初始生成 `mock` 数据的时候（一般是提交数据接口），就定好 `参数格式规则` ，省去前后端联调时再去 `订正` 数据格式的时间，提高效率。

## Usage

```javascript
const _dr = require('data-rules');

const obj = {
    name: 'realign',
    age: 120
};

const rules = {
    name: {
        type: 'str',
        regex: { min: 1, max: 10 }
    },
    age: {
        type: 'int',
        regex: { min: 1, max: 100 }
    }
};

let res = _dr(obj, rules);

/**
{
 "success": false,
 "message": {
  "name": [],
  "age": [
   {
    "key": "min",
    "msg": "length error"
   }
  ]
 }
}
 * /
```

todo

* [ ] caalback
