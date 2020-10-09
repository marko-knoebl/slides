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

Test, der tatsächlich ein Browser-Fenster öffnet:

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
