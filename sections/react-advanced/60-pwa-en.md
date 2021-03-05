# PWAs

Progressive Web Apps with React

## PWAs

_Progressive Web Apps_ enable us to write applications for PC and mobile using HTML, CSS and JavaScript

## PWAs

_create-react-app_ can be used to initialize React projects with basic PWA support

```bash
npx create-react-app myapp --template cra-template-pwa
npx create-react-app myapp --template cra-template-pwa-typescript
```

_Codesandbox_ has built-in support for very basic PWAs

## PWAs

PWA basics in _create-react-app_ projects:

- configuration in `public/manifest.json`
- PWA-Boilerplate in `src/serviceWorker.js`

## PWAs: activation

in `index.js` / `index.tsx`:

```js
serviceWorker.register();
```

## PWAs: configuration

Via `public/manifest.json`

## PWA: add to homescreen

Procedure in Chrome:

- wait until Chrome will allow the install prompt to be displayed
- display a button or the like that offers installation
- when the button is clicked, make Chrome display an installation prompt

see also: https://developers.google.com/web/fundamentals/app-install-banners/

## PWA: add to homescreen

TypeScript implementation:

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

TypeScript implementation:

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
- upload the build folder to a static host (e.g. <https://netlify.com/drop> or <https://tiiny.host/>)
