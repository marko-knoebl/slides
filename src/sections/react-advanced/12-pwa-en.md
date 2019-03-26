# PWAs

Progressive Web Apps with React

## PWAs

**Progressive Web Apps** enable us to write applications for PC and mobile using HTML, CSS and JavaScript

Applications created with `create-react-app` already have the basics configured:

- configuration in `public/manifest.json`
- PWA-Boilerplate in `src/serviceWorker.js`

## PWAs: activation

in `index.js` / `index.tsx`:

```js
serviceWorker.register();
```

## PWAs: configuration

Via `public/manifest.json`:

name, short_name

## PWAs: configuring icons

Adding icons for the resolutions `144x144px`, `192x192px` and `512x512px` (in manifest.json)

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

## PWA: Deployment on netlify

- `npm run build`
- drag & drop the dist-Ornder to app.netlify.com/drop
- switch to https manually - try it out in Chrome on desktop and mobile
