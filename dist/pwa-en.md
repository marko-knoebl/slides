# Progressive Web Apps

## Presentation and code

Presentations available at: https://karuga.eu/courses-presentations

Code available at: https://github.com/marko-knoebl/courses-code

## Your Trainer

Marko Knöbl

- Frontend Web-Development
  - JavaScript
  - React, Angular
- Programming
  - Python, JavaScript

## Introduction of Participants

- Name
- Company
- Current Projects
- Prior Knowledge
- Expectations

## Organizational

- Duration
- Breaks
- Materials
- Questions, Feedback?

# Topics

## Topics - basics

- VS Code, Chrome developer tools
- modern JavaScript
- promises
- web workers

## Topics

- web manifest file
- service workers
  - workbox
  - writing service workers
- data storage
  - localStorage
  - indexedDB
- notifications and push notifications

# Basics for the course

## Basics for the course (example: todo-app)

- Working with VS Code & Chrome
  - Prettier
  - Chrome Dev Tools
- ES2015+
  - Modules
  - Arrow functions
  - const & let
- running a local dev server

## local HTTP server

npm package `http-server`

```bash
npm install -g http-server
http-server
```

# VS Code

## VS Code

https://code.visualstudio.com

open source IDE

independent of _Visual Studio_ itself

## VS Code: open folder

via _File_ - _Open Folder_

## VS Code: File explorer, split editor

## VS Code: Terminal

Open / close the terminal view via _ctrl_ + _`_

Open an additional terminal via the _+_ Symbol

Terminals will run in the currently open folder

## VS Code: Configuration

Via _File - Preferences - Settings_

Is split in _User Settings_ and _Workspace Settings_

## VS Code: Configuration options

Recommendations:

- Accept Suggestions on Commit Character (Autocomplete on other keys than _Enter_): _deactivate_
- Auto Save: _afterDelay_
- Tab Size: _2_ or _4_

Further Options:

- Word Wrap
- EOL
- Workbench: Color Theme

## VS Code: Shortcuts

- _F1_ or _Ctrl_ + _Shift_ + _P_: command palette

<!-- list separator -->

- _Ctrl_ + _F_: Search in File
- _Alt_ + _Shift_ + _F_: Auto-format file contents
- _Ctrl_ + _#_: comment / uncomment
- _F12_: Go to definition
- _Shift_ + _F12_: Peek definition
- _F2_: rename variables
- _Alt_ + mouse click: Activate multiple text cursors

# PWA Basics

## PWA Basics

https://developers.google.com/web/ilt/pwa/why-build-pwa

- bridge between web and apps
- work in the browser, on mobile and on the desktop
- web apps that feel like native apps:
  - app icon in the menu (web manifest)
  - permanent installation and offline use (service workers)
  - displaying notifications (service workers)
  - local app data storage (localstorage, indexedDB)

<!-- google presentation until page 23 -->

## Browser support

Service workers:

https://caniuse.com/#search=service%20workers

Web app manifest:

https://caniuse.com/#search=manifest

indexedDB:

https://caniuse.com/#search=indexeddb

## examples

https://pwa.rocks

- wiki offline
- telegram
- paper planes

## Chrome audit

developer tools - audits

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

We can check if the service worker is registering in the Chrome dev tools under _Application_ - _Service Workers_

For Firefox, go to: `about:debugging#workers`

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

# Web App Manifest

## Web App Manifest

The web app manifest is a json file that provides information on a web app.

Providing a manifest file can enable installation of a PWA.

## Manifest file

include it via:

```html
<link rel="manifest" href="manifest.json" />
```

## Manifest file

```json
{
  "name": "Todo",
  "short_name": "Todo",
  "start_url": ".",
  "display": "standalone",
  "icons": [
    {
      "src": "images/icon-32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    ...
  ]
}
```

## Manifest file - entries

https://developer.mozilla.org/en-US/docs/Web/Manifest

## Manifest file - entries

crucial entries for Chrome:

- `name`
- `short_name`
- `start_url`
- `icons` - used in the menu, in the splash screen; for Chrome we should provide square icons of sizes: `144`, `192`, `512`
- `display`: `fullscreen` / `standalone` / `minimal-ui` / `browser`

## Manifest file - entries

