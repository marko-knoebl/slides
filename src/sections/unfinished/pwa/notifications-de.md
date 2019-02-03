# Notifications

siehe auch: https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API

## Notifications

Möglichkeit, für den Benutzer Benachrichtigungen außerhalb der Anwendung darzustellen (Betriebssystems-Benachrichtigungen)

## Erlaubnis einholen

```js
// sw.js
Notification.requestPermission(status => {});
```

Kann in Browser-Konsole ausprobiert werden (aber es muss eine Seite offen sein)

## Überprüfen, ob Erlaubnis erteilt wurde und Nachricht darstellen

```js
if (Notification.permission === 'granted') {
  navigator.serviceWorker
    .getRegistration()
    .then(registration => {
      registration.showNotification('Hello!');
    });
}
```

## Nachricht-Optionen

```js
registration.showNotification(condition, {
  body: `The weather in ${cityName} is: ${condition}`,
  icon: iconUrl,
  vibrate: [100, 50, 100],
  actions: [
    { action: 'close', title: 'Close' },
    { action: 'details', title: 'Details' },
  ],
});
```

## Nachrichten-Events

Zwei Events im ServiceWorker:

- **notificationclick**
- notificationclose

---

evtl in Firefox testen, da Probleme mit Chrome

<!--
# Kommunikation zurück zum Browser-Fenster

eher komplex, da es verschiedene Fenster zu einem Service-Worker geben kann

-->

## Übungen (Labs)

https://developers.google.com/web/ilt/pwa/lab-integrating-web-push

1-3

Entfernen der service-worker in FF: about:debugging -> worker

---

Dauer: ca 50 min
