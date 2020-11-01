import React from "react";

import "./TodoItem.css";

type Props = {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

const TodoItem = (props: Props) => {
  let className = "todo-item";
  if (props.completed) {
    className += " completed";
  }
  return (
    <li onClick={props.onToggle} className={className}>
      <span className={props.completed ? "todo-item-text-completed" : ""}>
        {props.completed ? "DONE" : "TODO"}: {props.title}
      </span>
      <button onClick={props.onDelete}>X</button>
    </li>
  );
};

export default TodoItem;
