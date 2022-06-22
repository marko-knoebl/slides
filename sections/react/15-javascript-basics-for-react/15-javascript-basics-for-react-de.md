# JavaScript-Grundlagen für React

## JavaScript-Grundlagen für React

- **"leere" Return Statements** ([MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return#automatic_semicolon_insertion))
- **destrukturierende Zuweisung** ([MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment))
- Imports und Exports
- Pfeilfunktionen
- Template-Strings

## "Leere" Return Statements

funktioniert in JavaScript nicht wie gewünscht:

<!-- prettier-ignore -->
```js
return
  <div>foo</div>;
```

dies wird interpretiert als:

```js
return;
<div>foo</div>;
```

(Automatic Semicolon Insertion)

## "Leere" Return Statements

Varianten, die funktionieren:

```js
return <div>foo</div>;
```

<!-- prettier-ignore -->
```js
return (
  <div>foo</div>
);
```

## Destrukturierende Zuweisung

gleichzeitige Zuweisung von Inhalten von Objekten oder Arrays zu mehreren Variablen

## Destrukturierende Zuweisung mit Objekten

lange Version (ohne Destrukturierung):

```js
const protocol = window.location.protocol;
const host = window.location.host;
const pathname = window.location.pathname;
```

Version mit Destrukturierung:

```js
const { protocol, host, pathname } = window.location;
```

## Destrukturierende Zuweisung mit Arrays

```js
const [a, b, c] = [1, 2, 3];
```

```js
const [result, logs] = someLongComputation();
```

```js
// swapping values of a and b
[a, b] = [b, a];
```

## Imports und Exports

benannte Exports:

```js
const foo = 1;
function bar() {
  return 2;
}

export { foo, bar };
```

oder

```js
export const foo = 1;
export function bar() {
  return 2;
}
```

## Imports und Exports

benannte Imports in einer anderen Datei:

```js
import { foo, bar } from './mymodule.js';
```

bei Verwendung eines Bundlers wie Webpack:

```js
import { foo, bar } from './mymodule';
```

## Imports und Exports

Es kann einen default Export pro Modul geben:

```js
export default function Main() {
  return <div>Main</div>;
}
```

oder

```js
function Main() {
  return <div>Main</div>;
}

export default Main;
```

## Imports und Exports

Imports (default und benannt):

```js
import Main, { foo, bar } from 'mymodule.js';
```

der Default kann unter beliebigem Namen importiert werden

## Pfeilfunktionen

Notation für anonyme Funktionen:

```js
const multiply = (a, b) => {
  return a * b;
};
```

Kurzschreibweise, wenn die Funktion nur einen einzelnen Ausdruck zurückgibt:

```js
const multiply = (a, b) => a * b;
```

## Template Strings

_Template Strings_ erlauben Interpolation (via `${}`)

werden mit _Backticks_ begrenzt (\`)

```js
const message = `Hello, ${name}!`;
```
