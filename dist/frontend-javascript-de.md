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
- `element.className`
- `element.classList` (`.add`, `.remove`, `.toggle`, `.contains`)

## DOM: createElement, appendChild

- `document.createElement()`
- `element1.appendChild(element2)`
- `element1.removeChild(element2)`
- `element2.remove() // not IE`

## DOM: createElement, appendChild - Beispiele

- Schachbrett
- Todo-Liste (nicht interaktiv)

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

# Debuggen im Browser

## Debuggen im Browser

`debugger` Statement

## Debuggen im Browser

Breakpoints:

- setzen von Breakpoints
- Aktivieren / Deaktivieren von Breakpoints

## Debugger im Browser

Manuell weiterspringen:

- play / pause
- _step over / Schritt darüber_: in die nächste Zeile
- _step into / Schritt hinein_: einem Funktionsaufruf folgen
- _step out / Schritt heraus_: aktuellen Funktionsaufruf verlassen

## Debugger im Browser

Beobachten von Variablen

# HTTP

## HTTP

Hypertext Transfer Protocol

= Protokoll, auf dessen Basis Resourcen über das Netzwerk angefragt und übertragen werden können

## HTTP

Paar: Anfrage - Antwort

Anfrage: meist aus dem Browser

Antwort: kommt vom Server

HTTP Anfragen und Antworten werden wiederum über ein "niedrigeres" Protokoll übertragen, üblicherweise _TCP_.

## Experimentieren mit HTTP

Möglichkeiten:

- Browser-Tools unter "Netzwerkanalyse"
- VS Code Plugin _HTTP Client_

## HTTP: Beispiel Wikipedia

Anfrage:

```http
GET /wiki/Main_Page HTTP/2.0
Host: en.wikipedia.org
Connection: keep-alive
```

Antwort:

```http
HTTP/2.0 200 OK
Date: Wed, 24 Apr 2019 07:50:41 GMT
Content-Type: text/html; charset=UTF-8

<!DOCTYPE html>
<html ...
```

## HTTP: Beispiel Wikipedia Suche (1)

Anfrage:

```http
GET /w/index.php?search=test&title=Special:Search&go=Go HTTP/2.0
Host: en.wikipedia.org
Connection: keep-alive
```

Antwort:

```http
HTTP/2.0 302 Found
Location: https://en.wikipedia.org/wiki/Test
Content-Length: 0
```

## HTTP: Beispiel Wikipedia Suche (2)

Anfrage:

```http
GET /wiki/Test HTTP/2.0
Host: en.wikipedia.org
Connection: keep-alive
```

Antwort:

```http
HTTP/2.0 200 OK
Content-Type: text/html; charset=UTF-8

<!DOCTYPE html>
<html ...
```

## HTTP: Beispiel POST-Request

Anfrage:

```http
POST /submit-posting HTTP/2.0
Host: example.com
Connection: keep-alive
Content-Type: text/plain; encoding=UTF-8
Content-Length: 33

This is the post content (body)
```

Antwort:

```http
HTTP/2.0 200 OK
Content-Type: text/html; charset=UTF-8

...
```

## HTTP: Beispiel API

```http
GET /todos/12
Host: jsonplaceholder.typicode.com
Connection: keep-alive
```

```http
HTTP/2.0 200 OK
Content-Type: application/json; charset=utf-8
Etag: W/"5c-cn8o...

{
  "userId": 1,
  "id": 12,
  "title": "ipsa repellendus fugit nisi",
  "completed": true
}
```

## wichtige Anfrage-Headerfelder

- _`Host`_
- _`Connection`_
- `Origin`
- `Accept`
- `Accept-Encoding`
- `Cookie`
- `Cache-Control`
- `Dnt`

## Wichtige HTTP-Statuscodes

- `200 OK`

<!-- list separator -->

- `301 Moved Permanently`
- `307 Temporary Redirect` (Weiterleitung auf eine andere Adresse)
- `303 See Other` (Weiterleitung auf eine andere Adresse, Methode ändert sich zu `GET`)
- `308 Permanent Redirect`
- `304 Not Modified` (Resource hat sich seit letzter Anfrage nicht geändert)

## Wichtige HTTP-Statuscodes

- `400 Bad Request`
- `401 Unauthorized`
- `403 Forbidden`
- `404 Not Found`

<!-- list separator -->

- `500 Internal Server Error`

siehe auch: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

## wichtige Antwort-Headerfelder

- `Content-Length`
- `Content-Type`
- `Set-Cookie`
- `Location`
- `Cache-Control`

## Content-Type-Headerfeld

Mögliche Werte:

- `text/plain; charset=utf-8`
- `text/html; charset=utf-8`
- `application/json`
- `application/javascript`
- `application/ecmascript`
- `image/jpeg`
- `image/png`
- ...

## Set-Cookie-Headerfeld

Beispiel:

