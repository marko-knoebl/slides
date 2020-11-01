import rootReducer from "./rootReducer";
import { selectTodos, selectNumTodos, selectNumActiveTodos } from "./selectors";

const state1: ReturnType<typeof rootReducer> = {
  todos: [],
  filter: "showAll"
};

const state2 = rootReducer(state1, { type: "todos/addTodo", payload: "abc" });
const state3 = rootReducer(state2, {
  type: "filter/setFilter",
  payload: "showActive"
});
const state4 = rootReducer(state3, { type: "todos/addTodo", payload: "def" });

console.log(state4);

console.log(selectTodos(state4));
console.log(selectNumTodos(state4));
console.log(selectNumActiveTodos(state4));
