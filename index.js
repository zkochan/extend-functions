'use strict';
var bind = require('bind-ponyfill');

function extendFunctions(target, source) {
  for (var key in source) {
    if (typeof source[key] === 'function') {
      target[key] = bind(source[key], source);
    }
  }
};

module.exports = extendFunctions;
