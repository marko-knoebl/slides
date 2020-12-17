# End-to-end tests with Jest and puppeteer

## End-to-end testing tools

- puppeteer
- cypress
- selenium

## Puppeteer

a tool that can control an instance of the Chromium browser from node

npm packages:

- _puppeteer_
- _@types/puppeteer_

## Puppeteer

testing Wikipedia:

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

restructuring code for multiple tests:

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

tests that actually open a browser window:

```js
beforeAll(async () => {
  browser = await puppeteer.launch({ headless: false });
});
```

## Puppeteer

_querying elements_ is not trivial since there are two _separate_ JavaScript environments (node and Chromium)

querying elements for getting their contents:

- `page.$eval()` for a single elements
- `page.$$eval()` for multiple elements

querying elements for triggering actions:

- `page.$()` for single elements
- `page.$$()` for an array of elements

## Puppeteer

getting elements to retrieve their content:

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

getting an element for triggering an action:

```js
const firstLink = await page.$('a');
await firstLink.click();
await page.waitForNavigation();
```

## Puppeteer

example: Searching on Wikipedia

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

<small>notes: <em>page.keyboard.press("Enter")</em> would trigger full-text search; on some Wikipedia pages the first paragraph might be empty.</small>

## Puppeteer

important methods:

- `page.$()`
- `page.$$()`
- `page.$eval()`
- `page.$$eval()`
- `page.keyboard.type("abc")`
- `page.keyboard.press("Enter")`
- `page.click("#selector")`
- `element.click()`
- `page.waitForNavigation()`

[complete API](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md)
