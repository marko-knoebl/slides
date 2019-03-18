# Create-React-App

eine neue React-Anwendung erstellen

## Entwicklung mit node.js und npm

- node.js: JS-Runtime
  - Ausführen des Testservers
  - Unit-Tests
- npm: Paketmanager
  - zum Verwalten von Abhängigkeiten
  - Pakete im _node_modules_-Ordner
  - Konfiguration in _package.json_

## create-react-app

Meistgenutzte Methode zum Erstellen von React-Anwendungen: _create-react-app_

ausführen via:

```bash
npx create-react-app playground
```

siehe auch: https://reactjs.org/docs/add-react-to-a-new-app.html

## create-react-app

Erstellt eine einfache React-Anwendung, auf deren Basis weiter gearbeitet werden kann

Viele Aspekte sind vorkonfiguriert:

- lokaler Entwicklungsserver
- Unittest-Framework jest
- Webpack und Babel
- SCSS und CSS Module

## Standard Projektstruktur

- `public/index.html`, `src/index.js`: Einstiegspunkte
- `App.js`, `App.css`: Definieren App-Komponente
- `node_modules`: Abhängigkeiten

## Testserver und Build

Im Projektordner:

- `npm start`: Startet den Testserver
- `npm run build`: Erstellt einen Build (zum Deployen auf einem Webserver)
