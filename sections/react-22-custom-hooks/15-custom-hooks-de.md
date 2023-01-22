# Eigene Hooks

## Eigene Hooks

Eigene Hooks können als Funktionen definiert werden, deren Name mit `use` beginnt

Eigene Hooks greifen wiederum auf bestehende Hooks, wie `useState` oder `useEffect` zurück

## Eigene Komponenten und eigene Hooks

grundlegende HTML-Elemente:

- `<div>`
- `<button>`
- `<input>`
- ...

können verwendet werden, um eigene Komponenten zu erstellen:

- `<Button>`
- `<Calendar>`
- `<Sidebar>`
- ...

## Eigene Komponenten und eigene Hooks

Eingebaute Hooks:

- `useState`
- `useEffect`
- `useContext`
- ...

können verwendet werden, um eigene Hooks zu erstellen:

- `useForm` (zum Verwalten von Formularen)
- `useQuery` (zum Abfragen von APIs)
- `useTodos` (zum Verwalten von Todos)
- ...

## Eigene Hooks - useTodos

Beispiel: `useTodos` - kann verwendet werden, um die Datenverwaltung von der Komponentendefinition loszulösen (Trennung von _model_ und _view_)

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

## Eigene Hooks - useTodos

Definition von `useTodos`:

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
