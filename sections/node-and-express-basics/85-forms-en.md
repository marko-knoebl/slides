# Forms

## Request parameters

By default, the browser sends form contents in URL-encoded format, e.g.:

```txt
foo=1&bar=2&baz=3
```

in get requests: as part of the URL, e.g. `https://google.com/search?ei=xyzg&q=foo...`

in post requests: in the request body

## Getting request parameters

in a _get_ request: read `req.query`

in a _post_ request: use `express.urlencoded` middleware, read `req.body`
