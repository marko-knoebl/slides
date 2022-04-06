# JavaScript basics for React

## JavaScript basics for React

- JavaScript standardization and versions
- imports and exports
- arrow functions
- template literals
- automatic semicolon insertion
- destructuring assignment

## JavaScript standardization

JavaScript is standardized under the name [_ECMAScript_ (ES)](https://www.ecma-international.org/ecma-262/)

## JavaScript versions

_ES5_: Supported by all browsers, including Internet Explorer (standardized in 2009)

Since 2015: yearly updates in June of each year (ES2015, ES2016, ...)

Common practice: Modern JavaScript is transpiled to older versions with better support (via Babel, webpack)

## Imports and exports

named imports and exports:

```js
// mymodule.js
const foo = 1;
const bar = 2;
const baz = 3;

export { foo, bar, baz };
```

```js
// index.js
import { foo, bar } from './mymodule.js';
```

## Imports and exports

there may be one default export

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

Bundlers like webpack can deviate from standard JavaScript import behavior:

- the import does not require a file name extension like `.js`
- if the import leads to a folder webpack will look for an `index.js` file in the folder

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

## The semicolon in JavaScript

The semicolon for terminating statements is mostly optional in JavaScript (_automatic semicolon insertion_)

<!-- prettier-ignore -->
```js
const a = 3
console.log(a)
```

is treated as:

```js
const a = 3;
console.log(a);
```

## The semicolon in JavaScript

Sometimes the behavior is not as intended:

<!-- prettier-ignore -->
```jsx
const Foo = () => {
  return
    <div>
      <h1>some content</h1>
    </div>;
};
```

would be treated as:

```jsx
const Foo = () => {
  return;
  <div>
    <h1>some content</h1>
  </div>;
};
```

## Destructuring assignment with arrays

assigning to multiple variables at the same time

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
