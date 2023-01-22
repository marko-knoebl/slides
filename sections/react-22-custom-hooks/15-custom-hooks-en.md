# Custom hooks

## Custom hooks

Custom hooks can be defined as functions whose name starts with `use`

They will in turn rely on existing hooks, like `useState` or `useEffect`

## Custom components and custom hooks

basic HTML elements:

- `<div>`
- `<button>`
- `<input>`
- ...

can be used to build custom components:

- `<Button>`
- `<Calendar>`
- `<Sidebar>`
- ...

## Custom components and custom hooks

built-in hooks:

- `useState`
- `useEffect`
- `useContext`
- ...

can be used to build custom hooks:

- `useForm` (for managing form state)
- `useQuery` (for querying an API)
- `useTodos` (for managing an array of todos)
- ...

## Custom hooks - useTodos

Example: `useTodos` - can be used to extract data handling from the component definition (separating the _model_ from the _view_)

```jsx
function TodoApp() {
  const todoData = useTodos();
  return (
    <div>
      <h1>Todos</h1>
      <AddTodo onAdd={todoData.addTodo} />
      <TodoList
        todos={todoData.todos}
        onChangeCompleted={todoData.setTodoCompleted}
        onDelete={todoData.deleteTodo}
      />
      <Statistics todos={todoData.todos} />
    </div>
  );
}
```

## Custom hooks - useTodos

definition of `useTodos`:

```ts
function useTodos() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  function addTodo(title) {
    // ...
  }
  function deleteTodo(id) {
    // ...
  }
  function setTodoCompleted(id, completed) {
    // ...
  }
  return { todos, addTodo, deleteTodo, setTodoCompleted };
}
```
