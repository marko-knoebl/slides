# Asynchronous functions

## Asynchronous functions

Functions that perform input / output functionality are often declared as asynchronous functions.

Asynchronous functions can run in parallel to other code: E.g. for loading multiple files over the network in parallel.

## Asynchronous functions

defining an asynchronous function:

```js
async function loadTodo(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const data = await res.json();
  return data;
}
```

## Asynchronous functions

run the asynchronous function in parallel multiple times (you can watch the requests in your browser console):

```js
for (let i = 0; i < 10; i++) {
  loadTodo(i);
}
```
