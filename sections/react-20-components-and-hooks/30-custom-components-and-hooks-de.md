# Eigene Komponenten und Hooks

## Eigene Komponenten und Hooks

Zwecke:

- Strukturierung von Code
- Wiederverwenden von Code / Funktionalität

## Eigene Komponenten und Hooks

Beispiele für Komponenten zur Wiederverwendung (innerhalb eines Projektes oder über Projekte hinweg):

- `Button` (zum Styling)
- `Calendar`
- `ProgressBar`

## Eigene Komponenten und Hooks

Beispiel für Komponenten zur Strukturierung von Code:

- `TodoApp`
- `TodoList`
- `TodoItem`

## Eigene Komponenten und Hooks

Beispiele für eigene Hooks:

in einer Todo-Anwendung: `useTodos`

in einem Online-Shop: `useProducts`, `useCart`

## Beispiel: Todo-Anwendung

eigene Komponenten und eigener Hook für eine Todo-Anwendung:

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
