# Eigene Hooks

## Eigene Hooks

können verwendet werden, um bestimmte Aspekte aus der Komponentendefinition zu extrahieren

werden als Funktion definiert, die wiederum auf bestehende Hooks, wie `useState` oder `useEffect` zurückgreift

## Eigene Hooks - useTodos

Beispiel: `useTodos` - kann verwendet werden, um die Datenverwaltung von der Komponentendefinition loszulösen

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

## Eigene Hooks - useTodos

Definition von `useTodos`:

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

## Eigene Hooks - useTodos

`useTodos` mit API-Abfrage:

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

## Eigene Hooks - useExchangerate

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

## Eigene Hooks - useAuth

Beispiele für Hooks, die Authentifizierung behandeln:

- https://usehooks.com/useAuth/
- https://medium.com/hackernoon/learn-react-hooks-by-building-an-auth-based-to-do-app-c2d143928b0b
