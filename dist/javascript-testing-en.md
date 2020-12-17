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
/**
 * shortens a given string to a specified length,
 * adding "..." at the end if it was shortened
 */
const shorten = (s, maxlength) =>
  s.length > maxlength
    ? s.slice(0, maxlength - 3) + '...'
    : s;
export default shorten;
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

  test(/*...*/);
  test(/*...*/);
});
```

# End-to-end tests with Jest and puppeteer

## End-to-end testing tools

- puppeteer
- cypress
- selenium

## Puppeteer

a tool that can control an instance of the Chromium browser from node

npm packages:

- _puppeteer_
- _@types/puppeteer_

## Puppeteer

testing Wikipedia:

```js
test('wikipedia title', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org');
  const pageTitle = await page.title();
  expect(pageTitle).toMatch(/Wikipedia/);
  await browser.close();
});
```

## Puppeteer

restructuring code for multiple tests:

```js
let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch();
});
beforeEach(async () => {
  page = await browser.newPage();
  await page.goto('https://en.wikipedia.org');
});
afterAll(async () => {
  await browser.close();
});

test('wikipedia title', async () => {
  const pageTitle = await page.title();
  expect(pageTitle).toMatch(/Wikipedia/);
});
```

## Puppeteer

tests that actually open a browser window:

```js
beforeAll(async () => {
  browser = await puppeteer.launch({ headless: false });
});
```

## Puppeteer

_querying elements_ is not trivial since there are two _separate_ JavaScript environments (node and Chromium)

querying elements for getting their contents:

- `page.$eval()` for a single elements
- `page.$$eval()` for multiple elements

querying elements for triggering actions:

- `page.$()` for single elements
- `page.$$()` for an array of elements

## Puppeteer

getting elements to retrieve their content:

```js
const firstLinkText = await page.$eval(
  'a',
  (element) => element.innerHTML
);

const thirdLinkText = await page.$$eval(
  'a',
  (elements) => elements[2].innerHTML
);
```

## Puppeteer

getting an element for triggering an action:

```js
const firstLink = await page.$('a');
await firstLink.click();
await page.waitForNavigation();
```

## Puppeteer

example: Searching on Wikipedia

```js
test('wikipedia search', async () => {
  await page.click('#searchInput');
  await page.keyboard.type('puppeteer');
  await page.click('#searchButton');
  await page.waitForNavigation();
  const paragraphText = await page.$eval(
    'p',
    (element) => element.textContent
  );
  console.log(paragraphText);
  expect(paragraphText).toMatch(/puppeteer/i);
});
```

<small>notes: <em>page.keyboard.press("Enter")</em> would trigger full-text search; on some Wikipedia pages the first paragraph might be empty.</small>

## Puppeteer

important methods:

- `page.$()`
- `page.$$()`
- `page.$eval()`
- `page.$$eval()`
- `page.keyboard.type("abc")`
- `page.keyboard.press("Enter")`
- `page.click("#selector")`
- `element.click()`
- `page.waitForNavigation()`

[complete API](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md)

# Mocking with jest

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
