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

Via `public/manifest.json`

## PWA: add to homescreen

https://developers.google.com/web/fundamentals/app-install-banners/

## PWA: add to homescreen

Procedure in Chrome:

- wait until Chrome will allow the install prompt to be displayed
- display a button or the like that offers installation
- when the button is clicked, make Chrome display an installation prompt

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

on _tiiny.host_:

- `npm run build`
- zip and upload the _build_ folder to <https://tiiny.host/>

on _netlify drop_:

- `npm run build`
- drag and drop the _build_ folder to <https://netlify.com/drop>
- switch to HTTPS in the URL
