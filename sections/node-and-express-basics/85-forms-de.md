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
