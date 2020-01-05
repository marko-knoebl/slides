# Service worker setup

## Service worker lifecycle

- register
- install
- activate
- (unregister)

## Registering a service worker

Any time the page is loaded we call `navigator.serviceWorker.register` and pass in the URL for the service worker.  
If the service worker file is new or has changed it will be installed.

## Registering a service worker

```js
window.addEventListener('load', () => {
  // registration can be deferred until
  // completion of page load
  if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register('/serviceworker.js')
      .then(registration => {
        // is executed if there is a *new* sw file
        console.log(
          `SW registered for ${registration.scope}`
        );
      })
      .catch(/* reg failed */);
  }
});
```

## Service worker scope

By default a service worker will control all requests that lie within its "directory" on the server.

```js
navigator.serviceWorker.register('/css/serviceworker.js');
```

The SW will control requests to _/css/default.css_, but not to _/index.html_.

We can narrow down a service worker to only work on a subpath:

```js
navigator.serviceWorker.register('/css/serviceworker.js', {
  scope: '/css/xyz/
})
```

## Service worker installation

The service worker's `install` event occurs when there is a new service worker file:

- first page visit
- the service worker file has changed

Good opportunity for downloading and caching resources for later use

## Service worker installaion

```js
self.addEventListener('install', event => {
  console.log(event);
});
```

## Service worker activation

If there was no previous version of the service worker, it activates immediately

If there was a previous version, it activates on "restart" (when all corresponding tabs have been closed)

Good opportunity for cleaning up unneeded cached files

## Service worker activation

```js
self.addEventListener('activate', event => {
  console.log(event);
});
```

## Service worker activation

We can force immediate activation of a new service worker from the install event:

```js
self.addEventListener('install', event => {
  self.skipWaiting();
});
```

## Uninstalling a service worker

Uninstalling all service workers for this domain:

```js
navigator.serviceWorker
  .getRegistrations()
  .then(function(registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
```
