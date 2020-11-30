# Memoization and event handlers

## Memoization and event handlers

if `Rating` is a memoized component, which of the following will re-render when the parent is re-rendered?

```jsx
<Rating stars={prodRating} />
<Rating stars={prodRating} onChange={setProdRating} />
<Rating
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

## Memoization and event handlers

```jsx
<Rating
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

the change handler would be recreated and passed down as a different object on every rendering of the parent component

## Memoization and event handlers

solutions:

- pass down a `dispatch` function
- define the event handlers to be passed down in a class component
- memoize the event handlers

## Memoization and event handlers

memoizing event handlers:

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const todosWithEventHandlers = useMemo(
    () =>
      todos.map((todo) => ({
        ...todo,
        onToggle: () => {
          // ...
        },
      })),
    [todos]
  );
  return (
    <ul>
      {todosWithEventHandlers.map((todo) => (
        <li onClick={todo.onToggle}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

## Memoization and event handlers

memoization of a single event handler:

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = useMemo(
    () => (newTitle) => {
      setTodos([
        ...todos,
        { title: newTitle, completed: false },
      ]);
    },
    [todos]
  );
};
```

## Memoization and event handlers

shorter memoization of a single event handler via `useCallback`:

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = useCallback(
    (newTitle) => {
      setTodos([
        ...todos,
        { title: newTitle, completed: false },
      ]);
    },
    [todos]
  );
};
```
