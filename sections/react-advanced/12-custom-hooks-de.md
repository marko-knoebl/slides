# Eigene Hooks

## Eigene Hooks

können verwendet werden, um bestimmte Aspekte aus der Komponentendefinition zu extrahieren

werden als Funktionen definiert, die wiederum auf bestehende Hooks, wie `useState` oder `useEffect` zurückgreifen

## Eigene Hooks - useTodos

Beispiel: `useTodos` - kann verwendet werden, um die Datenverwaltung von der Komponentendefinition loszulösen (Trennung von _model_ und _view_)

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

## Eigene Hooks - useTodos

`useTodos` mit API-Abfrage:

```js
function useTodos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function reload() {
    setIsLoading(true);
    fetchTodos().then((todos) => {
      setTodos(todos);
      setIsLoading(false);
    });
  }
  useEffect(reload, []);
  // ... (addTodo, deleteTodo, toggleTodo)
  return {
    todos,
    isLoading,
    reload,
    // ... (addTodo, deleteTodo, toggleTodo)
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
  function loadExchangeRate() {
    loadExchangeRateAsync();
  }
  useEffect(loadExchangeRate, [from, to]);
  return { status, rate };
}
```

## Eigene Hooks - useExchangerate

```js
async function fetchExchangeRate(from, to) {
  const res = await fetch(
    'https://api.exchangeratesapi.io/latest?base=' +
      from.toUpperCase() +
      '&symbols=' +
      to.toUpperCase()
  );
  const data = await res.json();
  return data.rates[to.toUpperCase()];
}
```

## Eigene Hooks - Übung

Erstellen eines `useWeather`-Hooks zum Abfragen von Wetterdaten - zusammen mit einem zugehörigen Context, der die Daten Anwendungsweit cached

```js
const { weather, status, reload } = useWeather('vienna', {
  autoReloadInterval: 60,
});
```

Für die Datenquelle siehe nächste Slide

## Eigene Hooks - Übung

OpenWeatherMap-API

Beispiel-URL: <http://api.openweathermap.org/data/2.5/weather?appid=66445a4269dd911a5bbe214fadb768d6&units=metric&q=vienna>

(bitte diese appid / API-Key nur für einfache Übungen verwenden)

Einträge in den API-Daten:

- `.weather[0].main` (z.B. _Rain_)
- `.main.temp` (z.B. 24.5)
- `.wind.speed` (z.B. 2.5)
- `.name` (z.B. _Vienna_)
