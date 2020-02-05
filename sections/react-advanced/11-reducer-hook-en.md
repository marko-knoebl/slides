# Reducer Hook

## Reducer Hook

For managing state we can now also utilize `useReducer` in addition to `useState`:

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

specific example:

```js
const [count, countDispatch] = useReducer(countReducer, 0);
```

## Reducer Hook

Calling `useReducer` returns an array with two entries:

- current state
- a dispatch function that can be used to trigger actions

## Reducer Hook

```js
const TodoApp = () => {
  const [todos, dispatch] = useReducer(
    todosReducer,
    initialTodos
  );

  return (
    <div>
      ...
      <button
        onClick={() => dispatch({ type: 'DELETE_ALL' })}>
        delete all todos
      </button>
    </div>
  );
};
```