```http
GET /
Host: www.google.com

Set-Cookie: 1P_JAR=2019-04-24-08; expires=...; path=/; domain=.google.com
Set-Cookie: IDCC=AN0-TYtU7...fo; expires=...; path=/; domain=.google.com
```

# HTTP in JavaScript

Möglichkeiten:

- XMLHttpRequest
- fetch
- jQuery
- axios

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
let pers = { firstName: 'John', lastName: 'Doe', age: 31 };
let updatedPers = { ...person, email: 'j@d.com', age: 32 };
// {firstName: 'John', lastName: 'Doe',
// email: 'j@d.com', age: 32}
```

# map, filter, reduce

### Array-Methoden für die funktionale Programmierung

## map

- Ändert jeden Eintrag eines Arrays mit Hilfe einer Funktion ab
- Rückgabewert: neues Array

```js
let myNumbers = [2, 10, 23];

let triple = n => 3 * n;

let newNumbers = myNumbers.map(triple);
// [6, 30, 69]
```

## filter

- Behält nur gewisse Einträge in einem Array
- Nutzt eine Funktion, um Einträge auf ein bestimmtes Kriterium zu testen
- Rückgabewert: neues Array

```js
let myNumbers = [2, 10, 23];

let isEven = n => n % 2 === 0;

let newNumbers = myNumbers.filter(isEven);
// [2, 10]
```

## reduce

- Verarbeitet die Einträge in einem Array zu einem einzelnen Wert
- Verwendet eine Funktion, die aus zwei bestehenden Werten einen resultierenden Wert erstellt - diese Funktion wird wiederholt aufgerufen

## reduce - Beispiel

```js
let transactions = [
  { amount: -56, title: 'groceries' },
  { amount: +1020, title: 'salary' },
  { amount: -13, title: 'dinner' },
  { amount: -96, title: 'electricity' },
];
let initialBalance = 317;

let reducer = (aggregator, transaction) =>
  aggregator + transaction.amount;

let currentBalance = transactions.reduce(
  reducer,
  initialBalance
);

// 317 -> 261 -> 1281 -> 1268 -> 1172
```

# this - quirks

## this - quirks

- _this_ bezieht sich in Objektmethoden üblicherweise auf das aktuelle Objekt
- **allerdings**:
  - jeder Funktionsaufruf setzt _this_ neu (nicht nur Methodenaufrufe)
  - _this_ wird nur richtig gesetzt, wenn die Methode mit der Syntax `object.method()` aufgerufen wird

## Problem: _this_ in anonymen Funktionen

```js
class myComponent {
  constructor() {
    // this ist hier richtig gesetzt
    this.foo = true;
    setTimeout(function() {
      //this wird hier überschrieben (auf window)
      console.log(this.foo);
    }, 1000);
  }
}
```

## Lösung: _Pfeilfunktionen_

```js
class myComponent {
  constructor() {
    // this ist hier richtig gesetzt
    this.foo = true;
    setTimeout(() => {
      // this wird hier *nicht* überschrieben
      console.log(this.foo);
    }, 1000);
  }
}
```

## Problem: Methodenaufrufe ohne Methodensyntax

```js
class Foo {
  constructor() {
    this.message = 'hello';
  }
  greet() {
    console.log(this.message);
  }
}
let foo = new Foo();
foo.greet(); // klappt
let fg = foo.greet;
fg(); // klappt nicht (this ist undefined)
```

## Lösung: Pfeil-Methoden

Seit ES2018 einsetzbar:

```js
class Foo {
  constructor() {
    this.message = 'hello';
  }
  greet = () => {
    console.log(this.message);
  };
}
```

## Lösung: Binden von Methoden

```js
let f = new Foo();
f.greet(); // klappt
let fg = f.greet.bind(f);
fg(); // klappt jetzt auch
```

Üblicherweise Zuweisung im constructor:

```js
  constructor() {
    this.greet = this.greet.bind(this);
  }
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

```js
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

## OOP (neu)

Vererbung

```js
class LuxuryCar extends Car {
  openRoof() {}
}
```

# Libraries

## Libraries

verbreitete Libraries:

- _lodash_ (Sammlung nützlicher Funktionen)
- _jQuery_ (Erleichtert das Arbeiten mit dem DOM)
- _immutable.js_ (Arbeiten mit unveränderlichen Objekten)
- _moment.js_ (Arbeiten mit Zeitangaben)

## jQuery

Ändern von Elementen

- `$('#myelement')`
- `el.html('content')`
- `el.css('color', 'blue')`
- `el.addClass('abc')`
- `el.prop('style')`

## jQuery

Erstellen / hinzufügen / entfernen von Elementen

- `$('<div>')`
- `parent.append(child)`
- `child.remove()`

## jQuery

Abfragen von Events

- `$(element).on('click', ...)`
- `$(element).click(...)`

# Übungen

- Lotto - Generator
- uhr
- Todo-Liste
- chessboard
- facebook
- es6

