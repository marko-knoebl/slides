# Module

## Module

Node-Programme können Objekte aus sogenannten Modulen importieren

Kategorien:

- eingebaute Module (built-ins)
- Module von _npm_
- Module im lokalen Verzeichnis

## Importieren von Modulen

moderne Möglichkeit:

```js
import fs from 'fs';

const currentDirectoryContent = fs.readdirSync('.');
console.log(currentDirectoryContent);
```

ältere Syntax:

```js
const fs = require('fs');

const currentDirectoryContent = fs.readdirSync('.');
console.log(currentDirectoryContent);
```

## Importieren von Modulen

für Verwendung der moderneren Syntax: in _package.json_ als _"module"_ deklarieren (benötigt node ≥ 13):

```json
{
  "type": "module",

  "eslintConfig": {
    "sourceType": "module"
  }
}
```

## Importieren von Modulen

auf die moderne Syntax kann auch individuell in einzelnen Dateien gewechselt werden: verwende dazu die Datiendung _.mjs_ (benötigt node ≥ 13)

## Importieren von Modulen

Aufgabe: Schreibe ein node-Script, das die alte Syntax benutzt, migriere es dann zur neuen Syntax
