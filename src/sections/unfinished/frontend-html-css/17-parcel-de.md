# Parcel

https://parceljs.org

---

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

---

## Parcel - Setup

Installation:

```bash
npm install -g parcel-bundler
```

---

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

---

## Parcel ausführen

Lokalen Testserver mit automatischem Build starten:

```bash
parcel src/*.html
```

Build für Produktivumgebung:

```bash
parcel build src/*.html
```

Erstellte Dateien erscheinen unter `/dist`.
