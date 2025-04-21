# Testen von APIs

## Testen von APIs

APIs sind nicht so einfach zu testen wie Scripts oder UIs

Möglichkeiten, ein API zu testen:

- Anwendungen wie _Postman_, mit denen HTTP Requests gesendet und Responses begutachtet werden können
- Schreiben von automatisierten Tests

## Automatisierte Tests

Einfacher Test ohne zusätzliche Tools:

```js
async function testGetTodos() {
  console.log('/todos: returns an array of 200 todos');
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  const data = await res.json();
  if (data.length !== 200) {
    console.log('FAILED');
  }
}
await testGetTodos();
```

## Automatisierte Tests

Test mit nodes eingebauten Test-Tools:

```js
import { test } from 'node:test';
import assert from 'node:assert';

test('/todos: returns an array of 200 todos', async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  const data = await res.json();
  assert.strictEqual(data.length, 200);
});
```
