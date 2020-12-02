# HTTP server frameworks

## HTTP server frameworks

- _connect_: middleware
- _express_: middleware, routing, view rendering

middleware: via `.use()`

routing: via `.get()`, `.post()`, ...

## Connect

```js
const connect = require('connect');
const http = require('http');
const bodyParser = require('body-parser');

// parse urlencoded request bodies into req.body
app.use(bodyParser.urlencoded());

// respond to all requests
app.use((req, res) => {
  res.end('Hello World!\n');
});

//create node.js http server and listen on port 3000
http.createServer(app).listen(3000);
```
