# Hooks

## Hooks

Bausteine einer React-Anwendung:

- _Komponenten_: für das _View_
- _Hooks_ für das _Modell_ / die _Logik_ hinter dem _View_

Zwecke:

- Strukturierung von Code
- Wiederverwendung von Code

## Hooks

Hooks sind spezielle Funktionen, die innerhalb einer Komponentendefinition aufgerufen werden können

Beispiele:

- `useState(...)`
- `useEffect(...)`
- `useContext(...)`

## Externe Hooks

Viele zusätzliche Hooks werden von der React-Community entwickelt

Einsatzgebiete z.B.:

- Abfragen von APIs (z.B. [react-query](https://github.com/tannerlinsley/react-query), [swr](https://github.com/vercel/swr))
- Verwalten von Formularen (z.B. [react-hook-form](https://github.com/react-hook-form/react-hook-form), [react-use-form-state](https://github.com/wsmd/react-use-form-state))
- Media Queries (z.B. [react-responsive](https://github.com/yocontra/react-responsive))
- Verwenden von _localStorage_ (z.B. [rehooks/local-storage](https://github.com/rehooks/local-storage))
- ... (siehe [awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks), [react-use](https://github.com/streamich/react-use))

## Regeln für Hooks

Hooks in einer Komponentendefinition müssen bei jedem Rendering in der gleichen Reihenfolge aufgerufen werden - React unterscheidet z.B. mehrere `useState`-Aufrufe anhand ihrer Reihenfolge

Die gleichen Regeln wie in einer Komponente gelten auch für Hook-Aufrufe in einem selbst definierten Hook

[Rules of Hooks auf reactjs.org](https://reactjs.org/docs/hooks-rules.html)
