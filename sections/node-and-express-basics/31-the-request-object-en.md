# The request object

## The request object

example of a request object:

```json
{
  "url": "/",
  "method": "GET",
  "headers": {
    "user-agent": "Mozilla/5.0 (Windows ..."
  }
}
```

class in plain node / _connect_: [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)

class in _express_: [Request](https://expressjs.com/de/api.html#req)

## The request object

exercise: create a website with different responses based on the requested URL
