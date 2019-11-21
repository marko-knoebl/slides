# Progressive Web Apps

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

- Aktuelle Projekte
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

# Agenda

## Agenda - Grundlagen

- VS Code, Chrome Developer Tools
- modern JavaScript
- Promises
- Web Worker

## Agenda

- Webmanifest-Datei
- Service Worker
  - Workbox
  - Service Worker schreiben
- Datenspeicher
  - localStorage
  - indexedDB
- Benachrichtigungen und Push-Benachrichtigungen

# Grundlagen zum Kurs

## Grundlagen zum Kurs (am Beispiel einer Todo-App)

- Arbeiten mit VS Code & Chrome
  - Prettier
  - Chrome Dev Tools
- ES2015+
  - Module
  - Pfeilfunktionen
  - const & let
- einen lokalen Entwicklungsserver starten

## lokaler Entwicklungsserver

npm-Paket `http-server`

```bash
npm install -g http-server
http-server
```

# VS Code

## VS Code

https://code.visualstudio.com

Open-Source-Entwicklungsumgebung

Unabhängig vom eigentlichen Visual Studio

## VS Code: Ordner öffnen

ganzen Ordner öffnen mit _File_ - _Open Folder_

## VS Code: Datei-Explorer, Split Editor

## VS Code: Terminal

Öffnen und Schließen der Ansicht via _Strg_ + _Ö_

zusätzliches Terminal via Symbol _+_

übernimmt das aktuell geöffnete Verzeichnis

## VS Code - Konfiguration

Via _File - Preferences - Settings_

Eingeteilt in _User Settings_ und _Workspace Settings_

## VS Code - Konfigurationsmöglichkeiten

Empfehlungen:

- Accept Suggestion on Commit Character (Autovervollständigung ohne _Enter_): _deaktivieren_
- Tab Size: _2_ oder _4_

Weitere Möglichkeiten:

- Auto Save
- Format on Save
- Word Wrap
- EOL
- Workbench: Color Theme

## VS Code - Befehle

_F1_ oder _Ctrl_ + _Shift_ + _P_: Befehlspalette

- durchsuchbar
- zeigt Kurzbefehle an

Beispiele für Befehle:

- _Find_
- _Search: Find in Files_
- _Format Document_
- _Toggle line comment_ / _Toggle block comment_
- _Go to definition_ / _Peek definition_ (nur für bestimmte Dateitypen)
- _Rename symbol_ (nur für bestimmte Dateitypen)

## VS Code - Mehrere Textcursor

- _Ctrl_ + _F2_: Mehrere Textcursor setzen
- _Alt_ + Mausklick: Mehrere Textcursor setzen

# PWA Grundlagen

<!-- https://developers.google.com/web/ilt/pwa/ -->

## PWA Grundlagen

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

Service worker:

https://caniuse.com/#search=service%20workers

Web app manifest:

https://caniuse.com/#search=manifest

indexedDB:

https://caniuse.com/#search=indexeddb

## Beispiele

- https://pwa.rocks
  - wiki offline
  - telegram
  - paper planes

## Chrome audit

Entwicklerwerkzeuge - audits

# Service Worker Gundlagen

## Service Worker - Motivation

Service Worker sind ein Kernelement von PWAs. Sie dienen als lokaler Proxy zwischen dem Web Browser und dem Server.

Haupteinsatzgebiet: Offlinenutzung / schnellere Nutzung von Web Apps (Ersatz für die veraltete AppCache-Funktion)

## Service Worker - Nutzungsbeispiele

- _Spiel_: Beim ersten Laden werden alle benötigten Resourcen heruntergeladen und stehen forthin offline zur Verfügung
- _Chat-Anwendung_: Die Avatare aller Freunde werden in einem Cache abgelegt; sie werden täglich aktualisiert
- _Wikipedia-Anwendung_: Die letzten 30 besuchten Artikel werden gecacht
- _Nachrichten-Anwendung_: Die Startseite mit Artikeln soll gecacht werden und beim Öffnen sofort verfügbar sein; Danach wird sie sofern möglich aktualisiert

## Service Worker

### Traditionelle Web-App:

Endgerät ⟺ Web Server

### PWA:

Endgerät ⟺ Service Worker ⟺ Web Server

## Service Worker - Grundlagen

service worker = Skript, das im Hintergrund läuft

Funktionen:

- Caching von Resourcen
- Sync im Hintergrund
- Push-Benachrichtigungen (auch wenn Browser / Anwendung geschlossen)

## Service Worker - Registrierung

Wir rufen `.register()` auf und übergeben den Pfad des Service Worker Skripts

```js
// main.js
navigator.serviceWorker.register('./serviceWorker.js');
```

