# Middleware

## Middleware

_middleware_ is available in _connect_ and in _express_

## Middleware

[list of available express middleware](https://expressjs.com/en/resources/middleware.html)

## Middleware

```js
import express from 'express';

// app is a request handler that can be extended
const app = express();

// parse urlencoded request bodies into req.body
app.use(express.urlencoded());
// parse JSON request bodies into req.body
app.use(express.json());

// respond to all requests
app.use((req, res) => {
  res.set({ 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

app.listen(3000);
```
