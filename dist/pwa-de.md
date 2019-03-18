# {{title}}

## Präsentation und Code

Präsentationen verfügbar unter: https://karuga.eu/courses-presentations

Code verfügbar unter: https://github.com/marko-knoebl/courses-code

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

## Vorstellung der Teilnehmer

- Name
- Firma
- Aktuelle Projekte
- Grund der Schulung
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

# Agenda

- Grundlagen zum Kurs: VS Code, Chrome Developer Tools
- Modernes JavaScript: ES2015+
- Webmanifest-Datei
- Promises
- Web Worker
- Service Worker
- Workbox
- Datenspeicher
- Benachrichtigungen
- Push-Benachrichtigungen

# Grundlagen zum Kurs

## Grundlagen zum Kurs (am Beispiel einer Todo-App)

- Arbeiten mit VS Code & Chrome
  - Prettier
  - Chrome Dev Tools
- ES2015+
  - Module
  - Pfeilfunktionen
  - const & let

## Chrome Plugins

- Web Server for Chrome:
  https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb
- Lighthouse:
  https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjks

# PWA Grundlagen

<!-- https://developers.google.com/web/ilt/pwa/ -->

## Grundprinzipien PWA

https://developers.google.com/web/ilt/pwa/why-build-pwa

- Brücke zwischen Web und Apps
- Im Browser, am Desktop und Mobil
- Web-Apps, die sich ganz wie native Apps anfühlen:
  - Dauerhafte Installation und Offline-Nutzung (service workers)
  - Lokale Speicherung von Anwendungsdaten (localstorage, indexedDB)
  - Scheint wie andere Apps im Menü auf (web-manifest)
  - Benachrichtigungen am Gerät darstellen (service workers)

<!-- google-präsentation bis S. 23 -->

## Browser-Unterstützung

Service Worker: ab Edge 17, ab iOS 11.3

manifest.json: ab Edge 17, ab iOS 11.3, kein Firefox

## Beispiele

- https://pwa.rocks
  - wiki offline
  - telegram
  - paper planes

# Beispielanwendung

https://github.com/marko-knoebl/simple-todo-app

Herunterladen und im Web Server for Chrome öffnen

Dann in Lighthouse ansehen

## Webmanifest-Datei und unsere erste PWA

Vorlage: Anwendung aus reinem HTML, CSS & JS

In Chrome Devtools: Application: No manifest detected

## Webmanifest-Datei

Minimal notwendige Schritte, um eine _installierbare_ PWA daraus zu machen:

```html
<link rel="manifest" href="manifest.webmanifest" />
```

## Webmanifest-Datei

manifest.webmanifest als JSON-Datei

```json
{
  "name": "Todo",
  "start_url": ".",
  "display": "standalone",
  "icons": [
    {
      "src": "images/icon-32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    ...
  ]
}
```

## Service Worker einbinden

Minimale Variante eines Service-Workers für Chrome:

```js
// main.js
navigator.serviceWorker.register('./service-worker.js');
```

## Service Worker einbinden

```js
// service-worker.js
importScripts(
  'https://storage.googleapis.com/' +
    'workbox-cdn/releases/3.2.0/workbox-sw.js'
);

workbox.routing.registerRoute(
  new RegExp('.*'),
  workbox.strategies.networkFirst()
);
```

## Ausprobieren: Installation in Chrome

mittels "add to homescreen"

<!-- neuen Report generieren mittels Lighthouse (55%) -->

## manifest.webmanifest: detailierte Konfiguration

https://developer.mozilla.org/en-US/docs/Web/Manifest

<!--

von hier einbinden:
https://developer.mozilla.org/en-US/docs/Web/Manifest

- name, short_name
- description: "Manage your todos"
- display: fullscreen / standalone / minimal-ui / browser
  - funktioniert im Chrome-Testserver nicht - erst beim richtigen deployen: standalone funktioniert
- orientation:

  - any
  - natural
  - landscape
    - landscape-primary
    - landscape-secondary
  - portrait
    - portrait-primary
    - portrait-secondary

- theme_color
  gleiche Farbe angebien wie unter:
  `<meta name="theme-color" content="...">`
- background_color: "#eeeeee"
- icons: zB im menü, im splash-screen

Lighthouse: 73%

[\* deployen auf bitballoon

- Seite aufrufen und auf https wechseln]
- lighthouse

-->

## Deployment auf bitballoon

Wichtig: Aufrufen über HTTPS

