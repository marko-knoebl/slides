# Custom hooks

## Custom hooks

Custom hooks can be defined as functions; they often use existing hooks, e.g. `useState` or `useEffect`

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
const useDate = interval => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, interval);
  }, []);
  return date;
};
```

## Custom hooks - useTodos

Example: `useTodos` - can be used to extract data handling from the component definition

```js
const TodoApp = () => {
  const todoCtrl = useTodos();
  return (
    <div>
      <h1>Todo</h1>
      <TodoList
        todos={todoCtrl.todos}
        isLoading={todoCtrl.isLoading}
        onReload={todoCtrl.reload}
        onToggle={todoCtrl.toggleTodo}
        onDelete={todoCtrl.deleteTodo}
      />
      <AddTodo onAdd={todoCtrl.addTodo} />
    </div>
  );
};
```

## Custom hooks - useTodos

implementation of `useTodos`:

```js
const useTodos = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(apiTodos => {
          dispatch({ type: 'setTodos', payload: apiTodos });
          setIsLoading(false);
        });
    }
  }, [isLoading]);
  return {
    todos: todos,
    isLoading: isLoading,
    reload: () => setIsLoading(true),
    addTodo: title =>
      dispatch({ type: 'addTodo', payload: title }),
    deleteTodo: id =>
      dispatch({ type: 'deleteTodo', payload: id }),
    toggleTodo: id =>
      dispatch({ type: 'toggleTodo', payload: id }),
  };
};
```

## Custom hooks - useAuth

examples for hooks that handle authentication:

- https://usehooks.com/useAuth/
- https://medium.com/hackernoon/learn-react-hooks-by-building-an-auth-based-to-do-app-c2d143928b0b

## Custom hooks - useJsonQuery

Example: `useJsonQuery` - enables querying for JSON data

```js
const TodoDemo = () => {
  const { data, error, isFetching } = useJsonQuery(
    'https://jsonplaceholder.typicode.com/todos'
  );
  if (error) return <div>Could not fetch data</div>;
  if (isFetching) return <div>Fetching...</div>;
  return (
    <div>
      {data.map(todo => (
        <div>{todo.title}</div>
      ))}
    </div>
  );
};
```

## Custom hooks - useJsonQuery

simple implementation:

```js
const useJsonQuery = url => {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    setError(false);
    fetch(url)
      .then(response => response.text())
      .then(responseText => {
        setData(responseText);
        setIsFetching(false);
      })
      .catch(() => setError(true));
  }, [url]);
  return { data, error, isFetching };
};
```
