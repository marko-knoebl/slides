import { useReducer, useEffect, useState } from "react";
import { fetchTodos } from "./api";
import Todo from "./Todo";

type Action = { type: string; payload?: any };
type AddTodoAction = Action & { type: "addTodo"; payload: string };
type ToggleTodoAction = Action & { type: "toggleTodo"; payload: number };
type DeleteTodoAction = Action & { type: "deleteTodo"; payload: number };
type SetTodosAction = Action & { type: "setTodos"; payload: Array<Todo> };
type TodoAction =
  | AddTodoAction
  | ToggleTodoAction
  | DeleteTodoAction
  | SetTodosAction;

// process synchronous actions
const todosReducer = (todos: Array<Todo>, action: TodoAction) => {
  switch (action.type) {
    case "addTodo":
      const newId = Math.max(0, ...todos.map((t) => t.id)) + 1;
      return [...todos, { id: newId, title: action.payload, completed: false }];
    case "toggleTodo":
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "deleteTodo":
      return todos.filter((todo) => todo.id !== action.payload);
    case "setTodos":
      return action.payload;
    default:
      return todos;
  }
};

const useTodos = () => {
  const [todos, todosDispatch] = useReducer(todosReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      fetchTodos().then((todos) => {
        todosDispatch({ type: "setTodos", payload: todos });
        setIsLoading(false);
      });
    }
  }, [isLoading]);

  return {
    todos: todos,
    isLoading: isLoading,
    loadFromApi: () => setIsLoading(true),
    addTodo: (title: string) =>
      todosDispatch({ type: "addTodo", payload: title }),
    deleteTodo: (id: number) =>
      todosDispatch({ type: "deleteTodo", payload: id }),
    toggleTodo: (id: number) =>
      todosDispatch({ type: "toggleTodo", payload: id }),
  };
};

export default useTodos;
