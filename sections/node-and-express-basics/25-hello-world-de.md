# Hello world

## Hello world

hello world mit express:

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

hello world ohne express (siehe https://nodejs.org/en/docs/guides/getting-started-guide/):

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

## Hello world - komplettes Setup

Erstellen von _package.json_:

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

## Hello world - komplettes Setup

Installation von express:

```bash
npm install express
```

## Hello world - komplettes Setup

ausführen via:

```bash
npm run start
```

öffne <http://localhost:3000> im Browser für das Resultat
