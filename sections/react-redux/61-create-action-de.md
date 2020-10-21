# createAction

## createAction

Die Funktion `createAction` aus dem Redux toolkit kann hilfreich sein, um _action creators_ zu erstellen und String-konstanten für _action types_ bereit zu stellen:

```js
import { createAction } from '@reduxjs/toolkit';

// create an action creator
const addTodo = createAction('addTodo', (title) => ({
  payload: title,
}));

const action1 = addTodo('groceries');
```

## createAction

`createAction` versieht jeden Action Creator mit einer `type` property:

```js
addTodo.type; // 'addTodo'
```

## createAction

Verwendung der `type` Property in dem switch-Statement eines Reducers:

```js
const todosReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case addTodo.type:
    // ...
    case deleteTodo.type:
    // ...
  }
};
```

## createAction

`createAction` stellt eine eigene `.toString()`-Methode bei jedem Action Creator bereit:

```js
addTodo.toString(); // 'addTodo'
String(addTodo); // 'addTodo'
```

Dies kann bei der Verwendung von `createReducer` hilfreich sein.
