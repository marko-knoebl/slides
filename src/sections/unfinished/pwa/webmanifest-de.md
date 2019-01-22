# Beispielanwendung

https://github.com/marko-knoebl/simple-todo-app

Herunterladen und im Web Server for Chrome öffnen

Dann in Lighthouse ansehen

---

# Webmanifest-Datei und unsere erste PWA

Vorlage: Anwendung aus reinem HTML, CSS & JS

In Chrome Devtools: Application: No manifest detected

---

# Webmanifest-Datei

Minimal notwendige Schritte, um eine _installierbare_ PWA daraus zu machen:

```html
<link rel="manifest" href="manifest.webmanifest">
```

---

# Webmanifest-Datei

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

---

# Service Worker einbinden

Minimale Variante eines Service-Workers für Chrome:

```js
// main.js
navigator.serviceWorker.register('./service-worker.js');
```

---

# Service Worker einbinden

```js
// service-worker.js
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js'
);

workbox.routing.registerRoute(
  new RegExp('.*'),
  workbox.strategies.networkFirst()
);
```

---

# Ausprobieren: Installation in Chrome

mittels "add to homescreen"

???

neuen Report generieren mittels Lighthouse (55%)

---

# manifest.webmanifest: detailierte Konfiguration

https://developer.mozilla.org/en-US/docs/Web/Manifest

???

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

---

# Deployment auf bitballoon

Wichtig: Aufrufen über HTTPS

---
