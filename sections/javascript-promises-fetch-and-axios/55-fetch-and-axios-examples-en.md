# Fetch and axios: examples

## Fetching JSON data

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

## Fetching text content

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

Warning: By default axios will at least _try_ to parse as JSON

## Posting data

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

## Querying a GraphQL API

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

## Querying a GraphQL API

```js
const query = '{pokemon(name: "Pikachu") {number name}}';
const body = JSON.stringify({ query: query });

axios
  .post('https://graphql-pokemon.now.sh', body, {
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => console.log(res.data.data));
```
