# Workbox

## Strategie: networkOnly

Vom Browser bekannte Strategie

## Strategie: networkFirst

Ein Laden aus dem Netzwerk wird versucht; wenn das fehlschlägt, wird aus dem Cache geladen

## Strategie: cacheFirst

Falls es eine Resource im Cache gibt, wird diese direkt aus dem Cache geladen. Ansonsten wird aus dem Netzwerk geladen.

## Strategie: staleWhileRevalidate

Ähnlich wie cacheFirst - nur wird im Hintergrund der Cache aktualisiert, sodass beim nächsten Mal die aktuelle Resource zur Verfügung steht

## Strategie: cache - then network

Ähnlich wie staleWhileRevalidate - nur wird die Seite sofort aktualisiert, wenn die neuere Resource zur Verfügung steht.

Diese Strategie benötigt auch Code _außerhalb_ des ServiceWorkers.

Siehe: [Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/#cache-then-network)

## Aufgaben

https://developers.google.com/web/tools/workbox/

1-2 der vorgegebenen Anwendungen zu einer PWA machen und dabei verschiedene Caching-Strategien ausprobieren:

- https://github.com/marko-knoebl/simple-todo-app
- https://github.com/marko-knoebl/simple-weather-app
- https://github.com/marko-knoebl/simple-stock-app

(Hosting via bitballoon)

## Zusatz (mit build-Prozess)

https://developers.google.com/web/tools/workbox/guides/codelabs/npm-script
