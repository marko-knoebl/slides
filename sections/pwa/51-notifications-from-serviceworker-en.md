# Notifications from the service worker

## Notifications from the service worker

The notifications we've seen so far originated from one particular browser window. Notifications can also be displayed from the service worker. These notifications will be more capable than the ones we've encountered so far. In particular:

- Notifications from service workers can provide interactions (Chrome only for now)
- Notifications from service workers can be shown when the app / website isn't open

## Accessing the service worker registration

```js
let serviceWorkerRegistration = null;

navigator.serviceWorker
  .getRegistration()
  .then(registration => {
    serviceWorkerRegistration = registration;
  });
```

## Notifications via the service worker

```js
serviceWorkerRegistration.showNotification('cloudy', {
  body: 'The weather in Vienna is cloudy',
  icon: 'static/images/cloudy.png',
  vibrate: [100, 50, 100],
  // new option available:
  actions: [
    { action: 'close', title: 'Close' },
    { action: 'details', title: 'Details' },
  ],
});
```

## listening for notification actions

two events in the service worker:

- `notificationclick`
- `notificationclose`

## Exercises (labs)

https://developers.google.com/web/ilt/pwa/lab-integrating-web-push

1-3

Removing the service worker in Firefox: about:debugging -> worker
