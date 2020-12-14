# JavaScript: Promises, fetch and axios

# Asynchronous JavaScript

## Asynchronous JavaScript

some tasks in JavaScript may be scheduled to run in parallel (in particular tasks related to input/output):

- network requests
- reading / writing files in node.js
- timers
- ...

## Tools for asynchronous JavaScript

- **callbacks, promises, async / await**: for parallelized input/output
- _(web) workers_: for parallelized CPU-intense tasks (JavaScript code actually runs in parallel)

## Asynchronous JavaScript

- _callbacks_: traditional way to handle asynchronous requests
- **promises and .then()**
- **promises and async / await**

## Asynchronous JavaScript

possibilities for making network requests:

- **fetch** (promises)
- **axios** (promises)
- jQuery
- XMLHttpRequest

## Asynchronous JavaScript

examples: requests with _axios (await)_, _axios (then)_ and _jQuery (callback)_:

```js
const res = await axios(url);
console.log(res.data);
```

```js
axios(url).then((res) => console.log(res.data));
```

```
jquery.getJSON(url, (data) => console.log(data));
```

# Promises and fetch

## Promises

Promise: representation of a future result that is not available immediately

## Promises

real-world example:

You place an order at a fast food restaurant. The cashier hands you this receipt:

```txt
order #42:

- cheeseburger
- small fries

The order will be served to you at your seat when ready.
```

the receipt is a "promise" - a representation of a future result

## Promises

waiting for a promise is non-blocking: other code may be executed while waiting for the result

## Promises

waiting for a promise to _resolve_:

- `.then()`
- `await`

## Example: fetching a web page

```js
// request the home page (/)
fetch('/')
  // wait for a response, then request its text content
  .then((res) => res.text())
  // wait for the text content, then log it
  .then((content) => console.log(content));
```

may be executed in the browser console for any open website

## Example: fetching a web page

Fetching a URL and reading the response text may both take some time.

By using `.then()` we can wait for their respective results.

The method `.then()` will receive another function which will act as a handler for the response.

The first handler (`(res) => res.text()`) will result in another Promise.

The second handler (`(content) => console.log(content)`) will log the results.

## Promises and fetch

example: fetching JSON data - two functions that return promises

```js
const fetchTodos = () => {
  return fetch(
    'https://jsonplaceholder.typicode.com/todos'
  ).then((res) => res.json());
};
```

```js
const fetchTodos = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  const todos = await res.json();
  return todos;
};
```

## Promises and fetch

As per the current ES standard, an `await` statement always has to be inside an `async` function

state of "top level await" (await outside of async functions):

- [ES proposal at stage 3 of 4](https://github.com/tc39/proposal-top-level-await)
- supported in Chrome
- supported in _node.js_ since version 14.8

# Then vs. await

## Then vs. await

advantages of `await`:

- code resembles "synchronous" code
- error handling is more straightforward

advantages of `.then`:

- simpler parallel requests
- does not have to be inside an async function

<!--
use case for await:

async function getFirstIncompleteTodo() {
  let i = 1;
  while (true) {
    const reply = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${i}`
    );
    const todoData = await reply.json();
    if (todoData.completed) {
      i++;
    } else {
      return todoData;
    }
  }
}
-->

# Fetch options

## Fetch options

```js
fetch(url, {
  method: 'POST',
  cache: 'no-cache',
  body: '{"text": "learn fetch"}',
  headers: { 'content-type': 'application/json' },
});
```

# Fetch and error handling

## Error handling

various errors may occur when fetching data:

- browser is offline (no reply)
- server responds with a 404 or similar
- receives non-text or empty reply

## Error handling

catching any errors that might have occured:

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

## Error handling: checking status

by default a reply with an error code (e.g. 404 or 500) is considered a success

```js
const fetchTodos = async () => {
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

# Exercises

## Exercises

- todo API (<https://jsonplaceholder.typicode.com>)
- weather API (<https://openweathermap.org>)
- <https://developers.google.com/web/ilt/pwa/lab-fetch-api>
- <https://developers.google.com/web/ilt/pwa/lab-promises>

# Axios

## Axios

widely used library that provides more functionality / a simpler interface than `fetch`

## Axios

Fetching JSON data:

```js
const todos = await axios(
  'https://jsonplaceholder.typicode.com/todos'
);
```

## Status codes in Axios

default behavior:

- status codes in the 200 range: successful promise resolution
- status codes in 400 and 500 ranges: promise rejection

# Fetch and axios: examples

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
