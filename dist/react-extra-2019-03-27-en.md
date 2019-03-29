# lodash

## lodash

collection of utility functions for working with arrays, objects, functions, strings, ...

## lodash

```js
import { chunk, defaults, partition } from 'lodash';

defaults({ a: 1 }, { a: 3, b: 2 });
// → { a: 1, b: 2 }
partition([1, 2, 3, 4], n => n % 2);
// → [[1, 3], [2, 4]]
chunk([1, 2, 3, 4, 5, 6, 7], 3);
// → [[1, 2, 3], [4, 5, 6], [7]]
```

## functions for arrays

- `chunk`
- `drop`
- `flatten`, `flattenDeep`
- `intersection`, `union`, `difference`
- `last`
- `uniq`
- `zip`

## functions for arrays and objects

- `groupBy`
- `keyBy`
- `partition`
- `shuffle`
- `sortBy` (creates new array)
- `cloneDeep`
- `isEqual`

## functions for functions

- `curry`
- `partial`
- `debounce`
- `memoize`

## utilities

- `bindAll`
- `range`

# craco

## craco

= Create React App Configuration Override

## craco setup

```bash
npm install @craco/craco
```

## craco setup

package.json:

```json
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject"
  },
```

## craco setup for LESS

```bash
npm install craco-less
```

```js
// craco.config.js
module.exports = {
  plugins: [
    {
      plugin: require('craco-less'),
    },
  ],
};
```

# LESS

## Stylesheet languages

- CSS
- SASS / SCSSS
- LESS

## Variables

```less
@theme-color: blue;

body {
  color: @theme-color;
}
```

## Mixins

```less
.theme-color-combination {
  color: blue;
  background-color: lightblue;
}

body {
  .theme-color-combination();
}
```

## Nesting

```less
nav {
  color: black;
  ul {
    margin: 0px;
  }
}
```

(`ul`s within `nav`s don't have 0 margins)

## Computations

```less
div {
  width: 50% - 80px;
}
```

## Functions

- `lighten()`
- `darken()`
- `saturate()`
- ...

```less
@theme-text-color: darken(@theme-color, 50%);
```

## Imports

```less
@import '../theme.less';
```
