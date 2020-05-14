# JavaScript: Async and network requests

# Overview

## Overview

common methods for handling asynchronous logic:

- callbacks
- promises (modern approach)

## Overview

possibilities for making network requests:

- **fetch** (promises)
- **axios** (promises)
- jQuery
- XMLHttpRequest

## Overview

requests with axios (promise) and jQuery (callback):

```js
const url = 'https://jsonplaceholder.typicode.com/todos';

axios(url).then((res) => console.log(res.data));

jquery.getJSON(url, (data) => console.log(data));
```

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

- todo API (<https://jsonplaceholder.typicode.com>)
- weather API (<https://openweathermap.org>)
- <https://developers.google.com/web/ilt/pwa/lab-fetch-api>
- <https://developers.google.com/web/ilt/pwa/lab-promises>

# Async & await

## Async & await

Simpler usage / creation of promises - since ES2017

Instead of `.then` we can use `await`

Instead of `new Promise(...)` we can use `async`

## Await

Promises & then

```js
fetch('https://en.wikipedia.org')
  .then(response => response.text())
  .then(console.log);
```

Promises & await (see next slide for browser compatibility)

```js
const response = await fetch('https://en.wikipedia.org');
const content = await response.text();
console.log(content);
```

## Await

Top-level `await` statements are not part of ES yet - but they are available in Chrome.

Valid in ES2019:

```js
async function fetchWikipedia() {
  const response = await fetch('https://en.wikipedia.org');
  const content = await response.text();
  console.log(content);
}

fetchWikipedia();
```

## Async & await

Example: fetching the first incomplete todo:

```js
async function logFirstIncompleteTodo() {
  let i = 1;
  while (true) {
    const reply = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${i}`
    );
    const todoData = await reply.json();
    if (todoData.completed) {
      i++;
    } else {
      console.log(todoData);
      break;
    }
  }
}

logFirstIncompleteTodo();
```

# Fetch - Error handling

## Error handling

```js
fetch('/')
  .then(response => response.text())
  .then(console.log);
```

Various errors may occur here:

- browser is offline (no reply)
- server responds with a 404 or similar
- received non-text or empty reply

## Error handling: basic version

```js
fetch('/')
  .then(response => response.text())
  .catch(() => console.log('some error occured'))
  .then(console.log);
```

## Error handling: checking status

By default a reply with an error code (e.g. 404 or 500) is considered a success.

```js
fetch('/')
  .then(response => {
    if (response.ok) {
      handleReply(response);
    } else {
      console.log('Network response was not ok');
    }
  })
  .catch(() => {
    console.log('Network error');
  });
```

## Error handling: checking status

```js
const handleReply = response => {
  response
    .json()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log('Could not parse answer as json');
    });
};
```

## Example: fetching todos - basic

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .catch(error => {
    console.log('error when getting todos');
  })
  .then(updatePageWithNewTodos);
```

## Example: fetching todos - advanced

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    if (!response.ok) {
      throw response.statusText;
    } else {
      jesponse.json().then(updatePageWithNewTodos);
    }
  })
  .catch(error => console.log('unable to parse data'))
  .then(updatePageWithNewTodos);
```

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

## Promise.race

Use the first successful promise as the result

# Axios

## Axios

widely used library that provides more functionality / a simpler interface than `fetch`

## Axios

Fetching JSON data:

```js
import axios from 'axios';

axios(
  'https://jsonplaceholder.typicode.com/todos'
).then(res => console.log(res.data));
```

## Status codes in Axios

default behavior:

- status codes in the 200 range: successful promise resolution
- status codes in 400 and 500 ranges: promise rejection

# Fetch & axios: examples

## Fetching JSON data

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => console.log(data));
```

<!-- prettier-ignore -->

```js
import axios from 'axios';

axios('https://jsonplaceholder.typice.com/todos')
  .then(res => console.log(res.data));
```

## Fetching text content

```js
fetch('https://www.w3.org')
  .then(res => res.text())
  .then(content => console.log(content));
```

<!-- prettier-ignore -->

```js
axios('https://www.w3.org', { responseType: 'text' })
  .then(content => console.log(content));
```

Warning: By default axios will at least _try_ to parse as JSON

## Posting data

```js
fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'post',
  body: '{"title": "xyz"}',
  headers: { 'Content-Type': 'application/json' },
});
```

```js
axios.post(
  'https://jsonplaceholder.typicode.com/todos',
  '{"title": "xyz"}',
  { headers: { 'Content-Type': 'application/json' } }
);
```

## Querying a GraphQL API

```js
const query = '{pokemon(name: "Pikachu") {number name}}';
const body = JSON.stringify({ query: query });

fetch('https://graphql-pokemon.now.sh', {
  method: 'post',
  body: body,
  headers: { 'Content-Type': 'application/json' },
})
  .then(res => res.json())
  .then(data => console.log(data.data));
```

## Querying a GraphQL API

```js
const query = '{pokemon(name: "Pikachu") {number name}}';
const body = JSON.stringify({ query: query });

axios
  .post('https://graphql-pokemon.now.sh', body, {
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => console.log(res.data.data));
```

# Axios advanced

## Global defaults

examples:

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
```

## Custom instances & defaults

```js
const todosAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
  timeout: 2000,
});

todosAxios.get('/').then(console.log);
todosAxios.get('/1').then(console.log);
```

## Interceptors

**Interceptors** may be added to the configuration; they are called automatically on either requests or responses and can contain additional logic to modify them

```js
const requestLogger = requestConfig => {
  console.log('sending request', requestConfig);
  return requestConfig;
};
todosAxios.interceptors.request.use(requestLogger);
```

```js
const responseLogger = response => {
  console.log('received response', response);
  return response;
};
todosAxios.interceptors.request.use(responseLogger);
```
