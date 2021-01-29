# Modules

## Modules

Node programs can import objects from so-called modules

3 categories:

- built-in modules
- modules from npm
- modules in the local directory

## Importing modules

in newer versions:

```js
import fs from 'fs';

const currentDirectoryContent = fs.readdirSync('.');
console.log(currentDirectoryContent);
```

older syntax:

```js
const fs = require('fs');

const currentDirectoryContent = fs.readdirSync('.');
console.log(currentDirectoryContent);
```

## Importing modules

to use the more modern syntax in a node project, declare it as a module in `package.json` (needs node ≥ 13):

```json
{
  "type": "module",

  "eslintConfig": {
    "sourceType": "module"
  }
}
```

## Importing modules

to switch to the more modern syntax inside of individual JavaScript files, change their file endings to `.mjs` (needs node ≥ 13)

## Importing modules

task: write a node script that uses imports via the old syntax, then switch to the new syntax
