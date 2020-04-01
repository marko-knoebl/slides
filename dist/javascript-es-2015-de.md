# ES2015+

## Modernes JavaScript

## JavaScript-Standardisierung

JavaScript wird unter dem Namen _ECMAScript_ (kurz ES) standardisiert

## JavaScript Versionen

- Von allen Browsern unterstützt: ES5 (2009 veröffentlicht)
- Nächste große Version: _ES2015_ (oder ES6)
- Seither: jährlich neue Versionen im Juni jeden Jahres (ES2016, ES2017, ...)

## JavaScript Versionsunterstützung

- Übersicht: siehe http://kangax.github.io/compat-table/es6/
- In der Praxis: Modernes JavaScript wird in ES5 transpiliert (mittels Babel, webpack)

## Wichtige Neuerungen in ES2015

## Module & Imports

- Möglichkeit, Funktionalität aus anderen js-Dateien zu importieren – kein globaler Namespace mehr
- Benötigt einen Bundler, z.B. webpack

```js
// foo.js
const foo = 1;
const bar = 2;
const baz = 3;

export { foo, bar, baz };
```

```js
// index.js
import { foo, bar } from 'foo.js';
```

## Module & Imports

Es kann einen default Export geben:

```js
// foo.js
const foo = 1;
const bar = 2;
const baz = 3;

export { foo, bar, baz };

const main = 0;

export default main;
```

```js
// index.js
import main, { foo, bar } from 'foo.js';
```

## Imports in webpack

Bundler wie webpack können beim Importieren vom JavaScript Standard abweichen:

- Dateiendungen wie `.js` können optional sein
- wenn der Import auf einen Ordner verweist, sucht webpack nach einer `index.js` Datei in diesem Ordner

## let

- Neue Alternative zu var – mit leicht anderem Scoping
- Scope: umgebende geschweifte Klammern (statt umgebender Funktion)

```js
if (true) {
  let a = 3;
}
console.log(a); // ReferenceError
```

## const

Deklariert eine Variable, die nicht mehr neu zugewiesen werden kann.  
Das bezeichnete Objekt selbst kann allerdings modifiziert werden

```js
const names = ['Alice', 'Bob', 'Claire'];
names = ['Andrew', 'Bob', 'Claire']; // ungültig!
names[0] = 'Andrew'; // gültig
```

## Destrukturierende Zuweisung

```js
let a = 1;
let b = 2;
[a, b] = [b, a];

const [result, errors] = someComputation();
```

## Destrukturierende Zuweisung

```js
const person = { name: 'John', age: 48 };

const { name, age } = person;
```

## Pfeilfunktionen

- Kurzschreibweise für anonyme Funktionen
- Lässt _this_ unverändert (überschreibt es nicht)

```js
const multiply = (a, b) => {
  return a * b;
};

const multiply = (a, b) => a * b;
```

## Pfeilfunktionen

wenn direkt ein Objekt zurückgegeben werden soll: mit runden Klammern umschießen

```js
const getState = () => ({
  loggedIn: true,
  userName: 'mike',
});
```

## Klassen

Ersetzen die alten Konstruktorfunktionen und Prototypen

## Klassen

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  hello() {
    return `My name is ${this.firstName}`;
  }
}
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

## Array-Iteration (for ... of)

Über die Einträge in einem Array iterieren:

```js
const names = ['Anna', 'Bernhard', 'Caro'];
for (let name of names) {
  console.log(name);
}
```

## Spread Syntax (Arrays und Objekte)

```js
const squares = [1, 4, 9];
const moreSquares = [...squares, 16, 25];
// moreSquares: [1, 4, 9, 16, 25]
```

```js
const person = {
  firstName: 'Joe',
  lastName: 'Doe',
  age: 31,
};
const newPerson = { ...person, email: 'j@d.com', age: 32 };
// {firstName: 'Joe', lastName: 'Doe', email: 'j@d.com', age: 32}
```

## Template-Strings

- Neue Syntax zum _Erstellen_ von Strings
- Werden mit Backticks begrenzt
- Erlauben mehrzeilige Strings und Interpolation:

```js
const name = 'Mike';
const greeting = `Hello, ${name}!
                  This is ES2015!`;
```
