# Service Worker und Workbox

## Service Worker - Motivation

Service Worker = "Mittelmann" (Proxy) zwischen Webbrowser und Server (als Teil des Browsers)

Haupteinsatzgebiet: Offlinenutzung von Webseiten / Webanwendungen (Ersetzt die alte AppCache-Funktionalität)

## Service Worker

### Traditionelle Web-App:

Endgerät ⟺ Web Server

### PWA:

Endgerät ⟺ Service Worker ⟺ Web Server

## Grundlagen

service worker = Skript, das im Hintergrund läuft

Funktionen:

- Caching von Resourcen
- Sync im Hintergrund
- Push-Benachrichtigungen (auch wenn Browser / Anwendung geschlossen)

Wichtige Funktionalität: Im Hintergrund Netzwerkanfragen abfangen und behandeln

## Grundlagen

Service-Worker sind besondere Web-Worker, daher:

- kein direkter Zugriff auf das DOM
- Kommunikation mit Hauptthread mittels postMessage

## Browser-Unterstützung

[caniuse](https://caniuse.com/##feat=serviceworkers)

Wenn ServiceWorker unterstützt werden => Unterstützung für ES2015

## Wichtige verwandte Technologien

- fetch (Senden von Netzwerkanfragen)
- cache (Resultate von Netzwerkanfragen cachen)

## Fetch - Kurzes Beispiel

```js
// dieser Code kann zu jeder Website in der
// Browser-Konsole ausgeführt werden
const url = '/';

fetch(url)
  .then(response => response.text())
  .then(console.log);
```

## Cache - Kurzes Beispiel

```js
// alle Netzwerkanfragen werden gecacht
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('my-cache').then(cache =>
      cache.match(event.request).then(response => {
        cache.put(event.request, response.clone());
        return response;
      })
    )
  );
});
```

## ServiceWorker registrieren

```js
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('./serviceworker.js')
    .then(
      // wird nur ausgeführt, wenn *neue* serviceworker.js -
      // Datei gefunden wurde,
      // die verschieden von einer eventuellen alten ist
      () => console.log('Service Worker registered')
    );
}
```

<!-- Nur erklären, nicht selbst implementieren -->

## ServiceWorker - Events

Folgende Events können im ServiceWorker behandelt werden:

- **install**: wenn es eine neue ServiceWoker-Datei gibt
- **activate**: wenn der neue ServiceWorker aktiviert wird
- **fetch**: bei jeder Netzwerk-Kommunikation
- **push**: vom Backend initiiert
- **message**: Kommunikation mit dem Hauptthread
- **sync**: Anfrage an den Server, die wiederholt versucht wird (nur Chrome)

## ServiceWorker - Events: Install

Tritt auf, wenn es eine neue ServiceWorker-Datei gibt:

- Erster Aufruf einer PWA
- ServiceWorker-Datei hat sich geändert

Guter Zeitpunkt, um Resourcen für die spätere Verwendung herunterzuladen und dem Cache hinzuzufügen

## ServiceWorker - Events: Install

```js
self.addEventListener('install', event => {
  console.log(event);
});
```

## ServiceWorker - Events: Activate

Tritt auf, wenn ein neuer ServiceWorker aktiviert wird:

- Bei erster Installation eines ServiceWorkers sofort
- Wenn sich die ServiceWorker-Datei geändert hat beim "Neustart" der PWA (wenn alle entsprechenden Tabs geschlossen wurden)

Ein geänderter ServiceWorker wird erst nach einem "Neustart" der PWA aktiv

Activate: gute Gelegenheit, um alte Caches zu bereinigen

## ServiceWorker - Events: Activate

```js
self.addEventListener('activate', event => {
  console.log(event);
});
```

## ServiceWorker - Events: Fetch

Für jede Netzwerkkommunikation

<!-- Beispiel: Netzwerkanfragen loggen -->

## ServiceWorker - Events: Message

Kommunikation mit dem Haupt-Thread (wie bei WebWorkern)

## ServiceWorker - Events: Sync

Warten auf Netzwerk-Konnektivität, um Daten zu senden

Wenn Netzwerk-Konnektivität besteht, aber der sync trotzdem fehlschlägt (das selbstdefinierte Promise rejected wird), werden neue Versuche mit immer größeren Zeitabständen unternommen

## fetch und cache: Anwendungsbeispiele

- Beim ersten Aufruf eines Spiels werden alle benötigten Resourcen heruntergeladen und sind dann offline verfügbar
- Bei einer Chat-Anwendung werden die Avatare aller Freunde im Cache abgelegt. Sie sollen einmal pro Tag aktualisiert werden.
- Bei einer Wikipedia-Anwendung werden die letzten 30 besichtigten Artikel im Cache abgelegt.
- Die Startseite eines Nachrichtenportal soll zwischengespeichert werden und beim öffnen der Seite sofort erscheinen. Danach soll sie allerdings wenn möglich sofort aktualisiert werden

## Einfaches Beispiel: Offline-Anwendung

Anwendung, die alle benötigten Resourcen beim ersten Mal herunterlädt und dann so beibehält.

## Einfaches Beispiel: Offline-Anwendung

```js
const cacheName = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/main.css',
  '/main.js',
];
```

## Einfaches Beispiel: Offline-Anwendung

Install-Handler

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

## Einfaches Beispiel: Offline-Anwendung

Install-Handler

```js
event.waitUntil(
  ...
)
```

`waitUntil`: wartet auf die Installation und zeigt an, ob diese erfolgreich war

## Einfaches Beispiel: Offline-Anwendung

Activate-Handler (alte Caches löschen)

```js
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(oldCacheName => {
          if (oldCacheName !== cacheName) {
            return caches.delete(oldCacheName);
          }
        })
      );
    })
  );
});
```

<!--
Ursprünglich war hier
return self.clients.claim();
im Code
-->

## Einfaches Beispiel: Offline-Anwendung

Fetch-Handler

```js
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request));
});
```

## Übung: "Scripting the Service Worker"

https://developers.google.com/web/ilt/pwa/lab-scripting-the-service-worker