- `background_color` - should be the same as the app's CSS background color
- `description`
- `orientation`:
  - `any`
  - `natural`
  - `landscape` (`landscape-primary`, `landscape-secondary`)
  - `portrait` (`portrait-primary`,
    `portrait-secondary`)
- `theme_color`:

## Meta tags in HTML

These meta tags are helpful in the browser:

- in Chrome: Android window color: `<meta name="theme-color" content="..." />` - this should be the same as `theme_color` in the manifest
- on iOS: `<meta name="apple-mobile-web-app-capable" content="yes">` - this hides the browser UI

# app installation

## app installation

Browsers may offer the ability to add entries to the device's start menu / to the homescreen

## app installation on Chrome and iOS

In iOS users can add any website to the phone's menu. The mechanism for PWAs is the same.

On Chrome PWAs may prompt the user to be installed. Installed PWAs will behave differently from websites - e.g. they will be displayed in a standalone window.

## app install prompt

App install prompt on Chrome:

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

once all the requirements are met, a `beforeinstallprompt` event will fire; we can listen for this event and store it for later use

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
installBtn.addEventListener('click', () => {
  hideInstallBtn();
  // Show the prompt
  installPromptEvent.prompt();
});
```

## deployment

We can test a deployment on https://app.netlify.com/drop

important: Switch to HTTPS in the Browser

# Service workers

## Service workers

Service workers are client-side proxies between the web browser and the server.

Service workers can cache resources and retrieve them from either the network or the internal cache.

## Browser support

[caniuse](https://caniuse.com/##feat=serviceworkers)

support for service workers => support for ES2015

## Service workers - related technologies

- fetch (Sending network requests)
- cache (Caching network requests)

# Service worker strategies

## Service workers - strategies

When deciding on a strategy there are different goals to consider:

- serve content as fast as possible
- serve content which is up-to-date
- save on network data usage
- save on cache size

## Service workers - strategies

for each resource associated with our web app we should ask ourselves:

- should we download and cache this resource when the user first visits our page?
- if this resource is requested, should we retrieve it from the _cache_ or from the _network_?
- should we fall back to the other option if this fails?
- if we serve from the cache, should we try to update it in the background?

key questions:

- for any requested resource, do we serve it from the cache, from the network or a combination?
- which resources do we cache and when do we cache them?

## Service workers - strategies

asset retrieval:

- always from the network
- always from the cache
- network, falling back to cache
- cache, falling back to network
- cache, updating the cache from the network in the background
- cache, fetching new resource in the background and displaying once received

## Service workers - strategies

caching strategies:

- precache on install
- precache on user interaction
- cache when new data arrives

(we can combine these strategies)

## Service workers - strategies

See the [offline cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-then-network)

# Workbox in detail

## Service worker strategies

Workbox has built-in support for several service worker strategies

## Service worker strategies

asset retrieval:

- always from the network: `NetworkOnly`
- always from the cache: `CacheOnly`
- network first: `NetworkFirst`
- cache first: `CacheFirst`
- cache, updating the cache in the background: `StaleWhileRevalidate`

## Service worker strategies

caching:

- precache on install, always serve this version: `precacheAndRoute`
- precache on user interaction: use `fetch` and the below
- cache whenever data arrives: automatic with `NetworkFirst`, `CacheFirst`, `StaleWhileRevalidate`

## routing

```js
workbox.routing.registerRoute(
  new RegExp('/static/.*'),
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  '/articles.json',
  new workbox.strategies.NetworkFirst()
);
```

## plugins

- expiration plugin (maxEntries, maxAgeSeconds)

## precaching

```js
workbox.precaching.precacheAndRoute([
  '/',
  '/index.html',
  '/logo.svg',
]);
```

## CLI

Workbox CLI: Tool for simplifying precaching in particular

```bash
workbox wizard --injectManifest
```

## code lab

https://codelabs.developers.google.com/codelabs/workbox-lab/

(update version of "workbox-cli" in package.json - older versions will fail on Windows)

<!--
~ 45mins
-->

## exercises

Turn one of these apps into a PWA and use various caching strategies:

- https://github.com/marko-knoebl/simple-todo-app
- https://github.com/marko-knoebl/simple-weather-app
- https://github.com/marko-knoebl/simple-stock-app

## bonus (with build)

https://developers.google.com/web/tools/workbox/guides/codelabs/npm-script

# Asynchronous JavaScript

## Asynchronous JavaScript

see presentation [Javascript: async and network requests](javascript-async-and-network-requests-en.html)

# Web workers

## Web workers

- enable running a script in the background (in a separate thread)
- can be used to run expensive computations - don't block user interaction

## Web workers

creating a worker

```js
const worker = new Worker('worker.js');
```

## Web workers

listening for messages from the worker

```js
worker.onmessage = function(message) {
  console.log(message.data);
};
```

## Web workers

passing some task to a worker

```js
worker.postMessage(42);
```

## Web workers

inside the worker:

```js
onmessage = function(message) {
  const result = longComputation(message);
  postMessage(result);
};
```

## Web workers

When passing data to and from web workers: Data are copied and passed as "plain" JavaScript Objects

## Web workers

Exercise: Fibonacci

```js
function fib(n) {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
```

# Cache overview

## Cache overview

= "a request to response map"

## Cache Types

We can cache resources from both the current domain and other domains; we can distinguish between three types:

- basic (current domain)
- cors (other domain, CORS is enabled)
- opaque (other domain, CORS not enabled) - data is not readable from JavaScript

Example: see the _stock app_ examples in the Chrome devtools

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
  // registration can be defered until
  // completion of page load
  if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register('/serviceworker.js')
      .then(registration => {
        // is executed if there's a *new* sw file
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

# Service workers: using fetch

## The function fetch()

```js
// this code can be executed in the
// browser console for any website
const url = '/';

fetch(url)
  .then(response => response.text())
  .then(console.log);
```

## Service workers: handling fetch

```js
self.addEventListener('fetch', event => {
  event.respondWith(
    new Response('All pages look like this')
  );
});
```

## Service workers: handling fetch

Exercise: We can build a small local website with pages like _/home_, _/about_, ...

## Service workers: handling fetch

<!--
there are two $ signs in regexes in this code
if they are at the very end of the string
they will mess up the result
-->

```js
self.addEventListener('fetch', event => {
  if (new RegExp('/about/$ ').test(event.request.url)) {
    event.respondWith(new Response('About'));
  } else if (new RegExp('/a$ ').test(event.request.url)) {
    event.respondWith(new Response('Home'));
  } else {
    event.respondWith(new Response('404'));
  }
});
```

## Service workers: handling fetch

Exercise: logging all network requests and passing the work on to `fetch`

## Service workers: handling fetch

```js
self.addEventListener('fetch', event => {
  console.log(event);
  return fetch(event.request);
});
```

# Service workers with fetch and cache

## Service workers with fetch and cache

core associated technologies:

- fetch (sending network requests)
- cache (caching results)

## Cache

= "a request to response map"

## Accessing caches

Via the global variable `caches.open` or via `self.caches.open` in the service worker

Promise:

```js
let myCache;
caches.open('test', mc => {
  myCache = mc;
});
```

## Methods

cache methods:

- `myCache.add(request)`
- `myCache.addAll(requests)`
- `myCache.put(request, response)`
- `myCache.delete(request)`
- `myCache.match(request)`
- `myCache.matchAll(requests)`

The `request` can be either a string or a `Request` object.

## Cache - add(All)

We provide a URL; the resource will be automatically requested and stored

```js
cache.add('/main.js');

cache.addAll(['/', '/index.html', '/main.js']);
```

## Cache - put

Can be used if we already have the response

```js
fetch('myurl').then(response => {
  console.log(response.clone());
  cache.put('myurl', response.clone());
  cache.put('otherurl', response);
});
```

## Cache - delete

```js
cache.delete('myurl');
```

## Cache - match

Retrieve an entry from the cache that matches a request

```js
// returns a response or undefined
const content = cache.match('myurl');
```

## Example: cache only (short)

An application that will precache resources and always provide them to the user

```js
self.addEventListener('install', () => {
  cache.addAll(['/', '/index.html', '/about'])
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request);
  )
})
```

## Example: cache only (full code)

```js
self.addEventListener('install', installEvent => {
  // wait for the cache to be populated;
  // abort install on error
  installEvent.waitUntil(
    caches.open('app-shell-cache-v3').then(cache => {
      return cache.addAll(['/', '/index.html', '/about']);
    })
  );
  // optional - don't abort install on error
  caches.open('app-shell-cache-v3').then(cache => {
    cache.addAll['/icon1.png'];
  });
});
```

## Example: cache only - waitUntil

A call to `waitUntil` can be used to signify when the _install_ was successfull - the service worker will only _activate_ if it was

## Example: updating the cache

deleting old entries:

```js
self.addEventListener('activate', activateEvent => {
  activateEvent.waitUntil(
    Promise.all([
      caches.delete('app-shell-cache-v2'),
      caches.delete('app-shell-cache-v1'),
    ])
  );
});
```

## Example: retrieve from cache with network fallback

```js
self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

