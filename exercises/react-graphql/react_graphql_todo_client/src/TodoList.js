import React, { memo } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          onToggle={() => onToggle(todo.id, !todo.completed)}
        />
      ))}
    </div>
  );
}

export default memo(TodoList);
