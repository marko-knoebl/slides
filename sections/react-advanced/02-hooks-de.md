# Hooks

## Hooks

Hooks: Erweiterung von Funktionskomponenten

Eine _einfache_ Funktionskomponente kann Inhalte basierend auf ihren Props rendern und Events auslösen.

Hooks erlauben erweiterte Funktionalität, z.B. internen State in einer Komponente oder das "Lauschen" auf Events aus dem Komponentenlebenszyklus

## Hooks

Hooks sind spezielle Funktionen, die am Beginn einer Komponentendefinition aufgerufen werden können

Beispiele:

- `useState(...)`
- `useEffect(...)`
- `useContext(...)`
- ...

## Hooks

> "In the longer term, we expect Hooks to be the primary way people write React components."

\- [React FAQ](https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both)

## Hooks: derzeitiger Stand

- Dokumentation für Einsteiger noch sehr Klassen-orientiert
- Keine Unterstützung durch die Test Library _enzyme_ (https://github.com/airbnb/enzyme/issues/2011)

## Wichtige Hooks

- state Hook
- effect Hook
- context Hook
- reducer Hook
