# HTTP server mit node

## Betreiben eines HTTP-Servers mit node

```js
import http from 'http';

const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
};

const server = http.createServer(requestHandler);

server.listen({ port: 3000 });
```

(siehe https://nodejs.org/en/docs/guides/getting-started-guide/)

## HTTP Server frameworks

- connect: Middleware
- express: Middleware, Routing
