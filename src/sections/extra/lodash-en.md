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
