# Create-React-App

## Entwicklung mit node.js und npm

- node.js: JS-Runtime
  - Ausführen des lokalen Enwicklungsservers
  - Unit-Tests
- npm: Paketmanager
  - zum Verwalten von Abhängigkeiten
  - Pakete im _node_modules_-Ordner
  - Konfiguration in _package.json_

## create-react-app

Meistgenutzte Methode zum Erstellen von React-Anwendungen

ausführen via:

```bash
npx create-react-app todolist
```

oder

```bash
npx create-react-app todolist --template typescript
```

siehe auch: https://reactjs.org/docs/add-react-to-a-new-app.html

## create-react-app

Erstellt eine einfache React-Anwendung, auf deren Basis weiter gearbeitet werden kann

Viele Aspekte sind vorkonfiguriert:

- Webpack und Babel für den Build
- lokaler Entwicklungsserver
- Unittest-Framework jest
- SCSS und CSS Module

## Standard Projektstruktur

- `public/index.html`, `src/index.js`: Einstiegspunkte
- `App.js`, `App.css`: Definieren App-Komponente
- `node_modules`: Abhängigkeiten

## Entwicklungsserver und Build

Im Projektordner:

- `npm run start` (oder `npm start`): Startet den lokalen Entwicklungsserver
- `npm run build`: Erstellt einen Build (zum Deployen auf einem Webserver)

## Entwicklungsserver

Bemerkung:

Manchmals zeigt der Entwicklungsserver weiter eine Fehlermeldung an, obwohl der Fehler im Code behoben wurde.

Um dies zu beheben: Stoppen (Ctrl-C) und neu Starten des Servers
