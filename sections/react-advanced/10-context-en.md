# Context

## Context

Context is a means to provide values from a component to all components that are contained within it - without explicitly passing it through all intermediate levels.

The interface of context can pass both data and event handlers

## Context - example

```js
// TodosContext.js
import { createContext } from 'react';

const TodosContext = createContext();

export default TodosContext;
```

## Context - example

with TypeScript:

```ts
// todosContext.ts
import { createContext } from 'react';

type TodosContextType = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
};

const TodosContext = createContext<
  TodosContextType | undefined
>(undefined);

export { TodosContext };
```

## Context - example

The _provider_ makes values available to all its subcomponents

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

## Context - example

using the _context hook_ to query values of a specific context:

```jsx
const TodoStats = () => {
  const context = useContext(TodosContext);
  return <div>There are {context.todos.length} todos</div>;
};
```

## Context - example

wrapping in a custom hook:

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
