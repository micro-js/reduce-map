/**
 * Imports
 */

var reduceMap = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(reduceMap(addN)([1, 2, 3], 2), [3, 4, 5])
  t.end()
})

function addN (n) {
  return function (m) {
    return m + n
  }
}
