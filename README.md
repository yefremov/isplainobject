# isplainobject

[![Build Status](https://travis-ci.org/yefremov/isplainobject.svg?branch=master)](https://travis-ci.org/yefremov/isplainobject)
[![Coverage Status](https://coveralls.io/repos/github/yefremov/isplainobject/badge.svg?branch=master)](https://coveralls.io/github/yefremov/isplainobject?branch=master)

Test whether value is a plain object.

## Installation

```bash
npm install isplainobject
```

## API

```js
import isObject from 'isplainobject';

isObject({});
// => true

isObject([]);
// => false

```

## Running tests

```bash
$ npm test
```


## License

[MIT](LICENSE)
