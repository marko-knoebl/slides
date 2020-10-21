# createAction

## createAction

The `createAction` function from Redux toolkit can help with creating _action creators_ and providing string constants for _action types_:

```js
import { createAction } from '@reduxjs/toolkit';

// create an action creator
const addTodo = createAction('addTodo', (title) => ({
  payload: title,
}));

const action1 = addTodo('groceries');
```

## createAction

`createAction` attaches a `type` property to each action creator:

```js
addTodo.type; // 'addTodo'
```

## createAction

using the `type` property in a reducer's switch statement:

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

`createAction` provides a custom `.toString()` method on each action creator:

```js
addTodo.toString(); // 'addTodo'
String(addTodo); // 'addTodo'
```

This can become useful when using `createReducer`.