# Promises & Fetch

<!-- siehe auch: webdev/fetch -->
<!-- https://developers.google.com/web/fundamentals/primers/promises -->

## Promises & Fetch

_Promises_: eine Möglichkeit, um asynchronen Code in JavaScript auszuführen

_Fetch_: moderne Möglichkeit, Netzwerkanfragen mit JavaScript zu versenden, basiert auf Promises

## Promises - Grundlagen

Werden verwendet, um einmalige Events zu behandeln

Erlauben dem Browser, auf ein Event zu _warten_ - zb auf eine Antwort aus dem Netzwerk oder Daten aus der Datenbank

Das Warten ist _non-blocking_, damit kann anderer Code währenddessen ausgeführt werden

## Promises vs Callbacks

Promises sind eine Alternative zu Callbacks; Sie lösen das gleiche Problem mit einem etwas anderen Ansatz.

Beispiel: Funktion `getTodos`, die Todo-Daten von einem Server lädt und sie an `logTodos` übergibt

```js
// callback
getTodos(logTodos);
```

```js
// promise
getTodos().then(logTodos);
```

## Promises vs Callbacks

Ein Vorteil von Promises gegenüber Callbacks ist, dass Promises leicht verkettet werden können:

```js
getTodos()
  .then(parseJSON)
  .then(transformDataFormat)
  .then(logTodos);
```

## Promises Beispiel: Fetch einer Website

```js
// dieser Code kann zu jeder Website in der
// Browser-Konsole ausgeführt werden
const url = '/';

// eine Anfrage auf die Homepage einer Website starten
fetch(url)
  // auf die Antwort warten, dann den Textinhalt der Antwort auslesen
  .then(response => response.text())
  // auf den Textinhalt warten, dann loggen
  .then(console.log);
```

---

## Fetch einer Website: Erklärung

Das Abfragen einer URL und das Auslesen des Antworttexts können länger dauern.

Mit `.then()` warten wir jeweils auf das Resultat.

Die Funktion `.then()` bekommt einen Handler (in Form einer anderen Funktion) übergeben.

Das Resultat des ersten Handlers (`response => response.text()`) ist wiederum ein neues Promise.

Der zweite Handler (`console.log`) loggt das Resultat einfach.

## Beispiel: Landesflagge

```js
// ohne Promises
getImageName(country, name =>
  fetchFlag(name, flagResponse =>
    processFlag(flagResponse, appendFlag)
  )
);
```

```js
// mit Promises
getImageName(country)
  .then(fetchFlag)
  .then(processFlag)
  .then(appendFlag);
```

## Fehlerbehandlung

Fehler können mit `.catch()` behandelt werden

```js
return getImageName(country)
  .catch(getFallbackName)
  .then(fetchFlag)
  .then(processFlag)
  .then(appendFlag)
  .catch(logError);
```

## Todo App: fetch - grundlegend

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .catch(error => {
    console.log('error when getting todos');
  })
  .then(updatePageWithNewTodos);
```

---

## Todo App: fetch - fortgeschritten

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    if (!response.ok) {
      throw response.statusText;
    } else {
      jesponse.json().then(updatePageWithNewTodos);
    }
  })
  .catch(error => console.log('unable to parse data'))
  .then(updatePageWithNewTodos);
```

---

## Übung

Benutzer gibt user-id an, entsprechende todos werden geladen

## Konfigurieren des fetch Requests

```js
fetch(url, {
  method: 'POST',
  cache: 'no-cache',
  body: '{"text": "learn fetch"}',
  headers: { 'content-type': 'application/json' },
});
```

## Eigene Promises

Promise, die nach 1 Sekunde entweder mit hello antwortet oder nicht erfolgreich ist

```js
const getReply = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('hello');
    } else {
      reject('no access');
    }
  }, 1000);
});
```

## Promise.all

```js
const promise1 = fetch('/users.json');
const promise2 = fetch('/articles.json');
Promise.all([promise1, promise2])
  .then(results => {
    console.log('all data has loaded');
  })
  .catch(error => {
    console.log(`one or more requests failed: ${error}`);
  });
```

<!--
# (Promise.race)

TODO: google code lab - code-beispiele durchsehen
-->

## Übungen

- https://developers.google.com/web/ilt/pwa/lab-fetch-api

- https://developers.google.com/web/ilt/pwa/lab-promises

# Web worker

## Web worker

Möglichkeit, Scripts im Hintergrund (in einem eigenen Thread) laufen zu lassen

