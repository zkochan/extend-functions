# extend-functions

Extends a target objects with functions from the source object, keeping the context of the source object.

[![Dependency Status](https://david-dm.org/zkochan/extend-functions/status.svg?style=flat)](https://david-dm.org/zkochan/extend-functions)
[![Build Status](https://travis-ci.org/zkochan/extend-functions.svg?branch=master)](https://travis-ci.org/zkochan/extend-functions)
[![npm version](https://badge.fury.io/js/extend-functions.svg)](http://badge.fury.io/js/extend-functions)


## Installation

```
npm install --save extend-functions
```


## Usage

```js
var extendFunctions = require('extend-functions');

var source = {
  msg: 'Hello world!',
  log: function() {
    console.log(this.msg);
  }
};
var target = {};

extendFunctions(target, source);

target.log(); /* Will print `Hello world!` */
```


## License

MIT
