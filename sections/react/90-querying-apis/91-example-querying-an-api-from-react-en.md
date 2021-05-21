# Example: querying an API from React

## Example: querying an API from React

loading todos in a React component:

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

## Example: querying an API from React

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
