# Network requests in JavaScript

## Network requests in JavaScript

see also: [Promises, fetch and axios](./javascript-promises-fetch-and-axios-en.html)

## Network requests in JavaScript

asynchronous function that fetches todos from an API:

```js
// todosApi.js
async function fetchTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await fetch(url);
  const todos = await res.json();
  return todos;
}
```

## Network requests in JavaScript

loading todos in a React component - with `await`:

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

## Network requests in JavaScript

loading todos - with `.then`:

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

## Return values

note:

- `loadTodos` (implicitly) returns `undefined`
- `loadTodosAsync` returns a _promise_ that resolves to `undefined`

this difference will be important later

## Return values

We can create a regular `loadTodos` function based on `loadTodosAsync`:

```js
function loadTodos() {
  loadTodosAsync();
}
```

## Loading indicators

code for adding a loading indicator:

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
