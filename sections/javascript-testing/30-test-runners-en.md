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
