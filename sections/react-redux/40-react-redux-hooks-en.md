# React with Redux (with Hooks)

## React with Redux (with Hooks)

https://redux.js.org/basics/usage-with-react

npm packages:

- `react-redux`
- `@types/react-redux`

## React-Redux: &lt;Provider&gt;

Provider: Is used to add a Redux store to a React app

## React-Redux: &lt;Provider&gt;

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

We pass a so-called _selector function_ to `useSelector`.

The selector function receives the entire Redux state and returns a value that is derived from the state.

example:

```js
const numTodos = useSelector(state => state.todos.length);
```

## useDispatch

By using `useDispatch` we can access the `dispatch` function of the Redux store and use it to dispatch actions.

```js
const dispatch = useDispatch();

dispatch({ type: 'deleteCompletedTodos' });
```

## useDispatch with TypeScript

```ts
import { Dispatch } from 'redux';

const dispatch: Dispatch<TodolistAction> = useDispatch();
```
