# JavaScript basics for React

## JavaScript basics for React

- JavaScript standardization and versions
- imports and exports
- arrow functions
- template literals and tagged template literals
- automatic semicolon insertion
- destructuring assignment
- spread syntax
- optional chaining
- map and filter

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
import { foo, bar } from 'mymodule.js';
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

- short notation for anonymous functions
- leaves _this_ unchanged (does not reassign)

```js
const multiply = (a, b) => {
  return a * b;
};

const multiply = (a, b) => a * b;
```

## Arrow functions

if we want to return an object directly: wrap it in parentheses

```js
const getState = () => ({
  loggedIn: true,
  userName: 'mike',
});
```

## Template literals

- syntax for _creating_ strings
- delimited via backticks
- enables multiline string literals and interpolation

```js
const name = 'Mike';
const greeting = `Hello, ${name}!
                  This is ES2015!`;
```

## Tagged template literals

**Tagged** template literals enable additional processing when values are included

use cases:

- escaping values from "unsafe" sources
- changing indentation
- including styles in React
- ...

## Tagged template literals

example: escaping HTML

```js
import { safeHtml } from 'common-tags';

const message = 'I <3 U';

const post = safeHtml`
  <div>${message}</div>
`;
```

result:

```html
<div>I &lt;3 U</div>
```

Note: React will automatically escape HTML, so we don't need to use this function with React

## The semicolon in JavaScript

The semicolon for ending statements is mostly optional in JavaScript (_automatic semicolon insertion_)

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

## Destructuring assignment

```js
const [result, errors] = someComputation();

// swapping values
let a = 1;
let b = 2;
[a, b] = [b, a];
```

## Destructuring assignment

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

## Optional chaining

example for _optional chaining_:

```js
const userNickname = user?.nickname;
```

if `user` is defined, get its `.nickname` property, otherwise use `undefined`

"conventional" long form:

```js
const userNickname = user ? user.nickname : undefined;
```

## Optional chaining

optional chaining with methods calls:

```js
props.onClick?.();
```

if `props.onClick` is defined, call it, otherwise evaluate to `undefined`
