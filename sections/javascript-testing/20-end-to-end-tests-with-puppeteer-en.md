# End-to-end tests with Jest and puppeteer

## End-to-end testing tools

- puppeteer
- cypress
- selenium

## Puppeteer

a tool that can control an instance of the Chromium browser

```bash
npm install puppeteer
```

## Puppeteer

test if the first website is still available:

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

test that actually opens a browser window:

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

getting page contents:

- `page.$eval()` for contents of a single element
- `page.$$eval()` for querying multiple elements

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

getting elements for triggering actions:

- `page.$()` for single elements
- `page.$$()` for an array of elements

```js
const firstLink = await page.$('a');
await firstLink.click();
await page.waitForNavigation();
```

## Puppeteer

setup in `beforeEach`:

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

[complete API for Puppeteer](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md)
