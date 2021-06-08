# Custom hooks

## Custom hooks

Custom hooks can be used to extract logic from function components

They are functions which in turn use existing hooks like `useState` or `useEffect`

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
    setInterval(() => {
      setDate(new Date());
    }, interval);
  }, []);
  return date;
};
```

## Custom hooks - exercise

Create a hook named `useWeather` that can be used to query Weather data - together with an associated context that enables application-wide caching of the data

```js
const { weather, status, reload } = useWeather('vienna', {
  autoReloadInterval: 60,
});
```

For the data source (API) see the next slide

## Custom hooks - exercise

OpenWeatherMap-API

example URL: <http://api.openweathermap.org/data/2.5/weather?appid=66445a4269dd911a5bbe214fadb768d6&units=metric&q=vienna>

(please only use this appid / API key for simple exercises)

entries in the API data:

- `.weather[0].main` (e.g. _Rain_)
- `.main.temp` (e.g. 24.5)
- `.wind.speed` (e.g. 2.5)
- `.name` (e.g. _Vienna_)
