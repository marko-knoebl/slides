# ES2015+

## Modern JavaScript

## JavaScript standardisation

JavaScript is standardised under the name _ECMAScript_ (ES)

## JavaScript versions

- Supported by all Browsers: ES5 (standardised in 2009)
- Next big version: _ES2015_ (or ES6)
- Since then: yearly updates in June of each year (ES2016, ES2017, ...)

## JavaScript version support

- Overview: see http://kangax.github.io/compat-table/es6/
- In practice: Modern JavaScript is transpiled to ES5 (via Babel, webpack)

## Important changes in ES2015

## Modules & imports

- It's possible to import objects from other js-files - no more global namespace
- Is handled by webpack in most cases

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

## Modules & imports

there may be one default export

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

Bundlers like webpack can deviate from standard JavaScript import behavior:

- the import does not require a file name extension like `.js`
- if the import leads to a folder webpack will look for an `index.js` file in the folder

## let

- New alternative to `var` - with different scoping
- variables scope: surrounding curly braces (instead of surrounding function)

```js
if (true) {
  let a = 3;
}
console.log(a); // ReferenceError
```

## const

Declares a variable that cannot be reassigned.
However, the named object itself may be modified.

```js
const names = ['Alice', 'Bob', 'Claire'];
names = ['Andrew', 'Bob', 'Claire']; // invalid!
names[0] = 'Andrew'; // valid
```

## Destructuring assignment

```js
let a = 1;
let b = 2;
[a, b] = [b, a];

const [result, errors] = someComputation();
```

## Destructuring assignment

```js
const person = { name: 'John', age: 48 };

const { name, age } = person;
```

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

## Classes

Class syntax replaces the old constructor functions and prototypes

## Classes

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

## Inheritance

```js
class User extends Person {
  constructor(firstName, lastName, userName) {
    // calls Person.constructor
    super(firstName, lastName);
    this.userName = userName;
  }
}
```

## Array iteration (for ... of)

Iterating over entries of an array:

```js
const names = ['Anna', 'Bernhard', 'Caro'];
for (let name of names) {
  console.log(name);
}
```

## Spread syntax (arrays and objects)

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

## Template strings

- new syntax for _creating_ strings
- delimited via backticks
- enables multiline string literals and interpolation

```js
const name = 'Mike';
const greeting = `Hello, ${name}!
                  This is ES2015!`;
```
