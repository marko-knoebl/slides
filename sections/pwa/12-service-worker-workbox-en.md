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
- cache whenever data arrives: automatic with `NetworkFirst`, `CacheFirst`, `StaleWhileRevalidate`

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

## precaching

```js
workbox.precaching.precacheAndRoute([
  '/',
  '/index.html',
  '/logo.svg',
]);
```

## CLI

Workbox CLI: Tool for simplifying precaching in particular

```bash
workbox wizard --injectManifest
```

## code lab

https://codelabs.developers.google.com/codelabs/workbox-lab/

(update version of "workbox-cli" in package.json - older versions will fail on Windows)

<!--
~ 45mins
-->

## exercises

Turn one of these apps into a PWA and use various caching strategies:

- https://github.com/marko-knoebl/simple-todo-app
- https://github.com/marko-knoebl/simple-weather-app
- https://github.com/marko-knoebl/simple-stock-app

## bonus (with build)

https://developers.google.com/web/tools/workbox/guides/codelabs/npm-script
