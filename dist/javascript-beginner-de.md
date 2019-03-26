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

# Die interaktive JavaScript-Konsole

## Die interaktive JavaScript-Konsole

Zugriff auf eine JavaScript-Konsole:

- im _Webbrowser_: Developer Tools (F12) - Konsole
- _online_: repl.it
- in node.js (falls installiert): Terminal-Befehl `node`

## Mathematische Operatoren

```js
2 * 2 + 3 / 2;
```

## Statements

Eine einzelne Anweisung in JavaScript nennt sich Statement. Üblicherweise werden Statements mit Semikolons beendet - wobei in JavaScript die Semikolons meist auch weggelassen werden können.

## Variablen

Daten können in Programmiersprachen mit einem Namen versehen werden - man spricht von Variablen.

Variablen werden in JavaScript üblicherweise mit `let` deklariert

```js
let firstName = 'John';
let lastName = 'Doe';
let birthYear = 1962;
```

## Variablen

```js
let age = 2019 - birthYear;
```

## Variablen

Variablennamen werden üblicherweise zusammen geschrieben, wobei neue Wortanfänge groß geschrieben werden

Variablennamen dürfen nur aus Buchstaben, Ziffern und Unterstrichen bestehen

## Variablen

Überschreiben (neu setzen von Variablen):

```js
let birthYear = 1962;
birthYear = 1970;
birthYear = birthYear + 1;
```

## Einfache (primitive) Datentypen

Mit welchen Arten von Daten - außer Zahlen - arbeitet ein Computer noch?

## Einfache (primitive) Datentypen

- `Number`: Zahl "mit 64 bit Genauigkeit"
- `String`: Text
- `Boolean`: Ja/Nein - Wert (Wahrheitswert)

## Number

Achtung Rundungsfehler: Einige Zahlen können nicht genau als Kommazahlen repräseniert werden, sie werden immer gerundet

zB: `1/3`

Der Computer kann auch Zahlen wie `0.1` oder `0.2` nicht genau repräsentieren

Beispiel: `0.3 - 0.2 - 0.1`

## String

Ein _String_ - auch _Zeichenkette_ genannt - repräsentiert Text

```js
'Hallo';
'Hallo' + 'Andreas';
```

## String

Strings werden entweder mit einfachen oder doppelten Anführungszeichen begrenzt

<!-- prettier-ignore -->
```js
'Hallo';
"Hallo";
```

## Template-Strings

- Syntax zum _Erstellen_ von Strings
- Werden mit Backticks begrenzt
- Erlauben mehrzeilige Strings und Interpolation:

```js
let name = 'Anton';
let greeting = `Hallo, ${name}!
                Das ist ES2015!`;
```

## Template-Strings

Wie schreiben wir dieses Zeichen: ` ?

`Shift` + Taste neben der Löschtaste, dann Leertaste

oder:

2x `Shift` + Taste neben der Löschtaste

## Strings - Escape-Sequenzen

Problem: Wie setzen wir Zeichen wie zB `'` innerhalb eines gewöhnlichen Strings?

Ungültig:

<!-- prettier-ignore -->
```js
let text = 'I'm ready.'
```

## Strings - Escape-Sequenzen

Lösung:

<!-- prettier-ignore -->
```js
let text = 'I\'m ready';
```

JavaScript interpretiert die Zeichenfolge `\'` wie ein einzelnes `'`

```js
`text.length`; // 14
```

## Strings - Weitere Escape-Sequenzen

Zeilenumbruch in 1 Zeile: `\n`

```js
let a = 'line 1\nline 2';
```

Einzelner Backslash:

```js
let b = 'C:\\docs';
```

## Boolean

Boolescher Wert: Ja/Nein - Wert

In JavaScript: `true` oder `false`

# Datentypen und JSON

## Datentypen und JSON

Übersicht über die wichtigsten Datentypen, die in JavaScript (und in JSON) definiert sind

JSON = _JavaScript Object Notation_: Datenformat, das insbesondere in der Webentwicklung wichtig ist.

