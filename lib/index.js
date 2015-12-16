/**
 * Modules
 */

var map = require('@f/map')

/**
 * Expose reduceMap
 */

module.exports = reduceMap['default'] = reduceMap

/**
 * reduceMap
 */

function reduceMap (fn) {
  return function (state, value) {
    return map(iter, state)

    function iter (item, key) {
      return fn(item, value, key)
    }
  }
}
