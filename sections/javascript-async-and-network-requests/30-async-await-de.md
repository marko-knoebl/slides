# Async & await

## Async & await

Einfachere Erstellung / Verwendung von Promises - seit ES2017

Anstatt von `.then` können wir `await` verwenden

Anstatt von `new Promise(...)` können wir `async` verwenden

## Await

Promises & then

```js
fetch('https://en.wikipedia.org')
  .then(response => response.text())
  .then(console.log);
```

Promises & await (siehe nächste Slide bezüglich Browserkompatibilität)

```js
const response = await fetch('https://en.wikipedia.org');
const content = await response.text();
console.log(content);
```

## Await

Im offiziellen ES Standard sind top-level `await` Statements noch nicht enthalten - sie sind aber in Chrome verfügbar.

Gültiges ES 2019:

```js
async function fetchWikipedia() {
  const response = await fetch('https://en.wikipedia.org');
  const content = await response.text();
  console.log(content);
}

fetchWikipedia();
```

## Async & await

Beispiel: fetchen des ersten nicht erledigten Todos:

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
