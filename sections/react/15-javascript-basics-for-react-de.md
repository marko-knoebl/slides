# JavaScript-Grundlagen für React

## JavaScript-Grundlagen für React

- JavaScript-Standardisierung und Versionen
- Imports und Exports
- Pfeilfunktionen
- Template Literals und Tagged Template Literals
- Automatic Semicolon Insertion
- destrukturierende Zuweisung
- Spread-Syntax
- optional Chaining
- map und filter

## JavaScript Standardisierung

JavaScript wird unter dem Namen [_ECMAScript_ (ES)](https://www.ecma-international.org/ecma-262/) standardisiert

## JavaScript Versionen

_ES5_: Von allen Browsern, inklusive Internet Explorer, unterstützt (2009 standardisiert)

Seit 2015: jährliche Updates im Juni jeden Jahres (ES2015, ES2016, ...)

In der Praxis: Modernes JavaScript wird in ältere Versionen transpiliert (via Babel, webpack)

## Imports und Exports

benannte Imports und Exports:

```js
// mymodule.js
const foo = 1;
const bar = 2;
const baz = 3;

export { foo, bar, baz };
```

```js
// index.js
import { foo, bar } from 'mymodule.js';
```

## Imports und Exports

Es kann einen default Export geben:

```js
// mymodule.js
const foo = 1;
const bar = 2;
const baz = 3;

export { foo, bar, baz };

const main = 0;

export default main;
```

```js
// index.js
import main, { foo, bar } from 'mymodule.js';
```

## Imports in webpack

Bundler wie webpack können beim Importieren vom JavaScript Standard abweichen:

- Dateiendungen wie `.js` können optional sein
- wenn der Import auf einen Ordner verweist, sucht webpack nach einer `index.js` Datei in diesem Ordner

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

## Template Literals

- Syntax zum _Erstellen_ von Strings
- Werden mit Backticks begrenzt
- Erlauben mehrzeilige Strings und Interpolation:

```js
const name = 'Mike';
const greeting = `Hello, ${name}!
                  This is ES2015!`;
```

## Tagged Template Literals

**Tagged** Template Literals ermöglichen zusätzliche Verarbeitung, wenn Werte eingebunden werden

Beispiele für Verwendungszwecke:

- "Escaping" von Werten aus unsicheren Quellen
- Anpasen der Einrückung
- Einbinden von Stilen in React
- ...

## Tagged Template Literals

Beispiel: "Escaping" von HTML:

```js
import { safeHtml } from 'common-tags';

const message = 'I <3 U';

const post = safeHtml`
  <div>${message}</div>
`;
```

Ergebnis:

```html
<div>I &lt;3 U</div>
```

Bemerkung: In React geschieht "Escaping" von HTMl automatisch, wir müssen diese Funktion in React nicht verwenden

## Das Semikolon in JavaScript

Das Semikolon zum Abschluss von Statements ist größtenteils in JavaScript optional (_automatic semicolon insertion_)

<!-- prettier-ignore -->
```js
const a = 3
console.log(a)
```

wird behandelt wie:

```js
const a = 3;
console.log(a);
```

## Das Semikolon in JavaScript

Manchmals ist das Verhalten nicht wie gewünscht:

<!-- prettier-ignore -->
```jsx
const Foo = () => {
  return
    <div>
      <h1>some content</h1>
    </div>;
};
```

wird behandelt wie:

```jsx
const Foo = () => {
  return;
  <div>
    <h1>some content</h1>
  </div>;
};
```

## Destrukturierung

```js
const [result, errors] = someComputation();

// swapping values
let a = 1;
let b = 2;
[a, b] = [b, a];
```

## Destrukturierung

```js
const person = { name: 'John', age: 48 };
const { name, age } = person;

const TodoItem = ({ title, completed }) => (
  <div>
    {completed ? 'DONE: ' : 'TODO: '}
    {title}
  </div>
);
```

## Spread syntax (Arrays und Objekte)

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

## Optional Chaining

Beispiel für _optional chaining_:

```js
const userNickname = user?.nickname;
```

wenn `user` definiert ist, lies dessen `.nickname` Property, andernfalls verwende `undefined`

"konventionelle" Langform:

```js
const userNickname = user ? user.nickname : undefined;
```

## Optional Chaining

_Optional chaining_ mit Funktionsaufrufen:

```js
props.onClick?.();
```

wenn `props.onClick` definiert ist, wird es aufgerufen, andernfalls wird der Ausdruck zu `undefined` ausgewertet

## Map und filter

Array-Methoden für die funktionale Programmierung

## Map

- Ändert jeden Eintrag eines Arrays mit Hilfe einer Funktion ab
- Rückgabewert: neues Array

```js
const myNumbers = [1, 2, 3];

const newNumbers = myNumbers.map((n) => 3 * n);
// [3, 6, 9]
```

## filter

- Behält nur gewisse Einträge in einem Array
- Nutzt eine Funktion, um Einträge auf ein bestimmtes Kriterium zu testen
- Rückgabewert: neues Array

```js
const myNumbers = [1, 2, 3, 4];

const isEven = (n) => n % 2 === 0;

const evenNumbers = myNumbers.filter(isEven);
// [2, 4]
```
