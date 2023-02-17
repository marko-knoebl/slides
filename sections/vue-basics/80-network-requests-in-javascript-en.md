# Network requests in JavaScript

## Network requests in JavaScript

_promises_: modern way of handling asynchronous code:

- promises and `async` / `await`
- promises and `.then()`

modern ways of sending network requests:

- `fetch()` (included in browsers)
- _axios_ (library)

## Network requests in JavaScript

asynchronous function that fetches todos from an API:

```ts
// todosApi.ts
async function fetchTodos(): Promise<Array<Todo>> {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await fetch(url);
  const apiTodos = await res.json();
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

asynchronous function that fetches an exchange rate from an API:

```ts
async function fetchExchangeRate(
  from: string,
  to: string
): Promise<number> {
  const res = await fetch(
    `https://api.exchangerate.host/convert?from=${from}&to=${to}`
  );
  const data = await res.json();
  return data.result;
}
```
