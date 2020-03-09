# Axios

## Axios

widely used library that provides more functionality / a simpler interface than `fetch`

## Axios

Fetching JSON data:

```js
import axios from 'axios';

axios(
  'https://jsonplaceholder.typicode.com/todos'
).then(res => console.log(res.data));
```

## Status codes in Axios

default behavior:

- status codes in the 200 range: successful promise resolution
- status codes in 400 and 500 ranges: promise rejection
