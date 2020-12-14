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
