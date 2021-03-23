# Context

## Context

Möglichkeit, Werte aus einer Komponente direkt allen weiter unten im Dokumentenbaum liegenden Komponenten zur Verfügung zu stellen - ohne diese über jede Ebene übergeben zu müssen

Das Interface von Context kann sowohl Daten (aus dem State) als auch Eventhandler übergeben.

## Context - Beispiel

```js
// TodosContext.js
import { createContext } from 'react';

const TodosContext = createContext();

export default TodosContext;
```

## Context - Beispiel

mit TypeScript:

```ts
// TodosContext.ts
import { createContext } from 'react';

type TodosContextType = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
};

const TodosContext = createContext({} as TodosContextType);

export default TodosContext;
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
  }}
>
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

## Context - Beispiel

als eigener Hook:

```ts
// todosContext.ts

function useTodosContext() {
  const context = useContext(TodosContext);
  if (context === undefined) {
    throw new Error('No matching provider found');
  }
  return context;
}

export { TodosContext, useTodosContext };
```
