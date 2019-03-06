# Strukturierung von Tests

## Gruppieren

mit `describe()`:

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

## Setup und teardown

Für Code, der vor und jedem Test in einer Gruppe ausgeführt werden soll:

```js
// jest or mocha
beforeEach(() => {
  createTestDB();
});

afterEach(() => {
  clearTestDB();
});
```
