# Promises & Fetch

<!-- https://developers.google.com/web/fundamentals/primers/promises -->

## Promises & Fetch

Promises: one possibility to run code asynchronously in JavaScript

Fetch: modern way to do network requests in JavaScript, based on promises

## Promises - Basics

Promises can be used to handle one-off events

Promises allow the browser to _wait_ for an event - for example for the answer to a network request or data from an in-browser database

Waiting for events via promises is non-blocking, so other code may be executed in the meantime

## Promises vs callbacks

Promises are an alternative for callbacks; they both solve the same problem with a slightly different approach.

The following example shows a `getTodos` function which retrieves todos from a server. The todos are then passed to the `logTodos` function.

```js
// callback
getTodos(logTodos);
```

```js
// promise
getTodos().then(logTodos);
```

## Promises vs callbacks

One advantage of promises over callbacks is that promises can easily be chained:

```js
getTodos()
  .then(parseJSON)
  .then(transformDataFormat)
  .then(logTodos);
```

## Promise example: fetching a webpage (Browser)

This example can be executed in the browser console for any opened website

```js
// start a request to fetch the home page (/)
fetch('/')
  // wait for an answer, then request its text content
  .then(response => response.text())
  // log the text content
  .then(console.log);
```

Note: Fetches are usually only allowed within the current domain (same-origin policy).

## Promise example: fetching a webpage (node)

```bash
npm install node-fetch
```

```js
const fetch = require('node-fetch');

fetch('https://en.wikipedia.org')
  .then(response => response.text())
  .then(console.log);
```

## Promise example: fetching a webpage

Fetching a URL and reading the response text may both take some time.

By using `.then()` we can wait for their respective results.

The method `.then()` will receive another function which will act as a handler for the response.

The first handler (`response => response.text()`) will result in another Promise.

The second handler (`console.log`) will just log the results.

## Fetching JSON data

Call `.json()` instead of `.text()` to directly parse the JSON data:

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(reply => reply.json())
  .then(console.log);
```

## Using with async / await

Any promise can be used with async / await:

```js
const url = 'https://jsonplaceholder.typicode.com/todos';

const fetchAsync = async () => {
  const response = await fetch(url);
  const todos = await response.json();
  displayTodos(todos);
};

fetchAsync();
```

## Configuring fetch requests

```js
fetch(url, {
  method: 'POST',
  cache: 'no-cache',
  body: '{"text": "learn fetch"}',
  headers: { 'content-type': 'application/json' },
});
```

## Exercises

- todo API (https://jsonplaceholder.typicode.com)
- weather API (https://openweathermap.org)
- https://developers.google.com/web/ilt/pwa/lab-fetch-api
- https://developers.google.com/web/ilt/pwa/lab-promises
