# Workbox im Detail

## Service Worker Strategien

Workbox bietet Unterstützung für verschiedene Service Worker Strategien

## Service Worker Strategien

Abruf von Resourcen:

- `NetworkOnly`
- `CacheOnly`
- `NetworkFirst` (Cache, falls Netzwerk nicht verfügbar)
- `CacheFirst` (Netzwerk, falls Eintrag nicht im Cache)
- `StaleWhileRevalidate` (Laden aus dem Cache, welcher im Hintergrund aktualisiert wird)

## Service Worker Strategien

Cache:

- Caching bei Installation, immer diese Version liefern: `precacheAndRoute`
- Caching bei Userinteraktion: Benutzen von `fetch` und Untenstehendem
- Caching wenn Daten ankommen: Automatisch bei `NetworkFirst`, `CacheFirst`, `StaleWhileRevalidate`

## Routing

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

## Plugins

- Expiration Plugin (`maxEntries`, `maxAgeSeconds`)

## Precaching

```js
workbox.precaching.precacheAndRoute([
  '/',
  '/index.html',
  '/logo.svg',
]);
```

## CLI

Workbox CLI: Werkzeug, um insbesondere Precaching zu vereinfachen

```bash
workbox wizard --injectManifest
```

## Code Lab

~45 min

https://codelabs.developers.google.com/codelabs/workbox-lab/

(aktualisiere die Version von `workbox-cli` in _package.json_ - ältere Versionen schlagen unter Windows fehl)

## Übungen

Verwandle eine dieser Anwendungen in eine PWA und verwende verschiedene Caching-Strategien:

- https://github.com/marko-knoebl/simple-todo-app
- https://github.com/marko-knoebl/simple-weather-app
- https://github.com/marko-knoebl/simple-stock-app

## Bonus (mit Build)

https://developers.google.com/web/tools/workbox/guides/codelabs/npm-script
