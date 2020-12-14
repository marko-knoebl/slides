# Axios

## Axios

verbreitete Library mit mehr Funktionalität / einfacherem Interface als `fetch`

## Axios

JSON Daten laden:

```js
const todos = await axios(
  'https://jsonplaceholder.typicode.com/todos'
);
```

## Status Codes in Axios

Standardverhalten:

- Status Codes im 200er-Bereich: Erfolgreiches Promise
- Status Codes im 400er- und 500er-Bereich: Promise wird zurückgewiesen
