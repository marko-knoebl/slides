# Testen

## Automatisiertes Testen in JavaScript

Manche Funktionen in React - z.B. Reducer - sind ganz "normale" JavaScript-Funktionen und können mit standard-Testwerkzeugen getestet werden

Siehe die Präsentation [JavaScript Testing](./javascript-testing-de.html) für einen Einstieg (Bemerkung: Die Library Jest ist in einem create-react-app Projekt schon eingerichtet)

## Testen von React-Komponenten

was kann getestet werden:

- Rendering
- Reaktion auf User-Aktionen

## Testen von React-Komponenten

im allgemeinen drei Schritte:

- arrange (vorbereiten)
- act (Interaktion)
- assert (Überprüfen von Konditionen)

## Test Renderer für React

- **react-testing-library**
- _react-test-renderer_ (vom React Team entwickelt)
- _Enzyme_

## Snapshot Tests

Komponenten werden gerendert und mit früheren Versionen (Snapshots) verglichen
