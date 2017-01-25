var content = require('./content')
var selectors = require('./selectors')

module.exports = {
  genContent: content.genContent,

  error: selectors.error,
  isError: selectors.isError,
  isFetching: selectors.isFetching,
  urlBeingFetched: selectors.urlBeingFetched
}