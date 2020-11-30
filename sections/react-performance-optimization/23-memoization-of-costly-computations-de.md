# Memoisierung aufwändiger Berechnungen

## Memoisierung aufwändiger Berechnungen

Beispiel ohne Memoisierung:

```js
const [todos, setTodos] = useState([]);
const numActiveTodos = todos.filter(
  (todo) => !todo.completed
).length;
```

## Memoization of costly computations

Mit Memoisierung:

```js
const [todos, setTodos] = useState([]);
const numActiveTodos = useMemo(
  // function to recompute value
  () => todos.filter((todo) => !todo.completed).length,
  // array of dependencies
  [todos]
);
```

Berechnung wird nur dann neu ausgeführt, wenn sich eine Abhängigkeit in dem Array ändert
