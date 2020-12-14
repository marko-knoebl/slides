# Promises fortgeschritten

## Eigene Promises

Promise, die nach 1 Sekunde entweder mit hello antwortet oder nicht erfolgreich ist

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

Erstellen eines Promise, das resolved wird, wenn mehere asynchrone Tasks abgeschlossen sind:

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

Das erste erfolgreiche Promise als Resultat verwenden:

```js
const anyTodo = await Promise.race([
  fetchJson('https://jsonplaceholder.typicode.com/todos/1'),
  fetchJson('https://jsonplaceholder.typicode.com/todos/2'),
  fetchJson('https://jsonplaceholder.typicode.com/todos/3'),
]);
```
