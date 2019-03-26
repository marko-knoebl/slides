# app install prompt

## app install prompt

On Chrome it's possible to ask a user to install the application by adding it to the menu / home screen.

https://developers.google.com/web/fundamentals/app-install-banners/

## app install prompt

requirements to show the prompt:

- manifest file includes:
  - _short_name_ or _name_
  - 192px and 512px icons
  - _start_url_
  - _display_ must be one of _fullscreen_, _standalone_, _minimal-ui_
- served via HTTPS
- has a service worker (with a fetch event handler)
- user has interacted with the domain for at least 30 seconds

## app install prompt

once alle the requirements are met, a `beforeinstallprompt` event will fire; we can listen for this event and store it for later use

```js
let installPromptEvent;

window.addEventListener('beforeinstallprompt', event => {
  // the browser is ready to show the install prompt
  event.preventDefault();
  installPromptEvent = event;
  showInstallBtn();
});
```

## app install prompt

Once the user wants to install the app, we can use the stored event:

```js
installBtn.addEventListener('click', e => {
  hideInstallBtn();
  // Show the prompt
  installPromptEvent.prompt();
});
```

## deployment

We can test a deployment on https://app.netlify.com/drop

important: Switch to HTTPS
