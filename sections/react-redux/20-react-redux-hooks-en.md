# React with Redux (with Hooks)

## React with Redux (with Hooks)

https://redux.js.org/basics/usage-with-react

Setup: `npm install redux react-redux`

Typescript: `npm install @types/react-redux`

## React-Redux: < Provider >

Provider: Helps with adding a redux store to a React app

## React-Redux: < Provider >

```js
// index.js
import { Provider } from 'react-redux';

[...]

ReactDOM.render(
  <Provider store={myStore}>
    <App/>
  </Provider>
  ...
);
```

## useSelector

By using `useSelector` we can query the state of the Redux store.

We pass a so-called _selector function_ to `useSelector`. The selector function receives the entire Redux state and returns a value that is derived from the state.

example:

```js
const numTodos = useSelector(state => state.todos.length);
```

## useDispatch

By using `useDispatch` we can access the `dispatch` function of the Redux store and use it to dispatch actions.

```js
const dispatch = useDispatch();

dispatch({
  type: 'REMOVE_COMPLETED_TODOS',
});
```

## useDispatch with TypeScript

```ts
import { Dispatch } from 'redux';

const dispatch: Dispatch<TodolistAction> = useDispatch();
```
