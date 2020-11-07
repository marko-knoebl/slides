# React-Testing-Library Beispiel: Todo App

## Testen des Renderings

```jsx
test('renders a list item with a given text', () => {
  const title = 'test-title';
  render(<TodoItem title={title} completed={false} />);
  const listItem = screen.getByRole('listitem');
  expect(listItem).toHaveTextContent(new RegExp(title));
});
```

## Testen von Events

```jsx
test('triggers the toggle event', () => {
  const mockFn = jest.fn();
  render(
    <TodoItem
      title="foo"
      completed={false}
      onToggle={mockFn}
    />
  );
  const listItem = screen.getByRole('listitem');
  userEvent.click(listItem);
  expect(mockFn).toHaveBeenCalled();
});
```

## State initialisieren

Setup einer Todo-Anwendung mit drei Todos:

```jsx
beforeEach(() => {
  render(<TodoApp />);
  const newTitleInput = screen.getByRole('textbox', {
    name: /new title/i,
  });
  const addButton = screen.getByRole('button', {
    name: 'add',
  });
  for (let title of ['first', 'second', 'third']) {
    userEvent.type(newTitleInput, title);
    userEvent.click(addButton);
  }
});
```

## Testen von State-Änderungen

```jsx
test('toggling a todo', () => {
  const todoList = screen.getByRole('list');
  const firstTodoItem = within(todoList).getAllByRole(
    'listitem'
  )[0];
  expect(firstTodoItem).toHaveTextContent(/TODO: /);
  userEvent.click(firstTodoItem);
  expect(firstTodoItem).toHaveTextContent(/DONE: /);
});
```
