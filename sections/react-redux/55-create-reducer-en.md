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
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};
```

## createReducer

simplified implementation via `createReducer`:

```js
import { createReducer } from '@redux/toolkit';

const counterReducer = createReducer(0, {
  increment: (state, action) => state + 1,
  decrement: (state, action) => state - 1,
});
```

## createReducer

with `createReducer` we _can_ mutate existing state (see `logIn`) _or_ return a derived state (see `logOut`)

```js
const initialState = { loggedIn: false, userId: null };

const userReducer = createReducer(initialState, {
  logIn: (state, action) => {
    state.loggedIn = true;
    state.userId = action.payload.userId;
  },
  logOut: (state, action) => ({
    loggedIn: false,
    userId: null,
  }),
});
```
