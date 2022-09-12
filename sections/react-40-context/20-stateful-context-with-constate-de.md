# Context und State via Constate

## Constate

_constate_: Library, die einen **Kontext** mit zugehörigem **State** generieren kann

## Constate

Definieren des Context:

selbst definierter Hook, der Todo-Daten verwaltet:

```ts
function useTodos() {
  // ...
  return { todos, addTodo, deleteTodo, setTodoCompleted };
}
```

erstellen einer _Provider_-Komponente und eines _Consumer_-Hooks:

```ts
const [TodosProvider, useTodosContext] = constate(useTodos);
```

## Constate

"Providen" des Contexts:

```ts
function App() {
  return (
    <TodosProvider>
      <AddTodoForm />
      <TodoList />
      <Statistics />
    </TodosProvider>
  );
}
```

## Constate

Abfragen des Context:

```ts
function TodoList() {
  const {
    todos,
    deleteTodo,
    setTodoCompleted,
  } = useTodosContext();
  // ...
}
```
