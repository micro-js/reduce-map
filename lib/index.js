/**
 * Modules
 */

var map = require('@micro-js/map')

/**
 * Expose reduceMap
 */

module.exports = reduceMap['default'] = reduceMap

/**
 * reduceMap
 */

function reduceMap (fn) {
  return function (state, value) {
    return map(fn(value, state), state)
  }
}
