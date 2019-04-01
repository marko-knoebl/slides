# Promises & Fetch

<!-- siehe auch: webdev/fetch -->
<!-- https://developers.google.com/web/fundamentals/primers/promises -->

## Promises & Fetch

_Promises_: eine Möglichkeit, um asynchronen Code in JavaScript auszuführen

_Fetch_: moderne Möglichkeit, Netzwerkanfragen mit JavaScript zu versenden, basiert auf Promises

## Promises - Grundlagen

Werden verwendet, um einmalige Events zu behandeln

Erlauben dem Browser, auf ein Event zu _warten_ - zb auf eine Antwort aus dem Netzwerk oder Daten aus der Datenbank

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

## Promises Beispiel: Fetch einer Website

```js
// dieser Code kann zu jeder Website in der
// Browser-Konsole ausgeführt werden
const url = '/';

// eine Anfrage auf die Homepage einer Website starten
fetch(url)
  // auf die Antwort warten, dann den Textinhalt der
  // Antwort auslesen
  .then(response => response.text())
  // auf den Textinhalt warten, dann loggen
  .then(console.log);
```

## Fetch einer Website: Erklärung

Das Abfragen einer URL und das Auslesen des Antworttexts können länger dauern.

Mit `.then()` warten wir jeweils auf das Resultat.

Die Funktion `.then()` bekommt einen Handler (in Form einer anderen Funktion) übergeben.

Das Resultat des ersten Handlers (`response => response.text()`) ist wiederum ein neues Promise.

Der zweite Handler (`console.log`) loggt das Resultat einfach.

## Beispiel: Landesflagge

```js
// ohne Promises
getImageName(country, name =>
  fetchFlag(name, flagResponse =>
    processFlag(flagResponse, appendFlag)
  )
);
```

```js
// mit Promises
getImageName(country)
  .then(fetchFlag)
  .then(processFlag)
  .then(appendFlag);
```

## Fehlerbehandlung

Fehler können mit `.catch()` behandelt werden

```js
return getImageName(country)
  .catch(getFallbackName)
  .then(fetchFlag)
  .then(processFlag)
  .then(appendFlag)
  .catch(logError);
```

## Todo App: fetch - grundlegend

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(updatePageWithNewTodos);
  .catch(error => {
    console.log('error when getting todos');
  })
```

## Nutzung mit async / await (moderne Browser)

```js
const url = 'https://jsonplaceholder.typicode.com/todos';

const fetchAsync = async () => {
  let response = await fetch(url);
  let todos = await response.json();
  displayTodos(todos);
};

fetchAsync();
```

## Todo App: fetch - fortgeschritten

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    if (!response.ok) {
      throw response.statusText;
    } else {
      jesponse.json().then(updatePageWithNewTodos);
    }
  })
  .catch(error => console.log('unable to parse data'))
  .then(updatePageWithNewTodos);
```

## Übung

Benutzer gibt user-id an, entsprechende todos werden geladen

## Konfigurieren des fetch Requests

```js
fetch(url, {
  method: 'POST',
  cache: 'no-cache',
  body: '{"text": "learn fetch"}',
  headers: { 'content-type': 'application/json' },
});
```

## Eigene Promises

Promise, die nach 1 Sekunde entweder mit hello antwortet oder nicht erfolgreich ist

```js
const getReply = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('hello');
    } else {
      reject('no access');
    }
  }, 1000);
});
```

## Promise.all

```js
const promise1 = fetch('/users.json');
const promise2 = fetch('/articles.json');
Promise.all([promise1, promise2])
  .then(results => {
    console.log('all data has loaded');
  })
  .catch(error => {
    console.log(`one or more requests failed: ${error}`);
  });
```

<!--
# (Promise.race)

TODO: google code lab - code-beispiele durchsehen
-->

## Beispiele

- Todo-API (https://jsonplaceholder.typicode.com)
- Wetter-API (https://openweathermap.org)

## Übungen

- https://developers.google.com/web/ilt/pwa/lab-fetch-api

- https://developers.google.com/web/ilt/pwa/lab-promises
