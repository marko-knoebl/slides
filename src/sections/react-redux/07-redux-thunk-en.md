# Redux Thunk

---

## Redux Thunk

Thunk is a middleware that enables asynchronous behaviour in Redux - by dispatching functions

---

## Thunk sourcecode

complete sourcecode:

https://github.com/reduxjs/redux-thunk/blob/master/src/index.js

---

## Redux Thunk

With Thunk it's possible to dispatch so-called _asynchronous actions_ which in turn can dispatch multiple synchronous actions after some time.

---

## Redux Thunk

For example, we could call:

```js
dispatch(getTodosFunction);
```

---

## Redux Thunk

As an asynchronous action, `getTodosFunction` would not directly affect the redux store.

Instead, it would usually lead to two other actions reaching the redux store:

- the action `LOAD_TODOS_REQUEST` would be dispatched immediately
- the action `LOAD_TODOS_SUCCESS` would be dispatched once the network request is complete

---

## Redux Thunk

In Thunk, the synchronous logic remains in the reducer while the asynchronous logic is included in the action creator.

---

## Installation

```bash
npm install redux-thunk
```

---

## Including Thunk

```ts
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
```

---

## example: timer

```js
// sync actions
const started = () => ({ type: 'START' });
const increment = () => ({ type: 'INCREMENT' });
// async action
const start = () => dispatch => {
  dispatch(started());
  setInterval(() => {
    dispatch(increment());
  }, 1000);
};
```

---

## example: timer (TypeScript)

```ts
const start = () => (
  dispatch: ThunkDispatch<IState, void, Action>
) => {
  dispatch(started());
  setInterval(() => {
    dispatch(increment());
  }, 1000);
};
```

---

## example: timer (TypeScript)

```ts
const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, void, Action>
) => ({
  onStart: () => {
    dispatch(started());
  },
});
```

---

## example: timer

The reducer only receives synchronous actions

```js
const timeReducer = (
  state = { started: false, time: 0 },
  action
) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, time: state.time + 1 };
    case 'STARTED':
      return { ...state, started: true };
    default:
      return state;
  }
};
```

---

## Thunk: accessing the Redux state

Supply a second argument - it will receive the `getState` function as its value

```ts
const actionAsync = () => (
  dispatch: ThunkDispatch<IState, void, Action>,
  getState: () => IState
) => {
  dispatch(started());
  const s = getState();
  ...
};
```

---

## task: loading Todos from a REST API

create a thunk that will load example todos from `https://jsonplaceholder.typicode.com/todos`

---

## task: loading Todos from a GraphQL API

create a thunk that will load example todos from `https://5qn401kkl9.lp.gql.zone/graphql`

???

admin: https://launchpad.graphql.com/5qn401kkl9

---

## resource: Taming Large React Applications w/ Redux

https://slides.com/joelkanzelmeyer/taming-large-redux-apps
