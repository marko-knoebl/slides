# Netwerkanfragen in JavaScript

## Netzwerkanfragen in JavaScript

_Promises_: moderne Möglichkeit, asynchronen Code zu verwenden:

- Promises mit `async` / `await`
- Promises mit `.then()`

Senden von Netzwerkanfragen (basierend auf Promises):

- `fetch`

## Netzwerkanfragen in JavaScript

asynchrone Funktion, die Todos von einem API lädt:

```ts
// todosApi.ts
async function fetchTodos(): Promise<Array<Todo>> {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('could not fetch data from network');
  }
  const apiTodos: Array<any> = await res.json();
  // convert data format (don't include userId)
  const todos = apiTodos.map((todo) => ({
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
  }));
  return todos;
}
```

## Netzwerkanfragen in JavaScript

mögliche Hilfsfunktion zum Laden von JSON-Daten:

```ts
async function fetchJson(url): Promise<any> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res);
  }
  const data = await res.json();
  return data;
}
```
