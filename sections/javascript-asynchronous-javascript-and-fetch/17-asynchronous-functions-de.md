# Asynchrone Funktionen

## Asynchrone Funktionen

Funktionen, die Input- / Output-Funktinalität beinhalten, werden oft als asynchrone Funktionen definiert.

Asynchrone Funktionen können parallel zu anderem Code ausgeführt werden - z.B. um mehrere Dateien parallel über das Netzwerk zu laden

## Asynchrone Funktionen

Definieren einer asynchronen Funktion:

```js
async function loadTodo(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const data = await res.json();
  return data;
}
```

## Asynchrone Funktionen

die asynchrone Funktion mehrfach parallel ausführen (Requests können in den Browser Devtools beobachtet werden)

```js
for (let i = 0; i < 10; i++) {
  loadTodo(i);
}
```
