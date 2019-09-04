# PWAs

Progressive Web Apps mit React

## PWAs

**Progressive Web Apps**: Möglichkeit, Anwendungen für Mobilgeräte und PCs mit HTML, CSS und JavaScript zu schreiben

Mit `create-react-app` erstellte Anwendungen bieten dafür schon die Grundvoraussetzungen:

- Konfiguration in `public/manifest.json`
- PWA-Boilerplate in `src/serviceWorker.js`

## PWAs: Aktivierung

in `index.js` / `index.tsx`:

```js
serviceWorker.register();
```

## PWAs: Konfiguration

Via `public/manifest.json`

## PWA: add to homescreen

https://developers.google.com/web/fundamentals/app-install-banners/

## PWA: add to homescreen

Prozess in Chrome:

- warten, bis eine Installationsdialog angezeigt werden darf
- anzeigen eines Buttons o.ä., der die Installation anbietet
- beim Anklicken des Buttons via Chrome den Installationsdialog anzeigen

## PWA: add to homescreen

```js
const [installPrompt, setInstallPrompt] = useState(null);

// executed when the component has mounted
useEffect(() => {
  window.addEventListener(
    'beforeinstallprompt',
    ipEvent => {
      ipEvent.preventDefault();
      setInstallPrompt(ipEvent);
    }
  );
}, []);
```

## PWA: add to homescreen

```jsx
<div>
  {installPrompt && (
    <button
      onClick={() => {
        installPrompt.prompt();
      }}>
      install
    </button>
  )}
</div>
```

## PWA: Deployment auf netlify

- `npm run build`
- dist-Ornder via drag&drop auf app.netlify.com/drop
- Manuell auf HTTPS wechseln - in Chrome am Desktop und Mobilgerät ausprobieren
