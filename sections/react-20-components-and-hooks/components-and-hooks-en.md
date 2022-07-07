# Components and Hooks

## Components and Hooks

The UI can be built / structured via _components_

The logic and model behind the UI can be built / structured via _hooks_

## Hooks

Hooks = special functions that can be called inside a component definition

Examples: `useState`, `useEffect`, `useContext`

## Rules of Hooks

inside a component defintion:  
hooks must be called in same order on every render

(React uses call order to keep track of hook state)

[Rules of Hooks on reactjs.org](https://reactjs.org/docs/hooks-rules.html)

## Components and Hooks

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

## Components and Hooks

built-in hooks:

- `useState`
- `useEffect` (for triggering side effects, e.g. API queries)
- `useContext` (for sharing state across a component tree)
- ...

can be used to build custom hooks:

- `useForm` (for managing form state)
- `useQuery` (for querying APIs)
- ...

## Components and Hooks

some components and hooks from libraries:

- _MUI_ (Material-UI): `<Button>`, `<Alert>`, ...
- _React Router_: `<Route>`, `<Link>`, `useParams`, `useNavigate`
- _react-query_: `useQuery`
- _react-hook-form_: `useForm`

## Components and Hooks

lists of available components and hooks:

[awesome-react-components](https://github.com/brillout/awesome-react-components): list of components, ...

[awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks): list of hooks

## Modularity via components and hooks

modularity of the UI: via **custom components**

modularity of the logic / model: via custom hooks

## Modularity via components and hooks

why modularity?

- structuring code
- reusing code / functionality

## Modularity via components and hooks

example components for reuse (within a project or across projects):

- `Button` (for styling)
- `Calendar`
- `Sidebar`

## Modularity via components and hooks

example components for structuring code:

- `TodoApp`
- `TodoList`
- `TodoItem`

## Modularity via components and hooks

example hooks for reuse (within a project or across projects):

- `useState`
- `useQuery`
- `useMedia`

## Modularity via components and hooks

example hooks for structuring code:

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
        onChangeCompleted={todoData.setCompleted}
      />
      <Statistics todos={todoData.todos} />
    </div>
  );
}
```
