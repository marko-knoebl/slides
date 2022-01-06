# End-to-end tests mit Playwright

## Playwright

beinhaltet _expect_ aus Jest

## Setup

```bash
npm install @playwright/test
```

Installiere Browser (Chromium, Firefox, Webkit):

```bash
npx playwright install
```

## Ausführen von Tests

Ausführen von Tests:

```bash
npx playwright test
```

Ausführen im "_headed_"-Modus (öffnet Browser-Fenster):

```bash
npx playwright test --headed
```

## Playwright

Testen von Wikipedia:

```ts
import { test, expect } from '@playwright/test';

test('wikipedia title', async ({ page }) => {
  await page.goto('https://en.wikipedia.org');
  const pageTitle = await page.title();
  expect(pageTitle).toMatch(/Wikipedia/);
});
```

## Playwright

Umstrukturieren des Codes für mehrere Tests:

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

Klicken auf einen Link:

```ts
await page.click('text=About Wikipedia');
```

## Playwright

Beispiel: Suchen auf Wikipedia

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

<small>Bemerkungen: <em>page.keyboard.press("Enter")</em> würde eine Volltextsuche auslösen</small>
