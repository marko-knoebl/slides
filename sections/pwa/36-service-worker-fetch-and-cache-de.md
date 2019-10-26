# Service Worker mit fetch und cache

## Service Worker mit fetch und cache

Wichtige verwandte Technologien:

- fetch (Netzwerkanfragen senden)
- cache (Resultate cachen)

## Cache

= "a request to response map"

## Auf Caches zugreifen

Durch die globale Variable `caches.open` oder `self.caches.open` im Service Worker

Promise:

```js
let myCache;
caches.open('test', mc => {
  myCache = mc;
});
```

## Methoden

Cache-Methoden:

- `myCache.add(request)`
- `myCache.addAll(requests)`
- `myCache.put(request, response)`
- `myCache.delete(request)`
- `myCache.match(request)`
- `myCache.matchAll(requests)`

Die Variable `request` kann entweder ein String sein, oder ein `Request` objekt.

## Cache - add(All)

Wir übergeben eine URL; die Resource wird automatisch angefragt und gespeichert

```js
cache.add('/main.js');

cache.addAll(['/', '/index.html', '/main.js']);
```

## Cache - put

Kann verwendet werden, wenn wir schon über die Antwort verfügen

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

Einen Eintrag aus dem Cache holen, der auf einen bestimmten Request passt

```js
// returns a response or undefined
const content = cache.match('myurl');
```

## Beispiel: cache only (kurz)

Eine Anwendung, die Resourcen bei der Installation cacht und sie dauerhaft aus dem Cache zur Verfügung stellt

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

## Beispiel: cache only (ganzer Code)

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

## Beispiel: cache only - waitUntil

Ein Aufruf von `waitUntil` kann verwendet werden, um anzuzeigen, ob die Installation erfolgreich war - dier Service Worker wird nur bei Erfolg aktiviert

## Beispiel: den Cache aktualisieren

alte Einträge löschen:

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

## Beispiel: Aus dem Cache laden - mit Netzwerk-Fallback

```js
self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

## Beispiel: Den Cache bei jedem Request aktualisieren

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

## Beispiel: Network - Falling back to Cache - Falling back to default asset (e.g. user avatar)

## Übung: scripting the service worker

https://developers.google.com/web/ilt/pwa/lab-scripting-the-service-worker
