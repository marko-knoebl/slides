# Node's JavaScript

## Node's JavaScript

The node JavaScript environment was taken from Chrome

There are some minor differences to the original environment. For example, `alert` does not exist and the global namespace is called `global` instead of `window`.

## importing modules

modules can be imported via `require`:

```js
const fs = require('fs');

const folderContents = fs.readdirSync('.');

console.log(folderContents);
```

## exporting objects

a js file becomes a module by changing its `exports` object:

single export

```js
module.exports = 'hello world';
```

multiple exports / export object

```js
module.exports.message1 = 'hello world';
module.exports.message2 = 'bye';
```
