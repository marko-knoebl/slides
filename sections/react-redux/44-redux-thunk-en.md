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
const loadTodos = dispatch => {
  // "dispatch" is the redux store's dispatch function
  // it is passed in automatically (dependency injection)
  dispatch({ type: 'loadTodosRequest' });
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      dispatch({ type: 'loadTodosSuccess', todos: todos });
    });
};
```

We can call `dispatch(loadTodos)`

## Thunk sourcecode

The complete Thunk sourcecode is just 14 lines:

https://github.com/reduxjs/redux-thunk/blob/master/src/index.js

## Thunk with TypeScript

We have to give the complete signature of `dispatch`:

```ts
dispatch: ThunkDispatch<IState, void, IAction>
```

## Thunk: accessing the Redux state

Supply a second argument - it will receive the `getState` function as its value

```ts
const actionAsync = () => (dispatch, getState) => {
  dispatch(started());
  const s = getState();
  ...
};
```