## Example: updating the cache on every request

```js
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(response => {
      cache.put(event.request, response.clone());
      return response;
    })
  );
});
```

## example: network - falling back to cache - falling back to default asset (e.g. user avatar)

## exercise: scripting the service worker

https://developers.google.com/web/ilt/pwa/lab-scripting-the-service-worker

# The offline cookbook

https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/

# Data storage

### localStorage and indexedDB

## Overview

- _localStorage_: simple key-value-store with string values
- _indexedDB_: "real database"

# localStorage

## localStorage

_localStorage_ is a simple key-value-store in the browser; both keys and values are strings

The browser stores data separately for each domain

## localStorage

important methods:

- `localStorage.setItem('name', 'John')`
- `localStorage.getItem('name')`
- `localStorage.removeItem('name')`

## localStorage

storing and retrieving some data

```js
const todoString = JSON.stringify(todos);
localStorage.setItem('todos', todoString);
```

```js
const todoString = localStorage.getItem('todos');
todos = JSON.parse(todoString);
```

# indexedDB

## indexedDB

_indexedDB_ is a "real" database

advantages over _localStorage_:

- non-blocking
- faster (queries via indexes)
- separation of data into "tables" (stores)
- supports various data types

disadvantage: more complicated interface

## indexedDB interfaces

