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
