# Fetch & axios: Beispiele

## Laden von JSON-Daten

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => console.log(data));
```

<!-- prettier-ignore -->
```js
import axios from 'axios';

axios('https://jsonplaceholder.typice.com/todos')
  .then(res => console.log(res.data));
```

## Laden von Textinhalten

```js
fetch('https://www.w3.org')
  .then(res => res.text())
  .then(content => console.log(content));
```

<!-- prettier-ignore -->
```js
axios('https://www.w3.org', { responseType: 'text' })
  .then(content => console.log(content));
```

Achtung: Standardmäßig versucht axios zumindest, den Inhalt als JSON zu parsen

## Daten posten

```js
fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'post',
  body: '{"title": "xyz"}',
  headers: { 'Content-Type': 'application/json' },
});
```

```js
axios.post(
  'https://jsonplaceholder.typicode.com/todos',
  '{"title": "xyz"}',
  { headers: { 'Content-Type': 'application/json' } }
);
```

## Abfrage eines GraphQL APIs

```js
const query = '{pokemon(name: "Pikachu") {number name}}';
const body = JSON.stringify({ query: query });

fetch('https://graphql-pokemon.now.sh', {
  method: 'post',
  body: body,
  headers: { 'Content-Type': 'application/json' },
})
  .then(res => res.json())
  .then(data => console.log(data.data));
```

## Abfrage eines GraphQL APIs

```js
const query = '{pokemon(name: "Pikachu") {number name}}';
const body = JSON.stringify({ query: query });

axios
  .post('https://graphql-pokemon.now.sh', body, {
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => console.log(res.data.data));
```