## Datentypen

- Number
- String
- Boolean
- Null
- Array
- Object

## Datentypen: Null

symbolisiert das "fehlen" eines Wertes

## Datentypen: Array

Ein _Array_ beinhaltet eine Abfolge von anderen Objekten

```js
let names = ['Anne', 'Bob', 'Chris'];
let primes = [2, 3, 5, 7, 11];
```

## Datentypen: Objekt

Ein _Objekt_ beinhaltet benannte Einträge

<!-- prettier-ignore -->
```js
let person1 = {
  "firstName": "Thomas",
  "lastName": "Edison",
  "birthYear": 1847,
  "living": false
}
```

# JavaScript-Dateien ausführen

## JavaScript-Dateien ausführen

2 wichtige Möglichkeiten:

- einbinden in eine HTML-Seite, aufrufen der Seite:

```html
<script src="myscript.js"></script>
```

- direktes Ausführen mittels node.js:

```bash
node myscript.js
```

# Unser erstes JavaScript-Programm

## Unser erstes JavaScript-Programm

Wir schreiben ein JavaScript-Programm für die Verwendung im Browser.

Unser Programm soll den Benutzer nach seinem Namen fragen und ihn dann begrüßen.

## Eingabe und Ausgabe

Ausgabe in Popup-Fenster:

```js
alert('hello!');
```

Alert ist eine sogenannte _Funktion_.

## Eingabe und Ausgabe

Eingabe: Mit Hilfe von `prompt`:

```js
let name = prompt('What is your name?');
```

## Eingabe und Ausgabe

Ausgabe der Begrüßung

```js
alert(`Nice to meet you, ${name}!`);
```

## Typen umwandeln

Die Funktion `prompt` liefert immer Text (einen String) zurück.

Um den String in eine Zahl zu verwandeln:

```js
let birthYearString = prompt('When were you born?');
let birthYear = Number(birthYearString);
```

Analog für andere Datentypen: `String(...)`, `Boolean(...)`

## Übung: Alter anhand Geburtsjahr

Der Benutzer soll nach seinem Geburtsjahr gefragt werden. Dann soll angegeben werden, wie alt diese Person im Jahr 2019 wird.

## Kommentare

Kommentare dienen Entwicklern, um den Code zu beschreiben und zu erklären. Sie werden von JavaScript ignoriert.

Es gibt zwei Möglichkeiten, Kommentare zu erstellen:

```js
// dies ist ein Kommentar über 1 Zeile

/*
dies ist
ein mehrzeiliges
Kommentar
*/
```

## Variablen

Wie wir schon gesehen haben: Variablen werden üblicherweise mit `let` deklariert

Alternativen:

- Deklaration mit `const` (nicht mehr neu zuweisbar)
- Deklaration mit `var` ("veraltete" Version von `let`)

Mit `let` oder `const` deklarierte Variablen sind nur innerhalb des enstprechenden Codeblocks (innerhalb der umgebenden geschweiften Klammern) gültig. (Mehr dazu später)

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

# Kontrollstrukturen

## Kontrollstrukturen

Mit Kontrollstrukturen können wir bestimmten Code zB wiederholt ausführen lassen, oder Code nur in bestimmten Situationen ausführen lassen

## Kontrollstrukturen

Die zwei essenziellen Kontrollstrukturen in jeder Programmiersprache:

- if/else-Abfragen, um unter bestimmten Bedingungen die eine oder die andere Aktion zu setzen
- Schleifen, um unter bestimmten Bedingungen eine Aktion zu wiederholen

## Vergleiche

Für den Einsatz von grundlegenden Kontrollstrukturen müssen wir Werte vergleichen können:

```js
let a = 2;
let b = 3;
let c = '2';

console.log(a == b); // a gleich b
console.log(a == c); // a gleich c
console.log(a === c); // a gleich c (strikt)

console.log(a != c); // a ungleich b
console.log(a !== c); // a ungleich c (strikt)
```

