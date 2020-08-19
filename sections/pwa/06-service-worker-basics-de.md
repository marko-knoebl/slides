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

## Service worker in den Browser Tools betrachten

Chrome: developer tools (F12) ➡ _Application_ ➡ _Service Workers_

Firefox: gehe zu _about:debugging_ ➡ _dieser Firefox_ ➡ _Service Worker_
