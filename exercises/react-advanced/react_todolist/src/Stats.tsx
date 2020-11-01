import React from "react";
import Todo from "./Todo";

type Props = {
  todos: Array<Todo>;
};

const Stats = (props: Props) => {
  const numIncomplete = props.todos.filter((todo) => !todo.completed).length;
  return (
    <div>
      {numIncomplete} open todos ({props.todos.length - numIncomplete}{" "}
      completed)
    </div>
  );
};

export default Stats;
