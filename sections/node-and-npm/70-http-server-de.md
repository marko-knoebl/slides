# HTTP server

## Betreiben eines HTTP-Servers mit node

siehe https://nodejs.org/en/docs/guides/getting-started-guide/

## Betreiben eines HTTP-Servers mit node

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

- connect: Middleware
- express: Middleware, Routing
