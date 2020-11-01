import React from "react";

import "./TodoList.css";
import Todo from "./Todo";
import TodoItem from "./TodoItem";

type Props = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = (props: Props) => {
  return (
    <ul className="todolist">
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          onToggle={() => props.onToggle(todo.id)}
          onDelete={() => props.onDelete(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
