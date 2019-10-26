# Service Worker mit Workbox

## Service Worker mit Workbox

**Workbox** = Library, die das Schreiben von Serviceworkern erleichtert

https://developers.google.com/web/tools/workbox/

## Workbox Beispiel

Einbinden eines Service Workers der Antworten cacht und sie als Fallback verwendet, falls Resourcen nicht verfügbar sind:

```js
// service-worker.js
importScripts(
  'https://storage.googleapis.com/' +
    'workbox-cdn/releases/4.1.1/workbox-sw.js'
);

workbox.routing.registerRoute(
  new RegExp('.*'),
  new workbox.strategies.NetworkFirst()
);
```

## Workbox Beispiel

Wir können die Auswirkungen der Verwendung von Service Workern in den Chrome Developer Tools unter _Application/Service Workers_ und _Application/Cache Storage_ begutachten
