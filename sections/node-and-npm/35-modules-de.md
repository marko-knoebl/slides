# Module

## Module

Node-Programme können Objekte aus sogenannten Modulen importieren

Kategorien:

- eingebaute Module (built-ins)
- Module von _npm_
- Module im lokalen Verzeichnis

## Importieren von Modulen

standard JavaScript Imports:

```js
import { readdir } from 'node:fs/promises';

const currentDirectoryContent = await readdir('.');
console.log(currentDirectoryContent);
```

ältere, node-spezifische Variante:

```js
const { readdir } = require('node:fs/promises');

const currentDirectoryContent = readdir('.');
console.log(currentDirectoryContent);
```

## Importieren von Modulen

für Verwendung der `import`-Syntax: in _package.json_ als _"module"_ deklarieren:

```json
{
  "type": "module"
}
```