- idb
- dexie
- localForage

## indexedDB promised (idb)

library that enables using indexedDB with Promises

https://github.com/jakearchibald/idb

CDN link: https://cdn.jsdelivr.net/npm/idb@2.1.2/lib/idb.min.js

## idb basics

## idb basics: open & upgrade

creates / opens a database; returns a promise

```js
idb.open(name, version, upgradeCallback);
```

## idb basics: open & upgrade

```js
const upgradeCallback = upgradeDb => {
  if (!upgradeDb.objectStoreNames.contains('todos')) {
    upgradeDb.createObjectStore('todos', {
      autoIncrement: true,
      keyPath: 'key',
    });
  }
};

const dbPromise = idb.open('todo-db', 1, upgradeCallback);
```

## idb basics: open & upgrade

The last argument (`upgradeCallback`) can be used to migrate to a new database schema; it can be used to create, delete or change stores

The callback is called any time the version increases

## idb basics: keys

Each element in the object store has a unique key (~id)

The key can be an entry in the element or a separate value

## idb basics: keys

numeric id:

```js
upgradeDb.createObjectStore('todos', {
  autoIncrement: true,
});
```

## idb basics: keys

numeric id stored in the object

```js
upgradeDb.createObjectStore('todos', {
  autoIncrement: true,
  keyPath: 'key
})
```

## idb basics: keys

use an entry in the objects as key

```js
upgradeDb.createObjectStore('users', {
  keyPath: 'email',
});
```

## transactions

transaction = group of operations on the database (reading, adding, writing, ...)

## transactions

steps:

1. get the database object (`idb.open`)
2. open a transaction on one or more stores (two modes: `readonly` (default) or `readwrite`)
3. open the object store
4. operate on the object store

## transactions

getting the database object:

```js
let db;

idb.open('todo-db', 1).then(openedDb => {
  db = openedDb;
});
```

## transactions

adding data

```js
const transaction = db.transaction(['todos'], 'readwrite');
const todoStore = transaction.objectStore('todos');
todoStore.add({ text: 'groceries', done: false });
```

## transactions

overwriting data (put)

```js
const transaction = db.transaction(['todos'], 'readwrite');
const todoStore = transaction.objectStore('todos');
// ersetze den Eintrag mit index 1
todoStore.put({ text: 'groceris', done: true, key: 1 });
```

## transactions

deleting data

```js
const transaction = db.transaction(['todos'], 'readwrite');
const todoStore = transaction.objectStore('todos');
todoStore.delete(1);
```

