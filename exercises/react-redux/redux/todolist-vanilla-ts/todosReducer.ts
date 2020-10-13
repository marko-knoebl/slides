import { PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type AddTodoAction = PayloadAction<string, "todos/addTodo">;
type ToggleTodoAction = PayloadAction<number, "todos/toggleTodo">;

type TodosAction = AddTodoAction | ToggleTodoAction;

const getNewId = (todos: Array<Todo>): number =>
  todos.reduce((aggr, todo) => Math.max(aggr, todo.id), 0) + 1;

const todosReducer = (
  state: Array<Todo> = [],
  action: TodosAction
): Array<Todo> => {
  switch (action.type) {
    case "todos/addTodo":
      return [
        ...state,
        { id: getNewId(state), title: action.payload, completed: false }
      ];
    case "todos/toggleTodo":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todosReducer;
