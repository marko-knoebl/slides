# Test Runner

## Test Runner

- finden Testdateien
- führen Tests aus
- Erstellen Berichte über Testresultate

## Verbreitete Test Runner

- Jest (beinhaltet Assertion-Tools)
- Mocha (oft gemeinsam mit _Chai_ verwendet)
- _node:test_

## Ausführen von Tests

Tests werden meist mittels eines npm Scripts ausgeführt - z.B. via `npm run test` (oder abgekürzt `npm test`)

## Finden von Tests

Jest: sucht standardmäßig nach Dateien in `__tests__`-Ordnern und nach Dateien, die mit `.test.js` oder `.spec.js` enden

Mocha: sucht standardmäßig nach Dateien in dem Ordner `test` (eigenes Muster z.B. via: `mocha "src/**/*.{test,spec}.{js,jsx}"`)

## Definieren von Tests

Die Definition eines Tests beinhaltet üblicherweise:

- einen String, der den Test beschreibt
- eine Funktion, die den Testcode ausführt

Tests werden üblicherweise durch einen Aufruf von `test()` oder `it()` definiert

## Definieren von Tests

Beispiel mit den eingebauten Tools von node:

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

## Gruppierung von Tests

Tests können in Gruppen (und Untergruppen, ...) organisiert werden

## Gruppieren von Tests

Guppierung von Tests mittels _node:test_:

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

## Gruppieren von Tests

Gruppieren von Tests mit _Jest_:

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

## Testabdeckung

Manche Testlibraries können berichten, wie viel des Codes von Tests abgedeckt ist:

```bash
npx jest --coverage
```

in einem create-react-app Projekt:

```bash
npm test -- --coverage
```

## Setup und teardown

Für Code, der vor bzw. nach jedem Test in einer Gruppe ausgeführt werden soll:

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

## Übung

schreibe Tests, die das Verhalten der String-Methode `.replace()` testen
