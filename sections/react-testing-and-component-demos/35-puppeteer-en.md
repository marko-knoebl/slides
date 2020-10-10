# Puppeteer

## Testing a React application with Puppeteer

Start the React application in the background (on port 3000) so Puppeteer can interact with it:

```bash
npm run start
```

test that uses Puppeteer:

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

see also: [Rajat S: Testing your React App with Puppeteer and Jest](https://blog.bitsrc.io/testing-your-react-app-with-puppeteer-and-jest-c72b3dfcde59)
