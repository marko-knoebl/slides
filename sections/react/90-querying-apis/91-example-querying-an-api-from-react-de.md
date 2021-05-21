# Beispiel: Abfragen eines APIs aus React

## Beispiel: Abfragen eines APIs aus React

Laden von Todos in einer React-Komponente:

```js
const [todos, setTodos] = useState([]);
async function loadTodos() {
  const todos = await fetchTodos();
  setTodos(todos);
}
```

```jsx
<button
  onClick={() => {
    loadTodos();
  }}
>
  load todos from API
</button>
```

## Beispiel: Abfragen eines APIs aus React

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
