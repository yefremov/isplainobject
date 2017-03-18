var test = require('tape');
var isPlainObject = require('.');

test('isPlainObject(value)', function (t) {
  t.ok(isPlainObject({}));
  t.ok(Object.create(null));
  t.notOk(isPlainObject([]));
  t.notOk(isPlainObject(new Function()));
  t.end();
});
