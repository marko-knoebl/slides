# JavaScript

## JavaScript

dynamische Programmiersprache

Einsatzbereiche:

- im Webbrowser: Interaktivität von Webseiten / -anwendungen
- am Webserver: Mittels _node.js_
- lokal am Rechner: für Skripte

## JavaScript-Standardisierung

JavaScript wird unter dem Namen _ECMAScript_ (kurz ES) standardisiert

## JavaScript: Versionen

- Überall unterstützt: ES5 (2009 veröffentlicht)
- Nächste große Version: _ES2015_ (auch _ES6_)
- Seither: jährliche kleine Änderungen (aktuell: ES2018)

## JavaScript: Versionsunterstützung

im Browser:

- Übersicht: siehe http://kangax.github.io/compat-table/es6/
- In der Praxis: Modernes JavaScript wird in ES5 transpiliert (mittels Babel, webpack)

in node.js:

Großteil der modernen Funktionalität wird unterstützt; wichtige Ausnahme: ES2015-Module

## Codebeispiel

```js
// this is a comment

let a = 3;
let b = 4;
console.log(a * b);

if (a * b > 10) {
  console.log('greater');
}
```
