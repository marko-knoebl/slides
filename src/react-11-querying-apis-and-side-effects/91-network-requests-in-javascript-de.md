# Netzwerkanfragen in JavaScript

## Netzwerkanfragen in JavaScript

Siehe auch: [Promises, fetch und axios](./javascript-promises-fetch-and-axios-de.html)

## Netzwerkanfragen in JavaScript

asynchrone Funktion, die Todos von einem API lädt:

```js
// todosApi.js
async function fetchTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await fetch(url);
  const todos = await res.json();
  return todos;
}
```

## Netzwerkanfragen in JavaScript

Laden von Todos in einer React-Komponente - mittels `await`:

```js
const [todos, setTodos] = useState([]);
async function loadTodosAsync() {
  const todos = await fetchTodos();
  setTodos(todos);
}
```

```jsx
<button onClick={loadTodosAsync}>
  load todos from API
</button>
```

## Netzwerkanfragen in JavaScript

Laden von Todos - mittels `.then`:

```js
const [todos, setTodos] = useState([]);
function loadTodos() {
  fetchTodos().then((todos) => {
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
  const todos = await fetchTodos();
  setTodos(todos);
  setIsLoading(false);
}
```
