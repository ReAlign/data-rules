# data-rules

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