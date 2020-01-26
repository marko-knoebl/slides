# Automated testing

## Automated testing

Programs / functions / classes may be tested automatically to ensure they behave as expected

## Tools for testing JavaScript

- _node_ is needed to provide a runtime
- _assert_: basic assertion package, built into node
- _Jest_: test runner & assertion library
- _Jasmine_: test runner & assertion library
- _Mocha_: test runner
- _Chai_: assertion library

[State of JS 2019: survey on test tools](https://2019.stateofjs.com/testing/)

## Example: shorten

We are going to write and test a function that will shorten a string to a specified length:

```js
shorten('loremipsum', 6);
// should return 'lor...'
```

Possible approaches:

- write implementation first
- write tests first (test-driven development)

## setting up the test runner

in an existing npm project:

```bash
npm install --save-dev jest
```

in _package.json_:

```json
"scripts": {
  "test": "jest"
}
```

## Running tests

```bash
npm test
```

Note: running tests should always be cancelled bevor running `npm install ...` - otherwise the Installation may fail

## Finding tests

In general testing libraries look for files ending in `.test.js` or `.spec.js` inside the `test` directory.

We can also pass a custom pattern, e.g.:

```bash
mocha "src/**/*.{test,spec}.{js,jsx}"
```

## Test coverage

Some testing libraries can report on how much of the code is covered by tests:

example: in a create-react-app project:

```bash
npm test -- --coverage
```

## Example: shorten

```js
// shorten.js
const shorten = (s, maxlength) => {
  if (s.length > maxlength) {
    s = s.slice(0, maxlength - 3) + '...';
  }
  return s;
};

module.exports.shorten = shorten;
```

## Example: shorten

```js
// shorten.test.js
const shorten = require('./shorten.js').shorten;
// use node's built-in assert module
const assert = require('assert');

it('shortens "loremipsum" to "lor..."', () => {
  const expected = 'lor...';
  const actual = shorten('loremipsum', 6);
  assert.equal(actual, expected);
});
```

# Testing: assertions

## Testing: assertions

Assertions can be written in two main styles:

assert:

```js
assert.equal(a, b);
```

expect (behaviour-driven):

```js
expect(a).toEqual(b);
```

## Testing: assertions

assert:

- built into node
- chai

expect (behaviour-driven)

- jest
- jasmine
- chai
- enzyme

## Testing: assertions

assert (node):

```js
assert.equal(a, b);
assert.deepEqual(a, b);
assert.throws(() => 1 / 0);
// ...
```

assert (chai):

```js
assert.equal(a, b);
assert.deepEqual(a, b);
assert.typeOf(foo, 'string');
assert.lengthOf(foo, 3);
assert.throws(() => 1 / 0);
```

## Testing: assertions

expect (jest):

```js
expect(a).toEqual(4);
expect(a).not.toEqual(2);
expect(a).toBeGreaterThan(3);
expect(a).toBeInstanceOf(Number);
expect(() => 1 / 0).toThrow();
```

expect (chai):

```js
expect(a).to.equal(4);
expect(a).not.to.equal(2);
expect(a).to.be.greaterThan(3);
expect(a).to.be.a('number');
expect(() => 1 / 0).to.throw();
```

# Structuring tests

## Grouping tests

with `describe()`:

```js
// jest
describe('strings that are short enough', () => {
  it('leaves "abc" unchanged with limit 5', () => {
    expect(shorten('abc', 5)).toEqual('abc');
  });
  it('leaves "loremipsum" unchanged with limit 10', () => {
    expect(shorten('loremipsum', 10)).toEqual('loremipsum');
  });
});
```

## Setup and teardown

For code that should be executed before and after each test in a group:

```js
// jest or mocha
beforeEach(() => {
  createTestDB();
});

afterEach(() => {
  clearTestDB();
});
```

