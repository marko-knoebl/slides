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

Testen, ob die erste Website noch online ist:

```js
test('first website', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    'http://info.cern.ch/hypertext/WWW/TheProject.html'
  );
  const pageTitle = await page.title();
  expect(pageTitle).toEqual('The World Wide Web project');
  await browser.close();
});
```

## Puppeteer

Test, der tatsächlich ein Browser-Fenster öffnet:

```js
jest.setTimeout(10000);

test('first website', async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  // ...
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
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://en.wikipedia.org');
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
await browser.close();
```

<small>Bemerkungen: <em>page.keyboard.press("Enter")</em> würde eine Volltextsuche auslösen; auf manchen Wikipedia-Seiten ist der erste Paragraph leer.</small>

## Puppeteer

Setup und Teardown:

```js
let browser;
let page;

beforeEach(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto(
    'http://info.cern.ch/hypertext/WWW/TheProject.html'
  );
});

afterEach(async () => {
  await browser.close();
});
```

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
