/* eslint-env mocha */
//
// Normal transform, assumed to be useful for any website.
//
var assert = require('assert')
var content = require('./index')

describe('content', function () {
  describe('create()', function () {
    it('allows overrides', function () {
      const overrides = {
        content: {
          text: 'hi'
        }
      }
      const c = content.create(overrides)
      assert(c.content.text === 'hi')
      // Basic structure remains.
      assert('type' in c.content)
    })
  })
})
