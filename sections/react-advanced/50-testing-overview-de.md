# Testen

## Automatisiertes Testen in JavaScript

Manche Funktionen in React - z.B. Reducer - sind ganz "normale" JavaScript-Funktionen und können mit standard-Testwerkzeugen getestet werden

Siehe die Präsentation [JavaScript Testing](./javascript-testing-de.html) für einen Einstieg

## Testen von React-Komponenten

was kann getestet werden:

- Rendering
- Auslösen von Events
- Änderungen am State

## Test Renderer für React

- `react-test-renderer` (vom React Team entwickelt)
- `react-testing-library` (Unterprojekt von _Testing Library_, Erstveröffentlichung Mitte 2019)
- `Enzyme`

## Snapshot Tests

Komponenten werden gerendert und mit früheren Versionen (Snapshots) verglichen
