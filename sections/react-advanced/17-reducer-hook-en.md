# Reducer Hook

## Reducer Hook

For managing state we can now also utilize `useReducer` in addition to `useState`:

```js
useReducer(reducer, initialState);
```

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
