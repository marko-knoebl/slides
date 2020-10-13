import rootReducer from "./rootReducer";
import { addTodo } from "./todosReducer";
import { setFilter } from "./filterReducer";
import { selectTodos, selectNumTodos, selectNumActiveTodos } from "./selectors";

const state1: ReturnType<typeof rootReducer> = {
  todos: [],
  filter: "showAll"
};

const state2 = rootReducer(state1, addTodo("abc"));
const state3 = rootReducer(state2, setFilter("showActive"));
const state4 = rootReducer(state3, addTodo("def"));

console.log(state4);

console.log(selectTodos(state4));
console.log(selectNumTodos(state4));
console.log(selectNumActiveTodos(state4));
