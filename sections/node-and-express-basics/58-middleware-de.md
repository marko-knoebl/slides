# Middleware

## Middleware

Middleware kann auf Requests reagieren sowie die req / res - Objekte abändern

## Middleware

Beispiel:

```js
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';

const app = express();

// log all incoming requests
app.use(morgan('common'));
// serve content of the "public" folder as-is if found
app.use(express.static('public'));
// compress all responses
app.use(compression());

app.get('/', (req, res) => {
  // ...
});
```

## Middleware und Routing

```js
// log all incoming requests
app.use(morgan('common'));
// for any request that starts with /api, parse its
// JSON body if it exists
app.use('/api', express.json());
// compress API responses
app.use('/api', compression());
// requests to /assets/...: send back static files
app.use('/assets', express.static('public'));
```

## Beispiele für Middleware

- _express.json_, _express.urlencoded_, ... : parsen den Inhalt eines Requests und stellen ihn als `req.body` zur Verfügung
- _cookie-parser_: liest Cookies aus und stellt sie unter `req.cookies` zur Verfügung
- _compression_: komprimiert den Inhalt der Response
- _express.static_: antwortet mit vorhandenen statischen Dateien (z.B. _index.html_), falls vorhanden
- _express-session_: speichert Sitzungsdaten (verfügbar unter `req.session`)
- _express-openid-connect_ oder _passport_: Benutzer-Authentifizierung
- _morgan_: Logging
- ... (siehe: [list of available express middleware](https://expressjs.com/en/resources/middleware.html))
