# Testing APIs

## Testing APIs

APIs are not as strightforward to test as scripts or UIs

ways to test an API:

- use an application like _postman_ to send HTTP requests and inspect the responses
- write automated tests

## Automated tests

simple test without any extra tools:

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

## Automated tests

test with node's built-in testing tools:

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
