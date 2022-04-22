# Test runners

## Test runners

- find test files
- run tests
- generate reports on test results

## Popular test runners

- Jest (comes with assertion tools)
- Mocha (commonly used with _chai_)
- _node:test_

## Running tests

Tests are commonly run via an npm script - e.g. via `npm run test` (or `npm test` for short)

## Finding test files

Jest: by default looks for files inside of directories named `__tests__` and for files ending in `.test.js` or `.spec.js`

Mocha: by default looks for files inside the directory `test` (custom pattern via e.g.: `mocha "src/**/*.{test,spec}.{js,jsx}"`)

## Defining tests

the definition of a test usually includes:

- a string describing the test
- a function that executes test code

tests are commonly defined via by calling `test()` or `it()`

## Defining tests

example with node's built-in tools:

<!-- prettier-ignore -->
```js
test(
  'shortens "loremipsum" to "lor..." with limit 6',
  () => {
    const shortened = shorten('loremipsum', 6);
    assert.equal(shortened, "lor...");
  }
)
```

## Grouping tests

tests can be organized into groups (and sub-groups, ...)

## Grouping tests

grouping tests with _node:test_:

```js
test('strings that are short enough', (t) => {
  // t: test context
  t.test('leaves "abc" unchanged with limit 3', () => {
    assert.equal(shorten('abc', 3), 'abc');
  });
  t.test('leaves "a" unchanged with limit 1', () => {
    assert.equal(shorten('a', 1), 'a');
  });
});
```

## Grouping tests

grouping tests with _jest_:

```js
describe('strings that are short enough', () => {
  test('leaves "abc" unchanged with limit 3', () => {
    expect(shorten('abc', 3)).toEqual('abc');
  });
  test('leaves "a" unchanged with limit 1', () => {
    expect(shorten('a', 3)).toEqual('a');
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

  it(/*...*/);
  it(/*...*/);
});
```

## Exercise

write tests for the behavior of the string method `.replace()`
