# HTTP client

## Retrieving a website

Low-level functionality (separate TCP packages)

```js
const http = require('http');

http.get('http://www.google.com', responseStream => {
  responseStream.setEncoding('latin1');
  responseStream.on('data', console.log);
  responseStream.on('error', console.error);
});
```

## Exercise: retrieve the Google website and save chunks to a JSON array

## Using the request package

```bash
npm install request
```

```js
const request = require('request');

request('http://google.com', (error, response, body) => {
  console.log(response.statusCode);
  console.log(body);
});
```

## Exercise: retrieving multiple websites

see learnyounode: juggling async

## Exercise: number of Google search results
