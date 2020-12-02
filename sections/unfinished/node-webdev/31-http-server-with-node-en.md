# HTTP server with node

## Running an HTTP server with node

see https://nodejs.org/en/docs/guides/getting-started-guide/

## Running an HTTP server with node

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
};

server = http.createServer(requestHandler);

server.listen(port, hostname);
```

## creating a time server

```js
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(new Date().toLocaleTimeString());
};

server = http.createServer(requestHandler);

server.listen(port, hostname);
```

## request handler

The request handler function receives two arguments which represent the request the server received and the response the server will send respectively.

They are instances of the classes `ServerResponse` and `IncomingMessage` respectively.

## ServerResponse

https://nodejs.org/api/http.html#http_class_http_serverresponse

## ServerResponse: write, end

```js
res.write('dice:\n');
res.write(Math.ceil(Math.random() * 6).toString() + '\n');
res.end();
```

or

```js
res.end(
  `dice:\n${Math.ceil(Math.random() * 6).toString()}\n`
);
```

## ServerResponse: statusCode, statusMessage

```js
res.statusCode = 404;
res.statusMessage = 'Not found';
```

## IncomingMessage

```js
req.method === 'GET';

req.url === '/';

const ua = req.headers['user-agent'];
```

## IncomingMessage: exercises

create a website with multiple views

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
