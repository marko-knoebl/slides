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

# JavaScript

## JavaScript

dynamische Programmiersprache für Webbrowser

standardisiert, etabliert als _die_ Sprache für Webbrowser

Ermöglicht Interaktivität von Websites / Webanwendungen

## JavaScript-Standardisierung

JavaScript wird unter dem Namen _ECMAScript_ (kurz ES) standardisiert

## JavaScript: Versionen

- Von allen Browsern unterstützt: ES5 (2009 veröffentlicht)
- Nächste große Version: _ES2015_ (oder ES6)
- Seither: jährliche kleinere Änderungen (aktuell: ES2018)

## JavaScript: Versionsunterstützung

- Übersicht: siehe http://kangax.github.io/compat-table/es6/
- In der Praxis: Modernes JavaScript wird in ES5 transpiliert (mittels Babel, webpack)

# JavaScript Grundlagen

## Ausgabe

In Popup-Fenster:

```js
alert('Hello');
```

In der Browser-Konsole:

```js
console.log('Hello');
```

## Variablen

Variablen werden mit `let` deklariert (altes Schlüsselwort: `var`)

Sie sind nur in den umgebenden geschweiften Klammern gültig

```js
// Kommentar
if (true) {
  let a = 3;
  console.log(a);
}
```

## Konstanten

Mit `const` werden Variablen deklariert, die nicht neu zugewiesen werden können.

```js
const a = 3;
// ungültig
a = 4;
```

## Das Semikolon in JavaScript

In JavaScript sind Semikolons in den meisten Fällen optional; sie werden bei der Ausführung automatisch nach bestimmten Regeln eingesetzt.

## JavaScript - das Simikolon

Die _automatic semicolon insertion_ kann zu Problemen führen:

<!-- prettier-ignore-start -->
```js
function foo() {
  return
    "hello";
}
```

wird interpretiert als:

```js
function foo() {
  return;
  "hello";
}
```
<!-- prettier-ignore-end -->

## Datentypen

<!-- prettier-ignore -->
```js
let a = 3; // number

let name = 'Alice'; // string
let name2 = "Bob"; // string

let active = true; // boolean
```

## Datentypen: Arrays

```js
let people = ['Alice', 'Bob', 'Charlie'];

people[2]; //Charlie
people[2] = 'Chris';

people.push('Dan');

people.splice(1, 1);
```

## Datentypen: Objekte

```js
let person = {
  firstName: 'Thomas',
  lastName: 'Edison',
  birthYear: 1847,
};

console.log(person.lastName);
```

## JavaScript - strikte Vergleiche

Die Operatoren `===` und `!==` dienen zum strikten Vergleichen von Objekten; viele Entwickler verwenden sie grundsätzlich anstatt `==` und `!=`.

Beispiele:

```js
3 === '3'; // false
3 == '3'; // true
0 == []; // true
[] == ''; // true
```

## if / else if / else

```js
if (input === 'yes' || input === 'y') {
  console.log('positive');
} else if (input === 'no' || input === 'n') {
  console.log('negative');
} else {
  console.log('unknown');
}
```

## Array-Iteration (for ... of)

Über die Einträge in einem Array iterieren:

```js
let names = ['Anna', 'Bernhard', 'Caro'];
for (let name of names) {
  console.log(name);
}
```

## Template-Strings

- Neue Syntax zum _Erstellen_ von Strings
- Werden mit Backticks begrenzt
- Erlauben mehrzeilige Strings und Interpolation:

```js
let name = 'Anton';
let greeting = `Hallo, ${name}!
                Das ist ES2015!`;
```

# Funktionen

## Funktionsdefinition

<!-- prettier-ignore -->
```js
// function statement
function double1(value) {
  return 2 * value;
}

// function expression
const double2 = function(value) {
  return 2 * value;
}

// arrow function
const double3 = (value) => {
  return 2 * value;
}
const double4 = (value) => 2 * value;
```

## Pfeilfunktionen

Seit ES2015 Teil des Standards

```js
const triple1 = value => {
  return value * 3;
};
// wenn der Funktionskörper nur aus einem einzelnen
// Return-Statement besteht: Kurzschreibweise:
const triple2 = value => value * 3;
// wenn es genau einen Parameter gibt, können die
// Parameterklammern weggelassen werden:
const triple3 = value => value * 3;
```

## Pfeilfunktionen

Achtung: `{` und `}` sind mehrdeutig

```js
// unzulässig:
const getPerson1 = () => {
  firstName: 'Thomas',
  lastName: 'Edison',
  birthYear: 1847,
};
// stattdessen:
const getPerson1 = () => ({
  firstName: 'Thomas',
  lastName: 'Edison',
  birthYear: 1847,
});
```

## Standardparameter in Funktionen

In Funktionen können Standardparameter definiert werden:

```js
let join = (strings, separator='') => {
  ...
}
```

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

# Funktionale Programmierung

```js
// Funktionale Programmierung in JS (mit Arrays)

// map
var numbers = [2, 4, 5, 10, 24];

var doubleNumbers = numbers.map(function(n) {
  return 2 * n;
});

console.log(doubleNumbers);

// filter
function isEven(n) {
  return n % 2 ? false : true;
}

var filteredNumbers = numbers.filter(isEven);

console.log(filteredNumbers);

// reduce
var transactions = [+1234, -27, -13, -44];
var initialBalance = 317;

var currentBalance = transactions.reduce(function(
  aggregator,
  amount
) {
  return aggregator + amount;
},
initialBalance);

console.log(currentBalance);
```

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

- Lotto - Generator
- uhr
- Todo-Liste
- chessboard
- facebook
- es6
