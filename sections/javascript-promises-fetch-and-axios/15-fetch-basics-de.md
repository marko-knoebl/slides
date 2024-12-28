# Fetch Grundlagen

## Fetch Grundlagen

Beispiel, das in der Browserkonsole ausgeführt werden kann:

```js
// request a URL and wait for the response header
res = await fetch(
  'https://jsonplaceholder.typicode.com/todos'
);

// wait for the response body and read it as JSON data
content = await res.json();

console.log(content);
```

## Fetch Grundlagen

example that can be executed in the browser console with any open website:

```js
// request the current URL
res = await fetch('/');

// wait for the response body and read its text content
content = await res.text();

console.log(content);
```
