# Automatisiertes Testen in JavaScript

## Automatisiertes Testen

Code kann automatisch getestet werden, um sicherzustellen, dass er wie erwartet funktioniert

## Tools für das Testen

- _node_ wird als Runtime benötigt
- _assert_: einfache Assertions, in node beinhaltet
- _Jest_: test runner & assertion library
- _Mocha_: test runner
- _Chai_: assertion library
- _Jasmine_: test runner & assertion library

Popularität:

- [State of JS 2019: Umfrage zu Test-Tools](https://2019.stateofjs.com/testing/)
- [npmtrends](https://www.npmtrends.com/jest-vs-mocha-vs-chai-vs-jasmine)

## Einfaches Beispiel: shorten

Wir werden eine Funktion schreiben und testen, die einen String auf eine vorgegebene Länge kürzt:

```js
shorten('loremipsum', 6);
// should return 'lor...'
```

Mögliche Zugänge:

- mit Implementierung beginnen
- mit Tests beginnen (test-driven development)

## Einfaches Beispiel: shorten

Implementierung, die getestet werden soll:

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

## Beispiel: shorten

einfache Tests:

```js
// shorten.test.js
import assert from 'assert';
import shorten from './shorten';

assert.equal(shorten('loremipsum', 4), 'l...');
assert.equal(shorten('loremipsum', 9), 'loremi...');
assert.equal(shorten('loremipsum', 10), 'loremipsum');
assert.equal(shorten('loremipsum', 11), 'loremipsum');
```

`assert.equal` wirf eine Exception, wenn die Bedingung nicht erfüllt wird

# Assertions

## Assertions

Assertions können auf zwei Arten geschrieben werden:

**assert**:

```js
assert.equal(a, b);
```

**expect** (manchmals als _behavior-driven_ bezeichnet):

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

## Assertions mit Chai

```js
expect(a).to.equal(4);
expect(a).not.to.equal(2);
expect(a).to.be.greaterThan(3);
expect(a).to.be.a('number');
expect(() => JSON.parse('')).to.throw();
```

## Assertions mit Jest

```js
expect(a).toEqual(4);
expect(a).not.toEqual(2);
expect(a).toBe(4);
expect(a).toBeGreaterThan(3);
expect(a).toBeInstanceOf(Number);
expect(() => JSON.parse('')).toThrow();
```

## Assertions mit Jest

`.toEqual`: für Primitive sowie für Objekte geeignet

`.toBe`: verhält sich wie `===` - für Primitive geeignet (sowie zum Identitätsvergleich)

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

# End-to-end Tests mit Jest und puppeteer

## End-to-end Test-Tools

- puppeteer
- cypress
- selenium

## Puppeteer

kann eine Instanz des Chromium-Browsers aus node steuern

npm-Pakete:

- _puppeteer_
- _@types/puppeteer_

## Puppeteer

Testen von Wikipedia:

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

Restrukturierung für mehrere Tests:

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

Test, der tatsächlich ein Browser-Fenster öffnet:

```js
beforeAll(async () => {
  browser = await puppeteer.launch({ headless: false });
});
```

## Puppeteer

Abfragen von Elementen ist nicht trivial, da wir mit zwei _separate_ JavaScript-Umgebungen arbeiten (node und Chromium)

Seiteninhalte abfragen:

- `page.$eval()` für Inhalte eines einzelnen Elements
- `page.$$eval()` zum Abfragen aller zutreffenden Elemente

Elemente abfragen, um mit ihnen zu interagieren:

- `page.$()` für ein einzelnes Element
- `page.$$()` für ein Array aller zutreffenden Eelmente

## Puppeteer

Elemente abfragen, um auf deren Inhalte zuzugreifen:

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

Elemente abfragen, um mit ihnen zu interagieren:

```js
const firstLink = await page.$('a');
await firstLink.click();
await page.waitForNavigation();
```

## Puppeteer

Beispiel: Suche auf Wikipedia

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

<small>Bemerkungen: <em>page.keyboard.press("Enter")</em> würde eine Volltextsuche auslösen; auf manchen Wikipedia-Seiten ist der erste Paragraph leer.</small>

## Puppeteer

wichtige Methoden:

- `page.$()`
- `page.$$()`
- `page.$eval()`
- `page.$$eval()`
- `page.keyboard.type("abc")`
- `page.keyboard.press("Enter")`
- `page.click("#selector")`
- `element.click()`
- `page.waitForNavigation()`

[vollständiges API](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md)

# Mocking mit Jest

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
