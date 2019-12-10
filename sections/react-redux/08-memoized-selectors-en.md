# Memoized selectors

## Memoization

Memoization is the practice of caching return values of a pure function so they don't need to be recomputed every time

## Memoization in reselect

Reselect is a library that can help with memoization. Its default behavior is very simple: It remembers the last input for a function; if that function is called again with the same input the computation is skipped and it will directly output the previously stored resut

## Memoization in reselect

```js
import { createSelector } from 'reselect';

// regular function that computes the area of a rectangle
const getRectArea = rect => rect.length * rect.width;

// memoized function that computes the area of a rectangle
const getRectAreaMemoized = createSelector(
  // selector functions signify which input values to watch:
  [rect => rect.length, rect => rect.width],
  // this function will only be called if one of the
  // input values changed:
  (length, width) => length * width
);
```

## Memoization in reselect

The last function call will not recompute the area

```js
getRectArea({ length: 2, width: 3, color: 'blue' });
getRectArea({ length: 2, width: 3, color: 'red' });

getRectAreaMemoized({ length: 2, width: 3, color: 'blue' });
getRectAreaMemoized({ length: 2, width: 3, color: 'red' });
```

## Installing reselect

```bash
npm install reselect
```
