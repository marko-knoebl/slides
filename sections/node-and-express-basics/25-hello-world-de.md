# Hello world

## Hello world

hello world mit express:

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

## Den Server starten

einfaches _start_ Skript um den Server zu starten:

```json
{
  "scripts": {
    "start": "node server.js"
  }
}
```

## Den Server starten

Um den Server zu starten und bei Code-Änderungen neu zu starten:

Installiere _nodemon_ von npm und füge ein _dev_-Skript zu _package.json_ hinzu:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```
