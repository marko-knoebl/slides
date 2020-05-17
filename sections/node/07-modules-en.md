# Node modules

## Node modules

Node programs can import objects from so-called modules

These modules are generally in 3 categories:

- built-in modules
- modules from npm
- modules in the local directory

## Importing modules

modules can be imported via `require`:

```js
// built-in module
const fs = require('fs');

console.log(fs.readdirSync('.'));

// local module
const hello = require('./hello.js');

hello.sayHello();
```

## Built-in modules

- assert
- fs
- http(s)
- net
- os
- path
- url
- ...

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

## ES modules

Standard ES syntax for importing and exporting can be used without a flag since node 13.2 (released November 2019)

**opt-in** via:

- specifyling `"type": "module"` in _package.json_
- filename ending _.mjs_
