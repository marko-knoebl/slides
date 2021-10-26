# End-to-end Tests mit Cypress

## Cypress

npm-Paket: _cypress_

in _package.json_:

```json
  "scripts": {
    "cypress:open": "cypress open"
  }
```

ausführen:

```bash
npm run cypress:open
```

## Cypress

Testen von Wikipedia:

```js
cy.visit('https://en.wikipedia.org');
```

dann:

```js
cy.title().should('match', /wikipedia/i);
```

oder:

```js
cy.title().should((title) => {
  expect(title).to.match(/wikipedia/i);
});
```

## Puppeteer

Restrukturierung des Codes für mehrere Tests:

```js
describe('wikipedia', () => {
  beforeEach(() => {
    cy.visit('https://en.wikipedia.org');
  });

  it("page title includes 'wikipedia'", () => {
    cy.title().should((title) => {
      expect(title).to.match(/wikipedia/i);
    });
  });
});
```

## Puppeteer

Beispiel: Suche auf Wikipedia

```js
it('search', () => {
  cy.get('#searchInput').type('cypress');
  cy.get('#searchButton').click();
  cy.get('p')
    .first()
    .should((element) => {
      const text = element.text();
      expect(text).to.match(/cypress/i);
    });
});
```

## Exercise

Schreibe Tests für die Todo-Anwendung auf:

https://do49e.csb.app/
