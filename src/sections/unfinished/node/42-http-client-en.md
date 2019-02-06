# HTTP client

## retrieving a website

```js
const http = require('http');

http.get('http://www.google.com', responseStream => {
  responseStream.setEncoding('utf-8');
  responseStream.on('data', console.log);
  responseStream.on('error', console.error);
});
```

## using the request package

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

## exercise: retrieving multiple websites

see learnyounode: juggling async


