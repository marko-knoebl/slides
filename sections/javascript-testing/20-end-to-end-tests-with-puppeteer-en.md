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

```js
test('Google page title', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  const pageTitle = await page.title();
  expect(pageTitle).toEqual('Google');
});
```

## Puppeteer

test that actually opens a browser window:

```js
test('Google page title', async () => {
  jest.setTimeout(10000);
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  const pageTitle = await page.title();
  expect(pageTitle).toEqual('Google');
});
```
