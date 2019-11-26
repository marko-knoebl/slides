# Memoization

## Memoization

Memoization = technique to speed up function calls etc.: Previous results are cached and don't have to be recomputed

Can be applied in React: If a component's props or state don't change the component doesn't have to be rerendered.

## Memoization in React

Triggers for rerendering a component:

- **Parent component is (re)rendered**
- component state has changed
- triggered via a hook (e.g. `useContext`, `useReducer`, `useSelector`, ...)

Visualizing rerendering the React devtools: _Settings_ - _General_ - _Highlight updates when components render._

## Memoization in React

Preventing rerendering when parent component rerenders:

For performance optimization it can be desirable to not rerender a component every time its parent rerenders.

Instead, it should only rerender when its props (or state) changes.

If props (or state) haven't changed the previous (memoized) rendering is used.

## Memoization in React

Creating memoized components in React:

in function components: using the `memo` function (memoizes _props_)

in class components: inheriting from `PureComponent` instead of `Component` (memoizes _props_ and _state_)

## Memoization in React: function components

```js
import React, { memo } from 'react';

function Rating(...) ...

export default memo(Rating);
```

## Memoization in React: class components

```js
import { PureComponent } from 'react';

class Rating extends PureComponent {...}

export default Rating;
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
