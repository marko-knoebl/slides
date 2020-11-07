import React from "react";
import { render, screen, within } from "@testing-library/react";
import TodoItem from "./TodoItem";
import userEvent from "@testing-library/user-event";

test("render a list item with a given text", () => {
  const title = "test-title";
  render(
    <TodoItem
      title={title}
      completed={false}
      onToggle={() => {}}
      onDelete={() => {}}
    />
  );
  const listItem = screen.getByRole("listitem");
  expect(listItem).toBeInTheDocument();
  expect(listItem).toHaveTextContent(new RegExp(title));
});

test("render a completed todo", () => {
  const title = "test-title";
  render(
    <TodoItem
      title={title}
      completed={true}
      onToggle={() => {}}
      onDelete={() => {}}
    />
  );
  const listItem = screen.getByRole("listitem");
  expect(listItem).toHaveClass("todo-item");
  expect(listItem).toHaveClass("completed");
});

test("toggle event", () => {
  const mockFn = jest.fn();
  render(
    <TodoItem
      title="foo"
      completed={false}
      onToggle={mockFn}
      onDelete={() => {}}
    />
  );
  const listItem = screen.getByRole("listitem");
  userEvent.click(listItem);
  expect(mockFn).toHaveBeenCalled();
});

test("delete event", () => {
  const mockFn = jest.fn();
  render(
    <TodoItem
      title="foo"
      completed={false}
      onToggle={() => {}}
      onDelete={mockFn}
    />
  );
  const listItem = screen.getByRole("listitem");
  const deleteButton = within(listItem).getByRole("button", { name: "delete" });
  userEvent.click(deleteButton);
  expect(mockFn).toHaveBeenCalled();
});
