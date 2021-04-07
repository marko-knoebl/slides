# PWAs

Progressive Web Apps mit React

## PWAs

_Progressive Web Apps_: Möglichkeit, Anwendungen für Mobilgeräte und PCs mit HTML, CSS und JavaScript zu schreiben

## PWAs

_create-react-app_ kann Projekte mit PWA-Unterstützung erstellen:

```bash
npx create-react-app myapp --template cra-template-pwa
npx create-react-app myapp --template cra-template-pwa-typescript
```

_Codesandbox_ beinhaltet grundlegende Unterstützung für PWAs

## PWAs

PWA-Grundlagen in _create-react-app_-Projekten:

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

Prozess in Chrome:

- warten, bis eine Installationsdialog angezeigt werden darf
- anzeigen eines Buttons o.ä., der die Installation anbietet
- beim Anklicken des Buttons via Chrome den Installationsdialog anzeigen

siehe auch: https://developers.google.com/web/fundamentals/app-install-banners/

## PWA: add to homescreen

TypeScript Implementierung:

```ts
const [canInstall, setCanInstall] = useState(false);
const installPromptEventRef = useRef<Event>();

const getInstallPermission = () => {
  window.addEventListener(
    'beforeinstallprompt',
    (ipEvent) => {
      ipEvent.preventDefault();
      installPromptEventRef.current = ipEvent;
      setCanInstall(true);
    }
  );
};
useEffect(getInstallPermission, []);
```

## PWA: add to homescreen

TypeScript Impementierung:

```tsx
<button
  disabled={!canInstall}
  onClick={() => {
    (installPromptEventRef.current as any).prompt();
  }}
>
  install
</button>
```

## PWA: Deployment

- `npm run build`
- Hochladen des _build_-Ordners zu einem statischen Hosting-Service (z.B. <https://netlify.com/drop> oder <https://tiiny.host/>)