## Vergleiche

Viele Entwickler verwenden nur die strikten Vergleichsoperatoren `===` und `!==`, um unterwartete Fehler zu vermeiden

weitere Beispiele:

```js
3 === '3'; // false
3 == '3'; // true
0 == []; // true
[] == ''; // true
```

## Vergleiche

```js
console.log(a < b); // a kleiner b
console.log(a > b);
console.log(a <= b); // a kleiner oder gleich b
console.log(a >= b);
```

## if / else

wenn, dann - sonst

## if / else

Beispiel:

```js
let age = 30;
let ageSeconds = age * 365 * 24 * 60 * 60;

if (ageSeconds <= 1000000000) {
  console.log('You are less than 1 billion seconds old.');
} else {
  console.log('You are older than 1 billion seconds.');
}
```

## if / else if ... / else

```js
if (ageSeconds <= 100000000) {
  console.log('You are less than 100 million seconds old.');
} else if (ageSeconds < 1000000000) {
  console.log('You are less than 1 billion seconds old');
} else if (ageSeconds < 1000000000) {
  console.log('You are less than 2 billion seconds old');
} else {
  console.log('You are older than 2 billion seconds');
}
```

## if / else if ... / else

Beispiel: Zahlenraten

## Codeblöcke

Codeblock = Zusammengehörige Codezeilen, die z.B. als Resultat einer if-Abfrage ausgeführt werden.

In den meisten Programmiersprachen werden Codeblöcke mit geschweiften Klammern begrenzt.

## Codeblöcke

```js
let a = 3;
if (a === 3) {
  let message = 'a equals 3'.
}
console.log(message); // ReferenceError!
```

## while-Schleife

Eine if-Abfrage führt einen Codeblock _einmal_ aus, wenn ein Kriterium zutrifft

Eine while-Schleife wiederholt einen Codeblock, solange ein Kriterium zutrifft

Beispiel:

```js
a = 1;

while (a < 2000) {
  console.log(a);
  a = a * 2;
}
```

## while-Schleife

Übungen:

- Zahlenraten mit mehreren Versuchen
- Schleife, die die Zahlen 1 bis 10 ausgibt
- Schleife, die die Zahlen der 7er-Reihe des Einmaleins ausgibt
- Zahlenraten mit echten Zufallszahlen
- Rechentrainer mit Zufallsaufgaben

## Verknüpfung von Vergleichen

einfach:

```js
if (a === 3) {
  console.log('a equals 3');
}
```

komplexer:

```js
if (a > 3 && a < 10) {
  console.log('a lies between 3 and 10');
}
```

## Verknüpfung von Vergleichen

Operationen:

- `&&` = und
- `||` = oder
- `!` = nicht

# Bestandteile von Programmen

## Bestandteile von Programmen

- Programme
  - Codeblöcke
    - Anweisungen
      - Ausdrücke

# Arrays

## Arrays

Weiterer wichtiger Datentyp: `Array`

## Erstellen von Arrays

Mit eckigen Klammern:

```js
let primes = [2, 3, 5, 7, 11];

let users = ['Alice', 'Bob', 'Charlie'];
```

## Auslesen von Listenelementen

Mittels Listenindex (bei 0 beginnend)

```js
let users = ['Alice', 'Bob', 'Charlie'];

console.log(users[0]);
console.log(users[2]);
console.log(users[users.length - 1]);
```

## Operationen mit Arrays

- Überschreiben: `users[0] = "Andrew";`
- Anhängen: `users.push("Dan");`
- Letztes Element entfernen: `users.pop();`
- Element in der Mitte entfernen: `users.splice(2)`;
- Länge: `users.length;`
- Zusammenhängen: `primes.concat(users);`
- Abfragen, ob Element in Liste: `users.includes('Andrew')`

## Übung: Einkaufsliste

Beispielhafter Programmlauf:

