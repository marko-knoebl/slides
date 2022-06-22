# JavaScript basics for React

## JavaScript basics for React

- **"bare" / "blank" return statements** ([MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return#automatic_semicolon_insertion))
- **destructuring assignment** ([MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment))
- imports and exports
- arrow functions
- template strings

## "Bare" / "blank" return statements

this will not work as intended in JavaScript:

<!-- prettier-ignore -->
```js
return
  <div>foo</div>;
```

it would be interpreted as:

```js
return;
<div>foo</div>;
```

(automatic semicolon insertion)

## "Bare" / "blank" return statements

versions that work:

```js
return <div>foo</div>;
```

<!-- prettier-ignore -->
```js
return (
  <div>foo</div>
);
```

## Destructuring assignment

assigning the contents of an object or array to multiple variables simultaneously

## Destructuring assignment with objects

long version (without destructuring):

```js
const protocol = window.location.protocol;
const host = window.location.host;
const pathname = window.location.pathname;
```

version with destructuring assignment:

```js
const { protocol, host, pathname } = window.location;
```

## Destructuring assignment with arrays

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

## Imports and exports

named exports:

```js
const foo = 1;
function bar() {
  return 2;
}

export { foo, bar };
```

or

```js
export const foo = 1;
export function bar() {
  return 2;
}
```

## Imports and exports

named imports in another file:

```js
import { foo, bar } from './mymodule.js';
```

when using a bundler like webpack:

```js
import { foo, bar } from './mymodule';
```

## Imports and exports

there may be one default export per module:

```js
export default function Main() {
  return <div>Main</div>;
}
```

or

```js
function Main() {
  return <div>Main</div>;
}

export default Main;
```

## Imports and exports

imports (default and named):

```js
import Main, { foo, bar } from 'mymodule.js';
```

the default can be imported under any name

## Arrow functions

notation for anonymous functions:

```js
const multiply = (a, b) => {
  return a * b;
};
```

short notation if the function only returns a single expression:

```js
const multiply = (a, b) => a * b;
```

## Template strings

_template strings_ allow for _interpolation_ (via `${}`)

are delimited by backticks (\`)

```js
const message = `Hello, ${name}!`;
```
