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
- Benutzer hat mit der Anwendung in bestimmtem Maß interagiert

## App-Installation

Sobald alle Voraussetzungen erfüllt sind, wird das `beforeinstallprompt` Event ausgelöst; Wir können dieses Event abfangen und für später speichern

```js
let installPromptEvent;

window.addEventListener(
  'beforeinstallprompt',
  (ipEvent) => {
    // the browser is ready to show the install prompt
    ipEvent.preventDefault();
    installPromptEvent = ipEvent;
    showInstallBtn();
  }
);
```

## App-Installation

Sobald der Benutzer die Anwendung installieren möchte können wir das gespeicherte Event verwenden:

```js
installBtn.addEventListener('click', () => {
  // Show the prompt
  installPromptEvent.prompt();
  hideInstallBtn();
});
```

## Deployment

Hosting-Möglichkeiten zum Testen eines Deployments:

- <https://netlify.com/drop>
- <https://tiiny.host/> (Upload als ZIP-Datei)
