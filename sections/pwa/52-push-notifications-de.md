# Push-Benachrichtigungen

## Push-Benachrichtigungen

- Möglichkeit, Benachrichtigungen von einem Server zu unserer PWA senden
- funktioniert auch, wenn die Anwendung nicht läuft (Am Desktop muss allerdings zumindest eine Instanz des Browsers geöffnet sein)

## Push-Benachrichtigungen - Grundlagen

<figure>
  <img src="assets/push-message.svg" />
  <small>beste Darstellung in Firefox</small>
</figure>

## Push-Benachrichtigungen - Grundlagen

Push-Benachrichtigungen werden über den Browserhersteller (Google, Mozilla, ...) gesendet. Dies geschieht über URLs wie diese:

- `https://android.googleapis.com/gcm/send/IDENTIFIER`
- `https://updates.push.services.mozilla.com/wpush/v1/IDENTIFIER`

## Push-Benachrichtigungen - Ablauf

<figure>
  <img src="assets/push-message-authentication.svg" />
  <small>beste Darstellung in Firefox</small>
</figure>

## Push-Benachrichtigungen - Ablauf

- Benutzer besucht eine Web App, aktiviert Benachrichtigungen
- Web App kommuniziert mit dem Browserhersteller; der Browserhersteller generiert eine eindeutige URL und einen kryptographischen Schlüssel und übergibt diese an den Browser  
  Die URL könnte wie folgt aussehen:
  - `https://android.googleapis.com/gcm/send/IDENTIFIER`
  - `https://updates.push.services.mozilla.com/wpush/v1/IDENTIFIER`
- Web App teilt diese URL mit dem Backend
- Aus dem Backend können wir mit Hilfe dieser Daten Nachrichten an den Service Worker schicken

## Push-Benachrichtigungen

Aktivierung im Browser:

```js
serviceWorkerRegistration.pushManager
  .subscribe({
    userVisibleOnly: true,
  })
  .then(subscription => {
    console.log(subscription.endpoint);
    // could be: https://android.googleapis.com/gcm/send/..
  });
```

## Push-Benachrichtigunen

Aktuelle Subscription auslesen:

```js
serviceWorkerRegistration.pushManager
  .getSubscription()
  .then(subsription => {
    if (subscription !== undefined) {
      console.log(JSON.stringify(subscription.toJSON()));
      // send the subscription object to our server
    }
  });
```

## Push-Benachrichtigungen - Das Subscription-Objekt

Sobald wir diese Daten am Server haben, können wir Benachrichtigungen an den Client senden

```json
{
  "endpoint": "https://android.googleapis.com/gcm/send/f2L...",
  "keys": {
    "auth": "5I2BuN...",
    "p256dh": "BLc45n..."
  }
}
```

## Push-Benachrichtigungen - serverseitig

in node.js:

```js
const webPush = require('web-push');

const subscripton = {
  endpoint: '...',
  keys: { auth: '...', p256dh: '...' },
};

webPush.sendNotification(subscription, 'Hello world!');
```

## Push-Benachrichtigungen in Chrome

In Chrome werden Push-Benachrichtigungen via _Firebase Cloud Messaging_ (früher: _Google Cloud Messaging_) gesendet

Für die Entwicklung benötigen wir einen Firebase Account und API key

```js
webPush.sendNotification(subscription, 'Hello world!', {
  gcmAPIKey: '....',
});
```

## Push-Nachrichten ohne Benachrichtigunen

Eine Push-Nachricht muss nicht unbedingt zu einer Benachrichtigung für den Benutzer führen

In Chrome _muss_ aktuell das Empfangen einer Push-Nachricht zu einer Benachrichtigung führen; in Firefox ist die Anzahl der empfangenen Push-Nachrichten ohne Benachrichtigung beschränkt

## Push-Benachrichtigungen: Lab

https://developers.google.com/web/ilt/pwa/lab-integrating-web-push

<!--
duration: ca 50 min
-->
