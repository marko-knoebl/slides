# Webpack

## Webpack

https://webpack.js.org

## Webpack

Webpack: weit verbreiteter Bundler mit sehr vielen Plugins

## Webpack - Beispielprojekt

Einstiegspunkt in webpack muss immer eine JavaScript-Datei sein - daher liegt `index.html` zu Beginn schon im dist-Ordner:

in `dist/index.html`:

```html
...
<script src="main.js"></script>
...
```

in `src/index.js`:

```js
import { add } from './mymath.js';
document.title = add(2, 3);
```

in `src/mymath.js`:

```js
export const add = (a, b) => a + b;
```

## Webpack - Beispielprojekt

Standard-Einstiegspunkt ist eine Datei namens `src/index.js`.

Standard-Ausgabe liegt in `dist/main.js`

## Webpack - Beispielprojekt

Webpack sollte lokal oder global als npm-Paket installiert sein.

Build mittels:

```bash
npx webpack
```
