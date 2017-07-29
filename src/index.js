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
 * Returns an instance of the contentTemplate.
 *
 * @param {object} overrides Overrides for content. Assumes correct format.
 * @return {object} Basic content object.
 */
const create = function (overrides) {
  return _.merge({}, contentTemplate, overrides || {})
}

module.exports = {
  create,
}
