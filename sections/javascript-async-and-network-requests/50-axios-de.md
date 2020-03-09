# Axios

## Axios

verbreitete Library mit mehr Funktionalität / einfacherem Interface als `fetch`

## Axios

JSON Daten laden:

```js
import axios from 'axios';

axios(
  'https://jsonplaceholder.typicode.com/todos'
).then(res => console.log(res.data));
```

## Status Codes in Axios

Standardverhalten:

- Status Codes im 200er-Bereich: Erfolgreiches Promise
- Status Codes im 400er- und 500er-Bereich: Promise wird zurückgewiesen
