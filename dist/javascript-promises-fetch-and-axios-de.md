# JavaScript: Promises, fetch und axios

# Asynchrones JavaScript

## Asynchrones JavaScript

manche Aufgaben in JavaScript können gleichzeitig laufen (insbesondere Aufgaben bezüglich Input / Output):

- Netzwerkanfragen
- Lesen / Schreiben von Dateien in node.js
- Timer
- ...

## Tools für asynchrones JavaScript

- **callbacks, promises, async / await**: für parallels Input / Output
- _(Web) Worker_: für Parallelisierung von CPU-intensiven Aufgaben (JavaScript Code läuft tatsächlich parallel)

## Asynchrones JavaScript

- _callbacks_: traditionelle Möglichkeit, um asynchrone Anfragen zu bearbeiten
- **promises und .then()**
- **promises und async / await**

## Asynchrones JavaScript

Möglichkeiten, um Netzwerkanfragen zu machen:

- **fetch** (Promises)
- **axios** (Promises)
- jQuery
- XMLHttpRequest

## Asynchrones JavaScript

Beispiel: Anfragen mit _axios (await)_, _axios (then)_ und _jQuery (callback)_:

```js
const res = await axios(url);
console.log(res.data);
```

```js
axios(url).then((res) => console.log(res.data));
```

```
jquery.getJSON(url, (data) => console.log(data));
```

# Promises und fetch

## Promises

Promise: Repräsentation eines zukünftigen Ergebnisses, das nicht unmittelbar verfügbar ist

## Promises

Beispiel aus der echten Welt:

Wir bestellen bei einem Fast-Food-Restaurant und erhalten folgenden Bon:

```txt
Bestellung #42:

- Cheeseburger
- kleine Pommes

Die Bestellung wird - sobald bereit - zu Ihrem Tisch gebracht.
```

Der Bon ist ein "Promise" - eine Repräsentation eines zukünftigen Ergebnisses

## Promises

Das warten auf ein Promise ist _non-blocking_: anderer Code währenddessen ausgeführt werden

## Promises

warten auf das _resolven_ eines Promises:

- `.then()`
- `await`

## Beispiel: Fetch einer Website

```js
// request the home page (/)
fetch('/')
  // wait for a response, then request its text content
  .then((res) => res.text())
  // wait for the text content, then log it
  .then((content) => console.log(content));
```

kann in der Browserkonsole für jede geöffnete Website ausgeführt werden

## Beispiel: Fetch einer Website

Das Abfragen einer URL und das Auslesen des Antworttexts können länger dauern.

Mit `.then()` warten wir jeweils auf das Resultat.

Die Funktion `.then()` bekommt einen Handler (in Form einer anderen Funktion) übergeben.

Das Resultat des ersten Handlers (`(res) => res.text()`) ist wiederum ein neues Promise.

Der zweite Handler (`(content) => console.log(content)`) loggt das Resultat.

## Promises und fetch

Beispiel: Fetch von JSON-Daten - zwei Funktionen, die Promises zurückgeben

```js
const fetchTodos = () => {
  return fetch(
    'https://jsonplaceholder.typicode.com/todos'
  ).then((res) => res.json());
};
```

```js
const fetchTodos = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  const todos = await res.json();
  return todos;
};
```

## Promises und fetch

Nach dem aktuellen ES Standard muss ein `await`-Statement immer in einer `async`-Funktion beinhaltet sein

Fortschritt des "top level await" (await außerhalv von of `async`-Funktionen):

