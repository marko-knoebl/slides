import React from "react";
import { render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";

it("renders a list item with a given text", () => {
  const title = "test-title";
  render(
    <TodoItem
      title={title}
      completed={false}
      onToggle={() => {}}
      onDelete={() => {}}
    />
  );
  const todoElement = screen.getByRole("listitem");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent(new RegExp(title));
});

it("renders a completed todo", () => {
  const title = "test-title";
  render(
    <TodoItem
      title={title}
      completed={true}
      onToggle={() => {}}
      onDelete={() => {}}
    />
  );
  const todoElement = screen.getByRole("listitem");
  expect(todoElement.className).toEqual("todo-item completed");
});
