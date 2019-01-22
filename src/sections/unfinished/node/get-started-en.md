class: center, middle

# node.js basics

---

# running code

---

# running code on the command line

```bash
node hello.js
```

---

# running code in VS Code

debugging: `F5`

without debugging: `Ctrl + F5`

choose node as an environment in the debugger pane

---

# configuration file (launch.json)

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug file",
  "program": "${file}"
}
```

---

# importing modules

modules can be imported via `require`:

```js
const fs = require('fs');

const folderContents = fs.readdirSync('.');

console.log(folderContents);
```

---

# running an HTTP server with node

see https://nodejs.org/en/docs/guides/getting-started-guide/

---

# running an HTTP server with node

```js
const http = require('http');

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

---

# creating a time server

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(new Date().toISOString());
};

server = http.createServer(requestHandler);

server.listen(port, hostname);
```

---

# request handler

The request handler function receives two arguments which represent the request the server received and the response the server will send respectively.

They are instances of th classes `ServerResponse` and `IncomingMessage`.

---

# ServerResponse

https://nodejs.org/api/http.html#http_class_http_serverresponse

---

# ServerResponse: write, end

```js
res.write('dice:\n');
res.write(Math.ceil(Math.random() * 6).toString() + '\n');
res.end();
```

or

```js
res.end(
  `dice:\n${Math.ceil(Math.random() * 6).toString()}\n`
);
```

---

# ServerResponse: statusCode, statusMessage

```js
res.statusCode = 404;
res.statusMessage = 'Not found';
```

---

# ServerResponse: HTTP headers

```js
res.setHeader('Content-Type', 'text/plain;charset=utf-8');
res.setHeader('Cache-Control', 'max-age=10');
res.setHeader('Set-Cookie', 'UserID=JohnDoe; Max-Age=3600');
```

[full list of header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)

---

# IncomingMessage

```js
req.method === 'GET';

req.url === '/';

const ua = req.headers['user-agent'];
```

---

# IncomingMessage: exercises

create a website with multiple views
