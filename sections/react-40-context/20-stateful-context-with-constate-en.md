# Stateful context with constate

## Constate

_constate_: library that creates a **context** with an associated **state**

## Constate

defining the context:

custom hook that manages todo data:

```ts
function useTodos() {
  // ...
  return { todos, addTodo, deleteTodo, setTodoCompleted };
}
```

creating a _provider_ component and a _consumer_ hook:

```js
const [TodosProvider, useTodosContext] = constate(useTodos);
```

## Constate

providing the context:

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

querying the context:

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