```js
// serviceWorker.js
console.log('this is the service worker');
```

## Service Worker

Service worker in den Browser Tools betrachten:

in Chrome: Dev Tools unter _Application_ - _Service Workers_

in Firefox: unter `about:debugging#workers`

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

# Web App Manifest

## Web App Manifest

Das web app manifest ist eine json Datei, die Informationen zu einer Webanwendung beinhaltet.

Durch Bereitstellung einer manifest Datei kann die Installation einer PWA ermöglicht werden.

## Manifest-Datei

einbinden via:

```html
<link rel="manifest" href="manifest.json" />
```

## Manifest-Datei

```json
{
  "name": "Todo",
  "short_name": "Todo",
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

## Manifest-Datei: Einträge

https://developer.mozilla.org/en-US/docs/Web/Manifest

## Manifest-Datei: Einräge

essentielle Einträge in Chrome:

- `name`
- `short_name`
- `start_url`
- `icons` - verwendet im Menü, im Splash Screen; für Chrome sollten icons der folgenden Größen bereitgestellt werden: `144`, `192`, `512`
- `display`: `fullscreen` / `standalone` / `minimal-ui` / `browser`

## Manifest-Datei: Einträge

- `background_color` - sollte die gleiche Farbe sein wie die CSS-Hintergrundfarbe der Anwendung
- `description`
- `orientation`:
  - `any`
  - `natural`
  - `landscape` (`landscape-primary`, `landscape-secondary`)
  - `portrait` (`portrait-primary`,
    `portrait-secondary`)
- `theme_color`

## Meta tags in HTML

Diese Mata Tags sind hilfreich:

- in Chrome: Android Fensterfarbe: `<meta name="theme-color" content="..." />` - das sollte das gleiche sein wie `theme_color` in der Manifest-Datei
- in iOS: `<meta name="apple-mobile-web-app-capable" content="yes">` - versteckt das Browser UI

# App-Installation

## App-Installation

Browser können die Möglichkeit bieten, für PWAs Einträge zum Startmenü / zum Homescreen hinzuzufügen

## App-Installation unter Chrome und iOS

Unter iOS können Benutzer einen Shortcut zu jeder Website zum Menü hinzufügen. Für PWAs funktioniert das auf die gleiche Art.

Bei Chrome können PWAs den Benutzer zur Installation auffordern. Installierte PWAs verhalten sich anders als Webseiten - z.B. erscheinen sie in einem seperaten Fenster.

## App-Installation

für Chrome:

https://developers.google.com/web/fundamentals/app-install-banners/

## App-Installation

Voraussetzung, um den App-Installations-Dialog anzuzeigen:

- Manifest-Datei beinhaltet:
  - _short_name_ oder _name_
  - Icons der Größen 192px und 512px
  - _start_url_
  - _display_ ist entweder _fullscreen_, _standalone_ oder _minimal-ui_
- HTTPS aktiv
- es gibt einen aktiven Service Worker (mit einem fetch Event handler)
- Benutzer hat mit der Domain zumindest 30 Sekunden interagiert

## App-Installation

Sobald alle Voraussetzungen erfüllt sind, wird das `beforeinstallprompt` Event ausgelöst; Wir können dieses Event abfangen und für später speichern

```js
let installPromptEvent;

