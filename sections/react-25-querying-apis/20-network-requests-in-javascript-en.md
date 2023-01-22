# Network requests in JavaScript

## Network requests in JavaScript

_promises_: modern way of handling asynchronous code:

- promises and `async` / `await`
- promises and `.then()`

sending network requests (based on promises):

- `fetch`

## Network requests in JavaScript

asynchronous function that fetches todos from an API:

```ts
// todosApi.ts
async function fetchTodos(): Promise<Array<Todo>> {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('could not fetch data from network');
  }
  const apiTodos: Array<any> = await res.json();
  // convert data format (don't include userId)
  const todos = apiTodos.map((todo) => ({
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
  }));
  return todos;
}
```

## Network requests in JavaScript

possible helper function for fetching JSON data:

```ts
async function fetchJson(url): Promise<any> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res);
  }
  const data = await res.json();
  return data;
}
```
