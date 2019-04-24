# Node's JavaScript

## Node's JavaScript

The node JavaScript environment was taken from Chrome

There are some minor differences to the original environment. For example, `alert` does not exist and the global namespace is called `global` instead of `window`.

## Importing modules

modules can be imported via `require`:

```js
const fs = require('fs');

const folderContents = fs.readdirSync('.');

console.log(folderContents);
```

## Exporting objects

A JavaScript file becomes a module by changing its `exports` object:

single export

```js
module.exports = 'hello world';
```

multiple exports / export object

```js
module.exports.message1 = 'hello world';
module.exports.message2 = 'hello';
// shorthand:
exports.message3 = 'hi';
```

## Reading command line arguments

command line arguments are available via the global `process.argv`

example:

```bash
node program.js 1 2 3
```

will result in

```json
["node", "/path/to/your/program.js", "1", "2", "3"];
```
