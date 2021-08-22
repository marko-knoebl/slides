# Parcel: Grundlegende Projekteinrichtung

## Parcel: Grundlegende Projekteinrichtung

beginnen mit _package.json_, welches ein leeres Objekt enthält: `{}`

Installation von Abhängigkeiten:

```bash
npm install parcel-bundler
```

## Parcel: Grundlegende Projekteinrichtung

in _src/index.js_:

```js
import { add } from './mymath.js';

console.log(add(1, 1));
```

in _src/mymath.js_:

```js
export const add = (a, b) => a + b;
```

## Parcel: Grundlegende Projekteinrichtung

npm Scripts in _package.json_:

```json
"scripts": {
  "build": "parcel build src/index.html",
  "start": "parcel src/index.html"
},
```

## Parcel: Grundlegende Projekteinrichtung

HTML Einstiegspunkt in _src/index.html_:

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

## Parcel: Grundlegende Projekteinrichtung

Build via:

```bash
npm run build
```

Entwicklungsserver unter _localhost:8080_:

```bash
npm run start
```
