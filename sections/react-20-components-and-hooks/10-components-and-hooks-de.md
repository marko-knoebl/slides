# Komponenten und Hooks

## Komponenten und Hooks

Bausteine einer React-Anwendung:

- _Komponenten_: für das _UI_ / _View_
- _Hooks_: für das _Modell_ / die _Logik_ hinter dem _View_

## Hooks

Hooks = besondere Funktionen, die in einer Komponentenfunktion aufgerufen werden können

Beispiele:

- `useState`
- `useContext`: um State über einen Komponentenbaum hinweg zu teilen
- `useQuery`: zum Abfragen eines APIs
- `useTodos`: eigener Hook zum Verwalten einer Liste von Todos

## Regeln für Hooks

in einer Komponentendefinition:  
Hooks müssen bei jedem Rendering in der gleichen Reihenfolge aufgerufen werden

(React verwendet die Reihenfolge, um den "gleichen" Hook-Aufruf über mehrere Renderings zu verfolgen)

[Rules of Hooks auf reactjs.org](https://reactjs.org/docs/hooks-rules.html)
