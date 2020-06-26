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
