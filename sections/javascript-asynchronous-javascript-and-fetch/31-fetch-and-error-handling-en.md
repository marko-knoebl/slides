# Fetch and error handling

## Error handling

various errors may occur when fetching data:

- browser is offline (no reply)
- server responds with a 404 or similar
- receives non-text or empty reply

## Error handling: checking status

by default a reply with an error code (e.g. 404 or 500) is considered a success

```js
async function fetchTodos () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const todos = await res.json();
  return todos;
};
```
