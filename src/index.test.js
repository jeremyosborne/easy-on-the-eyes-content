/* eslint-env mocha */
//
// Normal transform, assumed to be useful for any website.
//
var assert = require('assert')
var mod = require('./index')

describe('module smell test', function () {
  it('exists', function () {
    assert(mod)
  })
})
