# Middleware

## Middleware

middleware can respond to requests or modify reqest / response objects

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

app.get('/', (req, res) => {
  // ...
});
```

## Middleware and routing

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

## Example middleware

- _express.json_, _express.urlencoded_, ... : parse the request body and make it available as `req.body`
- _cookie-parser_: parses cookies and makes them available under `req.cookies`
- _compression_: compresses the response content
- _express.static_: sends static files (e.g. _index.html_) if available
- _express-session_: stores session data (available under `req.session`)
- _express-openid-connect_ or _passport_: user authentication
- _morgan_: logging
- ... (see: [list of available express middleware](https://expressjs.com/en/resources/middleware.html))
