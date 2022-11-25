# React Themen Checkliste

Eine Checkliste zum Lernen von React-Themen

(Ist nicht dazu gedacht, in dieser Reihenfolge durchlaufen zu werden)

## React Grundlagen

- [ ] Use-Cases von React
- [ ] JavaScript Grundlagen für React
  - [ ] Immutability / Datenverwaltung ohne Mutationen
    - [ ] Ändern einzelner Properties in einem Objekt
    - [ ] Hinzufügen von Properties zu einem Objekt
    - [ ] Hinzufügen von Elementen zu einem Array (create)
    - [ ] Ändern von Elementen in einem Array (update)
    - [ ] Entfernen von Elementen aus einem Array (delete)
  - [ ] Destrukturierende Zuweisung mit Arrays und Objekten
  - [ ] Imports und Exports: named und default
- [ ] State
  - [ ] Verwenden des _State Hooks_ (_useState_)
  - [ ] minimaler State und abgeleitete Werte
  - [ ] Input State
    - [ ] Verbinden von Inputs zum State mit _value_ und _onChange_
    - [ ] Verwalten verschiedener Input-Typen
    - [ ] Verwalten numerischer Inputs
  - [ ] Wichtigkeit von Immutability in React-State
  - [ ] Verwenden des State-Hooks mit TypeScript