## transactions

reading data (`getAll`)

```js
const transaction = db.transaction(['artists'], 'readonly');
const artistsStore = transaction.objectStore('artists');
artistsStore.getAll().then(console.log);
```

## transactions

reading data by its key

```js
const transaction = db.transaction(['artists'], 'readonly');
const artistsStore = transaction.objectStore('artists');
artistsStore.get(1).then(console.log);
```

## indexes

reading data via indexes

Entries in a database are basically stored sorted by their key.

This means it's fast to search for a specific key in the database

Example: In a phone book looking for a last name is fast, but looking for a first name or for a phone number is slow

## indexes

In order to quickly look up by something other than the primary key: additional index

```js
const store = upgradeDb.createObjectStore('contacts');
store.createIndex('email', 'email', { unique: true });
store.createIndex('firstName', 'firstName');
store.createIndex('name', ['lastName', 'firstName']);
```

## indexes

```js
const nameIndex = objectStore.index('name');
nameIndex.get(['Andy', 'Jones']).then(...)
```

## exercises

- Slides: https://developers.google.com/web/ilt/pwa/working-with-indexeddb-slides
- Lab: https://developers.google.com/web/ilt/pwa/lab-indexeddb

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

# Notifications from the service worker

## Notifications from the service worker

The notifications we've seen so far originated from one particular browser window. Notifications can also be displayed from the service worker. These notifications will be more capable than the ones we've encountered so far. In particular:

- Notifications from service workers can provide interactions (Chrome only for now)
- Notifications from service workers can be shown when the app / website isn't open

## Accessing the service worker registration

```js
let serviceWorkerRegistration;

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

- `notificationclick`
- `notificationclose`

# Push Messages

## Push Messages

With push messages we can send messages to our PWA from a server.

This generally works even if our app is not currently running - though on the desktop at least one browser instance has to be running for push messages to be received

## Push messages without notifications

When a push notification arrives via the network the app can react in various ways

Displaying notifications is common but not required by the spec

Chrome currently _requires_ displaying a notification; Firefox has a limit on how many messages can be received without showing notifications

## Push Notifications - basics

<img src="assets/push-message.svg" type="text/svg" style="width: 500px">

## Push Notifications - basics

Push notifications can be sent to a user via the browser vendor (Google, Mozilla, ...). It works via endpoint URLs like these:

- `https://android.googleapis.com/gcm/send/IDENTIFIER`
- `https://updates.push.services.mozilla.com/wpush/v1/IDENTIFIER`

## Push Notification - process

<img src="assets/push-message-authentication.svg" type="text/svg" style="width: 100%">

## Push Notifications - process

- user visits a web app, enables notifications
- the web app communicates with the browser vendor (Google, Mozilla, ...); the vendor creates a unique enpoint URL and a public key for encryption and shares them with the browser  
  The endpoint URL could look like this:
  - `https://android.googleapis.com/gcm/send/IDENTIFIER`
  - `https://updates.push.services.mozilla.com/wpush/v1/IDENTIFIER`
- the web app shares the endpoint URL and public key with the backend
- from the backend, we can now send data to the endpoint URL, encrypted withe the public key. It will be received by the user's service worker

## Push Notifications - enabling on the client

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

## Push Notifications - getting the current subscription

```js
serviceWorkerRegistration.pushManager
  .getSubscription()
  .then(subsription => {
    if (subscription === undefined) {
    } else {
      console.log(JSON.stringify(subscription.toJSON()));
      // send the subscription object to our server
    }
  });
```

## Push Notifications - the subscription object

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

## Push Notifications Lab

https://developers.google.com/web/ilt/pwa/lab-integrating-web-push

1-3

<!--
duration: ca 50 min
-->

# App Stores

## App Stores

Publishing PWAs in App Stores

## PWAs in the Google Play Store

As of February 2019:

TWA = Trusted Web Activity = method of publishing a PWA on the Play Store

https://www.youtube.com/watch?v=7JDFjeMvxos

https://developers.google.com/web/updates/2019/02/using-twa

## PWAs in the Microsoft Store

see https://www.pwabuilder.com/

## PWAs in other stores

PWAs (or HTML apps in general) can be packaged for various stores even if those stores don't natively support PWAs:

https://www.pwabuilder.com/

