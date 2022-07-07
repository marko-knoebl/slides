# Netwerkanfragen in JavaScript

## Netzwerkanfragen in JavaScript

_Promises_: moderne Möglichkeit, asynchronen Code zu verwenden:

- Promises mit `async` / `await`
- Promises mit `.then()`

moderne Möglichkeiten, um Netzwerkanfragen zu senden (basierend auf Promises):

- `fetch()` (in Browsern inkludiert)
- _axios_ (library)

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

Asynchrone Funktion, die Wechselkursdaten von einem API lädt:

```ts
async function fetchExchangeRate(
  from: string,
  to: string
): Promise<number> {
  const res = await fetch(
    'https://api.exchangerate.host/latest?base=' +
      from.toUpperCase() +
      '&symbols=' +
      to.toUpperCase()
  );
  if (!res.ok) {
    throw new Error('could not fetch data from network');
  }
  const data = await res.json();
  return data.rates[to.toUpperCase()];
}
```
