# End-to-end Tests mit Cypress

## Cypress

verwendet im Hintergrund _mocha_ und _chai_

## Setup

zum Initialisieren, führe `npx cypress open` aus

(erstelle Ordner _cypress_ und Datei _cypress.config.js_ im aktuellen Verzeichnis)

## Ausführen

Öffnen der grafischen Oberfläche:

```bash
npx cypress open
```

Ausführen aller Tests im Terminal:

```bash
npx cypress run
```

## Cypress

Beispiel: Testen von Wikipedia:

in _cypress/e2e/wikipedia.cy.js_:

```js
describe('wikipedia', () => {
  beforeEach(() => {
    cy.visit('https://en.wikipedia.org');
  });

  it("page title includes 'wikipedia'", () => {
    cy.title().should('match', /wikipedia/i);
  });
});
```

## Cypress

globales Abfragen von Elementen:

- erstes Element nach Selektor und Text: `cy.contains("h1", "hello world")`
- erstes Element nach Text: `cy.contains("hello world")`
- alle nach Selektor: `cy.get("main #name-input")`
- erstes Element nach Selektor: `cy.get("main #name-input").first()`

## Cypress

Abfragen von Unterelementen:

- `.find()`: ähnlich zu `.get()`, aber für Unterelemente
- `.contains()`

```js
cy.contains('li', 'TODO: write tests').find('button');
```

```js
cy.contains('li', 'TODO: write tests').contains(
  'button',
  'delete'
);
```

## Cypress

Abfragen des Elternelements:

```js
cy.contains('h1', 'section title').parent();
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
it('search', () => {
  cy.get('#searchInput').type('cypress');
  cy.get('#searchButton').click();
  cy.get('p').first().should('include.text', 'Cypress');
});
```

## Übung

Schreibe Tests für die Todo-Anwendung auf:

https://do49e.csb.app/
