# Eigene Hooks

## Eigene Hooks

Eigene hooks können als Funktionen definiert werden; sie nutzen intern oft vorhandene Hooks, z.B. `useState` oder `useEffect`

## Eigene Hooks - useDate

Beispiel: `useDate` - stellt hier die aktuelle Uhrzeit bereit und aktualisiert die Komponente alle 1000 Millisekunden

```js
const Clock = () => {
  const time = useDate(1000);
  return (
    <div>The time is: {time.toLocaleTimeString()}</div>
  );
};
```

## Eigene Hooks - useDate

Einfache Implementierung von `useDate`:

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

## Eigene Hooks - useTodos

Beispiel: `useTodos` - kann verwendet werden, um die Datenverwaltung von der Komponentendefinition loszulösen

```js
const TodoApp = () => {
  const {
    todos,
    reload,
    isLoading,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos();
  return (
    <div>
      <h1>Todo</h1>
      <TodoList
        todos={todos}
        isLoading={isLoading}
        onReload={reload}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <AddTodo onAdd={addTodo} />
    </div>
  );
};
```

## Eigene Hooks - useTodos

Implementierung von `useTodos`:

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

## Eigene Hooks - useJsonQuery

Beispiel: `useJsonQuery` - ermöglicht das Abrufen von JSON-Daten

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

## Eigene Hooks - useJsonQuery

einfache Implementierung:

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
