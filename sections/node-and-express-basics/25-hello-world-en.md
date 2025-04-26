# Hello world

## Hello world

hello world with express:

```js
// server.js
import express from 'express';

const app = express();

// provide a function that handles a get request to "/"
// and sends a response
app.get('/', (req, res) => {
  // note: we should actually return a complete HTML file
  res.send('<h1>Hello World!</h1>\n');
});

// listen on localhost:3000
app.listen(3000);
```

## Hello world

hello world without express (see https://nodejs.org/en/docs/guides/getting-started-guide/):

```js
// server.js
import http from 'http';

const handler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
  res.end('<h1>Hello World!</h1>\n');
};

const server = http.createServer(handler);
server.listen(3000);
```

## Starting the server

basic _start_ script to start the server:

```json
{
  "scripts": {
    "start": "node server.js"
  }
}
```

## Starting the server

to start a server and _restart_ it every time some code changes:

install _nodemon_ from npm and specify a _dev_ script in _package.json_:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```