Können genutzt werden, um intensive Berechnungen durchzuführen - blockieren die User-Interaktion mit der Website nicht.

## Worker erstellen

```js
const worker = new Worker('worker.js');
```

## Auf Antwort des Workers lauschen

```js
worker.onmessage = function(message) {
  console.log(message.data);
};
```

## Dem Worker zu arbeiten geben

```js
worker.postMessage(42);
```

## Im Worker selbst

```js
onmessage = function(message) {
  const result = longComputation();
  postMessage(result);
};
```

## Daten übergeben

Beim hin-und-her-Übergeben von Daten: Daten werden kopiert und als 'plain' JS-Objekte verwertet

## Übung: Fibonacci

Im WebWorker laufen lassen:

```js
function fib(n) {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
```

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

# Workbox

Library, die das Verwenden von ServiceWorkern erleichtert

https://developers.google.com/web/tools/workbox/

## Einfaches Beispiel: Offline-Anwendung

zuvor:

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

mit Workbox:

```js
workbox.precaching.precache(urlsToCache);
```

## Einfaches Beispiel: Offline-Anwendung

zuvor:

```js
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request));
});
```

## Einfaches Beispiel: Offline-Anwendung

mit Workbox:

```js
workbox.routing.registerRoute(
  '.*',
  workbox.strategies.cacheOnly
);
```

## Mögliche Strategien

- networkOnly
- cacheOnly
- networkFirst
- cacheFirst
- staleWhileRevalidate

siehe auch: [offline Cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/)

## Strategie: networkOnly

Vom Browser bekannte Strategie

## Strategie: cacheOnly

Resource wird immer aus dem Cache geladen.

Sie sollte beim install-Event dem Cache hinzugefügt werden.

Frage: Was passiert, wenn beim install-Event der Cache nicht vollständig heruntergeladen werden konnte?

<!--
Antwort: in diesem Fall wird der Service-Worker nicht aktiviert. Um das sicherzustellen dient das `.waitUntil()` im install-Event
-->

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

# Datenspeicherung

### localStorage und indexedDB

## Überblick

- localStorage: einfacher key-value-Store mit Textwerten)
- indexedDB: "echte Datenbank"

## localStorage

wichtige Methoden:

- `localStorage.setItem('name', 'John')`
- `localStorage.getItem('name')`
- `localStorage.removeItem('name')`

## localStorage

Verwendung für Todos:

```js
const todoString = JSON.stringify(todos);
localStorage.setItem('todos', todoString);
```

```js
const todoString = localStorage.getItem('todos');
todos = JSON.parse(todoString);
```

## indexedDB

Echte Datenbank

Vorteile gegenüber localStorage:

- non-blocking
- schneller (Abfrage mit Indizes)
- Aufteilung in "Tabellen" (stores)
- verschiedene Datentypen

## indexedDB promised (idb)

library, die es erlaubt, bei indexedDB mit Promises zu arbeiten

https://github.com/jakearchibald/idb

Einbinden über CDN: https://cdn.jsdelivr.net/npm/idb@2.1.2/lib/idb.min.js

## idb Grundlagen

## idb Grundlagen: open & upgrade

Erstellen / Öffnen einer DB; gibt ein Promise zurück

```js
idb.open(name, version, upgradeCallback);
```

## idb Grundlagen: open & upgrade

Beispiel

```js
const upgradeCallback = upgradeDb => {
  if (!upgradeDb.objectStoreNames.contains('todos')) {
    upgradeDb.createObjectStore('todos', {
      autoIncrement: true,
      keyPath: 'key',
    });
  }
};

const dbPromise = idb.open('todo-db', 1, upgradeCallback);
```

## Upgrade

upgrade = callback, das insbesondere genutzt werden kann, um auf ein neues Datenschema zu wechseln

zb können darin Stores erstellt, gelöscht oder abgeändert werden

Callbackfunktion wird immer aufgerufen, wenn sich die Versionsnummer der Datenbank erhöht

## Keys

Jedes Element im object store hat einen einzigartigen key (~id);

Der key kann ein Eintrag im Objekt sein oder ein unabhängiger Wert

## Keys: numerische id

```js
upgradeDb.createObjectStore('todos', {
  autoIncrement: true,
});
```

## Keys: numerische id, die im Objekt abgespeichert wird

```js
upgradeDb.createObjectStore('todos', {
  autoIncrement: true,
  keyPath: 'key',
});
```

