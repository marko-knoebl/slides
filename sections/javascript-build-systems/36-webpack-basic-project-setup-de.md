# Webpack: grundlegende Projekteinrichtung

## Webpack: grundlegende Projekteinrichtung

wir beginnen mit einer _package.json_-Datei, die ein leeres Objekt enthält: `{}`

Installation von Abhängigkeiten:

```bash
npm install webpack webpack-cli webpack-dev-server
```

## Webpack: grundlegende Projekteinrichtung

Beispielprojekt aus 2 Dateien:

_src/index.js_:

```js
import { add } from './mymath.js';

console.log(add(1, 1));
```

_src/mymath.js_:

```js
export const add = (a, b) => a + b;
```

## Webpack: grundlegende Projekteinrichtung

Konfiguration via _webpack.config.js_:

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

verwende _src/index.js_ als Einstiegspunkt

schreibe das Resultat nach _dist/_, bentzte _dist/bundle.js_ als Einstiegspunkt

## Webpack: grundlegende Projekteinrichtung

npm scripts in _package.json_:

```json
"scripts": {
  "build": "webpack",
  "start": "webpack serve --mode development"
}
```

## Webpack: grundlegende Projekteinrichtung

Build via:

```bash
npm run build
```

Entwicklungsserver auf _localhost:8080_ via:

```bash
npm run start
```
