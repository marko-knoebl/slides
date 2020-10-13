import { combineReducers } from "redux";

import todosDataReducer from "./todosDataReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  todosData: todosDataReducer,
  filter: filterReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
