# Fetch und Fehlerbehandlung

## Fehlerbehandlung

Verschiedene Fehler können beim Fetch auftreten:

- Browser ist offline (keine Antwort)
- Server antwortet mit 404 oder ähnlicher Meldung
- Antwort ist leer oder beinhaltet etwas anderes als text

## Fehlerbehandlung

Abfangen von möglichen Fehlern:

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

## Fehlerbehandlung: Überprüfen des Status

Standardmäßig wird eine Antwort mit einem Fehlercode (z.B. 404 oder 500) auch als Erfolg angesehen.

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
