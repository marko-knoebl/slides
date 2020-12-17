# Puppeteer

## Testen einer React-Anwendung mit Puppeteer

Starten der React-Anwendung im Hintergrund (auf Port 3000), damit Puppeteer auf sie zugreifen kann:

```bash
npm run start
```

## Testen einer React-Anwendung mit Puppeteer

```js
let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch();
});
beforeEach(async () => {
  page = await browser.newPage();
  await page.goto('http://localhost:3000');
});
afterAll(async () => {
  await browser.close();
});

test("displays page with title 'React App'", async () => {
  const pageTitle = await page.title();
  expect(pageTitle).toEqual('React App');
});
```

## Puppeteer

Siehe auch: [Rajat S: Testing your React App with Puppeteer and Jest](https://blog.bitsrc.io/testing-your-react-app-with-puppeteer-and-jest-c72b3dfcde59)
