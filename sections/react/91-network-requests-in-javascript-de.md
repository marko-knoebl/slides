# Netzwerkabfragen in JavaScript

## Netzwerkabfragen in JavaScript

Siehe auch: [Promises, fetch und axios](./javascript-promises-fetch-and-axios-de.html)

## Netzwerkabfragen in JavaScript

Laden von Todos - mittels `await`:

```js
const [todos, setTodos] = useState([]);
async function loadTodosAsync() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await fetch(url);
  const todos = await res.json();
  setTodos(todos);
}
```

```jsx
<button onClick={loadTodosAsync}>
  load todos from API
</button>
```

## Netzwerkabfragen in JavaScript

Laden von Todos - mittels `.then`:

```js
const [todos, setTodos] = useState([]);
function loadTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  fetch(url)
    .then((res) => res.json())
    .then((todos) => {
      setTodos(todos);
    });
}
```

```jsx
<button onClick={loadTodos}>fetch todos from API</button>
```

## Rückgabewerte

Bemerkung:

- `loadTodos` gibt (implizit) `undefined` zurück
- `loadTodosAsync` gibt ein _promise_ zurück, das wiederum zu `undefined` aufgelöst wird

dieser Unterschied wird später wichtig sein

## Rückgabewerte

Wir können eine "normale" `loadTodos`-Funktion aus `loadTodosAsync` erstellen:

```js
function loadTodos() {
  loadTodosAsync();
}
```

## Ladeindikator

Code für das Hinzufügen eines Ladeindikators:

```js
const [todos, setTodos] = useState([]);
const [isLoading, setIsLoading] = useState(false);
async function loadTodosAsync() {
  setIsLoading(true);
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await fetch(url);
  const todos = await res.json();
  setTodos(todos);
  setIsLoading(false);
}
```
