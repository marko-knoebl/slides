# Memoizing costly computations

## Memoizing costly computations

some component renderings may rely on costly computations that could benefit from memoization

## Memoizing costly computations

example without memoization:

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

## Memoizing costly computations

with memoization:

```js
const numActiveTodos = useMemo(
  // function to recompute value
  () => todos.filter(todo => !todo.completed).length,
  // array of dependencies
  [todos]
);
```

the computation is only rerun if a dependency listed in the array changes
