# Ein React-Projekt initialisieren

## Entwicklung mit node.js und npm

- node.js: JS-Runtime
  - Ausführen des lokalen Enwicklungsservers
  - Unit-Tests
- npm: Paketmanager
  - zum Verwalten von Abhängigkeiten
  - Pakete im _node_modules_-Ordner
  - Konfiguration in _package.json_

## Ein React-Projekt initialisieren

Möglichkeiten:

- **create-react-app** (meistverwendete Methode)
- vite
- next.js (ermöglicht _Static Site Generation_ und serverseitiges Rendering)

## Ein React-Projekt initialisieren

Mögliche Befehle zum Initialisieren eines Projekts namens "todolist":

```bash
npx create-react-app@latest todolist
npx create-react-app@latest todolist --template typescript
```

```bash
npm create vite@latest
```

```bash
npx create-next-app@latest
npx create-next-app@latest --ts
```

siehe auch: https://reactjs.org/docs/create-a-new-react-app.html

## Ein React-Projekt initialisieren

Viele Aspekte können vorkonfiguriert sein:

- Build-System (z.B. webpack und babel)
- lokaler Entwicklungsserver
- Unittest-Framework
- CSS Module
- ...

## Create-react-app: Standard Projektstruktur

- _package.json_: Konfiguration, Liste an Abhängigkeiten
- _node_modules_: Abhängigkeiten
- _public/index.html_, _src/index.tsx_: Einstiegspunkte
- _src/index.css_: globale Stildefinitionen
- _src/App.tsx_, _src/App.css_: definierend die App-Komponente

## Create-react-app: Entwicklungsserver und Build

Im Projektordner:

- `npm run start` (oder `npm start`): Startet den lokalen Entwicklungsserver
- `npm run build`: Erstellt einen Build (zum Deployen auf einem Webserver)

## Create-react-app: Entwicklungsserver

Bemerkung:

Manchmals zeigt der Entwicklungsserver weiter eine Fehlermeldung an, obwohl der Fehler im Code behoben wurde.

Um dies zu beheben: Stoppen (Ctrl-C) und neu Starten des Servers
