# Memoized selectors

## Memoization

Memoization is the practice of caching return values of a pure function so they don't need to be recomputed every time

## Memoization in reselect

**Reselect**: library for memoization of selectors

## Memoization in reselect

Reselect can be used for memoizing complex selectors

```js
import { createSelector } from 'reselect';

// normal selector
const todosSelector = (state) => state.todoData.todos;

// memoized selector
const numCompletedTodosSelector = createSelector(
  todosSelector,
  (todos) => todos.filter((todo) => todo.completed).length
);
```

`numCompletedTodosSelector` depends on `todosSelector` and will only be evaluated if `todosSelector` returns a new value.

## Memoization in reselect

```js
const lengthSelector = (rect) => rect.length;
const widthSelector = (rect) => rect.width;

const areaSelector = (rect) =>
  lengthSelector(rect) * widthSelector(rect);

const memoizedAreaSelector = createSelector(
  lengthSelector,
  widthSelector,
  // will only be evaluated if one of the selectors
  // returned a new value
  (length, width) => length * width
);
```

## Memoization in reselect

The last function call will not recompute the area

```js
areaSelector({ length: 2, width: 3, col: 'red' });
areaSelector({ length: 2, width: 3, col: 'blue' });

memoizedAreaSelector({ length: 2, width: 3, col: 'red' });
memoizedAreaSelector({ length: 2, width: 3, col: 'blue' });
```
