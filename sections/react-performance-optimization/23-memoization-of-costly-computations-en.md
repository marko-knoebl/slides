# Memoization of costly computations

## Memoization of costly computations

example without memoization:

```js
const [todos, setTodos] = useState([]);
const numActiveTodos = todos.filter(
  (todo) => !todo.completed
).length;
```

## Memoization of costly computations

with memoization:

```js
const [todos, setTodos] = useState([]);
const numActiveTodos = useMemo(
  // function to recompute value
  () => todos.filter((todo) => !todo.completed).length,
  // array of dependencies
  [todos]
);
```

the computation is only rerun if a dependency listed in the array changes
