# Skipping rerenders and event handlers

## Skipping rerenders and event handlers

if `Rating` is a "memoized" component, which of the following will re-render when the parent is re-rendered?

```jsx
<Rating stars={prodRating} />
<Rating stars={prodRating} onChange={setProdRating} />
<Rating
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

## Skipping rerenders and event handlers

```jsx
<Rating
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

the change handler would be recreated and passed down as a different object on every rendering of the parent component

## Skipping rerenders and event handlers

solutions:

- memoize the event handlers
- pass down a `dispatch` function
- define the event handlers to be passed down in a class component

## Skipping rerenders and event handlers

memoizing event handlers:

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);

  const deleteTodoA = useMemo(
    () => (id) => {
      setTodos((todos) => todos.filter((t) => t.id !== id));
    },
    []
  );

  const deleteTodoB = useCallback((id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  }, []);
}
```
