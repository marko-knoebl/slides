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
