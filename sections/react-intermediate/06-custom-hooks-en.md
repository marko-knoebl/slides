# Custom hooks

## Custom hooks

Building blocks in React:

- *components*: handle the _view_
- *hooks*: handle the _model_ / _logic_ behind the view

purposes:

- structuring code
- code re-use

## Custom hooks

Custom hooks can be defined as functions whose name starts with `use`

They will in turn rely on existing hooks, like `useState` or `useEffect`

## Custom hooks - useExchangeRate

hook that provides the exchange rate for selected currencies (see earlier example):

```js
function useExchangeRate(from, to) {
  const [rate, setRate] = useState(null);
  const [status, setStatus] = useState('loading');
  async function loadExchangeRateAsync() {
    try {
      const newRate = await fetchExchangeRate();
      setRate(newRate);
      setStatus('success');
    } catch {
      setRate(null);
      setStatus('error');
    }
  }
  useEffect(() => {
    loadExchangeRateAsync();
  }, [from, to]);
  return { status, rate };
}
```

## Custom hooks - useTodos

Example: `useTodos` - can be used to extract data handling from the component definition (separating the _model_ from the _view_)

```jsx
function TodoApp() {
  const {
    todos,
    toggleTodo,
    deleteTodo,
    addTodo,
  } = useTodos();
  return (
    <div>
      <h1>Todos</h1>
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <AddTodo onAdd={addTodo} />
    </div>
  );
}
```

## Custom hooks - useTodos

definition of `useTodos`:

```jsx
function useTodos() {
  const [todos, setTodos] = useState([]);
  function addTodo(title) {
    const id = Math.max(0, ...todos.map((t) => t.id + 1));
    setTodos([
      ...todos,
      { id: id, title: title, completed: false },
    ]);
  }
  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }
  function toggleTodo(id) {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }
  return { todos, addTodo, deleteTodo, toggleTodo };
}
```

## Custom hooks - useTodos

`useTodos` with API access:

```js
function useTodos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function reload() {
    setIsLoading(true);
    const todos = await fetchTodos();
    setTodos(todos);
    setIsLoading(false);
  }
  useEffect(() => {
    reload();
  }, []);
  // ... (addTodo, deleteTodo, toggleTodo)
  return {
    todos,
    isLoading,
    reload,
    // ... (addTodo, deleteTodo, toggleTodo)
  };
}
```

## Custom hooks - useDate

Example: `useDate` - provides the current time and updates the component every 1000 milliseconds

```js
const Clock = () => {
  const time = useDate(1000);
  return (
    <div>The time is: {time.toLocaleTimeString()}</div>
  );
};
```

## Custom hooks - useDate

basic implementation of `useDate`:

```js
const useDate = (interval) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, interval);
    return () => clearInterval(id);
  }, []);
  return date;
};
```
