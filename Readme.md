
# reduce-map

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Generates a reducing function that maps a reducer over the entities in a container (usually an object or array). That is complicated to state, but simple if you see the implementation:

```javascript
function reduceMap (fn) {
  return function (state, value) {
    return map(iter, state)

    function iter (item, key) {
      return fn(item, value, key)
    }
  }
}

```

## Installation

    $ npm install @micro-js/reduce-map

## Usage

```js
var reduceMap = require('@micro-js/reduce-map')

combineActions({
  todos: handleActions({
    [SET_ALL_COMPLETED]: reduceMap((todo, {completed}) => ({...todo, completed}))
  })
})
```

## API

### reduceMap(fn)

- `fn` - A function that accepts `(item, value, key)` and produces a new `item` based on `value`.

**Returns:** A reducing function that maps your reducer `fn`, over `state` to produce a new container of type `state` from each of its elements, and the value passed to reduce.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/reduce-map.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/reduce-map
[git-image]: https://img.shields.io/github/tag/micro-js/reduce-map.svg
[git-url]: https://github.com/micro-js/reduce-map
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@micro-js/reduce-map.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-js/reduce-map
