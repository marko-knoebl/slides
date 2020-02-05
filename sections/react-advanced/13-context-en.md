# Context

## Context

Context is a means to provide values from a component to all components that are contained within it - without explicitly passing it through all intermediate levels.

## Context

two main elements:

- `Provider`: provides values
- `Consumer`: uses these values (the consumer may be deep down in the component hierarchy)

## Context

The interface of context can pass both data and event handlers

## Context - example

with JavaScript (_TodosContext.js_):

```js
const TodosContext = React.createContext();
```

with TypeScript (_TodosContext.ts_):

```ts
type TodosContextType = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
};

const TodosContext = React.createContext(
  {} as TodosContextType
);
```

## Context - example: Provider

```jsx
const App = () => {
  return (
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
  );
};
```

## Context - example: consumer

```jsx
const TodoStats = () => {
  const context = useContext(TodosContext);
  return <div>There are {context.todos.length} todos</div>;
};
```
