# createSlice

## createSlice

- Vereinfachte Erstellung eines Reducers und der zugehörigen Action Creators
- kann verwendet werden, wenn die einem Reducer zugeordneten Actions in keinem anderen Reducer verwendet werden

## createSlice

verwendet im Hintergrund `createAction` und `createReducer`

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

der gezeigte Aufruf erstellt:

einen Reducer (`todosSlice.reducer`)

zwei Action Creators:

- `todosSlice.actions.addTodo`
- `todosSlice.actions.deleteTodo`

## createSlice

aufruf eines Action Creators:

```js
addTodo('groceries');
```

```json
{
  "type": "todoData/todos/addTodo",
  "payload": "groceries"
}
```
