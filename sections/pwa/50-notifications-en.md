# Notifications

<!-- see also: https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API -->

## Notifications

Notification enable displaying messages outside of the app / browser (OS notifications)

## requesting permission

```js
let notificationsAllowed;

Notification.requestPermission().then(result => {
  if (result === 'granted') {
    notificationsAllowed = true;
  }
});
```

This can be tried in the browser console when any web page is open

## showing notifications

```js
if (Notification.permission === 'granted') {
  new Notification('Hello world');
}
```

## notification options

```js
new Notification('cloudy', {
  body: 'The weather in Vienna is cloudy',
  icon: 'static/images/cloudy.png',
  vibrate: [100, 50, 100],
});
```
