# Promises & Fetch

---

## Promises & Fetch

Promises: one possibility to run code asynchronously in JavaScript

Fetch: modern way to do network requests in JavaScript, based on promises

---

## Promises - Basics

Promises can be used to handle one-off events

Promises allow the browser to _wait_ for an event - for example for the answer to a network request or data from an in-browser database

Waiting for events via promises is non-blocking, so other code may be executed in the meantime

---

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

---

## Promises vs callbacks

One advantage of promises over callbacks is that promises can easily be chained:

```js
getTodos()
  .then(parseJSON)
  .then(transformDataFormat)
  .then(logTodos);
```

---

## Promise example: fetching a webpage

```js
// this code can be executed in the browser console
// for any opened website
const url = '/';

fetch(url)
  .then(response => response.text())
  .then(console.log);
```

---

## Promise example: fetching a webpage

```js
// this code can be executed in the browser console
// for any opened website
const url = '/';

// start a request to the homepage of the website
fetch(url)
  // wait for the response, then read the text content of the response
  .then(response => response.text())
  // wait for the text content, then log it
  .then(console.log);
```

---

## Promise example: fetching a webpage

Fetching a URL and reading the response text may both take a little.

By using `.then()` we can wait for their respective results.

The method `.then()` will receive another function which will act as a handler for the response.

The first handler (`response => response.text()`) will result in another Promise.

The second handler (`console.log`) will just log the results.

---

## Exception handling in promises

Let's look at the previous code again:

```js
fetch('/')
  .then(response => response.text())
  .then(console.log);
```

We want to log two different errors:

- user is offline
- received non-text or empty reply

---

## Exception handling in promises

Our example:

```js
fetch('/')
  .then(response => response.text())
  .then(console.log);
```

---

## Exception handling in promises

```js
fetch('/')
  .then(response => response.text(), onOffline)
  .then(console.log, onNoText);
```

---

## Exception handling in promises

```js
fetch('/')
  .then(response => response.text())
  .then(console.log).
  .catch(onSomeError);
```

---

## Exception handling in promises

```js
return getImageName(country)
  .catch(getFallbackName)
  .then(fetchFlag)
  .then(processFlag)
  .then(appendFlag)
  .catch(logError);
```

---

## fetching todos - basic

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .catch(error => {
    console.log('error when getting todos');
  })
  .then(updatePageWithNewTodos);
```

---

## fetching todos - advanced

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(
    response => {
      if (!response.ok) {
        throw response.statusText;
      }
      return response.json();
    },
    error => {
      console.log('unable to retrieve data');
    }
  )
  .catch(error => console.log('unable to parse data'))
  .then(updatePageWithNewTodos);
```

---

## Exercise

Fetch all todos for a given user id

---

## Configuring fetch requests

```js
fetch(url, {
  method: 'POST',
  cache: 'no-cache',
  body: '{"text": "learn fetch"}',
  headers: { 'content-type': 'application/json' },
});
```

---

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

---

## Promise.all

```js
const promise1 = fetch('/users.json');
const promise2 = fetch('/articles.json');
Promise.all([promise1, promise2])
  .then(results => {
    console.log('all data has loaded');
  })
  .catch(error => {
    console.log(`one or more requests failed: ${error}`);
  });
```

---

## Exercises

- https://developers.google.com/web/ilt/pwa/lab-fetch-api

- https://developers.google.com/web/ilt/pwa/lab-promises

---
