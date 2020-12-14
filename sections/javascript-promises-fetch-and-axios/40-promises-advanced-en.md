# Promises advanced

## Creating custom promises

A promise that, after 1 second, either results in the string `'hello'` or fails

```js
const getReply = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('hello');
    } else {
      reject('no access');
    }
  }, 1000);
});
```

## Promise.all

Creating a promise that resolves when multiple asynchronous tasks have been completed:

```js
const fetchJson = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const [users, todos] = await Promise.all([
  fetchJson('https://jsonplaceholder.typicode.com/users'),
  fetchJson('https://jsonplaceholder.typicode.com/todos'),
]);
```

## Promise.race

Use the first successful promise as the result:

```js
const anyTodo = await Promise.race([
  fetchJson('https://jsonplaceholder.typicode.com/todos/1'),
  fetchJson('https://jsonplaceholder.typicode.com/todos/2'),
  fetchJson('https://jsonplaceholder.typicode.com/todos/3'),
]);
```
