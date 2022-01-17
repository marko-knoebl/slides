# End-to-end Tests mit Cypress

## Cypress

verwendet im Hintergrund _mocha_ und _chai_

## Setup

npm-Paket: _cypress_

in _package.json_:

```json
  "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  }
```

## Cypress ausführen

ausführen:

```bash
npm run cypress:open
```

startet eine grafische Benutzeroberfläche

erstellt beim ersten Ausführen den Ordner _cypress_

## Konfiguration

TypeScript-Konfiguration in einem create-react-app-Projekt:

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

## Konfiguration

Um ESLint-Fehler zu vermeiden (insbesondere bei create-react-app-Projekten):

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

Beispiel: Testen von Wikipedia:

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

Abfragen von Elementen:

- nach Text suchen: `cy.contains("hello world")`
- nach Text und Selektor suchen: `cy.contains("h1", "hello world")`
- nach Selektor suchen: `cy.get("#name-input")`

## Cypress

verschachtelte Abfragen:

```js
cy.get('main').get('table').contains('tr', 'foo');
```

## Cypress

Interagieren mit Elementen:

- `cy.get("#reset-btn").click()`
- `cy.get("#name-input").type("foo")`
- `cy.get("#name-input").type("{esc}")`

## Cypress

Beispiel für eine Assertion:

```js
cy.get('#name-input').should('have.class', 'invalid');
```

andere Assertions:

- `cy.url().should("match", /\/items\/d+$/)`
- `.should("have.class", "invalid")`
- `.should("have.value", "")`
- `.should("be.visible")`

## Cypress

Beispiel: Suche auf Wikipedia

```js
it("wikipedia search for 'cypress' article", () => {
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

## Cypress

extra-Konfiguration in _cypress.json_:

```json
{
  "baseUrl": "http://localhost:8080"
}
```

## Übung

Schreibe Tests für die Todo-Anwendung auf:

https://do49e.csb.app/
