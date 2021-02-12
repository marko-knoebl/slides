# Hello world

## Hello world

hello world with express:

```js
// server.js
import express from 'express';

const app = express();

// provide a function that handles a request to "/"
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

## Hello world - complete setup

create a _package.json_ file:

```json
{
  "type": "module",
  "eslintConfig": {
    "sourceType": "module"
  },
  "scripts": {
    "start": "node server.js"
  }
}
```

## Hello world - complete setup

install express:

```bash
npm install express
```

## Hello world

run via:

```bash
npm run start
```

open <http://localhost:3000> in your browser to view the result
