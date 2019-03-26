# Service workers

## Service workers

Service workers are a local proxy between the web browser and the server.

Service workers can cache resources and retrieve them from either the network or the internal cache.

## Browser support

[caniuse](https://caniuse.com/##feat=serviceworkers)

support for service workers => support for ES2015

## Service workers - strategies

for each resource associated with our web app we should ask ourselves:

- should we download and cache this resource when the user first visits our page?
- if this resource is requested, should we retrieve it from the _cache_ or from the _network_?
- should we fall back to the other option if this fails?
- if we serve from the cache, should we try to update it in the background?

## Service workers - strategies

key questions:

- for any requested resource, do we serve it from the cache, from the network or a combination?
- which resources do we cache and when do we cache them?

## Service workers - strategies

asset retrieval:

- always from the network
- always from the cache
- network first
- cache first
- cache, updating the cache in the background

## Service workers - strategies

caching strategies:

- precache on install
- precache on user interaction
- cache when new data arrives

(we can combine these strategies)

## Service workers - strategies

See the [offline cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-then-network)

## Service workers - event overview

These events can be handled in the service worker:

- **install**: there is a new service worker file
- **activate**: this service worker is now handling requests
- **fetch**: on each network communication
- **push**: message from the server
- **message**: web worker communication with the main thread
- **sync**: server request that will be attempted repeatedly (Chrome only)

## Service workers - related technologies

- fetch (Sending network requests)
- cache (Caching netowrk requests)
