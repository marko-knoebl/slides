# Custom components and hooks

## Custom components and hooks

use cases:

- structuring code
- reusing code / functionality

## Custom components and hooks

example components for reuse (within a project or across projects):

- `Button` (for styling)
- `Calendar`
- `ProgressBar`

## Custom components and hooks

example components for structuring code:

- `TodoApp`
- `TodoList`
- `TodoItem`

## Custom components and hooks

examples of custom hooks:

in a todo app: `useTodos`

in a web shop app: `useProducts`, `useCart`

## Example: Todo list application

using custom components and a custom hook for a todo list application:

```jsx
function TodoApp() {
  const todoData = useTodos();
  return (
    <div>
      <Header />
      <AddTodo onAdd={todoData.addTodo} />
      <TodoList
        todos={todoData.todos}
        onDelete={todoData.deleteTodo}
        onCompletedChange={todoData.setCompleted}
      />
      <Statistics todos={todoData.todos} />
    </div>
  );
}
```
