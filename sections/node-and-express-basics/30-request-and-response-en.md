# Request and response

## Request and response

web development in node is based on request handler functions, e.g.:

```js
(req, res) => {
  res.send('<h1>Hello World!</h1>\n');
};
```

## Request and response

a request handler function receives two arguments:

- `req` - represents the incoming _request_ (class [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage) in node, subclass [Request](http://expressjs.com/en/4x/api.html#req) in express)
- `res` - respresents the _response_ that will be sent (class [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse) in node, subclass [Response](http://expressjs.com/en/4x/api.html#res) in express)

## Exercise

exercise: create a web app that displays the current time

## Exercise

solution:

```js
import express from 'express';

const app = express();

app.use((req, res) => {
  const timeString = new Date().toTimeString();
  res.send('<h1>current time: ' + timeString + '</h1>');
});

app.listen(3000);
```
