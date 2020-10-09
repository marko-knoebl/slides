# Automated testing in JavaScript

## Automated testing

code may be tested automatically to ensure it behaves as expected

## Tools for testing JavaScript

- _node_ is needed to provide a runtime
- _assert_: basic assertion package, built into node
- _Jest_: test runner & assertion library
- _Mocha_: test runner
- _Chai_: assertion library
- _Jasmine_: test runner & assertion library

popularity:

- [State of JS 2019: survey on test tools](https://2019.stateofjs.com/testing/)
- [npmtrends](https://www.npmtrends.com/jest-vs-mocha-vs-chai-vs-jasmine)

## Example: shorten

We are going to write and test a function that will shorten a string to a specified length:

```js
shorten('loremipsum', 6);
// should return 'lor...'
```

Possible approaches:

- write implementation first
- write tests first (test-driven development)

## Example: shorten

Implementation that should be tested:

```js
// shorten.js
/**
 * shortens a given string to a specified length,
 * adding "..." at the end if it was shortened
 */
export default shorten = (s, maxlength) =>
  s.length > maxlength
    ? s.slice(0, maxlength - 3) + '...'
    : s;
```

## Example: shorten

simple tests:

```js
// shorten.test.js
import assert from 'assert';
import shorten from './shorten';

assert.equal(shorten('loremipsum', 4), 'l...');
assert.equal(shorten('loremipsum', 9), 'loremi...');
assert.equal(shorten('loremipsum', 10), 'loremipsum');
assert.equal(shorten('loremipsum', 11), 'loremipsum');
```

`assert.equal` throws an exception if the condition is not met

# Assertions

## Assertions

Assertions can be written in two main styles:

**assert**:

```js
assert.equal(a, b);
```

**expect** (sometimes called _behavior-driven_):

```js
expect(a).toEqual(b);
```

## Assertions in node.js

assert (node):

```js
assert.equal(a, b);
assert.deepEqual(a, b);
assert.throws(() => JSON.parse(''));
// ...
```

## Assertions with Chai

```js
expect(a).to.equal(4);
expect(a).not.to.equal(2);
expect(a).to.be.greaterThan(3);
expect(a).to.be.a('number');
expect(() => JSON.parse('')).to.throw();
```

## Assertions with Jest

```js
expect(a).toEqual(4);
expect(a).not.toEqual(2);
expect(a).toBe(4);
expect(a).toBeGreaterThan(3);
expect(a).toBeInstanceOf(Number);
expect(() => JSON.parse('')).toThrow();
```

## Assertions with Jest

`.toEqual`: may be used with both primitives and objects

`.toBe`: behaves like `===` - may be used with primitives (or for asserting object identity)

# Test runners

## Test runners

- find test files
- run tests
- generate reports on test results

## Popular test runners

- Jest (comes with assertion tools)
- Mocha (commonly used with _chai_)
- Jasmine (comes with assertion tools)

## Running tests

Tests are commonly run via an npm script - e.g. via `npm run test` (or `npm test` for short)

Note: running tests should always be cancelled before installing new npm packages - otherwise the installation may fail

## Finding test files

Jest: by default looks for files inside of directories named `__tests__` and for files ending in `.test.js` or `.spec.js`

Mocha: by default looks for files inside the directory `test` (custom pattern via e.g.: `mocha "src/**/*.{test,spec}.{js,jsx}"`)

## Structuring tests

A test is commonly defined via the `it` function, which takes two arguments:

- a string describing the test
- a function that executes test code

## Structuring tests

```js
it('shortens "loremipsum" to "lor..." with limit 6', () => {
  expect(shorten('loremipsum', 6)).toEqual('lor...');
});
```

an `it`-block may contain multiple calls of `expect` (or none)

In _Jest_, `test` is a more common alias for `it`

## Structuring tests

Tests can be structured into groups (and sub-groups ...) by using `describe`:

```js
describe('strings that are short enough', () => {
  it('leaves "abc" unchanged with limit 5', () => {
    expect(shorten('abc', 5)).toEqual('abc');
  });
  it('leaves "loremipsum" unchanged with limit 10', () => {
    expect(shorten('loremipsum', 10)).toEqual('loremipsum');
  });
});
```

## Test coverage

Some testing libraries can report on how much of the code is covered by tests:

```bash
npx jest --coverage
```

in a create-react-app project:

```bash
npm test -- --coverage
```

# Test setup and mocking (with jest)

## Setup and teardown

For code that should be executed before and after each test in a group:

```js
describe('database', () => {
  beforeEach(() => {
    createTestDB();
  });
  afterEach(() => {
    clearTestDB();
  });

  it(/*...*/);
  it(/*...*/);
});
```

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

# End-to-end tests with Jest and puppeteer

## End-to-end testing tools

- puppeteer
- cypress
- selenium

## Puppeteer

a tool that can control an instance of the Chromium browser

```bash
npm install puppeteer
```

## Puppeteer

```js
test('Google page title', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  const pageTitle = await page.title();
  expect(pageTitle).toEqual('Google');
});
```

## Puppeteer

test that actually opens a browser window:

```js
test('Google page title', async () => {
  jest.setTimeout(10000);
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  const pageTitle = await page.title();
  expect(pageTitle).toEqual('Google');
});
```
