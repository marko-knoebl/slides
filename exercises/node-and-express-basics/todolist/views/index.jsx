import React from "react";

export default ({ username, todos }) => {
  return (
    <html>
      <head>
        <title>Todo</title>
      </head>
      <body>
        <h1>Todo</h1>
        <p>
          Logged in{username ? ` as ${username}` : null} (
          <a href="/logout">log out</a>)
        </p>
        <form action="/add_todo" method="post">
          <label>
            Title: <input name="title" />
          </label>
          <button type="submit">Add</button>
        </form>
        <ul style={{ margin: 0, padding: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo._id}
              style={{
                display: "flex",
                padding: "0.5rem",
                margin: "0.5rem",
                backgroundColor: todo.completed ? "lightgrey" : "lightblue",
              }}
            >
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.completed ? "DONE: " : "TODO: "}
                {todo.title}
              </span>
              <form action="/toggle_todo" method="post">
                <input
                  name="id"
                  type="hidden"
                  value={todo._id}
                  readOnly={true}
                />
                <button type="submit">toggle</button>
              </form>
              <form action="/delete_todo" method="post">
                <input
                  name="id"
                  type="hidden"
                  value={todo._id}
                  readOnly={true}
                />
                <button type="submit">delete</button>
              </form>
            </li>
          ))}
        </ul>
        <form action="/delete_completed" method="post">
          <button type="submit">Delete all completed todos</button>
        </form>
      </body>
    </html>
  );
};
