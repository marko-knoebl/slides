# End-to-end tests with Cypress

## Cypress

npm package: _cypress_

in _package.json_:

```json
  "scripts": {
    "cypress:open": "cypress open"
  }
```

execute:

```bash
npm run cypress:open
```

## Cypress

testing Wikipedia:

```js
cy.visit('https://en.wikipedia.org');
```

then:

```js
cy.title().should('match', /wikipedia/i);
```

or:

```js
cy.title().should((title) => {
  expect(title).to.match(/wikipedia/i);
});
```

## Puppeteer

restructuring code for multiple tests:

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

example: Searching on Wikipedia

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

Write tests for the todo app at:

https://do49e.csb.app/
