# Puppeteer

## Testen einer React-Anwendung mit Puppeteer

Starten der React-Anwendung im Hintergrund (auf Port 3000), damit Puppeteer auf sie zugreifen kann:

```bash
npm run start
```

Test, der Puppeteer nutzt:

```js
test("displays page with title 'React App'", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  const pageTitle = await page.title();
  expect(pageTitle).toEqual('React App');
});
```

## Puppeteer

Siehe auch: [Rajat S: Testing your React App with Puppeteer and Jest](https://blog.bitsrc.io/testing-your-react-app-with-puppeteer-and-jest-c72b3dfcde59)
