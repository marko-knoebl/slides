# Service workers with workbox

## Service workers with workbox

**Workbox** = Library which simplifies writing service workers

https://developers.google.com/web/tools/workbox/

## Workbox example

Including a service worker which will cache responses and use them as a fallback if they are not reachable:

```js
// service-worker.js
importScripts(
  'https://storage.googleapis.com/' +
    'workbox-cdn/releases/4.1.1/workbox-sw.js'
);

workbox.routing.registerRoute(
  new RegExp('.*'),
  new workbox.strategies.NetworkFirst()
);
```

<!-- this approach is used by create-react-app -->

## Workbox example

We can inspect the effects of using this service worker in the Chrome developer tools under _Application/Service Workers_ and _Application/Cache Storage_
