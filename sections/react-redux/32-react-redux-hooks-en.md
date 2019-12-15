# React with Redux: hooks

## useSelector

By using `useSelector` we can query the state of the Redux store.

We pass a so-called _selector function_ to `useSelector`.

The selector function receives the entire Redux state and returns a value that is derived from the state.

## useSelector - example

```js
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state);
  const numTodos = useSelector(state => state.length);
  const numCompletedTodos = useSelector(
    state => state.filter(todo => todo.completed).length
  );

  ...
};
```

## useDispatch

By using `useDispatch` we can access the `dispatch` function of the Redux store and use it to dispatch actions.

```js
import { useDispatch } from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch();
  ...
  dispatch({ type: 'deleteCompletedTodos' });
};
```

## useDispatch with TypeScript

```ts
const dispatch = useDispatch<TodoAppAction>();
```
