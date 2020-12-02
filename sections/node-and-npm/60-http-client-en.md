# HTTP client

## Retrieving a website

Low-level functionality (separate TCP packages)

```js
import http from 'http';

http.get('http://www.google.com', (responseStream) => {
  responseStream.setEncoding('latin1');
  responseStream.on('data', console.log);
  responseStream.on('error', console.error);
});
```

## Exercise

exercise: retrieve the Google website and save chunks to a JSON array

## Libraries

libraries for HTTP calls:

- fetch libraries (_node-fetch_, _isomorphic-fetch_)
- axios

## Node-fetch

```bash
npm install node-fetch
```

```js
import fetch from 'node-fetch';

fetch('https://google.com')
  .then((res) => res.text())
  .then((content) => console.log(content));
```

## Exercises

- retrieve multiple websites (see learnyounode: juggling async)
- number of Google search results for some specific topic