## Keys: Eintrag im Objekt

```js
// email als id
upgradeDb.createObjectStore('users', { keyPath: 'email' });
```

## Transaktionen

Transaktion = Gruppe von Operationen auf der Datenbank (auslesen / hinzufügen / überschreiben ...)

## Transaktionen - Schritte

1.  Datenbankobjekt holen (idb.open)
2.  Eine Transaktion auf einem oder mehreren Stores beginnen (zwei Modi: 'readonly' (Standard) oder 'readwrite')
3.  Object Store öffnen
4.  Operation auf Object Store ausführen

## Datenbankobjekt holen

```js
let db;

idb.open('todo-db', 1).then(openedDb => {
  db = openedDb;
});
```

## Daten hinzufügen (add)

```js
const transaction = db.transaction(['todos'], 'readwrite');
const todoStore = transaction.objectStore('todos');
todoStore.add({ text: 'groceries', done: false });
```

## Daten überschreiben (put)

```js
const transaction = db.transaction(['todos'], 'readwrite');
const todoStore = transaction.objectStore('todos');
// ersetze den Eintrag mit index 1
todoStore.put({ text: 'groceris', done: true, key: 1 });
```

## Daten löschen

```js
const transaction = db.transaction(['todos'], 'readwrite');
const todoStore = transaction.objectStore('todos');
todoStore.delete(1);
```

## Daten auslesen (getAll)

```js
const transaction = db.transaction(['artists'], 'readonly');
const artistsStore = transaction.objectStore('artists');
artistsStore.getAll().then(console.log);
```

## Daten auslesen (get)

Auslesen anhand des keys:

```js
const transaction = db.transaction(['artists'], 'readonly');
const artistsStore = transaction.objectStore('artists');
artistsStore.get(1).then(console.log);
```

## Daten auslesen - via indizes

Die Einträge werden in der Datenbank im wesentlichen nach dem key sortiert abgelegt.

Dadurch kann von der Datenbank schnell nach dem key gesucht werden.

Beispiel: In einem Telefonbuch kann man schnell nach einem Nachnamen suchen, jedoch nicht nach einem Vornamen oder einer Telefonnummer

## Indizes

Um schnell nach etwas anderem als dem primary key zu suchen: zusätzlicher Index (aber: größerer Datenverbrauch)

```js
const store = upgradeDb.createObjectStore('contacts');
store.createIndex('email', 'email', { unique: true });
store.createIndex('firstName', 'firstName');
store.createIndex('name', ['lastName', 'firstName']);
```

## Indizes

```js
const nameIndex = objectStore.index('name');
nameIndex.get(['Andy', 'Jones']).then(...)
```

## Übungen

- Slides: https://developers.google.com/web/ilt/pwa/working-with-indexeddb-slides
- Lab: https://developers.google.com/web/ilt/pwa/lab-indexeddb

# Notifications

siehe auch: https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API

## Notifications

Möglichkeit, für den Benutzer Benachrichtigungen außerhalb der Anwendung darzustellen (Betriebssystems-Benachrichtigungen)

## Erlaubnis einholen

```js
// sw.js
Notification.requestPermission(status => {});
```

Kann in Browser-Konsole ausprobiert werden (aber es muss eine Seite offen sein)

## Überprüfen, ob Erlaubnis erteilt wurde und Nachricht darstellen

```js
if (Notification.permission === 'granted') {
  navigator.serviceWorker
    .getRegistration()
    .then(registration => {
      registration.showNotification('Hello!');
    });
}
```

## Nachricht-Optionen

```js
registration.showNotification(condition, {
  body: `The weather in ${cityName} is: ${condition}`,
  icon: iconUrl,
  vibrate: [100, 50, 100],
  actions: [
    { action: 'close', title: 'Close' },
    { action: 'details', title: 'Details' },
  ],
});
```

## Nachrichten-Events

Zwei Events im ServiceWorker:

- **notificationclick**
- notificationclose

<!--
evtl in Firefox testen, da Probleme mit Chrome
-->

<!--
# Kommunikation zurück zum Browser-Fenster

eher komplex, da es verschiedene Fenster zu einem Service-Worker geben kann

-->

## Übungen (Labs)

https://developers.google.com/web/ilt/pwa/lab-integrating-web-push

1-3

Entfernen der service-worker in FF: about:debugging -> worker

<!--
Dauer: ca 50 min
-->

# Resourcen

https://developers.google.com/web/ilt/pwa/

