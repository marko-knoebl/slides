import React from "react";
import { render, screen, within } from "@testing-library/react";
import TodoApp from "./TodoApp";
import userEvent from "@testing-library/user-event";

test("render a todo app", () => {
  render(<TodoApp />);
});

describe("interactions", () => {
  const createTodoAppWithThreeTodos = () => {
    render(<TodoApp />);
    const newTitleInput = screen.getByRole("textbox", { name: /new title/i });
    const addButton = screen.getByRole("button", { name: "Add Todo" });
    for (let title of ["first", "second", "third"]) {
      userEvent.type(newTitleInput, title);
      userEvent.click(addButton);
    }
  };

  test("initialize todo app with three todos", () => {
    createTodoAppWithThreeTodos();
    const todoItems = screen.getAllByRole("listitem");
    expect(todoItems).toHaveLength(3);
    for (let todoItem of todoItems) {
      expect(todoItem).toHaveTextContent(/TODO: /);
    }
  });

  test("toggling a todo", () => {
    createTodoAppWithThreeTodos();
    const todoList = screen.getByRole("list");
    const firstTodoItem = within(todoList).getAllByRole("listitem")[0];
    expect(firstTodoItem).toHaveTextContent(/TODO: /);
    userEvent.click(firstTodoItem);
    expect(firstTodoItem).toHaveTextContent(/DONE: /);
  });

  test("deleting a todo", () => {
    createTodoAppWithThreeTodos();
    const todoList = screen.getByRole("list");
    const firstTodoItem = within(todoList).getAllByRole("listitem")[0];
    const firstTodoItemDeleteButton = within(firstTodoItem).getByRole(
      "button",
      { name: "delete" }
    );
    userEvent.click(firstTodoItemDeleteButton);
    expect(screen.queryAllByRole("listitem")).toHaveLength(2);
  });
});

test("fetch todos from an API", async () => {
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

  userEvent.click(screen.getByRole("button", { name: /load from API/ }));

  const allTodos = await screen.findAllByRole("listitem");
  const numTodos = allTodos.length;
  expect(numTodos).toBeGreaterThanOrEqual(2);

  globalThis.fetch = fetch;
});