- [ES proposal auf Stufe 3 von 4](https://github.com/tc39/proposal-top-level-await)
- Unterstützt von Chrome
- Unterstützt von _node.js_ seit Version 14.8

# Then vs. await

## Then vs. await

Vorteile von `await`:

- Code ähnelt "synchronem" code
- einfachere Fehlerbehandlung

Vorteile von `.then`:

- Einfachere gleichzeitige Requests
- muss nicht in einer asynchronen Funktion beinhaltet sein

<!--
use case for await:

async function getFirstIncompleteTodo() {
  let i = 1;
  while (true) {
    const reply = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${i}`
    );
    const todoData = await reply.json();
    if (todoData.completed) {
      i++;
    } else {
      return todoData;
    }
  }
}
-->

# Fetch Optionen

## Fetch Optionen

```js
fetch(url, {
  method: 'POST',
  cache: 'no-cache',
  body: '{"text": "learn fetch"}',
  headers: { 'content-type': 'application/json' },
});
```

# Fetch und Fehlerbehandlung

## Fehlerbehandlung

Verschiedene Fehler können beim Fetch auftreten:

- Browser ist offline (keine Antwort)
- Server antwortet mit 404 oder ähnlicher Meldung
- Antwort ist leer oder beinhaltet etwas anderes als text

## Fehlerbehandlung

Abfangen von möglichen Fehlern:

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

## Fehlerbehandlung: Überprüfen des Status

Standardmäßig wird eine Antwort mit einem Fehlercode (z.B. 404 oder 500) auch als Erfolg angesehen.

```js
const fetchTodos = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const todos = await res.json();
  return todos;
};
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

Erstellen eines Promise, das resolved wird, wenn mehere asynchrone Tasks abgeschlossen sind:

```js
const fetchJson = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const [users, todos] = await Promise.all([
  fetchJson('https://jsonplaceholder.typicode.com/users'),
  fetchJson('https://jsonplaceholder.typicode.com/todos'),
]);
```

## Promise.race

Das erste erfolgreiche Promise als Resultat verwenden:

```js
const anyTodo = await Promise.race([
  fetchJson('https://jsonplaceholder.typicode.com/todos/1'),
  fetchJson('https://jsonplaceholder.typicode.com/todos/2'),
  fetchJson('https://jsonplaceholder.typicode.com/todos/3'),
]);
```

# Übungen

## Übungen

- todo API (<https://jsonplaceholder.typicode.com>)
- weather API (<https://openweathermap.org>)
- <https://developers.google.com/web/ilt/pwa/lab-fetch-api>
- <https://developers.google.com/web/ilt/pwa/lab-promises>

# Axios

## Axios

verbreitete Library mit mehr Funktionalität / einfacherem Interface als `fetch`

## Axios

JSON Daten laden:

```js
const todos = await axios(
  'https://jsonplaceholder.typicode.com/todos'
);
```

## Status Codes in Axios

Standardverhalten:

- Status Codes im 200er-Bereich: Erfolgreiches Promise
- Status Codes im 400er- und 500er-Bereich: Promise wird zurückgewiesen

# Fetch & axios: Beispiele

## Laden von JSON-Daten

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => console.log(data));
```

<!-- prettier-ignore -->

```js
import axios from 'axios';

axios('https://jsonplaceholder.typice.com/todos')
  .then(res => console.log(res.data));
```

## Laden von Textinhalten

```js
fetch('https://www.w3.org')
  .then(res => res.text())
  .then(content => console.log(content));
```

<!-- prettier-ignore -->

```js
axios('https://www.w3.org', { responseType: 'text' })
  .then(content => console.log(content));
```

Achtung: Standardmäßig versucht axios zumindest, den Inhalt als JSON zu parsen

## Daten posten

```js
fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'post',
  body: '{"title": "xyz"}',
  headers: { 'Content-Type': 'application/json' },
});
```

```js
axios.post(
  'https://jsonplaceholder.typicode.com/todos',
  '{"title": "xyz"}',
  { headers: { 'Content-Type': 'application/json' } }
);
```

## Abfrage eines GraphQL APIs

```js
const query = '{pokemon(name: "Pikachu") {number name}}';
const body = JSON.stringify({ query: query });

fetch('https://graphql-pokemon.now.sh', {
  method: 'post',
  body: body,
  headers: { 'Content-Type': 'application/json' },
})
  .then(res => res.json())
  .then(data => console.log(data.data));
```

## Abfrage eines GraphQL APIs

```js
const query = '{pokemon(name: "Pikachu") {number name}}';
const body = JSON.stringify({ query: query });

axios
  .post('https://graphql-pokemon.now.sh', body, {
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => console.log(res.data.data));
```

# Axios fortgeschritten

## Globale Defaults

Beispiele:

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
```

## Eigene Instanzen und Defaults

```js
const todosAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
  timeout: 2000,
});

todosAxios.get('/').then(console.log);
todosAxios.get('/1').then(console.log);
```

## Interceptors

**Interceptors** sind Middleware, die beim Senden / Empfangen von Daten ausgelöst wird

```js
const requestLogger = requestConfig => {
  console.log('sending request', requestConfig);
  return requestConfig;
};
todosAxios.interceptors.request.use(requestLogger);
```

```js
const responseLogger = response => {
  console.log('received response', response);
  return response;
};
todosAxios.interceptors.request.use(responseLogger);
```
