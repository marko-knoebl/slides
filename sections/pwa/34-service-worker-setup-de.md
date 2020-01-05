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
  // registration can be deferred until
  // completion of page load
  if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register('/serviceworker.js')
      .then(registration => {
        // is executed if there is a *new* sw file
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
