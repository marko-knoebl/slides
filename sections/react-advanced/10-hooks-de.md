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
- `useReducer(...)`

## Hooks

> "In the longer term, we expect Hooks to be the primary way people write React components."

\- [React FAQ](https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both)

## Regeln für Hooks

Hooks in einer Komponentendefinition müssen bei jedem Rendering in der gleichen Reiehnfolge aufgerufen werden - React unterscheidet z.B. mehrere `useState`-Aufrufe anhand ihrer Reihenfolge

Die gleichen Regeln wie in einer Komponente gelten auch für Hook-Aufrufe in einem selbst definierten Hook

[Rules of Hooks auf reactjs.org](https://reactjs.org/docs/hooks-rules.html)
