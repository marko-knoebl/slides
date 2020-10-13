import { RootState } from "./rootReducer";

export const selectTodos = (state: RootState) => state.todos;
export const selectActiveTodos = (state: RootState) =>
  state.todos.filter(todo => !todo.completed);
export const selectCompletedTodos = (state: RootState) =>
  state.todos.filter(todo => todo.completed);
export const selectNumTodos = (state: RootState) => state.todos.length;
export const selectNumActiveTodos = (state: RootState) =>
  state.todos.filter(todo => !todo.completed).length;
