# Action Creators

## Action Creators

Action Creators: einfache Funktionen, die eine bestimmte Action erstellen

```js
const addTodo = (title) => ({
  type: 'addTodo',
  payload: title,
});
```

Verwendung:

```js
dispatch(addTodo('groceries'));
```

## Action Creators vs. Actions

Achtung doppelte Bedeutung: _Action Creators_ werden oft abgekürzt als _Actions_ bezeichnet (z.B. in Dokumentation).

## Action Creators und Thunk

Action Creators können notwendig sein, um parametrische Actions in Thunk zu benutzen

Der folgende Aufruf würde eine Thunk Action erstellen und dispatchen, die ein bestimmtes Todo lädt:

```js
dispatch(loadTodoByIndex(3));
```

## Action Creators und Thunk

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

## Action Creators und Thunk

kürzere Version mit verschachtelten Pfeilfunktionen:

```js
// thunk action creator
const loadTodoByIndex = (id) => async (dispatch) => {
  dispatch({ type: 'loadTodoRequest', payload: id });
  const todo = await fetchTodo(id);
  dispatch({ type: 'loadTodoSuccess', payload: todo });
};
```
