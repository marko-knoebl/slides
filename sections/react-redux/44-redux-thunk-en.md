# Thunk

## Thunk

**Thunk**: middleware that enables asynchronous behaviour in Redux - by dispatching functions

## Thunk

For example, we could call:

```js
dispatch(loadTodosFunction);
```

## Thunk

As an asynchronous action, `loadTodosFunction` would not directly affect the redux store.

Instead, it would usually lead to other actions reaching the redux store:

- `loadTodosRequest` is triggered immediately
- `loadTodosSuccess` is triggered once the response has arrived
- `loadTodosError` could indicate a failure

## Thunk

In Thunk, the synchronous logic remains in the reducer while the asynchronous logic is included in the action.

## Example: loadTodos

```js
async function loadTodos(dispatch) {
  // "dispatch" is the redux store's dispatch function
  // it is passed in automatically (dependency injection)
  dispatch({ type: 'loadTodosRequest' });
  const todos = await fetchTodos();
  dispatch({ type: 'loadTodosSuccess', payload: todos });
}
```

We can call `dispatch(loadTodos)`

## Thunk source code

The complete Thunk sourcecode is just 14 lines:

https://github.com/reduxjs/redux-thunk/blob/master/src/index.js

## Thunk: accessing the Redux state

Supply a second argument - it will receive the `getState` function as its value

```ts
async function loadTodos(dispatch, getState) {
  dispatch({ type: 'loadTodosRequest' });
  const s = getState();
  // ...
}
```

## Typing a Thunk action

```ts
import { Dispatch } from '@reduxjs/toolkit';

async function loadTodos(
  dispatch: Dispatch<TodosDataAction>
) {
  dispatch({ type: 'loadTodosRequest' });
  // ...
  dispatch({ type: 'loadTodosSuccess', payload: data });
}
```
