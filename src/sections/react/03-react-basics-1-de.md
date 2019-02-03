# React.js - Grundlagen

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

ausführen:

```bash
npx create-react-app playground
```

siehe auch: https://reactjs.org/docs/add-react-to-a-new-app.html

## Standard Projektstruktur

- `public/index.html`, `src/index.js`: Einstiegspunkte
- `App.js`, `App.css`: Definieren App-Komponente
- `node_modules`: Abhängigkeiten

## Testserver und Build

Im Projektordner:

- `npm start`: Startet den Testserver
- `npm run build`: Erstellt einen Build (zum Deployen auf einem Webserver)

## JSX: JS + XML

JSX = Templatesprache von React

- **<** wechselt von JS zu XML/HTML
- **{** wechselt zurück zu JS

## JSX: JS + XML

```jsx
el = <div>Hallo, ich bin {2018 - 1970} Jahre alt</div>;
```

## JSX: Einfache Aufgaben

- Zeige das aktuelle Datum an
- Zeige eine zufällige Roulettezahl an (0-36)

## Komponentenzustand (State)

Komponente, die jede Sekunde ihren Zustand aktualisiert:

```js
constructor () {
  super();
  this.state = { now: new Date() };
  setInterval(() => {
    this.setState({ now: new Date() });
  }, 1000);
};
```

```jsx
<div>{this.state.now.toLocaleTimeString()}</div>
```
