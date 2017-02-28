var test = require('tape');
var isObject = require('.');

test('isPlainObject(V)', function (t) {
  t.ok(isObject({}));
  t.notOk(isObject([]));
  t.end();
});
