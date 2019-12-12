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

```js
const installPromptRef = useRef();

// executed when the component has mounted
useEffect(() => {
  window.addEventListener(
    'beforeinstallprompt',
    ipEvent => {
      ipEvent.preventDefault();
      installPromptRef.value = ipEvent;
    }
  );
}, []);
```

## PWA: add to homescreen

```jsx
<div>
  {installPromptRef.value && (
    <button
      onClick={() => {
        installPromptRef.value.prompt();
      }}>
      install
    </button>
  )}
</div>
```

## PWA: Deployment on netlify

- `npm run build`
- drag & drop the dist folder to app.netlify.com/drop
- switch to HTTPS manually - try it out in Chrome on desktop and mobile
