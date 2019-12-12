# Action Creators

## Action Creators

Action Creators: einfache Funktionen, die eine bestimmte Action erstellen

```js
const addTodo = title => ({
  type: ADD_TODO,
  payload: {
    title: title,
  },
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
const loadTodoByIndex = id => {
  function thunkAction(dispatch) {
    dispatch({ type: 'loadTodoRequest', id: id });
    fetch(
      `https://jsonplaceholder.typicode.com/todos/${index}`
    )
      .then(response => response.json())
      .then(todo => {
        dispatch({ type: 'loadTodoSuccess', todo: todo });
      });
  }
  return thunkAction;
};
```

## Action Creators und Thunk

kürzere Version mit verschachtelten Pfeilfunktionen:

```js
// thunk action creator
const loadTodoByIndex = id => dispatch => {
  dispatch({ type: 'loadTodoRequest', id: id });
  fetch(
    `https://jsonplaceholder.typicode.com/todos/${index}`
  )
    .then(response => response.json())
    .then(todo => {
      dispatch({ type: 'loadTodoSuccess', todo: todo });
    });
};
```
