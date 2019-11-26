# Manuelles Setup und Konfiguration von React

## Manuelles Setup und Konfiguration

Setup von React ohne _create-react-app_

Hier verwenden wir den _parcel_ bundler - eine Alternative zu webpack

## package.json und Abhängigkeiten

Wir beginnen mit einer `package.json`-Datei, die ein leeres Objekt enthält: `{}`

Installation der benötigten Pakete:

```bash
npm install react react-dom
```

```bash
npm install --save-dev parcel-bundler babel-preset-react babel-preset-env
```

## Konfiguration von Babel

via `.babelrc`-Datei:

```json
{
  "presets": ["env", "react"]
}
```

## npm Scripts

Hinzufügen zweier Scripts zu `package.json`:

```json
"scripts": {
  "build": "parcel build src/index.html",
  "start": "parcel src/index.html"
},
```

## HTML-Einstiegspunkt

Wir erstellen `src/index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React starter app</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="index.js"></script>
  </body>
</html>
```

## Rendern einer App-Komponente

Wir erstelen `src/index.js`:

```js
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <div>Hello World!</div>;
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
```

## Ausführen

Wir führen `npm start` für einen Entwicklungsserver oder `npm run build` für einen Build aus.
