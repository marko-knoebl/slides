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
