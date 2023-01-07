import { useState } from "react";

import { Todo } from "./types";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  function addTodo(title: string) {
    let maxId = 0;
    for (let todo of todos) {
      maxId = Math.max(maxId, todo.id);
    }
    const newTodo = { id: maxId + 1, title: title, completed: false };
    setTodos([...todos, newTodo]);
  }

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const numTodos = todos.length;
  const numCompletedTodos = todos.filter((todo) => todo.completed).length;
  const numIncompleteTodos = numTodos - numCompletedTodos;

  const [newTitle, setNewTitle] = useState("");

  return (
    <div className="App">
      <h1>Todo</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(newTitle);
          setNewTitle("");
        }}
      >
        <input
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul className="TodoList">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={
              todo.completed
                ? "TodoItem TodoItem--Completed"
                : "TodoItem TodoItem--Incomplete"
            }
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(event) =>
                setTodoCompleted(todo.id, event.target.checked)
              }
            />
            <span
              className={
                todo.completed
                  ? "TodoItem__Text TodoItem__Text--Completed"
                  : "TodoItem__Text"
              }
            >
              {todo.completed ? "DONE: " : "TODO: "}
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
      <div className="Statistics">
        {numTodos} todos ({numIncompleteTodos} incomplete, {numCompletedTodos}{" "}
        completed)
      </div>
    </div>
  );
}
