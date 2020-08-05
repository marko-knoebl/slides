# Push notifications

## Push notifications

- possibility to send messages to a PWA from a server
- works even if the app is not currently running (on the desktop at least one browser instance has to be running)

## Push notifications - basics

<figure>
  <img src="assets/push-message.svg" />
  <small>best viewed in Firefox</small>
</figure>

## Push notifications - basics

Push notifications can be sent to a user via the browser vendor (Google, Mozilla, ...). It works via endpoint URLs like these:

- `https://android.googleapis.com/gcm/send/IDENTIFIER`
- `https://updates.push.services.mozilla.com/wpush/v1/IDENTIFIER`

## Push notifications - process

<figure>
  <img src="assets/push-message-authentication.svg" />
  <small>best viewed in Firefox</small>
</figure>

## Push notifications - process

- user visits a web app, enables notifications
- the web app communicates with the browser vendor (Google, Mozilla, ...); the vendor creates a unique enpoint URL and a public key for encryption and shares them with the browser  
  The endpoint URL could look like this:
  - `https://android.googleapis.com/gcm/send/IDENTIFIER`
  - `https://updates.push.services.mozilla.com/wpush/v1/IDENTIFIER`
- the web app shares the endpoint URL and public key with the backend
- from the backend, we can now send data to the endpoint URL, encrypted withe the public key. It will be received by the user's service worker

## Push notifications - enabling on the client

```js
serviceWorkerRegistration.pushManager
  .subscribe({
    userVisibleOnly: true,
  })
  .then((subscription) => {
    console.log(subscription.endpoint);
    // could be: https://android.googleapis.com/gcm/send/..
  });
```

## Push notifications - getting the current subscription

```js
serviceWorkerRegistration.pushManager
  .getSubscription()
  .then((subsription) => {
    if (subscription !== undefined) {
      console.log(JSON.stringify(subscription.toJSON()));
      // send the subscription object to our server
    }
  });
```

## Push notifications - the subscription object

Once we obtain this subscription object on the server we can send push messages to the client

```json
{
  "endpoint": "https://android.googleapis.com/gcm/send/f2L...",
  "keys": {
    "auth": "5I2BuN...",
    "p256dh": "BLc45n..."
  }
}
```

## Push Notifications - server

in node.js:

```js
const webPush = require('web-push');

const subscripton = {
  endpoint: '...',
  keys: { auth: '...', p256dh: '...' },
};

webPush.sendNotification(subscription, 'Hello world!');
```

## Push Notifications on Chrome

Push notifications for Chrome are sent via _Firebase Cloud Messaging_ (formerly: _Google Cloud Messaging_); in order to develop an application that receives push notifications on Chrome we need a firebase account and API key

```js
webPush.sendNotification(subscription, 'Hello world!', {
  gcmAPIKey: '....',
});
```

## Push messages without notifications

When a push notification arrives via the network the app can react in various ways

Displaying notifications is common but not required by the spec

Chrome currently _requires_ displaying a notification; Firefox has a limit on how many messages can be received without showing notifications

## Push Notifications Lab

https://developers.google.com/web/ilt/pwa/lab-integrating-web-push

1-3

<!--
duration: ca 50 min
-->
