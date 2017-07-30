/**
 * The basic content data type.
 */

const _ = require('lodash')

// Basic content data type.
const contentTemplate = {
  // If truthy there is an error.
  error: {
    // Errors are non-zero codes.
    code: 0,
    // Errors must produce a non-falsey message.
    message: ''
  },
  // Content either being retrieved or previously retrieved.
  content: {
    // name of transformer used to modify the content.
    transformer: '',
    // url content was retrieved from.
    url: '',
    // Type of the content: html, markdown, plain, etc.
    type: '',
    // the marked up text of the content.
    text: '',
  },
}

/**
 * Returns an instance of content.
 *
 * @param {object} overrides Overrides for content. Assumes correct format.
 * @return {object} Basic content object.
 */
const create = function (overrides) {
  return _.merge({}, contentTemplate, overrides || {})
}

/**
 * Content wrapper class.
 *
 * @param {Object} content object to wrap and provide content helpers to.
 * @return {Object} implementation of content helpers/interface.
 */
const Content = function (content) {
  this.content = content || {}
}
/**
 * Is there a known error with this content?
 *
 * @return {String} error message, or empty string if no error message.
 */
Content.prototype.errorMessage = function () {
  return _.get(this.content, 'error.message', '')
}
/**
 * Is there a known error with this content?
 *
 * @return {Boolean} true if error, false if not.
 */
Content.prototype.isError = function () {
  return !!_.get(this.content, 'error.code', false)
}
/**
 * The main text content of this content object.
 *
 * If markup, this will return all the markup along with the 'text'.
 *
 * @type {String} the main content of the cotnent object.
 */
Content.prototype.text = function () {
  return _.get(this.content, 'content.text', '')
}
/**
 * The media type of the main content.
 *
 * @type {String} media type enumeration (as string) or empty string if unknown.
 */
Content.prototype.type = function () {
  return _.get(this.content, 'content.type', '')
}
/**
 * The location the main portion of the content came from.
 *
 * @type {String} url or empty string.
 */
Content.prototype.url = function () {
  return _.get(this.content, 'content.url', '')
}

/**
 * Wraps an object and provides safe helper methods.
 *
 * @param {Object} content presumed content object.
 * @return {Object} wrapped object.
 */
const content = function (content) {
  return new Content(content)
}

module.exports = {
  content,
  create,
}
