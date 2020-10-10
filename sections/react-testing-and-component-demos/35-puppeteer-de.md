# Puppeteer

## Testen einer React-Anwendung mit Puppeteer

Starten der React-Anwendung im Hintergrund (auf Port 3000), damit Puppeteer auf sie zugreifen kann:

```bash
npm run start
```

Test, der Puppeteer nutzt:

```js
test("displays page with title 'React App'", async () => {
  jest.setTimeout(10000);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  const pageTitle = await page.title();
  expect(pageTitle).toEqual('React App');
});
```
