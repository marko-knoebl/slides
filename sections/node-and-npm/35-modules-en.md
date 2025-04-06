# Modules

## Modules

Node programs can import objects from so-called modules

3 categories:

- built-in modules
- modules from npm
- modules in the local directory

## Importing modules

standard JavaScript imports:

```js
import { readdir } from 'node:fs/promises';

const currentDirectoryContent = await readdir('.');
console.log(currentDirectoryContent);
```

older, node-specific variant:

```js
const { readdir } = require('node:fs/promises');

const currentDirectoryContent = readdir('.');
console.log(currentDirectoryContent);
```

## Importing modules

to use the `import` syntax in a node project, declare it as a module in `package.json`:

```json
{
  "type": "module"
}
```
