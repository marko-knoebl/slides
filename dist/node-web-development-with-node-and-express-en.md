# Web development with node and express

## Options and libraries

- plain node (createServer)
- _connect_ (includes middleware)
- _express_ (includes middleware, routing, view rendering, ...)

most projects will use _express_

## Options and libraries

middleware: via `.use()`

routing: via `.get()`, `.post()`, ...

_Express_: Library that supports middleware, routing and templates

## Hosting options

- online editors
  - glitch
  - codepen

# Request and response

## Request and response

sending the same response to all requests:

```js
import express from 'express';

const app = express();

// provide a function that handles the request
// and sends a response
app.use((req, res) => {
  res.set({ 'Content-Type': 'text/plain' });
  res.send('Hello World\n');
});

// listen on localhost:3000
app.listen(3000);
```

## Request and response

basic example without _express_ (see <https://nodejs.org/en/docs/guides/getting-started-guide/>):

```js
import http from 'http';

const handler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
};

const server = http.createServer(handler);
server.listen(3000);
```

## Request and response

a request handler function receives two arguments:

- `req` - represents the incoming _request_ (class [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage) in node, subclass [Request](http://expressjs.com/en/4x/api.html#req) in express)
- `res` - respresents the _response_ that will be sent (class [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse) in node, subclass [Response](http://expressjs.com/en/4x/api.html#res) in express)

## Exercise

exercise: create a web app that displays the current time as plain text

## Exercise

solution:

```js
import express from 'express';

const app = express();

app.use((req, res) => {
  res.set({ 'Content-Type': 'text/plain' });
  res.send(new Date().toLocaleTimeString());
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

manually:

```js
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>Hello world</title></head>
      <body>Hello world</body>
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

## Rendering HTML via EJS

```js
import express from 'express';
import ejs from 'ejs';

const app = express();

app.set('view engine', ejs);

app.get('/', (req, res) => {
  // renders 'views/home.ejs'
  res.render('home');
});

// ...
```

## Rendering HTML via express-handlebars

```js
import express from 'express';
import expressHandlebars from 'express-handlebars';

const app = express();

app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  // renders 'views/home.handlebars'
  res.render('home');
});
```

## Rendering HTML via express-react-views

install npm packages: _express-react-views_, _react_, _react-dom_

```js
import express from 'express';
import expressReactViews from 'express-react-views';

const app = express();

app.engine('jsx', expressReactViews.createEngine());
app.set('view engine', 'jsx');

app.get('/', (req, res) => {
  // renders 'views/home.jsx' with one property
  res.render('home', { foo: 'bar' });
});
```

## Rendering HTML via express-react-views

_views/home.jsx_:

```jsx
import React from 'react';

const Home = () => {
  return (
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <div>Home</div>
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

## Exercise: Pokeapi

part 1:

```jsx
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

part 2:

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

# Middleware

## Middleware

_middleware_ is available in _connect_ and in _express_

## Middleware

[list of available express middleware](https://expressjs.com/en/resources/middleware.html)

## Middleware

```js
import express from 'express';

// app is a request handler that can be extended
const app = express();

// parse urlencoded request bodies into req.body
app.use(express.urlencoded());
// parse JSON request bodies into req.body
app.use(express.json());

// respond to all requests
app.use((req, res) => {
  res.set({ 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

app.listen(3000);
```

# JSON data

## JSON data

sending JSON (manually):

```js
res.setHeader({"Content-Type", "application/json"});
res.send(JSON.stringify(data));
```

with the `.json()` helper:

```js
res.json(data);
```

## JSON data

receiving (parsing) JSON via middleware:

```js
app.use(express.json());
```

data will be available as `req.body`

# API development

## API development

topics:

- Same-origin policy and Cross-origin resource sharing
- JSON-RPC
- REST
- GraphQL

# Same-origin policy and CORS

## Same-origin policy

by default, a webpage served from one site (e.g. _[www.example.com](http://www.example.com)_) is not allowed to make requests to another site (e.g. _api.example.com_) from within the browser (_Same-origin policy_)

## Same-origin policy

example: go to one website (e.g. Wikipedia), open the browser's JavaScript console and request another website, e.g. via `fetch("https://google.com")`

result: the request is prohibited

## Same-origin policy

why: prevent exploitation of cookie-based authentication

scenario:

user visits _google.com_, logs in, receives an authentication cookie

without logging out, the user visits _example.com_; _example.com_ cannot make any authenticated requests to _google.com_ and cannot see any of the user's data

## Cross-Origin resource sharing

The requested site may allow _Cross-Origin resource sharing (CORS)_ for some URLs or for all URLs

example: the _jsonplaceholder_ API enables CORS for all sites - so `fetch("https://jsonplaceholder.typicode.com/todos")` works from any site

## Cross-Origin resource sharing

example (request from _[www.example.com](http://www.example.com)_ to _api.example.com_):

browser sends a request with an extra `Origin` header:

```
Origin: https://www.example.com
```

server responds with data and a header indicating why the response was allowed:

```
Access-Control-Allow-Origin: http://www.example.com
```

or

```
Access-Control-Allow-Origin: *
```

# Same-origin policy and CORS with node

## Same-origin policy and CORS with node

```js
import cors from 'cors';
```

allowing requests from all domains:

```js
app.use(cors());
```

allowing requests from a specific domain:

```js
app.use(cors({ origin: 'https://www.example.com' }));
```

# JSON-RPC

## JSON-RPC

example request body:

```json
{
  "jsonrpc": "2.0",
  "method": "pokemon_by_name",
  "params": { "name": "pikachu" },
  "id": 1234
}
```

example response:

```json
{
  "error": null,
  "result": { "name": "Pikachu", "img": "..." },
  "id": 1234
}
```

## JSON-RPC

exercise: create a JSON-RPC API that supports the queries `pokemon_by_name` and `type_by_id` and queries <https://pokeapi.co/api> in the background

# REST

## REST

see <https://www.robinwieruch.de/node-express-server-rest-api>
