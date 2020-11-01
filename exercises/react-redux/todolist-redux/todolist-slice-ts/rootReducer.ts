import { combineReducers } from "redux";

import todosReducer from "./todosReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
