# React-Testing-Library example: todo app

## Testing the rendering

```jsx
test('renders a list item with a given text', () => {
  const title = 'test-title';
  render(
    <TodoItem
      todo={{ id: 1, title: title, completed: false }}
      onDelete={() => {}}
      onCompletedChange={() => {}}
    />
  );
  const listItem = screen.getByRole('listitem');
  expect(listItem).toHaveTextContent(new RegExp(title));
});
```

## Testing events

```jsx
test('triggers the toggle event', () => {
  const mockFn = jest.fn();
  render(
    <TodoItem
      todo={{ id: 1, title: title, completed: false }}
      onDelete={mockFn}
      onCompletedChange={() => {}}
    />
  );
  const listItem = screen.getByRole('listitem');
  const deleteBtn = within(listItem).getByRole('button', {
    name: /delete/i,
  });
  userEvent.click(deleteBtn);
  expect(mockFn).toHaveBeenCalled();
});
```

## Setting up initial state

Setting up a todo application with three todos before each test:

```jsx
beforeEach(() => {
  render(<App />);
  const titleInput = screen.getByRole('textbox', {
    name: /title/i,
  });
  const addButton = screen.getByRole('button', {
    name: 'add',
  });
  for (let title of ['first', 'second', 'third']) {
    userEvent.type(titleInput, title);
    userEvent.click(addButton);
  }
});
```

## Testing state changes

```jsx
test('toggling a todo', () => {
  const todoList = screen.getByRole('list');
  const firstTodoItem = within(todoList).getAllByRole(
    'listitem'
  )[0];
  const firstTodoItemCheckbox = within(
    firstTodoItem
  ).getByRole('checkbox');
  expect(firstTodoItem).toHaveTextContent(/TODO:/);
  userEvent.click(firstTodoItemCheckbox);
  expect(firstTodoItem).toHaveTextContent(/DONE:/);
});
```
