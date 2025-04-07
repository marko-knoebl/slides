# HTTP server with node

## Running an HTTP server with node

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

(see https://nodejs.org/en/docs/guides/getting-started-guide/)

## HTTP server frameworks

- connect: middleware
- express: middleware, routing
