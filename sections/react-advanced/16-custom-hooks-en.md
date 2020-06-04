# Custom hooks

## Custom hooks

Custom hooks can be used to extract logic from function components

They are functions which in turn use existing hooks like `useState` or `useEffect`

## Custom hooks - useTodos

Example: `useTodos` - can be used to extract data handling from the component definition

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
    const nId = Math.max(0, ...todos.map((t) => t.id + 1));
    setTodos([
      ...todos,
      { id: nId, title: title, completed: false },
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
  // ... (addTodo, deleteTodo, toggleTodo)
  function reload() {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((apiTodos) => {
        setTodos(apiTodos);
        setIsLoading(false);
      });
  }
  useEffect(reload, []);
  return {
    todos,
    isLoading,
    reload,
    addTodo,
    deleteTodo,
    toggleTodo,
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
    setInterval(() => {
      setDate(new Date());
    }, interval);
  }, []);
  return date;
};
```

## Custom hooks - useExchangerate

hook that provides the exchange rate for selected currencies

```js
function useExchangerate(from, to) {
  const [rate, setRate] = useState(null);
  const [status, setStatus] = useState('loading');
  useEffect(() => {
    setRate(null);
    setStatus('loading');
    fetch(
      'https://api.exchangeratesapi.io/latest?base=' +
        from.toUpperCase() +
        '&symbols=' +
        to.toUpperCase()
    )
      .then((res) => res.json())
      .then((data) => {
        setRate(data.rates[to.toUpperCase()]);
        setStatus('success');
      })
      .catch((error) => {
        setRate(null);
        setStatus('error');
      });
  }, [from, to]);
  return { status, rate };
}
```

## Custom hooks - useAuth

examples for hooks that handle authentication:

- https://usehooks.com/useAuth/
- https://medium.com/hackernoon/learn-react-hooks-by-building-an-auth-based-to-do-app-c2d143928b0b
