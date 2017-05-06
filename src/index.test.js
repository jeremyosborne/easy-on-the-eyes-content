/* eslint-env mocha */
//
// Normal transform, assumed to be useful for any website.
//
var assert = require('assert')
var mod = require('./index')

describe('content()', function () {
  it('returns an object', function () {
    assert(mod.content)
  })

  it('allows overrides', function () {
    const overrides = {
      content: {
        text: 'hi'
      }
    }
    const c = mod.content(overrides)
    assert(c.content.text === 'hi')
    // Basic structure remains.
    assert('type' in c.content)
  })
})
