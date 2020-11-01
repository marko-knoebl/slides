import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

it("renders a todo app", () => {
  render(<TodoApp />);
});

describe("interactions", () => {
  const createTodoAppWithOneTodo = () => {
    render(<TodoApp />);
    const newTitleInput = screen.getByRole("textbox", { name: /new title/i });
    fireEvent.change(newTitleInput, { target: { value: "first todo" } });
    fireEvent.click(screen.getByRole("button", { name: "add" }));
  };

  it("creates a todo app with one todo", () => {
    createTodoAppWithOneTodo();
    const todoElements = screen.getAllByRole("listitem");
    expect(todoElements).toHaveLength(1);
  });

  it("lets a user toggle a todo", () => {
    createTodoAppWithOneTodo();
    const todoItem = screen.getByRole("listitem");
    expect(todoItem).toHaveTextContent(/TODO/);
    fireEvent.click(todoItem);
    expect(todoItem).toHaveTextContent(/DONE/);
  });

  it("lets a user delete a todo", () => {
    createTodoAppWithOneTodo();
    fireEvent.click(screen.getByRole("button", { name: "X" }));
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});

it("fetches todos from an API", async () => {
  // arrange
  const fetch = globalThis.fetch;
  globalThis.fetch = () =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, title: "one", completed: false },
          { id: 2, title: "two", completed: true },
        ]),
    }) as Promise<Response>;
  render(<TodoApp />);

  // act
  fireEvent.click(screen.getByRole("button", { name: /load from API/ }));

  // assert
  const allTodos = await screen.findAllByRole("listitem");
  const numTodos = allTodos.length;
  expect(numTodos).toBeGreaterThanOrEqual(2);

  // cleanup
  globalThis.fetch = fetch;
});
