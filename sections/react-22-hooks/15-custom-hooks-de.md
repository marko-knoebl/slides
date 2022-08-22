# Eigene Hooks

## Eigene Hooks

Eigene Hooks können als Funktionen definiert werden, deren Name mit `use` beginnt

Eigene Hooks greifen wiederum auf bestehende Hooks, wie `useState` oder `useEffect` zurück

## Eigene Hooks - useExchangeRate

verwendung eines eigenen Hooks zum Laden von Wechselkusdaten:

```js
function ExchangeRate() {
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('eur');

  const { status, rate } = useExchangeRate(from, to);

  // ...
}
```

## Eigene Hooks - useExchangeRate

Definition von `useExchangeRate`:

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

## Eigene Hooks - useTodos

Beispiel: `useTodos` - kann verwendet werden, um die Datenverwaltung von der Komponentendefinition loszulösen (Trennung von _model_ und _view_)

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

## Eigene Hooks - useTodos

Definition von `useTodos`:

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
