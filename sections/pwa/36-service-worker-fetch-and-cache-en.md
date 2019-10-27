# Service workers with fetch and cache

## Service workers with fetch and cache

core associated technologies:

- fetch (sending network requests)
- cache (caching results)

## Cache

= "a request to response map"

## Accessing caches

Via the global variable `caches.open` or via `self.caches.open` in the service worker

Promise:

```js
let myCache;
caches.open('test', mc => {
  myCache = mc;
});
```

## Methods

cache methods:

- `myCache.add(request)`
- `myCache.addAll(requests)`
- `myCache.put(request, response)`
- `myCache.delete(request)`
- `myCache.match(request)`
- `myCache.matchAll(requests)`

The `request` can be either a string or a `Request` object.

## Cache - add(All)

We provide a URL; the resource will be automatically requested and stored

```js
cache.add('/main.js');

cache.addAll(['/', '/index.html', '/main.js']);
```

## Cache - put

Can be used if we already have the response

```js
fetch('myurl').then(response => {
  console.log(response.clone());
  cache.put('myurl', response.clone());
  cache.put('otherurl', response);
});
```

## Cache - delete

```js
cache.delete('myurl');
```

## Cache - match

Retrieve an entry from the cache that matches a request

```js
// returns a response or undefined
const content = cache.match('myurl');
```

## Example: cache only (short)

An application that will precache resources and always provide them to the user

```js
self.addEventListener('install', () => {
  cache.addAll(['/', '/index.html', '/about'])
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request);
  )
})
```

## Example: cache only (full code)

```js
self.addEventListener('install', installEvent => {
  // wait for the cache to be populated;
  // abort install on error
  installEvent.waitUntil(
    caches.open('app-shell-cache-v3').then(cache => {
      return cache.addAll(['/', '/index.html', '/about']);
    })
  );
  // optional - don't abort install on error
  caches.open('app-shell-cache-v3').then(cache => {
    cache.addAll['/icon1.png'];
  });
});
```

## Example: cache only - waitUntil

A call to `waitUntil` can be used to signify when the _install_ was successfull - the service worker will only _activate_ if it was

## Example: updating the cache

deleting old entries:

```js
self.addEventListener('activate', activateEvent => {
  activateEvent.waitUntil(
    Promise.all([
      caches.delete('app-shell-cache-v2'),
      caches.delete('app-shell-cache-v1'),
    ])
  );
});
```

## Example: retrieve from cache with network fallback

```js
self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

## Example: updating the cache on every request

```js
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(response => {
      cache.put(event.request, response.clone());
      return response;
    })
  );
});
```

## example: network - falling back to cache - falling back to default asset (e.g. user avatar)

## exercise: scripting the service worker

https://developers.google.com/web/ilt/pwa/lab-scripting-the-service-worker
