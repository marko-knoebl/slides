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
import { platform, release } from 'node:os';
```

older, node-specific variant:

```js
const { platform, release } = require('node:os');
```

## Importieren von Modulen

für Verwendung der `import`-Syntax: in _package.json_ als _"module"_ deklarieren:

```json
{
  "type": "module"
}
```