```text
enter an item or "x" to quit:
milk
enter an item or "x" to quit:
bread
enter an item or "x" to quit:
apples
enter an item or "x" to quit:
x
your shopping list is:
milk,bread,apples
```

# Objekte abändern

## Objekte abändern

In JavaScript können Arrays verändert werden - z.B. durch das anhängen eines neuen Eintrags

Viele andere Objekte - z.B. String, Number - können nicht abgeändert werden. Jedoch ist es möglich, neue, veränderte Objekte basierend auf bereits vorhandenen Objekten zu erstellen.

## Objekte abändern

```js
let a = [1, 2, 3];
// creating a new object
a = a.concat([4, 5]);

a = [1, 2, 3];
// a is modified directly
a.push(4);
```

## Objekte abändern

Was wird das folgende Programm ausgeben?

```js
let a = [1, 2, 3];
let b = a;
b.push(4);
print(a);
```

## Objekte abändern

Eine Zuweisung (`let b = ...`) versieht ein existierendes Objekt mit einem neuen (zusätzlichen) Namen.

Im Hintergrund steht nach wie vor nur ein einzelnes Objekt.

# For-Schleifen

## For-Schleifen

Zu for-Schleifen sehen wir uns zwei Konstrukte näher an:

- _for_-Schleife zum zählen
- _for-of_-Schleife zum Iterieren über Arrays

## For-Schleife

Zählen von 0 bis 9:

```js
for (let i = 0; i <= 9; i++) {
  console.log(i);
}
```

## For-schleife

Übung: Ausgabe einer Multiplikationstafel

```txt
1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
...
```

## For-of-Schleife

Mit einer for-of-Schleife können wir die Inhalte eines Arrays durchlaufen.

Bezeichnung in anderen Programmiersprachen _for-each_

## For-of-Schleife

```js
const names = ['Alice', 'Bob', 'Charlie'];

for (let name of names) {
  console.log(`Hello, ${name}`);
}
```

Die Variable `name` nimmt nacheinander jeden der in `names` angegebenen Werte ein.

## Beispiel: Login-System

```js
# Benutzer mit Passwörtern
let users = [
  ["Alice", "1234"],
  ["Bob", "password"],
  ["Charlie", "paris41"]];
```

## Beispiel: Login-System

Beispielhafter Programmlauf:

```txt
Enter your username:
lice
No such user.
Enter your username:
Alice
Enter your password:
123
Wrong password
Enter your password:
1234
Logged in as Alice!
```

# builtins

## builtins

- `setTimeout`, `setInterval`
- `JSON`
- `Date`
- `Math`

## builtins im Browser

- `alert`, `prompt`
- `fetch`

## builtins: JSON

- `JSON.parse`
- `JSON.stringify`

## builtins: Date

aktueller Timestamp:

```js
let a = new Date();
```

Methoden:

```js
a.toLocaleTimeString();
a.toLocaleDateString();
a.toISOString();
a.getHourse(); // ...
```

## builtins: Math

- `Math.round`, `Math.ceil`, `Math.floor`
- `Math.max`, `Math.min`
- `Math.random`
- `Math.PI`

# Funktionen

## Funktionen

Wir kennen schon einige vordefinierte Funktionen, z.B. `alert()`, `console.log()`

## Parameter und Rückgabewerte

Funktionen können Parameter übergeben bekommen und Rückgabewerte haben.

Beispiel: `Math.max(2, 9, 4)` → `9`

Parameter: 2, 9, 4

Rückgabewert: 9

# Funktionsdefinition

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

<!-- prettier-ignore -->
```js
const triple1 = (value) => {
  return value * 3;
};
// wenn der Funktionskörper nur aus einem einzelnen
// Return-Statement besteht: Kurzschreibweise:
const triple2 = (value) => value * 3;
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

In Funktionen können Standardwerte für Parameter definiert werden:

```js
let join = (strings, separator='') => {
  ...
}
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

let currentBalance = transactions.reduce(
  (aggregator, transaction) =>
    aggregator + transaction.amount,
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

