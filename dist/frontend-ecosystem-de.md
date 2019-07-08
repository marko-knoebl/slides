# npm

## npm

_npm_ (_Node Package Manager_) bezeichnet einen Paketmanager und eine Sammlung unzähliger JavaScript-Libraries

## npm-Befehle

- `npm init`: neues npm-Projekt initialisieren (generiert `package.json`)
- `npm install jquery`: bestimmtes Paket im Projekt installieren
- `npm run ...`: ein npm-Skript ausführen (in `package.json` definiert)

# Bundler

## Bundler

Bundler wie _webpack_ oder _parcel_ sind im wesentlichen Compiler für web-resourcen.

Sie haben zwei Hauptaufgaben:

- Zusammenführen mehrer Dateien in eine - dies ist insbesondere beim Verwenden von JavaScript-Modulen relevant
- Übersetzen von Code in von Browser unterstützten Code, z.B.:
  - Übersetzen von modernem JS in älteres JS (via Babel)
  - Übersetzen von modernem CSS in älteres CSS (via PostCSS)
  - Einbinden zusätzlicher Sprachen (z.B. SCSS, TypeScript, Rust)

## Bundler im Vergleich

- _webpack_: weit verbreitet, viele Plugins
- _parcel_: sehr einfach zu verwenden
- _rollup_: insbesondere zum Erstellen von JS-Libraries

# Parcel

https://parceljs.org

## Parcel

Parcel: einfacher zu nutzender Bundler mit Unterstützung für:

- modernes CSS
- CSS Module (scoping)
- SCSS
- modernes JS
- TypeScript
- JSON
- WebAssembly
- Rust

## Parcel - Setup

Installation:

```bash
npm install -g parcel-bundler
```

## Parcel - neues Projekt

```bash
npm init -y
```

in `src/index.html`:

```html
<script src="main.js"></script>
```

in `src/main.js`:

```js
import { add } from './mymath.js';
```

in `src/mymath.js`:

```js
export const add = (a, b) => a + b;
```

## Parcel ausführen

Lokalen Entwicklungsserver mit automatischem Build starten:

```bash
parcel src/*.html
```

Build für Produktivumgebung:

```bash
parcel build src/*.html
```

Erstellte Dateien erscheinen unter `/dist`.

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

# WebAssembly und Rust

## WebAssembly

neues Format für Programme, das effizient im Browser ausgeführt werden kann

Sprachen, die zu WebAssembly kompiliert werden können:

- C
- C++
- Rust

## Rust

Moderne Systemprogrammiersprache - Alternative zu C / C++

## Rust - Setup

- evtl im "Windows Defender Security Center" den Viren-Echtzeitschutz deaktivieren - dadurch wird rust-docs schneller installiert

