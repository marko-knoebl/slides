# Benachrichtigungen aus dem Service Worker

## Benachrichtigungen aus dem Service Worker

Die bisherigen Benachrichtigungen stammten aus einem bestimmten Browser-Fenster. Benachrichtigungen können auch aus dem Service Worker dargestellt werden. Diese Benachrichtigungen bieten mehr Möglichkeiten, insbesondere:

- Mit den Benachrichtigungen kann über Buttons interagiert werden
- Benachrichtigungen können angezeigt werden, wenn die Website nicht geöffnet ist

## Zugriff auf die Service Worker Registrierung:

```js
let serviceWorkerRegistration = null;

navigator.serviceWorker
  .getRegistration()
  .then(registration => {
    serviceWorkerRegistration = registration;
  });
```

## Benachrichtigungen aus dem Service Worker

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

## Auf Benachrichtigungsaktionen reagieren

Zwei Events im ServiceWorker:

- `notificationclick`
- `notificationclose`

<!--
evtl in Firefox testen, da Probleme mit Chrome
-->

<!--
# Kommunikation zurück zum Browser-Fenster

eher komplex, da es verschiedene Fenster zu einem Service-Worker geben kann
-->

## Übungen (Labs)

https://developers.google.com/web/ilt/pwa/lab-integrating-web-push

1-3

Entfernen der service-worker in FF: about:debugging -> worker

<!--
Dauer: ca 50 min
-->
