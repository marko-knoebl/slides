# End-to-End Tests with Playwright

## Playwright

includes _expect_ from Jest

## Setup

```bash
npm install @playwright/test
```

install browsers (Chromium, Firefox, Webkit):

```bash
npx playwright install
```

## Running tests

run tests:

```bash
npx playwright test
```

run in "_headed_" mode (actually opening a browser window):

```bash
npx playwright test --headed
```

## Playwright

testing Wikipedia:

```ts
import { test, expect } from '@playwright/test';

test('wikipedia title', async ({ page }) => {
  await page.goto('https://en.wikipedia.org');
  const pageTitle = await page.title();
  expect(pageTitle).toMatch(/Wikipedia/);
});
```

## Playwright

restructuring code for multiple tests:

```ts
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://en.wikipedia.org');
});

test('wikipedia title', async ({ page }) => {
  const pageTitle = await page.title();
  expect(pageTitle).toMatch(/Wikipedia/);
});
```

## Playwright

clicking on a link:

```ts
await page.click('text=About Wikipedia');
```

## Playwright

example: Searching on Wikipedia

```js
test('wikipedia search', async ({ page }) => {
  await page.fill(
    'input[aria-label="Search Wikipedia"]',
    'foo'
  );
  await page.click('#searchButton');
  await page.waitForNavigation();
  const mainHeading = page.locator('h1');
  await expect(mainHeading).toHaveText(/foo/i);
});
```

<small>note: <em>page.keyboard.press("Enter")</em> would trigger full-text search</small>
