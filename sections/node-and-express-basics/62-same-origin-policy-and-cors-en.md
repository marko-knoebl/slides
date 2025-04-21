# Same-origin policy and CORS

## Same-origin policy

Same-origin plicy: safety rule in the browser

by default, a webpage on one site (e.g. _www.example.com_) is not allowed to make requests to another site (e.g. _api.example.com_)

## Same-origin policy

example: go to one website (e.g. Wikipedia), open the browser's JavaScript console and request another website, e.g. via `fetch("https://google.com")`

result: the request is prohibited

reason: to prevent exploitation of cookie-based authentication

## Cross-Origin resource sharing

The requested site may allow _Cross-Origin resource sharing (CORS)_ for some URLs or for all URLs

This is done via the HTTP header "Access-Control-Allow-Origin"

example: the _jsonplaceholder_ API enables CORS for all sites - so `fetch("https://jsonplaceholder.typicode.com/todos")` works from any site

## CORS with express

enabling CORS in express:

```js
import cors from 'cors';
```

allowing requests from all domains:

```js
app.use('/api', cors());
```

allowing requests from a specific domain:

```js
app.use('/api', cors({ origin: 'https://example.com' }));
```