window.addEventListener('beforeinstallprompt', event => {
  // the browser is ready to show the install prompt
  event.preventDefault();
  installPromptEvent = event;
  showInstallBtn();
});
```

## App-Installation

Sobald der Benutzer die Anwendung installieren möchte können wir das gespeicherte Event verwenden:

```js
installBtn.addEventListener('click', () => {
  hideInstallBtn();
  // Show the prompt
  installPromptEvent.prompt();
});
```

## Deployment

Deployment z.B. auf https://app.netlify.com/drop

Wichtig: Aufrufen über HTTPS

# Service worker

## Service worker

Service worker sind client-seitige Proxies zwischen Webbrowser und Server.

Service worker können Resourcen cachen und sie entweder aus dem Netzwerk oder dem internen Cache abrufen.

## Service worker

Es läuft zu jeder Domain / registrierten URL genau ein ServiceWorker

Service worker sind besondere Web-Worker, daher:

- kein direkter Zugriff auf das DOM
- Kommunikation mit Hauptthread mittels postMessage

## Browser Unterstützung

[caniuse](https://caniuse.com/##feat=serviceworkers)

Serviceworker werden unterstützt => ES2015 wird unterstützt

## Verwandthe Technologien

- fetch (Netzwerkanfragen senden)
- cache (Netzwerkanfragen cachen)

# Asynchrones JavaScript

## Asynchrones JavaScript

Siehe Präsentation [Javascript: async and network requests](javascript-async-and-network-requests-de.html)

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

# Service Worker Setup

## Service Worker Lebenszyklus

- register
- install
- activate
- (unregister)

## Einen Service Worker registrieren

Jedes Mal wenn eine Seite geladen wird, rufen wir `navigator.serviceWorker.register` mit der URL des Service Workers als Parameter auf. Wenn eine neue oder geänderte Service Worker Datei gefunden wird, wird diese _installiert_.

## Einen Service Worker registrieren

```js
window.addEventListener('load', () => {
  // registration can be defered until
  // completion of page load
  if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register('/serviceworker.js')
      .then(registration => {
        // is executed if there's a *new* sw file
        console.log(
          `SW registered for ${registration.scope}`
        );
      })
      .catch(/* reg failed */);
  }
});
```

## Service Worker Scope

Üblicherweise behandelt ein Service Worker alle Anfragen, die auf dem Server in seinem "Ordner" liegen.

```js
navigator.serviceWorker.register('/css/serviceworker.js');
```

Der Service Worker behandelt Anfragen an _ /css/default.css_, aber nicht an _/index.html_.

Wir können einen Service Worker auch weiter einschränken:

```js
navigator.serviceWorker.register('/css/serviceworker.js', {
  scope: '/css/xyz/
})
```

## Service Worker Installation

Das `install` Event wird ausgelöst, wenn es eine neue Service Worker Datei gibt:

- beim ersten Besuch der Seite
- wenn sich die Service Worker Datei geändert hat

Guter Zeitpunkt, um Resourcen für die spätere Verwendung herunterzuladen und dem Cache hinzuzufügen

## Service Worker Installation

```js
self.addEventListener('install', event => {
  console.log(event);
});
```

## Service Worker Aktivierung

Wenn zuvor kein Service Worker vorhanden war, wird der Service Worker sofort nach der Installation aktiv

Wenn zuvor ein anderer Service Worker vorhanden war, wird dieser nach einem "Neustart" der Anwendung aktiv (wenn alle entsprechenden Tabs geschlossen wurden)

Event `activate`: gute Gelegenheit, um alte Caches zu bereinigen

## Service Worker Aktivierung

```js
self.addEventListener('activate', event => {
  console.log(event);
});
```

## Service Worker Aktivierung

Wir können eine sofortige Aktivierung eines neuen Service Workers aus dem `install`-Event veranlassen:

```js
self.addEventListener('install', event => {
  self.skipWaiting();
});
```

## Service Worker Deinstallieren

Deinstallation aller Service Worker für diese Domain:

```js
navigator.serviceWorker
  .getRegistrations()
  .then(function(registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
```

# Service Worker mit fetch und cache

## Service Worker mit fetch und cache

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

# Datenspeicherung

### localStorage und indexedDB

## Überblick

- localStorage: einfacher key-value-Store mit Textwerten)
- indexedDB: "echte Datenbank"

# localStorage

## localStorage

_localStorage_ ist ein einfacher key-value-Store im Browser; Sowohl _keys_ als auch _values_ sind strings

Der Browser speichert Daten seperat für jede Domain

## localStorage

wichtige Methoden:

- `localStorage.setItem('name', 'John')`
- `localStorage.getItem('name')`
- `localStorage.removeItem('name')`

## localStorage

Speichern und Laden von Daten:

```js
const todoString = JSON.stringify(todos);
localStorage.setItem('todos', todoString);
```

```js
const todoString = localStorage.getItem('todos');
todos = JSON.parse(todoString);
```
# indexedDB

## indexedDB

Vollwertige Datenbank

Vorteile gegenüber localStorage:

- non-blocking
- schneller (Abfrage mit Indizes)
- Aufteilung in "Tabellen" (stores)
- verschiedene Datentypen

Nachteil: Komplexeres Interface

## indexedDB Interfaces

- idb
- dexie
- localForage

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
upgradeDb.createObjectStore('users', {
  keyPath: 'email',
});
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

<!-- siehe auch: https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API -->

## Notifications

Möglichkeit, für den Benutzer Benachrichtigungen außerhalb der Anwendung darzustellen (Betriebssystems-Benachrichtigungen)

## Erlaubnis einholen

```js
let notificationsAllowed;

Notification.requestPermission().then(result => {
  if (result === 'granted') {
    notificationsAllowed = true;
  }
});
```

Kann zu jeder Seite in der Browser-Konsole ausprobiert werden

## Nachricht darstellen

```js
if (Notification.permission === 'granted') {
  new Notification('Hello world');
}
```

## Nachricht-Optionen

```js
new Notification('cloudy', {
  body: 'The weather in Vienna is cloudy',
  icon: 'static/images/cloudy.png',
  vibrate: [100, 50, 100],
});
```

# Benachrichtigungen aus dem Service Worker

## Benachrichtigungen aus dem Service Worker

Die bisherigen Benachrichtigungen stammten aus einem bestimmten Browser-Fenster. Benachrichtigungen können auch aus dem Service Worker dargestellt werden. Diese Benachrichtigungen bieten mehr Möglichkeiten, insbesondere:

- Mit den Benachrichtigungen kann über Buttons interagiert werden
- Benachrichtigungen können angezeigt werden, wenn die Website nicht geöffnet ist

## Zugriff auf die Service Worker Registrierung:

```js
let serviceWorkerRegistration;

navigator.serviceWorker
  .getRegistration()
  .then(registration => {
    serviceWorkerRegistration = registration;
  });
```

## Benachrichtigungen aus dem Service Worker

```js
serviceWorkerRegistration.showNotification('cloudy', {
  body: 'The weather in Vienna is cloudy',
  icon: 'static/images/cloudy.png',
  vibrate: [100, 50, 100],
  // new option available:
  actions: [
    { action: 'close', title: 'Close' },
    { action: 'details', title: 'Details' },
  ],
});
```

## Auf Benachrichtigungsaktionen reagieren

Zwei Events im ServiceWorker:

- `notificationclick`
- `notificationclose`

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

# Push-Benachrichtigungen

## Push-Benachrichtigungen

- Möglichkeit, Benachrichtigungen von einem Server zu unserer PWA senden
- funktioniert auch, wenn die Anwendung nicht läuft (Am Desktop muss allerdings zumindest eine Instanz des Browsers geöffnet sein)

## Push-Benachrichtigungen - Grundlagen

<img src="assets/push-message.svg" type="text/svg" style="width: 100%">

## Push-Benachrichtigungen - Grundlagen

Push-Benachrichtigungen werden über den Browserhersteller (Google, Mozilla, ...) gesendet. Dies geschieht über URLs wie diese:

- `https://android.googleapis.com/gcm/send/IDENTIFIER`
- `https://updates.push.services.mozilla.com/wpush/v1/IDENTIFIER`

## Push-Benachrichtigungen - Ablauf

<img src="assets/push-message-authentication.svg" type="text/svg" style="width: 100%">

## Push-Benachrichtigungen - Ablauf

- Benutzer besucht eine Web App, aktiviert Benachrichtigungen
- Web App kommuniziert mit dem Browserhersteller; der Browserhersteller generiert eine eindeutige URL und einen kryptographischen Schlüssel und übergibt diese an den Browser
- Web App teilt diese URL mit dem Backend
- Aus dem Backend können wir mit Hilfe dieser Daten Nachrichten an den Service Worker schicken

## Push-Benachrichtigungen

Aktivierung im Browser:

```js
serviceWorkerRegistration.pushManager
  .subscribe({
    userVisibleOnly: true,
  })
  .then(subscription => {
    console.log(subscription.endpoint);
    // could be: https://android.googleapis.com/gcm/send/..
  });
```

## Push-Benachrichtigunen

Aktuelle Subscription auslesen:

```js
serviceWorkerRegistration.pushManager
  .getSubscription()
  .then(subsription => {
    if (subscription === undefined) {
    } else {
      console.log(JSON.stringify(subscription.toJSON()));
      // send the subscription object to our server
    }
  });
```

## Push-Benachrichtigungen - Das Subscription-Objekt

Sobald wir diese Daten am Server haben, können wir Benachrichtigungen an den Client senden

```json
{
  "endpoint": "https://android.googleapis.com/gcm/send/f2L...",
  "keys": {
    "auth": "5I2BuN...",
    "p256dh": "BLc45n..."
  }
}
```

## Push-Benachrichtigungen - serverseitig

in node.js:

```js
const webPush = require('web-push');

const subscripton = {
  endpoint: '...',
  keys: { auth: '...', p256dh: '...' },
};

webPush.sendNotification(subscription, 'Hello world!');
```

## Push-Benachrichtigungen in Chrome

In Chrome werden Push-Benachrichtigungen via _Firebase Cloud Messaging_ (früher: _Google Cloud Messaging_) gesendet

Für die Entwicklung benötigen wir einen Firebase Account und API key

```js
webPush.sendNotification(subscription, 'Hello world!', {
  gcmAPIKey: '....',
});
```

## Push-Benachrichtigungen: Lab

https://developers.google.com/web/ilt/pwa/lab-integrating-web-push

# Resourcen

https://developers.google.com/web/ilt/pwa/

