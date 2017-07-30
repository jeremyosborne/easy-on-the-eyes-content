/* eslint-env mocha */
//
// Normal transform, assumed to be useful for any website.
//
var assert = require('assert')
var content = require('./index')

describe('content', function () {
  describe('content()', function () {
    it('it works', function () {
      const data = {
        error: {
          code: 1,
          message: 'some helpful error message'
        },
        content: {
          transformer: 'wikipedia',
          url: 'https://wikipedia.org',
          type: 'text/html',
          text: '<h1>Some headline</h1>',
        },
      }
      const c = content.content(data)
      assert(c.errorMessage() === data.error.message)
      assert(c.isError() === true)
      assert(c.text() === data.content.text)
      assert(c.type() === data.content.type)
      assert(c.url() === data.content.url)
    })
  })

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
