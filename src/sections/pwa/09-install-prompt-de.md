# App-Installation

## App-Installation

In Chrome ist es möglich, dem Benutzer das Installieren einer Anwendung anzubieten - durch Hinzufügen zum Menü / Home Screen.

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
installBtn.addEventListener('click', e => {
  hideInstallBtn();
  // Show the prompt
  installPromptEvent.prompt();
});
```

## Deployment

Deployment z.B. auf https://app.netlify.com/drop

Wichtig: Aufrufen über HTTPS
