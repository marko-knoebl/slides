# Context

## Context

Möglichkeit, Werte aus einer Komponente direkt allen weiter unten im Dokumentenbaum liegenden Komponenten zur Verfügung zu stellen - ohne diese über jede Ebene übergeben zu müssen

Das Interface von Context kann sowohl Daten (aus dem State) als auch Eventhandler übergeben.

## Context - Beispiel

mit JavaScript (_TodosContext.js_):

```js
const TodosContext = React.createContext();
```

mit TypeScript (_TodosContext.ts_):

```ts
type TodosContextType = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
};

const TodosContext = React.createContext(
  {} as TodosContextType
);
```

## Context - Beispiel

Der _Provider_ stellt Werte allen Unterkomponenten zur Verfügung

```jsx
<TodosContext.Provider
  value={{
    todos: todos,
    onToggle: () => {
      // ...
    },
  }}>
  <TodoList />
  <AddTodo />
  <TodoStats />
</TodosContext.Provider>
```

## Context - Beispiel

Verwendung des _Context Hooks_, um Werte eines bestimmten Contexts abzufragen:

```jsx
const TodoStats = () => {
  const context = useContext(TodosContext);
  return <div>There are {context.todos.length} todos</div>;
};
```
