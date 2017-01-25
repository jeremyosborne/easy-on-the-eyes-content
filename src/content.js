/**
 * The basic content data type.
 */

// Basic content data type.
const contentTemplate = {
  // If truthy there is an error.
  // TODO: error.code and error.message and error.trace should be enforced.
  // TODO: isError when !!error.code === true.
  error: {
    // Errors are non-zero codes.
    code: 0,
    // Errors must produce a non-falsey message.
    message: ''
  },
  // What transform was used to transform the content.
  transformer: {
    // Name of a transformer must be non-falsey.
    name: ''
  },
  // Content either being retrieved or previously retrieved.
  url: '',
  // Implied that this content object is being updated and we are waiting on
  // the update.
  // Implied also that html should be null and url is content being retrieved.
  isFetching: false,
  // TODO: rename from __html to just html?
  __html: ''
}

/**
 * Returns an instance of the contentTemplate.
 *
 * @param {object} overrides Overrides for content. Assumes correct format.
 * @return {object} Basic content object.
 */
const genContent = function (overrides) {
  return Object.assign({}, contentTemplate, overrides || {})
}
module.exports.genContent = genContent
