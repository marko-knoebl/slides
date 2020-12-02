# HTTP server with node

## Running an HTTP server with node

see https://nodejs.org/en/docs/guides/getting-started-guide/

## Running an HTTP server with node

```js
import http from 'http';

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

## HTTP server frameworks

- connect: middleware
- express: middleware, routing
