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
- _express-openid-connect_ or _passport_: user authentication
- _morgan_: logging
- ... (see: [list of available express middleware](https://expressjs.com/en/resources/middleware.html))
