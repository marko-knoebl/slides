# Bundler

## Bundler

Bundler wie _webpack_ oder _parcel_ erstellen aus vorhandenen Quelldateien sogenannte _Bundles_, die meist mehrere Dateien in einer vereinen.

Über Bundler werden zwei Aufgaben ausgeführt:

- Zusammenführen mehrer Dateien in eine (u.a. um diese schneller laden zu können)
- Übersetzen / transformieren von Code via Plugins, z.B.:
  - Übersetzen von modernem JS / JSX / TypeScript in kompatibles JS (via Babel)
  - Übersetzen von modernem CSS / SCSS in kompatibles CSS (via PostCSS)
  - Verkleinern der Dateien (minification)

## Bundler im Vergleich

- _webpack_: weit verbreitet, viele Plugins
- _parcel_: sehr einfach zu verwenden
- _rollup_: insbesondere zum Erstellen von JS-Libraries

# Parcel

## Parcel

https://parceljs.org

## Parcel

Einfach zu nutzender Bundler mit Unterstützung für:

- modernes CSS
- CSS Module (scoping)
- SCSS
- modernes JS
- TypeScript
- JSON
- WebAssembly
- Rust

## Parcel - Beispielprojekt

Kleines Projekt aus drei Dateien - beim Ausführen von Parcel werden die beiden JavaScript-Dateien zu einer zusammengefasst

in `src/index.html`:

```html
...
<script src="main.js"></script>
...
```

in `src/main.js`:

```js
import { add } from './mymath.js';
document.title = add(2, 3);
```

in `src/mymath.js`:

```js
export const add = (a, b) => a + b;
```

## Parcel ausführen

Parcel sollte lokal oder global als npm-Paket installiert sein.

Lokalen Entwicklungsserver mit automatischem Build starten:

```bash
npx parcel src/index.html
```

Einzelner Build zum Deployen:

```bash
npx parcel build src/index.html
```

Erstellte Dateien erscheinen unter `/dist`.

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

# Stylesheet-Sprachen

## Stylesheet-Sprachen

- _CSS_
- SASS / _SCSS_
- LESS

## Variablen

modernes CSS:

```css
:root {
  --theme-color: blue;
}

body {
  color: var(--theme-color);
}
```

## Variablen

SCSS:

```scss
$theme-color: blue;

body {
  color: $theme-color;
}
```

LESS:

```less
@theme-color: blue;

body {
  color: @theme-color;
}
```

## Vererbung

in CSS4: apply

in SCSS: extend / inheritance

in LESS: mixins

## Vererbung

CSS:

```css
:root {
  --theme-color-combination: {
    color: blue;
    background-color: lightblue;
  }
}

body {
  @apply --theme-color-combination;
}
```

## Vererbung

SCSS:

```scss
%theme-color-combination {
  color: blue;
  background-color: lightblue;
}

body {
  @extend %theme-color-combination;
}
```

## Vererbung

LESS:

```less
.theme-color-combination {
  color: blue;
  background-color: lightblue;
}

body {
  .theme-color-combination();
}
```

## Verschachtelung

SASS / LESS:

```css
nav {
  color: black;
  &:hover {
    color: blue;
  }
}
```

## Berechnungen

CSS:

```css
div {
  width: calc(50% - 80px);
}
```

SCSS / LESS:

```scss
div {
  width: 50% - 80px;
}
```

## Funktionen

CSS: `min()`, `max()`, `rgb()`, ...

SCSS / LESS: `lighten()`, `darken()`, `saturate()`, ...

Beispiel:

```css
* {
  color: rgb(10, 10, 10);
}
```

# WebAssembly

## WebAssembly

neue Low-level-Sprache, die effizient im Browser ausgeführt werden kann

Sprachen, die zu WebAssembly kompiliert werden können:

- C
- C++
- Rust
- Go

## Rust

Moderne Systemprogrammiersprache - Alternative zu C / C++

## Rust - Setup

- evtl im "Windows Defender Security Center" den Viren-Echtzeitschutz deaktivieren - dadurch wird rust-docs schneller installiert

