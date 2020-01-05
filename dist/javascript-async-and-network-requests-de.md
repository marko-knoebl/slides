# JavaScript: Async und Netzwerkanfragen

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

Jedes Promise kann mit async / await verwendet werden:

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

# Async & await

## Async & await

Einfachere Erstellung / Verwendung von Promises - seit ES2017

Anstatt von `.then` können wir `await` verwenden

Anstatt von `new Promise(...)` können wir `async` verwenden

## Await

Promises & then

```js
fetch('https://en.wikipedia.org')
  .then(response => response.text())
  .then(console.log);
```

Promises & await (siehe nächste Slide bezüglich Browserkompatibilität)

```js
const response = await fetch('https://en.wikipedia.org');
const content = await response.text();
console.log(content);
```

## Await

Im offiziellen ES Standard sind top-level `await` Statements noch nicht enthalten - sie sind aber in Chrome verfügbar.

Gültiges ES 2019:

```js
async function fetchWikipedia() {
  const response = await fetch('https://en.wikipedia.org');
  const content = await response.text();
  console.log(content);
}

fetchWikipedia();
```

## Async & await

Beispiel: fetchen des ersten nicht erledigten Todos:

```js
async function logFirstIncompleteTodo() {
  let i = 1;
  while (true) {
    const reply = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${i}`
    );
    const todoData = await reply.json();
    if (todoData.completed) {
      i++;
    } else {
      console.log(todoData);
      break;
    }
  }
}

logFirstIncompleteTodo();
```

# Fetch - Fehlerbehandlung

## Fehlerbehandlung

```js
fetch('/')
  .then(response => response.text())
  .then(console.log);
```

Verschiedene Fehler können hier auftreten:

- Browser ist offline (keine Antwort)
- Server antwortet mit 404 oder ähnlicher Meldung
- Antwort ist leer oder beinhaltet etwas anderes als text

## Fehlerbehandlung: grundlegende Version

```js
fetch('/')
  .then(response => response.text())
  .catch(() => console.log('some error occured'))
  .then(console.log);
```

## Fehlerbehandlung: Überprüfen des Status

Standardmäßig wird eine Antwort mit einem Fehlercode (z.B. 404 oder 500) auch als Erfolg angesehen.

```js
fetch('/')
  .then(response => {
    if (response.ok) {
      handleReply(response);
    } else {
      console.log('Network response was not ok');
    }
  })
  .catch(() => {
    console.log('Network error');
  });
```

## Fehlerbehandlung: Überprüfen des Status

```js
const handleReply = response => {
  response
    .json()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log('Could not parse answer as json');
    });
};
```

## Beispiel: Todos - grundlegend

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .catch(error => {
    console.log('error when getting todos');
  })
  .then(updatePageWithNewTodos);
```

## Beispiel: Todos - fortgeschritten

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

# Promises fortgeschritten

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

## Promise.race

Das erste erfolgreiche Promise als Resultat verwenden

