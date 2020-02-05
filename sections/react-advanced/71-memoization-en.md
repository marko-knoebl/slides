# Memoization

## Memoization

Memoization = technique to speed up function calls etc.: Previous results are cached and don't have to be recomputed

## Memoization in React

Can be applied in React:

If a component's props or state don't change the component doesn't have to be rerendered.

## Memoization in React

rules for rerendering in function components:

- setting a changed state will cause rerendering
- setting the same state as before will not cause rerendering
- the rerendering of a component will usually cause the rerendering of _all subcomponents_
- using `React.memo` can make only those subcomponents rerender whose props have changed

## Memoization in React

Note: Hooks like `useContext`or `useReducer` may also cause a rerendering like `useState` does

## Memoization in React

Visualizing rerendering the React devtools: _Settings_ - _General_ - _Highlight updates when components render._

## Memoization in React

Memoization of function components:

```js
import React, { memo } from 'react';

const Rating = props => {
  /*...*/
};
const RatingMemoized = memo(Rating);
```

## Data management without mutations

In React, non-primitive entries in state or props are considered to have changed if they refer to a different object than before.

## Data management without mutations

Memoization in React: Data are checked for equality via `===`

What is the output of the following script?

```js
const state1 = [1, 2, 3];
const state2 = state1;
state2.push(4);

console.log(state1 === state2);
```

## Data management without mutations

```js
const state1 = [1, 2, 3];
const state2 = state1;
state2.push(4);

console.log(state1 === state2);
```

The above script will output `true`. `state1` and `state2` refer to the same object. The change would not trigger a rerendering of memoized components.

## Data management without mutations

correct process:

```js
const state1 = [1, 2, 3];
const state2 = [...state1, 4];
```
