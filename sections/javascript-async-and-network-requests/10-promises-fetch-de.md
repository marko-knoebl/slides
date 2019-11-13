# Promises & Fetch

<!-- https://developers.google.com/web/fundamentals/primers/promises -->

## Promises & Fetch

_Promises_: eine Möglichkeit, um asynchronen Code in JavaScript auszuführen

_Fetch_: moderne Möglichkeit, Netzwerkanfragen mit JavaScript zu versenden, basiert auf Promises

## Promises - Grundlagen

Werden verwendet, um einmalige Events zu behandeln

Erlauben dem Browser, auf ein Event zu _warten_ - z.B. auf eine Antwort aus dem Netzwerk oder Daten aus der Datenbank

Das Warten ist _non-blocking_, damit kann anderer Code währenddessen ausgeführt werden

## Promises vs Callbacks

Promises sind eine Alternative zu Callbacks; Sie lösen das gleiche Problem mit einem etwas anderen Ansatz.

Beispiel: Funktion `getTodos`, die Todo-Daten von einem Server lädt und sie an `logTodos` übergibt

```js
// callback
getTodos(logTodos);
```

```js
// promise
getTodos().then(logTodos);
```

## Promises vs Callbacks

Ein Vorteil von Promises gegenüber Callbacks ist, dass Promises leicht verkettet werden können:

```js
getTodos()
  .then(parseJSON)
  .then(transformDataFormat)
  .then(logTodos);
```

## Promises Beispiel: Fetch einer Website (Browser)

Dieses Beispiel kann zu jeder Website in der Browser-Konsole ausgeführt werden

```js
// start a request to fetch the home page (/)
fetch('/')
  // wait for an answer, then request its text content
  .then(response => response.text())
  // log the text content
  .then(console.log);
```

Bemerkung: Fetches sind meist nur innerhalb der aktuell geöffneten Domain erlaubt (same-origin policy).

## Promises Beispiel: Fetch einer Website (node)

```bash
npm install node-fetch
```

```js
const fetch = require('node-fetch');

fetch('https://en.wikipedia.org')
  .then(response => response.text())
  .then(console.log);
```

## Fetch einer Website: Erklärung

Das Abfragen einer URL und das Auslesen des Antworttexts können länger dauern.

Mit `.then()` warten wir jeweils auf das Resultat.

Die Funktion `.then()` bekommt einen Handler (in Form einer anderen Funktion) übergeben.

Das Resultat des ersten Handlers (`response => response.text()`) ist wiederum ein neues Promise.

Der zweite Handler (`console.log`) loggt das Resultat einfach.

## Fetch von JSON-Daten

Der Aufruf von `.json()` anstatt `.text()` ermöglicht ein direktes Parsen von JSON Daten:

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(reply => reply.json())
  .then(console.log);
```

## Nutzung mit async / await

Jedes Promise kann mit asyn / await verwendet werden:

```js
const url = 'https://jsonplaceholder.typicode.com/todos';

const fetchAsync = async () => {
  let response = await fetch(url);
  let todos = await response.json();
  displayTodos(todos);
};

fetchAsync();
```

## Konfigurieren des fetch Requests

```js
fetch(url, {
  method: 'POST',
  cache: 'no-cache',
  body: '{"text": "learn fetch"}',
  headers: { 'content-type': 'application/json' },
});
```

## Übungen

- Todo-API (https://jsonplaceholder.typicode.com)
- Wetter-API (https://openweathermap.org)
- https://developers.google.com/web/ilt/pwa/lab-fetch-api
- https://developers.google.com/web/ilt/pwa/lab-promises
