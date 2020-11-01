import React, { useState } from "react";

type Props = {
  onAddTodo: (title: string) => void;
};

const AddTodo = (props: Props) => {
  const [newTitle, setNewTitle] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onAddTodo(newTitle);
        setNewTitle("");
      }}
    >
      <label>
        new title:
        <input
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
      </label>
      <button disabled={newTitle.length === 0}>add</button>
    </form>
  );
};

export default AddTodo;
