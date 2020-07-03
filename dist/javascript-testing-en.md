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

export default shorten;
```

## Example: shorten

```js
// shorten.test.js
import shorten from './shorten.js';
// use node's built-in assert module
import assert from 'assert';

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

# Mocking (with jest)

## Mocking built-ins

mocking _localStorage_ (which is not available in node) with example content:

```js
globalThis.localStorage = {
  getItem: (anyKey) => 'foo',
};
```

## Mocking modules

mocking a module via `jest.mock`:

```js
jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: { foo: 'bar' } }),
}));
```

## Mocking modules via \_\_mocks\_\_

mocking modules via \_\_mocks\_\_ folders:

```txt
__mocks__/fs.js
__mocks__/axios.js
src/foo.js
src/foo.test.js
src/__mocks__/foo.js
```

```js
// src/foo.test.js
jest.mock('fs');
jest.mock('axios'); // optional for contents of node_modules
jest.mock('./foo');
```

Note: inside a create-react-app project this would be e.g. `src/__mocks__/axios.js` instead of `__mocks__/axios.js` (see [issue](https://github.com/facebook/create-react-app/issues/7539))

## Mocking modules

```js
// __mocks__/fs.js

export const readFileSync = () => 'mock content';
```

## Mocking promises

manually mocking a _fetch_ result with a promise:

```js
globalThis.fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve({ foo: 'bar' }),
  });
```

## Mocking promises

Mocking _axios_ requests with promises:

```js
// __mocks__/axios.js

export default {
  get: (path) => {
    if (path === '/') {
      return Promise.resolve({ foo: 'bar' });
    }
    return Promise.reject({ message: 'NetworkError ...' });
  },
};
```

## Auto mocking

mocking _fetch_ via _jest-fetch-mock_:

```js
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

fetchMock.mockResponseOnce('{ "foo": "bar" }');
```

## Mocking and inspecting functions

Mocking a function that can be called and inspected later:

```js
const mockFn = jest.fn();
mockFn('foo');
expect(mockFn).toHaveBeenCalledWith('foo');
```

## Resources

- [How To Mock Fetch in Jest](https://www.leighhalliday.com/mock-fetch-jest)
- [Mocking Axios in Jest + Testing Async Functions](https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions)
