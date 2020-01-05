# Service workers

## Service workers

Service workers are client-side proxies between the web browser and the server.

Service workers can cache resources and retrieve them from either the network or the internal cache.

## Service workers

Service workers are special web workers:

- no direct access to the DOM
- communication with the main thread happens via `postMessage`

## Browser support

[caniuse](https://caniuse.com/##feat=serviceworkers)

support for service workers ⇒ support for ES2015

## Service workers - related technologies

- fetch (Sending network requests)
- cache (Caching network requests)
