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
