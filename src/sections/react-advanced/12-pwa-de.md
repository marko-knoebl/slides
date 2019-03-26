# PWAs

Progressive Web Apps mit React

## PWAs

Progressive Web Apps: Möglichkeit, Anwendungen für Mobilgeräte und PCs mit HTML, CSS und JavaScript zu schreiben

Mit `create-react-app` erstellte Anwendungen bieten dafür schon die Grundvoraussetzungen:

- Konfiguration in `public/manifest.json`
- PWA-Boilerplate in `src/serviceWorker.js`

## PWAs: Aktivierung

in `index.js` / `index.tsx`:

```js
serviceWorker.register();
```

## PWAs: Konfiguration

Via `public/manifest.json`:

name, short_name

## PWAs: Logos konfigurieren

Hinzufügen von Logos in den Formaten `144x144px`, `192x192px` und `512x512px` (in manifest.json)

## PWA: add to homescreen

https://developers.google.com/web/fundamentals/app-install-banners/

## PWA: add to homescreen

```js
let deferredPrompt;

componentDidMount() {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    this.setState({ showInstallBtn: true });
  });
}
```

## PWA: add to homescreen

```js
handleInstallBtnClicked = () => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === 'accepted') {
      console.log('user accepted');
    } else {
      console.log('user dismissed');
    }
    deferredPrompt = null;
    this.setState({ showInstallBtn: false });
  });
};
```

## PWA: Deployment auf netlify

- `npm run build`
- dist-Ornder via drag&drop auf app.netlify.com/drop
- Manuell auf https wechseln - in Chrome am Desktop und Mobilgerät ausprobieren
