# isplainobject

[![Build Status](https://travis-ci.org/yefremov/isplainobject.svg?branch=master)](https://travis-ci.org/yefremov/isplainobject)
[![Coverage Status](https://coveralls.io/repos/github/yefremov/isplainobject/badge.svg?branch=master)](https://coveralls.io/github/yefremov/isplainobject?branch=master)
[![npm version](https://badge.fury.io/js/isplainobject.svg)](https://badge.fury.io/js/isplainobject)

Test whether value is a plain object.

## Installation

```bash
$ npm install isplainobject
```

## API

```js
import isPlainObject from 'isplainobject';

isPlainObject({});
// => true

isPlainObject(Object.create(null));
// => true

isPlainObject(new Function());
// => false

```

## Running tests

```bash
$ npm test
```


## License

[MIT](LICENSE)
