# Node and express basics

# Libraries

## Libraries

- plain node (createServer)
- _connect_ (includes middleware)
- _express_ (includes middleware, routing, view rendering, ...)

most projects will use _express_

## Libraries

middleware: via `.use()`

routing: via `.get()`, `.post()`, ...

# Hello world

## Hello world

hello world with express:

```js
// server.js
import express from 'express';

const app = express();

// provide a function that handles the request
// and sends a response
app.use((req, res) => {
  // note: we should actually return a complete HTML file
  res.send('<h1>Hello World!</h1>\n');
});

// listen on localhost:3000
app.listen(3000);
```

## Hello world

hello world without express (see <https://nodejs.org/en/docs/guides/getting-started-guide/>):

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

# Request and response

## Request and response

web development in node is based on request handler functions, e.g.:

```js
(req, res) => {
  res.send('<h1>Hello World!</h1>\n');
};
```

## Request and response

a request handler function receives two arguments:

- `req` - represents the incoming _request_ (class [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage) in node, subclass [Request](http://expressjs.com/en/4x/api.html#req) in express)
- `res` - respresents the _response_ that will be sent (class [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse) in node, subclass [Response](http://expressjs.com/en/4x/api.html#res) in express)

## Exercise

exercise: create a web app that displays the current time

## Exercise

solution:

```js
import express from 'express';

const app = express();

app.use((req, res) => {
  const timeString = new Date().toTimeString();
  res.send('<h1>current time: ' + timeString + '</h1>');
});

app.listen(3000);
```

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

# The response object

## The response object

class in plain node / _connect_: [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)

class in _express_: [Response](https://expressjs.com/de/api.html#res)

## The response object

methods in express:

- `.send()`
- `.set()`
- `.status()`

## The response object

example:

```js
res.set({ 'Content-Type': 'text/plain' });
res.send('Date:\n' + new Date().toLocaleDateString());
```

## The response object

```js
res.status(404);
res.set({ 'Content-Type': 'text/plain' });
res.send('Document not found.\n');
```

## The response object

setting a cookie:

```js
res.cookie('a', '1');
```

or explicitly:

```js
res.set({ 'Set-Cookie': 'a=1' });
```

# Routing and redirects

## Routing and redirects

```js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!\n');
});
app.get('/about', (req, res) => {
  res.send('About page\n');
});
app.get('/articles/:id', (req, res) => {
  const articleId = req.params.id;
  // ...
});
app.get('/home', (req, res) => {
  res.redirect('/');
});

app.listen(3000);
```

# Rendering HTML

## Rendering HTML

manually (dangerous):

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

## Rendering HTML

via a template engine:

- ejs: [website](https://ejs.co/), [express integration](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)
- handlebars (or mustache): [website](https://handlebarsjs.com/), [express integration](https://github.com/express-handlebars/express-handlebars)
- pug: [website](https://pugjs.org), [express integration](https://expressjs.com/en/guide/using-template-engines.html)
- react: [website](https://reactjs.org/), [express integration](https://github.com/reactjs/express-react-views)
- ... ([list of options](https://expressjs.com/en/resources/template-engines.html))

## Rendering HTML

general procedure:

```js
import express from 'express';
import myengine from 'myengine';

const app = express();

app.engine('myengine', myengine());
app.set('view engine', 'myengine');

app.get('/', (req, res) => {
  const name = 'world';
  // renders 'views/home.myengine'
  res.render('home', { name: name });
});
```

## Rendering HTML

registering various template engines:

```js
import ejs from 'ejs';
import expressHandlebars from 'express-handlebars';
import expressReactViews from 'express-react-views';

app.engine('ejs', ejs);
app.engine('handlebars', expressHandlebars());
app.engine('jsx', expressReactViews.createEngine());
```

## Rendering HTML via express-react-views

install npm packages: _express-react-views_, _react_, _react-dom_

## Rendering HTML via express-react-views

_views/home.jsx_:

```jsx
import React from 'react';

const Home = ({ name }) => {
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

export default Home;
```

## Exercises

exercises:

- create a website with different pages (_home_, _about_, _newsletter_, ...)
- create a website that displays information from a public API (e.g. <https://pokeapi.co/>)

## Exercises

Pokeapi part 1:

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

## Exercise: Pokeapi

Pokeapi part 2:

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
section duplicated in:
- node-web-development-with-node-and-express
- node-and-mongodb
-->

# Configuration via environment variables

## Configuration via environment variables

credentials and configuration should be supplied via environment variables

credentials should not be under version control

## .env file

common way to supply configuration and credentials: store in a file named _.env_, load as environment variables via _dotenv_

make sure _.env_ is not under version control (add it to the _.gitignore_ file)

## .env file

example _.env_ file:

```bash
PORT=3000
NODE_ENV=production
DB_URL=mongodb+srv://...
AUTH0_DOMAIN=xxx.eu.auth0.com
```

loading in JavaScript:

```js
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
```

## NODE_ENV

Environment variable `NODE_ENV`: important when using e.g. express

in production environments, `NODE_ENV=production` should always be set - otherwise the user will be able to see JavaScript error messages in detail (with stack traces)

# Hosting

## Hosting options

online editors:

- glitch
- codepen

"real" hosting (free options available):

- Heroku
- Amazon Web Services (Elastic Beanstalk)
- Google Cloud Platform (Google App Engine) (credit card information required for identity verification)
- Microsoft Azure (App Service) (credit card information required for identity verification)
- ...

see also: [codeinwp: 9 of the Best Node.js Hosting Platforms for 2021 (Free and Paid)](https://www.codeinwp.com/blog/best-nodejs-hosting/)

# Hosting on glitch.com

## Hosting on glitch.com

on <https://glitch.com>, select "get started" - "hello express"

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

# Hosting on Heroku

## Hosting on Heroku

sign up for a Heroku account, specifying _Node.js_ as primary development language

select _create new app_, choose a unique name and a server location

## Connecting to GitHub

on the "deploy" tab, select "connect to GitHub"

click _Deploy Branch_ for the first deploy

enable automatic deploys to deploy every time something is pushed to the main branch

## Environment variables

to set environment variables for configuration, go to "settings" - "config vars"

the environment variable `PORT` is available automatically and does not have to be set here

## Hosting on Heroku

more information: <https://devcenter.heroku.com/articles/deploying-nodejs>

# Middleware

## Middleware

_middleware_ may be used in _connect_ and in _express_

middleware can react / respond to requests or modify req / res objects

## Middleware

example use:

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

## Example middleware

- _express.json_, _express.urlencoded_, ... : parse the request body and make it available as `req.body`
- _cookie-parser_: parses cookies and makes them available under `req.cookies`
- _compression_: compresses the response content
- _express.static_: sends static files (e.g. _index.html_) if available
- _express-session_: stores session data (available under `req.session`)
- _passport_: user authentication
- _morgan_: logging
- ... (see: [list of available express middleware](https://expressjs.com/en/resources/middleware.html))
