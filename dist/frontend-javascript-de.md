# {{title}}

## Präsentation und Code

Präsentationen verfügbar unter: https://karuga.eu/courses-presentations

Code verfügbar unter: https://github.com/marko-knoebl/courses-code

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

## Vorstellung der Teilnehmer

- Name
- Firma
- Aktuelle Projekte
- Grund der Schulung
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

# JavaScript im Browser

## Beispiele in der Browser-Konsole

```js
alert();
open('https://google.com', '_self');
prompt("What's your name?");
Math.random();
```

## Document Object Model

**DOM (Document Object Model)** = JavaScript-API für Interaktion mit dem HTML-Inhalt

## DOM Grundlagen

- `document.getElementById()`
- `document.querySelector()`
- `element.innerHTML =`

## DOM Grundlagen - Beispiele

- Zufallszahl
- Aktuelles Datum

## DOM: Stile und Attribute (href, ...)

- `element.style`
- (`element.className`)
- `element.classList` (`.add`, `.remove`, `.toggle`, `.contains`)

## DOM: createElement, appendChild

- `document.createElement()`
- `element1.appendChild(element2)`
- `element1.removeChild(element2)`
- `element2.remove() // not IE`

## DOM: createElement, appendChild - Beispiele

- Schachbrett
- Todo-Liste

## Events

- `setTimeout()`
- `setInterval()`
- `element.addEventListener('click', ...)`

## Events - Beispiele

- Uhr
- Countdown
- Spiel: click the box

## Formulare und Formular-Events

Beispiel: Todo-Liste

- "debugger" - statement
- black boxing of files
- breakpoints in the browser
  - set breakpoints
  - activate / deactivate breakpoints
  - conditional breakpoints
- step in code
  - play / pause
  - step over
  - step in
  - step out
- watch variables

# HTTP

## HTTP

Hypertext Transfer Protocol

= Protokoll, auf dessen Basis Resourcen über das Netzwerk angefragt und übertragen werden können

## HTTP

Paar: Anfrage - Antwort

Anfrage: meist aus dem Browser

Antwort: kommt vom Server

Beispiel: Siehe Browser-Tools unter "Netzwerkanalyse"

## HTTP-Anfrage: Beispiel

```http
GET /index.html HTTP/2.0
Host: example.com
User-Agent: Mozilla/5.0...
Content-Type: application/json
Content-Length: 23

{
  "action": "login"
}
```

## HTTP-Antwort: Beispiel

```http
HTTP/2.0 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 138
ETag: "3f80f-1b6-3e1cb03b"

<html>
<head>
  <title>An Example Page</title>
</head>
<body>
  Hello World, this is a very simple HTML document.
</body>
</html>
```

# HTTP in JavaScript

Möglichkeiten:

- XMLHttpRequest
- jQuery
- fetch

## Fetch

<!-- siehe auch: pwa/promises -->

## Fetch

moderne Möglichkeit, um asynchron Daten vom Server zu laden

Alternative zu XMLHTTPRequest

## Nutzung mit Promises

```js
const url = 'index.html';

fetch(url)
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    console.log(text);
  });
```

## Nutzung mit Promises

```js
const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(todos) {
    console.log(todos);
  });
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

## Andere http-Methoden

```js
fetch(url, {
  method: 'POST',
  cache: 'no-cache',
  body: '{"text": "learn fetch"}',
  headers: { 'content-type': 'application/json' },
});
```

## Beispiele

- Todo-API (https://jsonplaceholder.typicode.com)
- Wetter-API (https://openweathermap.org)

# JavaScript Fortgeschritten

## Module & Imports

- Möglichkeit, Funktionalität aus anderen js-Dateien zu importieren – kein globaler Namespace mehr
- Benötigt einen Bundler, z.B. webpack

```js
// user.js
export class User {
  ...
}
```

```js
// main.js
import { User } from 'user.js';
```

## Module & Imports

```js
// user.js
// es kann 1 default export geben
export default class User {
   ...
}
```

```js
// main.js
import User from 'user.js';
```

## Klassen und Vererbung

```js
class User extends Person {
  constructor(firstName, lastName, userName) {
    // ruft Person.constructor auf
    super(firstName, lastName);
    this.userName = userName;
  }
}
```

## Spread Syntax (Arrays und Objekte)

```js
let squares = [1, 4, 9];
let moreSquares = [...squares, 16, 25];
// moreSquares: [1, 4, 9, 16, 25]
```

```js
let person = {firstName: 'John', lastName: 'Doe', age: 31};
let updatedPerson = {...person, email: 'j@d.com', age: 32};
// {firstName: 'John', lastName: 'Doe', email: 'j@d.com', age: 32}
```


# Objektorientierte Programmierung (alt)

## Prototypen und Konstruktorfunktionen

OOP in JavaScript basiert nicht auf Klassen, sondern auf sogenannten _Prototypen_

Vergleich aus dem echten Leben: Auto-Objekte

Eine Auto-Klasse wäre ein Bauplan für ein Auto

Ein Auto-Prototyp wäre ein bestehendes Auto auf dessen Vorlage weitere Autos gebaut werden können

## Prototypen und Konstruktorfunktionen

Bei OOP in JavaScript beginnen wir damit, die Konstruktorfunktion zu schreiben, die ein Objekt initialisiert:

```js
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}
```

## Prototypen und Methodendefinition

```js
Car.prototype.accelerate = function() {
  console.log('wrooom!');
};

Car.prototype.getDescription = function() {
  return this.make + ' ' + this.model;
};
```

## Verwendung von Objekten

```
var myCar = new Car('VW', 'Golf');

console.log(myCar);
console.log(myCar.getDescription());
myCar.accelerate();
```

# Objektorientierte Programmierung (ab ES2015)

## OOP (neu)

```js
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  accelerate() {
    console.log('wroom!');
  }
}
```

# Libraries

moment.js, underscore.js, immutable.js

## jQuery

- `$('#myelement')`
- `el.html('content')`
- `el.css('color', 'blue')`
- `el.addClass('abc')`
- `el.prop()`

- `$('<div>)`
- `parent.append(child)`
- `child.remove()`

- `$(element).on('click', ...)`
- `$(element).click(...)`

# Übungen

- Lotto - Generator
- uhr
- Todo-Liste
- chessboard
- facebook
- es6

