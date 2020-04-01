# Authorisierung in node.js

## Authorisierung in node.js

Middleware, die Zugriff zu bestimmten Ressourcen auf Clients beschränkt, die beim Authentifizierungsservice eingeloggt sind:

```js
const restrictToLoggedin = expressJwt({
  secret: publicKey,
});

app.get('/public', (req, res) => {
  res.json(publicData);
});
app.get('/private', restrictToLoggedin, (req, res) => {
  if (req.user) {
    res.json(privateData);
  } else {
    res.json({ status: 'auth error' });
  }
});
```

## Authorisierung in node.js

kompletter Code:

```js
const fs = require('fs');
const cors = require('cors');
const express = require('express');
const expressJwt = require('express-jwt');

const publicKey = fs.readFileSync('./public.pem', {
  encoding: 'utf-8',
});

const secretData = ['foo', 'bar', 'baz'];

const app = express();

app.use(express.json());
app.use(cors());

const restrictToLoggedin = expressJwt({
  secret: publicKey,
});

app.get('/', (request, response) => {
  response.json({ page: 'public start page' });
});
app.get('/items', restrictToLoggedin, (req, res) => {
  res.json(secretData);
});
```

[glitch Projekt](https://glitch.com/~karuga-secret)
