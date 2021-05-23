# Puppeteer

## Testing a React application with Puppeteer

Start the React application in the background (on port 3000) so Puppeteer can interact with it:

```bash
npm run start
```

## Testing a React application with Puppeteer

```js
let browser: puppeteer.Browser;
let page: puppeteer.Page;
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

## Testing a React application with Puppeteer

exercise: test whether the todo application shows the correct number of list items

## Puppeteer

see also: [Rajat S: Testing your React App with Puppeteer and Jest](https://blog.bitsrc.io/testing-your-react-app-with-puppeteer-and-jest-c72b3dfcde59)
