import { Action, PayloadAction, Dispatch } from "@reduxjs/toolkit";

import todosReducer, { TodosAction } from "./todosReducer";

// thunk action
export const loadTodos = () => (dispatch: Dispatch<TodosDataAction>) => {
  dispatch({ type: "todosData/loadTodosRequest" });
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: "todosData/loadTodosSuccess",
        payload: data
      })
    )
    .catch(error =>
      dispatch({
        type: "todosData/loadTodosError"
      })
    );
};

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodosDataState = {
  todos: Array<Todo>;
  isLoading: boolean;
  hasError: boolean;
};

type LoadTodosRequestAction = Action<"todosData/loadTodosRequest">;
type LoadTodosSuccessAction = PayloadAction<
  Array<Todo>,
  "todosData/loadTodosSuccess"
>;
type LoadTodosErrorAction = Action<"todosData/loadTodosError">;

type TodosDataAction =
  | LoadTodosRequestAction
  | LoadTodosSuccessAction
  | LoadTodosErrorAction
  | TodosAction;

const todosDataReducer = (
  state: TodosDataState = { todos: [], isLoading: false, hasError: false },
  action: TodosDataAction
): TodosDataState => {
  switch (action.type) {
    case "todosData/loadTodosRequest":
      return { ...state, isLoading: true };
    case "todosData/loadTodosSuccess":
      return { ...state, todos: action.payload, isLoading: false };
    case "todosData/loadTodosError":
      return { ...state, isLoading: false, hasError: true };
    default:
      return {
        ...state,
        todos: todosReducer(state.todos, action)
      };
  }
};

export default todosDataReducer;
