# End-to-end tests with Cypress

## Cypress

uses _mocha_ and _chai_ in the background

## Setup

for intialization, run `npx cypress open` once

(will create folder _cypress_ and file _cypress.config.js_ in the current directory)

## Running Cypress

opening the graphical user interface:

```bash
npx cypress open
```

running all tests in the terminal:

```bash
npx cypress run
```

## Cypress

example: testing Wikipedia:

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

global queries:

- find first by selector and text: `cy.contains("h1", "hello world")`
- find first by text `cy.contains("hello world")`
- find all by selector: `cy.get("main #name-input")`
- find first by selector: `cy.get("main #name-input").first()`

## Cypress

querying sub-elements:

- `.find()`: similar to `.get()`, but for sub-elements
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

getting the parent:

```js
cy.contains('h1', 'section title').parent();
```

## Cypress

interacting with elements:

- `cy.get("#reset-btn").click()`
- `cy.get("#name-input").type("foo")`
- `cy.get("#name-input").type("{esc}")`

## Cypress

example assertion:

```js
cy.get('#name-input').should('have.class', 'invalid');
```

other assertions::

- `cy.url().should("match", /\/items\/d+$/)`
- `.should("have.class", "invalid")`
- `.should("have.value", "")`
- `.should("have.length", 10)`
- `.should("include.text", "foo")`
- `.should("be.visible")`

## Cypress

example: Searching on Wikipedia

```js
it('search', () => {
  cy.get('#searchInput').type('cypress');
  cy.get('#searchButton').click();
  cy.get('p').first().should('include.text', 'Cypress');
});
```

## Exercise

Write tests for the todo app at:

https://do49e.csb.app/
