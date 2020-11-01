import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const getNewId = (todos: Array<Todo>): number =>
  todos.reduce((aggr, todo) => Math.max(aggr, todo.id), 0) + 1;

const todosSlice = createSlice({
  name: "todos",
  initialState: [] as Array<Todo>,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.push({
        id: getNewId(state),
        title: action.payload,
        completed: false
      });
    },
    toggleTodo(state, action: PayloadAction<number>) {
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
