'use strict';
var extendFunctions = require('./');
var expect = require('chai').expect;

describe('Extend functions', function() {
  it('uses the source`s context', function() {
    var target = {};
    var source = {
      msg: 'Hello world',
      getMsg: function() {
        return this.msg;
      }
    }
    extendFunctions(target, source);

    expect(target.getMsg()).to.eq(source.msg);
  });
});
