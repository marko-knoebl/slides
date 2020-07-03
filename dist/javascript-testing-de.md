# Automatisiertes Testen

## Automatisiertes Testen

Programme / Funktionen / Klassen können automatisiert getestet werden um sicherzustellen, dass sie wie erwartet funktionieren.

## Tools für das Testen

- _node_ wird als Runtime benötigt
- _assert_: einfache assertions, in node beinhaltet
- _Jest_: test runner & assertion library
- _Jasmine_: test runner & assertion library
- _Mocha_: test runner
- _Chai_: assertion library

[State of JS 2019: Umfrage zu Test-Tools](https://2019.stateofjs.com/testing/)

## Beispiel: shorten

Wir werden eine Funktion schreiben und testen, die einen String auf eine vorgegebene Länge verkürzt:

```js
shorten('loremipsum', 6);
// should return 'lor...'
```

Mögliche Zugänge:

- mit Implementierung beginnen
- mit Tests beginnen (test-driven development)

## Einrichten des Test Runners

in einem vorhandenen npm Projekt:

```bash
npm install --save-dev jest
```

in _package.json_:

```json
"scripts": {
  "test": "jest"
}
```

## Tests ausführen

```bash
npm test
```

Achtung: laufende Tests sollten immer abgebrochen werden, bevor `npm install ...` ausgeführt wird - sonst kann die Installation fehlschlagen

## Finden von Tests

Im allgemeinen suchen Test Libraries nach Dateien mit der Endung `.test.js` oder `.spec.js` in dem Ordner `test`.

Wir können auch ein eigenes Muster übergeben, z.B.:

```bash
mocha "src/**/*.{test,spec}.{js,jsx}"
```

## test coverage

Manche Testlibraries können berichten, wie viel des Codes von Tests abgedeckt ist:

Beispiel - in einem create-react-app Projekt:

```bash
npm test -- --coverage
```

## Beispiel: shorten

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

## Beispiel: shorten

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

# Testen: assertions

## Testen: assertions

Assertions können auf zwei Arten geschrieben werden:

assert:

```js
assert.equal(a, b);
```

expect (behaviour-driven):

```js
expect(a).toEqual(b);
```

## Testen: assertions

assert:

- assert-modul in node
- chai

expect (behaviour-driven)

- jest
- jasmine
- chai
- enzyme

## Testen: assertions

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

## Testen: assertions

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

# Mocking (mit jest)

## Mocking von built-ins

Mocking von _localStorage_ (welches in node nicht verfügbar ist) mit Beispieldaten:

```js
globalThis.localStorage = {
  getItem: (anyKey) => 'foo',
};
```

## Mocking von Modulen

Mocken eines Moduls mittels `jest.mock`:

```js
jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: { foo: 'bar' } }),
}));
```

## Mocking von Modulen

Mocking von Modulen via \_\_mocks\_\_ folders:

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

Bemerkung: in einem _create-react-app_-Projekt wäre dies z.B. `src/__mocks__/axios.js` anstatt `__mocks__/axios.js` (siehe [issue](https://github.com/facebook/create-react-app/issues/7539))

## Mocking von Modulen

```js
// __mocks__/fs.js

export const readFileSync = () => 'mock content';
```

## Mocking von Promises

Manuelles Mocken eines _fetch_-Resultats mittels eines Promises:

```js
globalThis.fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve({ foo: 'bar' }),
  });
```

## Mocking von Promises

Mocking von _axios_-Anfragen mit Promises:

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

## Auto Mocking

Mocking von _fetch_ via _jest-fetch-mock_:

```js
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

fetchMock.mockResponseOnce('{ "foo": "bar" }');
```

## Mocken und Inspizieren von Funktionen

Mocken einer Funktion, die aufgerufen und später inspiziert werden kann:

```js
const mockFn = jest.fn();
mockFn('foo');
expect(mockFn).toHaveBeenCalledWith('foo');
```

## Ressourcen

- [How To Mock Fetch in Jest](https://www.leighhalliday.com/mock-fetch-jest)
- [Mocking Axios in Jest + Testing Async Functions](https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions)
