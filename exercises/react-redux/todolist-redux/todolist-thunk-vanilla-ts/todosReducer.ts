import { PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type AddTodoAction = PayloadAction<string, "todosData/todos/addTodo">;
type ToggleTodoAction = PayloadAction<number, "todosData/todos/toggleTodo">;
type SetTodosAction = PayloadAction<Array<Todo>, "todosData/todos/setTodos">;

export type TodosAction = AddTodoAction | ToggleTodoAction | SetTodosAction;

const getNewId = (todos: Array<Todo>): number =>
  todos.reduce((aggr, todo) => Math.max(aggr, todo.id), 0) + 1;

const todosReducer = (
  state: Array<Todo> = [],
  action: TodosAction
): Array<Todo> => {
  switch (action.type) {
    case "todosData/todos/addTodo":
      console.log("aa");
      return [
        ...state,
        { id: getNewId(state), title: action.payload, completed: false }
      ];
    case "todosData/todos/toggleTodo":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "todosData/todos/setTodos":
      return action.payload;
    default:
      return state;
  }
};

export default todosReducer;
