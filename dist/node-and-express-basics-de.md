# Node and express basics

# Libraries

## Libraries

- reines node (createServer)
- _connect_ (beinhaltet Middleware)
- _express_ (beinhaltet Middleware, Routing, Rendering, ...)

die meisten Projekte verwenden _express_

## Libraries

middleware: via `.use()`

routing: via `.get()`, `.post()`, ...

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

hello world ohne express (siehe <https://nodejs.org/en/docs/guides/getting-started-guide/>):

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

# Request und Response

## Request und Response

Web-Entwicklung in node geschieht über Request-Hanlder-Funktionen, z.B.:

```js
(req, res) => {
  res.send('<h1>Hello World!</h1>\n');
};
```

## Request und Response

Ein Request Handler bekommt zwei Argumente:

- `req` - repräsentiert den eingehenden _request_ (Klasse [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage) in node, Unterklasse [Request](http://expressjs.com/en/4x/api.html#req) in express)
- `res` - repräsentiert die _response_ / Antwort, die gensendet wird (Klasse [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse) in node, Unterklasse [Response](http://expressjs.com/en/4x/api.html#res) in express)

## Übung

Übung: erstelle eine Seite, die die aktuelle Uhrzeit anzeigt

## Übung

Lösung:

```js
import express from 'express';

const app = express();

app.use((req, res) => {
  const timeString = new Date().toTimeString();
  res.send('<h1>current time: ' + timeString + '</h1>');
});

app.listen(3000);
```

# Das Request-Objekt

## Das Request-Objekt

Beispiel für ein Request-Objekt:

```json
{
  "url": "/",
  "method": "GET",
  "headers": {
    "user-agent": "Mozilla/5.0 (Windows ..."
  }
}
```

Klasse in reinem Node bzw in _connect_: [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)

Klasse in _express_: [Request](https://expressjs.com/de/api.html#req)

## Das Request-Objekt

Übung: Erstelle eine Website mit unterschiedlichen Antworten basierend auf der angefragten URL

# Das Response-Objekt

## Das Response-Objekt

Klasse in reinem Node bzw in _connect_: [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)

Klasse in _express_: [Response](https://expressjs.com/de/api.html#res)

## Das Response-Objekt

Methoden in Express:

- `.send()`
- `.set()`
- `.status()`

## Das Response-Objekt

Beispiel:

```js
res.set({ 'Content-Type': 'text/plain' });
res.send('Date:\n' + new Date().toLocaleDateString());
```

## Das Response-Objekt

```js
res.status(404);
res.set({ 'Content-Type': 'text/plain' });
res.send('Document not found.\n');
```

## Das Response-Objekt

Setzen eines Cookies:

```js
res.cookie('a', '1');
```

bzw explizit:

```js
res.set({ 'Set-Cookie': 'a=1' });
```

# Routing und Redirects

## Routing

```js
app.get('/', (req, res) => {
  res.send('<h1>Home</h1>\n');
});
app.get('/about', (req, res) => {
  res.send('<h1>About</h1>\n');
});
```

andere Methoden: `.post`, `.put`, `.delete`, ...

## Routenparameter

```js
app.get('/articles/:id', (req, res) => {
  const articleId = req.params.id;
  // ...
});
```

## Redirects

```js
app.get('/home', (req, res) => {
  res.redirect('/');
});
```

# Rendern von HTML

## Rendern von HTML

manuell (gefährlich):

```js
app.get('/', (req, res) => {
  const name = 'world';
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>Hello ${name}</title></head>
      <body>Hello ${name}</body>
    </html>
  `);
});
```

## Rendern von HTML

mit Hilfe einer Template Engine:

- ejs: [Website](https://ejs.co/), [express Integration](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)
- handlebars (oder mustache): [website](https://handlebarsjs.com/), [express Integration](https://github.com/express-handlebars/express-handlebars)
- pug: [Website](https://pugjs.org), [express Integration](https://expressjs.com/en/guide/using-template-engines.html)
- react: [Website](https://reactjs.org/), [express Integration](https://github.com/reactjs/express-react-views)
- marko: [Website](https://markojs.com/), [express Integration](https://markojs.com/docs/express/)
- ... ([Liste von Möglichkeiten](https://expressjs.com/en/resources/template-engines.html))

## Rendern von HTML

allgemeines Prozedere:

```js
import express from 'express';
import myengine from 'myengine';

const app = express();

app.engine('myengine', myengine());
app.set('view engine', 'myengine');

app.get('/', (req, res) => {
  const name = 'world';
  // renders 'views/index.myengine'
  res.render('index', { name: name });
});
```

## Rendern von HTML

registrieren verschiedener Template Engines:

```js
import ejs from 'ejs';
import expressHandlebars from 'express-handlebars';
import expressReactViews from 'express-react-views';

app.engine('ejs', ejs);
app.engine('handlebars', expressHandlebars());
app.engine('jsx', expressReactViews.createEngine());
```

## Rendern von HTML via express-react-views

npm-Pakete: _express-react-views_, _react_, _react-dom_

## Rendern von HTML via express-react-views

_views/index.jsx_:

```jsx
import React from 'react';

const Index = ({ name }) => {
  return (
    <html>
      <head>
        <title>Hello, {name}!</title>
      </head>
      <body>
        <h1>Hello, {name}!</h1>
      </body>
    </html>
  );
};

export default Index;
```

## Übungen

Übungen:

- erstelle eine Website mit verschiedenen Seiten (_home_, _about_, _newsletter_, ...)
- erstelle eine Website, die Informationen von einem öffentlichen API anzeigt (z.B. <https://pokeapi.co/>)

## Übungen

Pokeapi Teil 1:

```js
app.get('/:id', async (req, res) => {
  const id = req.params.id;
  const dataRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  const data = await dataRes.json();
  await res.render('pokemon', { id: id, data: data });
});
app.get('/', (req, res) => {
  res.redirect('/1');
});
```

## Übungen

Pokeapi Teil 2:

```jsx
// views/pokemon.jsx
import React from 'react';

const Pokemon = (props) => {
  const id = Number(props.id);
  const data = props.data;
  return (
    <div>
      <article>
        <h1>{data.species.name}</h1>
        <img src={data.sprites.front_default} />
      </article>
      <a href={`/${id - 1}`}>prev</a>
      <br />
      <a href={`/${id + 1}`}>next</a>
    </div>
  );
};

export default Pokemon;
```

<!--
section almost duplicated in:
- node-web-development-with-node-and-express
- node-and-mongodb
-->

# Konfiguration mittels Umgebungsvariablen

## Konfiguration mittels Umgebungsvariablen

Zugangsdaten und Konfiguration werden üblicherweise via Umgebungsvariablen bereitgestellt

Zugangsdaten sollten nicht unter Versionskontrolle stehen

## .env-Datei

verbreitete Möglichkeit, um Zugangsdaten bereit zu stellen: speichern in einer Datei namens _.env_, laden als Umgebungsvariablen mittels _dotenv_

Stelle sicher, dass _.env_ nicht unter Versionskontrolle steht (füge es zur Datei _.gitignore_ hinzu)

## .env-Datei

Beispiel für _.env_-Datei:

```bash
PORT=3000
NODE_ENV=production
DB_URL=mongodb+srv://...
AUTH0_DOMAIN=xxx.eu.auth0.com
```

laden in JavaScript:

```js
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
```

## NODE_ENV

Umgebungsvariable `NODE_ENV`: spielt z.B. bei express eine wichtige Rolle

in Produktivumgebungen sollte immer `NODE_ENV=production` gesetzt sein - ansonsten werden z.B. dem Endnutzer JavaScript-Fehlermeldungen im Detail angezeigt (mit Stack Traces)

# Zusammenfassung: grundlegendes Setup

## Zusammenfassung: grundlegendes Setup

1. erstelle _package.json_
2. installiere Pakete
3. erstelle _.gitignore_
4. lade Konfiguration aus _.env_
5. erstelle App mit Rendering Engine und Routen
6. erstelle Views

## Erstelle package.json

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

## Installiere Pakete

installiere _express_, _dotenv_ und eine Template Engine

Template Engines:

- _pug_
- _express-handlebars_
- _ejs_
- _express-react-views_, _react_, _react-dom_

## Erstelle .gitignore-Datei

Beispiel für _.gitignore_:

```txt
.env
node_modules
```

## Lade Konfiguration aus .env

Beispiel für _.env_:

```txt
PORT=3000
```

Laden der Konfiguration:

```js
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
```

## Erstelle App mit Rendering Engine und Routen

```js
import express from 'express';
import expressReactViews from 'express-react-views';
const app = express();

app.engine('jsx', expressReactViews.createEngine());
app.set('view engine', 'jsx');

app.get('/', (req, res) => {
  res.render('index', { name: 'world' });
});

app.listen(PORT);
```

## Erstelle Views

```js
// views/index.jsx
import React from 'react';

export default ({ name }) => {
  return (
    <html>
      <head>
        <title>Hello, {name}!</title>
      </head>
      <body>
        <h1>Hello, {name}!</h1>
      </body>
    </html>
  );
};
```

# Hosting

## Hosting-Möglichkeiten

Online-Editoren:

- glitch
- codepen

"echtes" Hosting (kostenlose Optionen verfügbar):

- Heroku
- Amazon Web Services (Elastic Beanstalk)
- Google Cloud Platform (Google App Engine) (Kreditkarteninformation zur Identitätsfeststellung benötigt)
- Microsoft Azure (App Service) (Kreditkarteninformation zur Identitätsfeststellung benötigt)
- ...

siehe auch: [codeinwp: 9 of the Best Node.js Hosting Platforms for 2021 (Free and Paid)](https://www.codeinwp.com/blog/best-nodejs-hosting/)

# Hosting auf glitch.com

## Hosting auf glitch.com

auf <https://glitch.com>, wähle "get started" - "hello express"

```js
// server.js
const express = require('express');

const app = express();

app.use((req, res) => {
  // note: we should actually return a complete HTML file
  res.send('<h1>Hello World!</h1>\n');
});

app.listen(process.env.PORT);
```

# Hosting auf Heroku

## Hosting auf Heroku

registriere dich für einen Heroku-Account, wähle _Node.js_ als "primary development language"

wähle _create new app_, wähle einen eindeutigen Namen und eine Server-Location

## Verbindung zu GitHub

im "deploy"-Tab, wähle "connect to GitHub"

klicke _Deploy Branch_ zum erstmaligen Deployment

aktiviere automatische Deployments, um bei jeder Änderung des Repositories automatisch zu deployen

## Umgebungsvariablen

setzen von Umgebungsvariablen zur Konfiguration unter "settings" - "config vars"

die Umgebungsvariable `PORT` ist in Programmen automatisch verfügbar und muss hier nicht gesetzt werden

## Hosting auf Heroku

mehr Informationen: <https://devcenter.heroku.com/articles/deploying-nodejs>

# Middleware

## Middleware

_Middleware_ kann in _express_ und in _connect_ verwendet werden

Middleware kann auf Requests reagieren / antworten sowie die req / res - Objekte abändern

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

# Formulare

## Request-Parameter

Standardmäßig sendet der Browser Formular-Inhalte im _URL-encoded_ Format, z.B.:

```txt
foo=1&bar=2&baz=3
```

in get-Requests: als Teil der URL, z.B. `https://google.com/search?ei=xyzg&q=foo...`

in post-Requests: im Request-Body

## Auslesen von Request-Parametern

in einem get-Request: lies `req.query`

in einem post-Request: verwende `express.urlencoded` als Middleware, lies `req.body`

<!--
related sections in:
- react-advanced
- node-and-express-intermediate
-->

# Benutzer-Authentifizierung mit einem Identity Provider

## Identity Provider

Ein _Identity Provider_ kann die Identität eines Benutzers überprüfen (kann den Benutzer authentifizieren)

Beispiele:

> der aktuelle Endnutzer ist auf dieser Domain als Benutzer "foo" eingeloggt

> der aktuelle Endnutzer ist al Benutzer "x" bei Google / als Benutzer "y" bei Facebook authentifiziert

## Identity Provider

Mechanismus für den Benutzer:

Benutzer klickt auf _login_, wird zu einer Login-Seite weitergeleitet und nach erfolgreichem Login zur ursprünglichen Seite zurückgeleitet

im Hintergrund erhält der Benutzer ein _Identity Token_, einen kleinen Datensatz, der die Identität des Benutzers im Zusammenspiel mit dem Identity Provider belegen kann

das Identity Token wird üblicherweise als Cookie gesetzt (z.B. `appSession`)

## Identity Provider

Standards:

- Authentifizierung via _OpenID Connect_
- Authorisierung via _OAuth2_

## Auth0

**Auth0** (_auth-zero_) is a widely-used identity provider

supports authentication via "internal" accounts or external identity providers (e.g. _Google_, _Apple_, _Facebook_, ...)

## Auth0: Registrierung und Einrichtung

- registriere dich für einen Auth0-Account unter <https://auth0.com>
- in der Sidebar, wähle "Applications"
- wähle die "default application" oder erstelle eine neue "Single Page Web Application"; der gewählte Name wird Benutzern bei der Authentifizierung angezeigt

<!--
registration details:
select region: EU / US / AU
select account type: personal / company
-->

## Auth0: Registrierung und Einrichtung

_Application Settings_:

- erlaubte Redirect-Ziele zum Abschließen des Logins: _Allowed Callback URLs_
- erlaubte Redirect-Ziele nach dem Logout: _Allowed Logout URLs_

Beispiel für Callback URLs:

```txt
http://localhost:3000/callback,
https://mydomain.com/callback
```

Beispiel für Logout URLs:

```txt
http://localhost:3000,
https://mydomain.com
```

## Konfiguration

Beispiel für `.env` Datei für lokale Entwicklung (Quellen auf nächster Slide)

```bash
ISSUER_BASE_URL=https://dev-xxxxxxxx.eu.auth0.com
CLIENT_ID=jA0EAwMCxamDRMfOGV5gyZPnyX1BBPOQ
SECRET=7qHciKUpXk7pCXqG45bweRBQxBTMpztB
BASE_URL=http://localhost:3000
PORT=3000
```

## Konfiguration

unter _Settings_:

jeder Auth0-Klient hat zumindest eine _domain_ (z.B. _dev-xxxxxxxx.eu.auth0.com_)

jede App hat eine bestimmte _client ID_ (z.B. _jA0EAwMCxamDRMfOGV5gyZPnyX1BBPOQ_)

selbst erstellt:

_secret_: erstelle eine lange, zufällige Zeichenfolge (empfohlen: mindestens 32 Zeichen)

## Express und Auth0

Guides:

Guide mit der aktuellsten Library (_express-openid-connect_): <https://auth0.com/docs/quickstart/webapp/express>

Guide mit älteren (verbreiteteren) Libraries: <https://auth0.com/docs/quickstart/webapp/express>

## Express und Auth0

npm-Paket: _express-openid-connect_

Middleware für Authentifizierung

stellt automatisch die URLs _/login_, _/logout_, _/callback_ bereit

```js
app.use(
  expressOpenidConnect.auth({
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    secret: process.env.SECRET,
  })
);
```

## Express und Auth0

```js
app.get('/', (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.send(
      `<p>logged in <a href="/logout">log out</a></p>
       <pre>${JSON.stringify(req.oidc.user)}</pre>`
    );
  } else {
    res.send(
      '<div>not logged in <a href="/login">log in</a></div>'
    );
  }
});
```
