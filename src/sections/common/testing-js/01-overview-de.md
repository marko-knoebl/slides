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
- _Karma_: test runner
- _Enzyme_: test utilities & assertions für React

https://2018.stateofjs.com/testing/overview/

## Beispiel: shorten

Wir werden eine Funktion schreiben und testen, die einen String auf eine vorgegebene Länge verkürzt

```js
shorten('loremipsum', 6);
// should return 'lor...'
```

Mögliche Zugänge

- mit Implementierung beginnen
- mit Tests beginnen (test-driven development)

## Einrichten des Test Runners

in einem vorhandenen npm Projekt:

```bash
npm install --save-dev mocha
```

in _package.json_:

```json
"scripts": {
  "test": "mocha"
}
```

Tests ausführen:

```bash
npm test
```

## Finden von Tests

Im allgemeinen suchen Test Libraries nach Dateien mit der Endung `.test.js` oder `.spec.js`

## Beispiel: shorten

```js
// shorten.js
const shorten = (s, maxlength) => {
  if (s.length > maxlength) {
    s = s.slice(0, maxlength - 3) + '...';
  }
  return s;
};

module.exports.shorten = shorten;
```

## Beispiel: shorten

```js
// shorten.test.js
const shorten = require('./shorten.js').shorten;
// use node's built-in assert module
const assert = require('assert');

it('shortens "loremipsum" to "lor..."', () => {
  const expected = 'lor...';
  const actual = shorten('loremipsum', 6);
  assert.equal(actual, expected);
});
```
