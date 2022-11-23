# Action creators

## Action creators

Action creators are usually very simple functions used to create a specific action

```js
const addTodo = (title) => ({
  type: 'addTodo',
  payload: title,
});
```

usage:

```js
dispatch(addTodo('groceries'));
```

## Action creators vs. actions

Be aware of the double meaning: _Action creators_ are often called _actions_ for short in documentation.

## Action creators and thunk

Action creators may be necessary when using parametric actions in thunk

The following call would create and dispatch a thunk action that loads a specific todo:

```js
dispatch(loadTodoByIndex(3));
```

## Action creators and thunk

```js
// thunk action creator
function loadTodoByIndex(id) {
  async function thunkAction(dispatch) {
    dispatch({ type: 'loadTodoRequest', payload: id });
    const todo = await fetchTodo(id);
    dispatch({ type: 'loadTodoSuccess', payload: todo });
  }
  return thunkAction;
}
```

## Action creators and thunk

shorter version with nested arrow functions

```js
// thunk action creator
const loadTodoByIndex = (id) => async (dispatch) => {
  dispatch({ type: 'loadTodoRequest', payload: id });
  const todo = await fetchTodo(id);
  dispatch({ type: 'loadTodoSuccess', payload: todo });
};
```
