# Service worker basics

## Service workers - motivation

Service workers are at the core of PWAs. They are a client-side proxy between the web browser and the server.

Main use case: offline / faster usage of web apps (replaces the deprecated AppCache functionality)

## Service workers - example use cases

- _game_: on first load all required resources are downloaded and will be available offline
- _chat app_: The avatars of all friends are stored in a cache; they are updated daily
- _wikipedia app_: the last 30 visited articles are cached
- _news app_: The landing page should be cached and be available immediately on opening the app; afterwards it is updated if possible

## Service workers - basic concept

### traditional web app:

app ⟺ web server

### PWA:

app ⟺ service worker ⟺ web server

## Service workers - basic concept

service woroker = script (web worker) that runs in the background

functionality:

- caching resources
- background sync
- push notifications (even when the app is closed)

## Registering a service worker

We call `.register()` and provide the location of the service worker script

```js
// main.js
navigator.serviceWorker.register('./serviceWorker.js');
```

```js
// serviceWorker.js
console.log('this is the service worker');
```

## Inspecting service workers in the browser tools

Chrome: developer tools (F12) ➡ _Application_ ➡ _Service Workers_

Firefox: go to _about:debugging_ ➡ _this Firefox_ ➡ _Service Workers_