- [ ] JSX
  - [ ] Wechseln von JS zu XML-Modus
  - [ ] Wechseln von XML zu JS-Modus in Inhalten
  - [ ] Wechseln von XML zu JS-Modus in Properties
  - [ ] Einbinden von Strings und Zahlen
  - [ ] Setzen von booleschen HTML-Properties (z.B. _disabled_)
  - [ ] _className_
  - [ ] die _style_-Property in JSX
  - [ ] Whitespace in HTML vs Whitespace in JSX
  - [ ] Escaping von Zeichen wie _\<_, _\&_, _\>_
  - [ ] Kommentare
  - [ ] if / else
    - [ ] der Operator `&&` in JS und JSX
  - [ ] Wiederholen von Elementen
    - [ ] die _key_-Property
  - [ ] Event-Handler in JSX
    - [ ] Zugriff auf das Event-Objekt
    - [ ] `onClick={handleEvent}` (do) vs `onClick={handleEvent()}` (don't)
    - [ ] `preventDefault`
    - [ ] Eventtypen in TypeScript
  - [ ] JSX Fragmente
  - [ ] Sicherheit und XSS-Angriffe
    - [ ] `dangerouslySetInnerHtml`
  - [ ] Kompilierung von JSX
- [ ] Entwicklungsumgebung
  - [ ] Formatter (z.B. _prettier_)
  - [ ] Linter (z.B. _eslint_)
  - [ ] Entwickeln mit node.js und npm
  - [ ] Initialisieren eines React-Projekts (z.B. via _create-react-app_)
  - [ ] Entwicklungsserver
  - [ ] Production Build und Deployment
  - [ ] _React Developer Tools_ Browser-Plugin
  - [ ] Projektstruktur: verbreitete Zugänge
- [ ] TypeScript Grundlagen für React
  - [ ] TypeScript Vorteile: Autovervollständigung und Fehler-Reporting
  - [ ] Typendeklarationen für Libraries
  - [ ] Type Inference
  - [ ] Deklarieren von Typen von Variablen
  - [ ] primitive Typen: _number_, _string_, _boolean_
  - [ ] Array-Typen
  - [ ] Objekttypen
    - [ ] optionale Properties
  - [ ] any
  - [ ] Type Aliases und Interfaces Grundlagen
    - [ ] Exportieren und Importieren von Type Aliases und Interfaces
  - [ ] Funktionssignaturen und Funktionstypen
    - [ ] _void_
  - [ ] Type Assertions
  - [ ] Verwenden von (bestehenden) Generics (z.B. `Array<...>`, `useState<...>`)
  - [ ] Union Types
- [ ] Komponenten
  - [ ] Überblick: Funktionskomponenten und Klassenkomponenten
  - [ ] Definieren von Komponenten als Funktionen
  - [ ] State über mehrere Komponenten hinweg teilen
  - [ ] Überblick über bestehende Komponentenlibraries
  - [ ] Props in eigenen Komponenten
  - [ ] Events in eigenen Komponenten
  - [ ] Inhalte an Komponenten übergeben
  - [ ] "Wrapper" für bestehende Elemente (z.B. `button` -> `StyledButton`)
- [ ] Hooks
  - [ ] was sind Hooks?
  - [ ] Regeln für Hooks
  - [ ] Überblick über eingebaute Hooks und Hooks aus Libraries
  - [ ] Erstellen eigener Hooks

## React Libraries und Tools

- [ ] React-Ökosystem und Libraries für verschiedene Zwecke (Überblick)
  - [ ] Komponentenlibraries
  - [ ] API-Abfragen
  - [ ] Routing
  - [ ] Styling-Tools
  - [ ] Formular-Handling
  - [ ] State Management
- [ ] API-Abfragen
  - [ ] Netzwerkanfragen in JavaScript (_fetch_, _async_/_await_)
  - [ ] API Query Libraries für React: z.B. _react-query_
  - [ ] Überblick: _useEffect_
- [ ] Routing Grundlagen
  - [ ] client-seitiges Routing
  - [ ] _react-router_ Library
    - [ ] Definieren von Routen
    - [ ] Verwenden von Links
    - [ ] verschachtelte Routen
    - [ ] Routenparameter
    - [ ] Navigation aus JavaScript
    - [ ] Styling aktiver Links
- [ ] Styling-Werkzeuge
  - [ ] Werkzeuge für externe Stylesheets
    - [ ] das Paket _classnames_
    - [ ] CSS-Module
    - [ ] SCSS
  - [ ] CSS-in-JS
    - [ ] inline styles
    - [ ] "styled components"
  - [ ] Animationen
    - [ ] Animieren des Erscheinens / Verschwindens von Elementen
- [ ] Formulare
  - [ ] Strategien zur Formularvalidierung
  - [ ] Libraries für Formulare: _react-hook-form_, _formik_
- [ ] State Management Überblick
  - [ ] Libraries: _zustand_, _redux_, _mobX_, ...

## Intermediate React

- [ ] State Hook im Detail
  - [ ] State-Transformations-Funktionen, veralteter State
  - [ ] State-Initialisierungs-Funktionen
- [ ] Klassenkomponenten
  - [ ] Definieren von Komponenten als Klassen
  - [ ] Props in Klassenkomponenten
  - [ ] State in Klassenkomponenten
  - [ ] mögliche Probleme mit _this_
- [ ] Side Effects
  - [ ] Zwecke von Side Effects
  - [ ] Side Effects in Klassenkomponenten
  - [ ] Side Effects in Funktionskomponenten
  - [ ] "Aufräumen" von Side Effects
  - [ ] "strict mode" und doppelter Aufruf von Side Effects
- [ ] Context
  - [ ] "reine Provider" und "Provider mit State"
  - [ ] Context und State mittels _constate_
  - [ ] Context mit reinem React
- [ ] refs
  - [ ] refs zum Ablegen von Objekten, die das Rendering nicht beeinflussen
  - [ ] refs zum Vermeiden von veraltetem State
  - [ ] die _ref_-Property zum Zugreifen auf DOM-Elemente
  - [ ] die _ref_-Property in eigenen Komponenten

## Performanceoptimierung

- [ ] React devtools und Performance
- [ ] Memoisierung
- [ ] Memoisierung von aufwändigen Berechnungen
- [ ] Vermeiden unnötiger Rerenderings
- [ ] Virtual DOM
- [ ] lazy-loading von Komponenten
- [ ] Verkleinern der Bundle-Größe

## Testen

- [ ] Testen in JavaScript
  - [ ] Assertions
  - [ ] test runners: z.B. _Jest_, _node:test_
  - [ ] mocken in JavaScript, mocken von Netzwerkantworten
  - [ ] end-to-end Testing Libraries: e.g. _cypress_, _playwright_
- [ ] Testen in React: _react-testing-library_

## State Management: Intermediate

- [ ] Konzept: Actions
- [ ] Konzept: Reducer
- [ ] Reducer-Hook
- [ ] Überblick: Redux
- [ ] Hilfslibraries für Immutability (_immer.js_, _immutable.js_)

## Fortgeschrittene Konzepte und Muster

- [ ] Portale
- [ ] Error Boundaries
- [ ] Higher-order Components
- [ ] render props

## Andere Themen

- [ ] Benutzerauthentifizierung
- [ ] Internationalisierung
- [ ] Pre-Rendering und next.js
- [ ] Redux Vertiefung
- [ ] React und GraphQL / Apollo
- [ ] React Native
- [ ] PWAs
