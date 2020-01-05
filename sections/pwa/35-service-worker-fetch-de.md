# Service Worker: Verwendung von fetch

## fetch - Beispiel

```js
// this code can be executed in the
// browser console for any website
const url = '/';

fetch(url)
  .then(response => response.text())
  .then(console.log);
```

## Service Worker Events: Fetch

```js
self.addEventListener('fetch', event => {
  event.respondWith(
    new Response('All pages look like this')
  );
});
```

## Service Worker Events: Fetch

Übung: wir erstellen eine kleine lokale Website mit Seiten wie _/home_, _/about_, ...

## Service Worker Events: fetch

<!--
there are two $ signs in regexes in this code
if they are at the very end of the string
they will mess up the result
-->

```js
self.addEventListener('fetch', event => {
  if (new RegExp('/about/$ ').test(event.request.url)) {
    event.respondWith(new Response('About'));
  } else if (new RegExp('/a$ ').test(event.request.url)) {
    event.respondWith(new Response('Home'));
  } else {
    event.respondWith(new Response('404'));
  }
});
```

## Service Worker Events: fetch

Übung: Loggen aller Netzwerkanfragen, die Netzwerkanfragen dann mittels `fetch` beantworkten lassen

## Service Worker Events: fetch

```js
self.addEventListener('fetch', event => {
  console.log(event);
  return fetch(event.request);
});
```
