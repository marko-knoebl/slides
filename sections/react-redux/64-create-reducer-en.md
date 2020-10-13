# createReducer

## createReducer

`createReducer` can simplify writing reducers by:

- removing boilerplate
- allowing object mutations (through _immer.js_)

## createReducer

"traditional" implementation of a `counterReducer`:

```js
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return state + (action.payload || 1);
    case 'decrement':
      return state - (action.payload || 1);
    default:
      return state;
  }
};
```

## createReducer

simplified implementation via `createReducer`:

```js
import { createReducer } from '@reduxjs/toolkit';

const counterReducer = createReducer(0, {
  increment: (state, action) =>
    state + (action.payload || 1),
  decrement: (state, action) =>
    state - (action.payload || 1),
});
```

## createReducer

implementation with _TypeScript_ - this enables better type inference:

```js
const counterReducer = createReducer(0, (builder) => {
  builder.addCase(
    'increment',
    (state, action) => state + (action.payload || 1)
  );
  builder.addCase(
    'decrement',
    (state, action) => state - (action.payload || 1)
  );
});
```

## createReducer

With `createReducer` we _can_ mutate existing state (see `logIn`) - this is possible via `immer.js` in the background

Returning derived state is possible as well (see `logOut`)

```js
const initialState = { loggedIn: false, userId: null };

const userReducer = createReducer(initialState, {
  logIn: (state, action) => {
    state.loggedIn = true;
    state.userId = action.payload.userId;
  },
  logOut: (state, action) => {
    return { loggedIn: false, userId: null };
  },
});
```

## createReducer and createAction

if we've used _createAction_ we can use the action creator as the key (because of its `.toString()` method):

```js
const increment = createAction('increment', (amount) => ({
  amount: amount,
}));
const decrement = createAction('decrement', (amount) => ({
  amount: amount,
}));

const counterReducer = createReducer(0, {
  [increment]: (state, action) =>
    state + (action.payload || 1),
  [decrement]: (state, action) =>
    state - (action.payload || 1),
});
```
