import store from "./store";
import { loadTodos } from "./todosDataReducer";

console.log(store.getState());
store.dispatch({
  type: "todosData/todos/addTodo",
  payload: "abc"
});
console.log(store.getState());
store.dispatch({
  type: "filter/setFilter",
  payload: "showActive"
});
console.log(store.getState());
store.dispatch({
  type: "todosData/todos/addTodo",
  payload: "def"
});
console.log(store.getState());
store.dispatch(loadTodos());

// after 3 seconds, log the new todos
setTimeout(() => console.log(store.getState()), 3000);
