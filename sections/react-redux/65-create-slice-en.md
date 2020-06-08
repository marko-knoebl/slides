# createSlice

## createSlice

- simplified creation of a reducer and associated action creators
- can be used if the actions associated with a reducer are not used in any other reducer

## createSlice

uses `createAction` and `createReducer` behind the scenes

## createSlice

```js
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todoData/todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        title: action.title,
        completed: false,
        id: Math.max(0, ...state.map((t) => t.id)) + 1,
      });
    },
    deleteTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.id),
  },
});
```

## createSlice

the call will create:

a reducer (`todosSlice.reducer`)

two action creators:

- `todosSlice.actions.addTodo` (action type: `"todoData/todos/addTodo"`)
- `todosSlice.actions.deleteTodo` (action type: `"todoData/todos/deleteTodo"`)

## createSlice

calling an action creator:

```js
addTodo('groceries');
```

```json
{
  "type": "todoData/todos/addTodo",
  "payload": "groceries"
}
```
