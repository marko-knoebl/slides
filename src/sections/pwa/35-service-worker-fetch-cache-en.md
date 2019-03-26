# Service workers with fetch and cache

## Service workers with fetch and cache

core associated technologies:

- fetch (sending network requests)
- cache (caching results)

## fetch - example

```js
// this code can be executed in the
// browser console for any website
const url = '/';

fetch(url)
  .then(response => response.text())
  .then(console.log);
```

## Service worker events: fetch

```js
self.addEventListener('fetch', event => {
  event.respondWith(
    new Response('All pages look like this')
  );
});
```

## Service worker events: fetch

Exercise: We can build a small local website with pages like _/home_, _/about_, ...

## Service worker events: fetch

```js
self.addEventListener('fetch', event => {
  if (new RegExp('/about$').test(event.request.url)) {
    event.respondWith(new Response('About'));
  } else if (new RegExp('/$').test(event.request.url)) {
    event.respondWith(new Response('Home'));
  } else {
    event.respondWith(new Response('404'));
  }
});
```

## Service worker events: fetch

Exercise: logging all network requests and passing the work on to `fetch`

## Service worker events: fetch

```js
self.addEventListener('fetch', event => {
  console.log(event);
  return fetch(event.request);
});
```

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
      return cache.addAll[('/', '/index.html', '/about')];
    })
  );
  // optional - don't abort install on error
  caches.open('app-shell-cache-v3').then(cache => {
    cache.addAll['/icon1.png'];
  });
});
```

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

## Example: retrieve with network fallback

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

caching all network requests:

```js
// in the service worker
self.addEventListener('fetch', event => {
  event.respondWith();
  xxxxxxxxxxxxxxxxxxx;
});
```

## example: network - falling back to cache - falling back to default asset (e.g. user avatar)
