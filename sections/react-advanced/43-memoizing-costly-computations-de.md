# Memoisation aufwändiger Berechnungen

## Memoisation aufwändiger Berechnungen

Manche Renderings beruhen auf aufwändigen Berechnungen, die durch Memoisation optimiert werden können

## Memoisation aufwändiger Berechnungen

Beispiel ohne Memoisation:

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewtitle] = useState('');
  const numActiveTodos = todos.filter(
    todo => !todo.completed
  ).length;

  return (
    <div>
      ...
      <div>there are {numActiveTodos} active todos</div>
    </div>
  );
};
```

## Memoisation aufwändiger Berechnungen

mit Memoisation:

```js
const numActiveTodos = useMemo(
  // function to recompute value
  () => todos.filter(todo => !todo.completed).length,
  // array of dependencies
  [todos]
);
```

Die Berechnung wird nur dann erneut ausgeführt, wenn sich eine Abhängigkeit in dem Array ändert
