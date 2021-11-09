# End-to-end tests with Cypress

## Cypress

E2E testing library

uses _mocha_ and _chai_ in the background

## Setup

npm package: _cypress_

in _package.json_:

```json
  "scripts": {
    "cypress:open": "cypress open"
  }
```

## Running Cypress

execute:

```bash
npm run cypress:open
```

Starts a graphical user interface

Will create folder _cypress_ on first run

## Configuration

TypeScript configuration in a create-react-app project:

in _cypress/tsconfig.json_:

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "noEmit": true,
    // be explicit about types included
    // to avoid clashing with Jest types
    "types": ["cypress"]
  },
  "include": ["../node_modules/cypress", "./**/*.ts"]
}
```

## Configuration

To avoid ESLint errors (in particular with _create-react-app_ projects):

in _package.json_:

```json
  "eslintConfig": {
    // ...
    "overrides": [
      {
        "files": ["cypress/**"],
        "rules": {
          "jest/valid-expect": 0
        }
      }
    ]
  },
```

## Cypress

example: testing Wikipedia:

in _cypress/integration/wikipedia.spec.ts_:

```js
describe('wikipedia', () => {
  beforeEach(() => {
    cy.visit('https://en.wikipedia.org');
  });

  it("page title includes 'wikipedia', version 1", () => {
    cy.title().should('match', /wikipedia/i);
  });

  it("page title includes 'wikipedia', version 2", () => {
    cy.title().should((title) => {
      expect(title).to.match(/wikipedia/i);
    });
  });
});
```

## Cypress

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
