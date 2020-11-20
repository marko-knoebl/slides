# Redux Ecosystem

## Redux Ecosystem - examples

- redux-logger
- redux-thunk: asynchronous actions
- redux-saga: asynchronous actions
- normalizr: normalize state data structure
- reselect: better performance via memoized derived data
- redux-actions: reduces boilerplate (createAction, createReducer)
- immutable.js

## Redux Middleware

Middleware can be added to a Redux store.

It provides an extension and can interfere between dispatching an action and the moment it reaches the reducer.

## Redux Middleware - examples

- middleware that logs the action (e.g. redux-logger)
- middleware that receives a single action and dispatches multiple asynchronous actions based on it (e.g. redux-thunk, redux-listeners, redux-saga)

## Redux Middleware - implementation

```js
const myLogger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
```

## Redux Middleware - inclusion

```ts
import {
  getDefaultMiddleware,
  configureStore,
} from '@reduxjs/redux-toolkit';

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), myLogger],
});
```

## Custom Middleware - json fetcher

example usage:

```js
dispatch({
  type: 'fetchJson',
  url: 'https://jsonplaceholder.typicode.com/todos',
});
```

## Custom Middleware - json fetcher

In the background the action `fetchJson` should dispatch two separate actions:

- `fetchJsonStart`
- `fetchJsonComplete` (this action should contain the json content)

## Custom Middleware - json fetcher

```js
const fetcher = (store) => (next) => (action) => {
  if (action.type === 'fetchJson') {
    store.dispatch({ type: 'fetchJsonStart' });
    fetch(action.payload.url)
      .then((response) => response.json())
      .then((data) => {
        store.dispatch({
          type: 'fetchJsonComplete',
          payload: {
            url: action.payload.url,
            data: data,
          },
        });
      });
  } else {
    next(action);
  }
};
```

## Custom middleware - recreating thunk

```js
const myThunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    // we pass dispatch to the action function
    // so the action can use it
    return action(store.dispatch);
  } else {
    return next(action);
  }
};
```
