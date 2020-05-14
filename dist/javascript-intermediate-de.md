# JavaScript Intermediate

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

# this - quirks

## this - quirks

In Objektmethoden bezieht sich `this` üblicherweise auf das aktuelle Objekt

**allerdings**:

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

# Libraries

## Libraries

verbreitete Libraries:

- _lodash_ (Sammlung nützlicher Funktionen)
- _jQuery_ (Erleichtert das Arbeiten mit dem DOM)
- _immer.js_ / _immutable.js_ (Arbeiten mit unveränderlichen Objekten)
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

## immutable.js

Bietet insbesondere die Datenstrukturen _List_ und _Map_ als unveränderliche Alternativen zu _Array_ und _Object_.

```js
import { List, Map } from 'immutable';

const a1 = List([1, 2, 3]);
const a2 = a1.push(4);

const b1 = Map({ a: 1, b: 2 });
const b2 = b1.set('b', null);
```

## immutable.js

```js
import { fromJS, setIn } from 'immutable';

const todos = fromJS([
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'gardening', completed: false },
]);

const newTodos = todos.setIn([1, 'completed'], true);
```
