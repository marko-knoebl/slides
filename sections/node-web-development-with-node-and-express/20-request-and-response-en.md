# Request and response

## Request and response

sending the same response to all requests:

```js
import express from 'express';

const app = express();

// provide a function that handles the request
// and sends a response
app.use((req, res) => {
  res.set({ 'Content-Type': 'text/plain' });
  res.send('Hello World\n');
});

// listen on localhost:3000
app.listen(3000);
```

## Request and response

basic example without _express_ (see https://nodejs.org/en/docs/guides/getting-started-guide/):

```js
import http from 'http';

const handler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
};

const server = http.createServer(handler);
server.listen(3000);
```

## Request and response

a request handler function receives two arguments:

- `req` - represents the incoming _request_ (class [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage) in node, subclass [Request](http://expressjs.com/en/4x/api.html#req) in express)
- `res` - respresents the _response_ that will be sent (class [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse) in node, subclass [Response](http://expressjs.com/en/4x/api.html#res) in express)

## Exercise

exercise: create a web app that displays the current time as plain text

## Exercise

solution:

```js
import express from 'express';

const app = express();

app.use((req, res) => {
  res.set({ 'Content-Type': 'text/plain' });
  res.send(new Date().toLocaleTimeString());
});

app.listen(3000);
```
