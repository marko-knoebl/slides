# Custom hooks

## Custom hooks

Custom hooks can be defined as functions whose name starts with `use`

They will in turn rely on existing hooks, like `useState` or `useEffect`

## Custom hooks - useExchangeRate

use of a custom hook for loading exchange rates:

```js
function ExchangeRate() {
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('eur');

  const { status, rate } = useExchangeRate(from, to);

  // ...
}
```

## Custom hooks - useExchangeRate

definition of `useExchangeRate`:

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
  const todoData = useTodos();
  return (
    <div>
      <h1>Todos</h1>
      <AddTodo onAdd={todoData.addTodo} />
      <TodoList
        todos={todoData.todos}
        onChangeCompleted={todoData.setTodoCompleted}
        onDelete={todoData.deleteTodo}
      />
      <Statistics todos={todoData.todos} />
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
    const maxId = Math.max(0, ...todos.map((t) => t.id));
    setTodos([
      ...todos,
      { id: maxId + 1, title: title, completed: false },
    ]);
  }
  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }
  function setTodoCompleted(id, completed) {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: completed } : t
      )
    );
  }
  return { todos, addTodo, deleteTodo, setTodoCompleted };
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
function useDate(interval) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, interval);
    return () => clearInterval(id);
  }, []);
  return date;
}
```
