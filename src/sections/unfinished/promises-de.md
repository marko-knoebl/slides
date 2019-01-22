class: center, middle

<!-- siehe auch: webdev/fetch -->
<!-- https://developers.google.com/web/fundamentals/primers/promises -->

# Promises

---

# Promises - Grundlagen

Können verwendet werden, um einmalige Events zu behandeln

Erlauben dem Browser, auf ein Event zu _warten_ - zb auf eine Antwort aus dem Netzwerk oder Daten aus der Datenbank

---

# Beispiel von vorhin: Fetch einer Website

```js
// dieser Code kann zu jeder Website in der
// Browser-Konsole ausgeführt werden
const url = '/';

fetch(url)
  .then(response => response.text())
  .then(console.log);
```

---

# Fetch einer Website: Erklärung

Das Abfragen einer URL und das Auslesen des Antworttexts können länger dauern.

Mit `.then()` warten wir jeweils auf das Resultat.

Die Funktion `.then()` bekommt einen Handler (in Form einer anderen Funktion) übergeben.

Das Resultat des ersten Handlers (`response => response.text()`) ist wiederum ein neues Promise.

---

# Beispiel: Landesflagge

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

---

# Fehlerbehandlung

Fehler können mit `.catch()` behandelt werden

```js
return getImageName(country)
  .catch(getFallbackName)
  .then(fetchFlag)
  .then(processFlag)
  .then(appendFlag)
  .catch(logError);
```

---

# Todo App: fetch - grundlegend

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .catch(error => {
    console.log('error when getting todos');
  })
  .then(updatePageWithNewTodos);
```

---

# Todo App: fetch - fortgeschritten

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(
    response => {
      if (!response.ok) {
        throw response.statusText;
      }
      return response.json();
    },
    error => {
      console.log('unable to retrieve data');
    }
  )
  .catch(error => console.log('unable to parse data'))
  .then(updatePageWithNewTodos);
```

---

# Übung

Benutzer gibt user-id an, entsprechende todos werden geladen

---

# Andere http-Methoden

```js
fetch(url, {
  method: 'POST',
  cache: 'no-cache',
  body: '{"text": "learn fetch"}',
  headers: { 'content-type': 'application/json' },
});
```

---

# Eigene Promises

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

---

# Promise.all

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

---

# Übungen

- https://developers.google.com/web/ilt/pwa/lab-fetch-api

- https://developers.google.com/web/ilt/pwa/lab-promises

---
