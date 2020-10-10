# End-to-end Tests mit Jest und puppeteer

## End-to-end Test-Tools

- puppeteer
- cypress
- selenium

## Puppeteer

kann eine Instanz des Chromium-Browsers steuern

```bash
npm install puppeteer
```

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
});
```

## Puppeteer

Test, der tatsächlich ein Browser-Fenster öffnet:

```js
test('first website', async () => {
  jest.setTimeout(10000);
  const browser = await puppeteer.launch({
    headless: false,
  });
  // ...
});
```

## Puppeteer

Seiteninhalte abfragen:

- `page.$eval()` für Inhalte eines einzelnen Elements
- `page.$$eval()` zum Abfragen aller zutreffenden Elemente

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

- `page.$()` für ein einzelnes Element
- `page.$$()` für ein Array aller zutreffenden Eelmente

```js
const firstLink = await page.$('a');
await firstLink.click();
await page.waitForNavigation();
```

## Puppeteer

Setup in `beforeEach`:

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
```

## Puppeteer

[vollständiges API für Puppeteer](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md)
