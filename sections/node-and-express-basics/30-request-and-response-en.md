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

- `req` - represents the incoming _request_
- `res` - represents the _response_ that we will send

## The request object

example for a request object:

```json
{
  "method": "GET",
  "path": "/products/123",
  "params": { "id": "123" },
  "headers": { "user-agent": "Mozilla/5.0 (Windows ..." }
}
```

class in plain node: [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)

class in _express_: [Request](https://expressjs.com/en/5x/api.html#req)

## The response object

class in plain node / _connect_: [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)

subclass in _express_: [Response](http://expressjs.com/en/5x/api.html#res)
