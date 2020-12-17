# Test Runner

## Test Runner

- finden Testdateien
- führen Tests aus
- Erstellen Berichte über Testresultate

## Verbreitete Test Runner

- Jest (beinhaltet Assertion-Tools)
- Mocha (oft gemeinsam mit _Chai_ verwendet)
- Jasmine (beinhaltet Assertion-Tools)

## Ausführen von Tests

Tests werden meist mittels eines npm Scripts ausgeführt - z.B. via `npm run test` (oder abgekürzt `npm test`)

Bemerkung: Laufende Tests sollten immer abgebrochen werden, bevor neue npm-Pakete installiert werden - ansonsten kann die Installation fehlschlagen

## Finden von Tests

Jest: sucht standardmäßig nach Dateien in `__tests__`-Ordnern und nach Dateien, die mit `.test.js` oder `.spec.js` enden

Mocha: sucht standardmäßig nach Dateien in dem Ordner `test` (eigenes Muster z.B. via: `mocha "src/**/*.{test,spec}.{js,jsx}"`)

## Strukturierung von Tests

Tests werden üblicherweise mittels der Funktion `it` definitiert, die zwei Argumente erhält:

- einen String, der den Test beschreibt
- eine Funktion, die den Testcode ausführt

## Strukturierung von Tests

```js
it('shortens "loremipsum" to "lor..." with limit 6', () => {
  expect(shorten('loremipsum', 6)).toEqual('lor...');
});
```

Ein `it`-Block kann mehrere `expect`-Aufrufe enthalten (oder auch gar keine)

In _Jest_ ist auch die Verwendung des Alias `test` anstatt von `it` möglich.

## Strukturierung von Tests

Mittels `describe` können Tests in Gruppen (und Untergruppen, ...) eingeteilt werden:

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

Für Code, der vor und jedem Test in einer Gruppe ausgeführt werden soll:

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
