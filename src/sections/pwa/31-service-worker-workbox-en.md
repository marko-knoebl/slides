# Workbox in detail

## Service worker strategies

Workbox has built-in support for several service worker strategies

## Service worker strategies

asset retrieval:

- always from the network: `NetworkOnly`
- always from the cache: `CacheOnly`
- network first: `NetworkFirst`
- cache first: `CacheFirst`
- cache, updating the cache in the background: `StaleWhileRevalidate`

## Service worker strategies

caching:

- precache on install, always serve this version: `precacheAndRoute`
- precache on user interaction: use `fetch` and the below
- cache when data arrives: automatic with `NetworkFirst`, `CacheFirst`, `StaleWhileRevalidate`

## routing

```js
workbox.routing.registerRoute(
  new RegExp('/static/.*'),
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  '/articles.json',
  new workbox.strategies.NetworkFirst()
);
```

## plugins

- expiration plugin (maxEntries, maxAgeSeconds)

## code lab

https://codelabs.developers.google.com/codelabs/workbox-lab/
