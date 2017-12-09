const _dr = require('./../index');

const str1 = '12';

test('normalInt', function() {
    expect(_dr.isInt(str1)).toBe(true);
});