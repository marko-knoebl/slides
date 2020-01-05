# Service worker strategies

## Service workers - strategies

When deciding on a strategy there are different goals to consider:

- serve content as fast as possible
- serve content which is up-to-date
- save on network data usage
- save on cache size

## Service workers - strategies

for each resource associated with our web app we should ask ourselves:

- should we download and cache this resource when the user first visits our page?
- if this resource is requested, should we retrieve it from the _cache_ or from the _network_?
- should we fall back to the other option if this fails?
- if we serve from the cache, should we try to update it in the background?

key questions:

- for any requested resource, do we serve it from the cache, from the network or a combination?
- which resources do we cache and when do we cache them?

## Service workers - strategies

asset retrieval:

- always from the network
- always from the cache
- network, falling back to cache
- cache, falling back to network
- cache, updating the cache from the network in the background
- cache, fetching new resource in the background and displaying once received

## Service workers - strategies

caching strategies:

- cache when new data arrives
- precache on install
- precache on user interaction

(we can combine these strategies)

## Service workers - strategies

See the [offline cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-then-network)
