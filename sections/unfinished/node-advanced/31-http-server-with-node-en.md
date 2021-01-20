# HTTP server with node

## piping a file directly to the response

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(`.${req.url}`).pipe(res);
});

server.listen(3000);
```

## Transforming an incoming stream: uppercasing

```js
const Transform = require('stream').Transform;
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  const transformStream = new Transform({
    transform: (chunk, encoding, callback) => {
      callback(null, chunk.toString().toUpperCase());
    },
  });
  req.pipe(transformStream).pipe(res);
});

server.listen(3000);
```
