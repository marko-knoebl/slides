import React, { memo } from "react";

function TodoItem({ title, completed, onToggle }) {
  return (
    <div
      className={completed ? "todo completed" : "todo"}
      onClick={() => onToggle()}
    >
      {completed ? "DONE" : "TODO"}: {title}
    </div>
  );
}

export default memo(TodoItem);
