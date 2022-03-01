# JavaScript-Grundlagen für React

## JavaScript-Grundlagen für React

- JavaScript-Standardisierung und Versionen
- Imports und Exports
- Pfeilfunktionen
- Template Literals
- Automatic Semicolon Insertion
- destrukturierende Zuweisung

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

Kurzschreibweise für anonyme Funktionen

```js
const multiply = (a, b) => {
  return a * b;
};

const multiply = (a, b) => a * b;
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

## Destrukturierende Zuweisung

gleichzeitige Zuweisung zu mehreren Variablen

```js
const [a, b, c] = [1, 2, 3];
```

```js
const [result, errors] = someComputation();
```

```js
// swapping values
let a = 1;
let b = 2;
[a, b] = [b, a];
```
