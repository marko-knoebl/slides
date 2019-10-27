# Service Worker Beispiele

## Offline App Installation

```js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('opened cache');
      // Resultat von addAll ist ein Promise
      return cache.addAll(urlsToCache);
    })
  );
});
```

## Offline App Installation - workbox

```js
workbox.precaching.precache(urlsToCache);
```

## Offline App fetch

```js
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request));
});
```

## Offline App fetch - workbox

```js
workbox.routing.registerRoute(
  '.*',
  workbox.strategies.cacheOnly
);
```
