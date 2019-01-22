## Fetch

<!-- siehe auch: pwa/promises -->

---

## Fetch

moderne Möglichkeit, um asynchron Daten vom Server zu laden

Alternative zu XMLHTTPRequest

---

## Nutzung mit Promises

```js
const url = 'index.html';

fetch(url)
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    console.log(text);
  });
```

```js
const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(todos) {
    console.log(todos);
  });
```

---

## Nutzung mit async / await (moderne Browser)

```js
const url = 'https://jsonplaceholder.typicode.com/todos';

const fetchAsync = async () => {
  let response = await fetch(url);
  let todos = await response.json();
  displayTodos(todos);
};

fetchAsync();
```

---

## Andere http-Methoden

```js
fetch(url, {
  method: 'POST',
  cache: 'no-cache',
  body: '{"text": "learn fetch"}',
  headers: { 'content-type': 'application/json' },
});
```

---

## Beispiele

- Todo-API (https://jsonplaceholder.typicode.com)
- Wetter-API (https://openweathermap.org)
