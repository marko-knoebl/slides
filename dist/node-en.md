# Node.js

# Running node programs

## Running programs on the command line

hello.js:

```js
console.log('Hello world!');
```

```bash
node hello.js
```

## Running programs in VS Code

with debugging: `F5`

without debugging: `Ctrl + F5`

choose node as an environment in the debugger pane

## Running programs in VS Code

configuration file (_launch.json_):

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug file",
  "program": "${file}"
}
```

# Node's JavaScript

## Node's JavaScript

The node JavaScript environment was taken from Chrome

There are some minor differences to the original environment. For example, `alert` does not exist and the global namespace is called `global` instead of `window`.

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

## Exercise

Implement a program that would work like this:

```bash
node sum.js 1 2 3

the sum is 6
```

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

# Reading and writing text files

## Reading and writing files

Via the _fs_ module:

```js
const fs = require('fs');
```

## Writing text files

```js
fs.writeFileSync('message.txt', 'hello world');
```

This will write to a text file in UTF-8 encoding.

## Reading text files

```js
const fileContent = fs.readFileSync('package.json', 'utf8');
```

When reading text files, we _must_ specify an encoding (in this case, UTF-8)

## Exercise: form letters

create a series of HTML form letters for different recipients from a template

# Reading and writing files

## Reading binary files

Reading a file

```js
const myFile = fs.readFileSync('./package.json');
```

This will return a buffer (a sequence of bytes)

## Reading files

converting a buffer into a string:

```js
const fileTextContent = myFile.toString('utf-8');
```

## Asynchronous I/O

Reading a file will take (relatively) long. With the previous code node cannot execute any code during that time.

## Asynchronous I/O with callbacks

```js
const fs = require('fs');

fs.readFile('read-file.js', 'utf8', (err, data) => {
  console.log(data);
});
```

## Asynchronous I/O with callbacks: error handling

```js
const fs = require('fs');

fs.readFile('read-file.js', 'utf8', (err, data) => {
  if (err) {
    console.log('Error while reading file');
    return;
  }
  console.log(data);
});
```

## Asynchronous I/O with promises

```js
const fs = require('fs');

fs.promises
  .readFile('read-file.js', 'utf8')
  .then(console.log)
  .catch(() => {
    console.log('error while reading file');
  });
```

## Asynchronous I/O with async / await

```js
const fs = require('fs');

const readFileAsync = async () => {
  const fileContent = await fs.promises.readFile(
    'read-file.js',
    'utf8'
  );
  console.log(fileContent);
};

readFileAsync();
```

## Exercise: listing all files of a specific type

(see exercise from learnyounode)

# HTTP client

## Retrieving a website

Low-level functionality (separate TCP packages)

```js
const http = require('http');

http.get('http://www.google.com', responseStream => {
  responseStream.setEncoding('latin1');
  responseStream.on('data', console.log);
  responseStream.on('error', console.error);
});
```

## Exercise: retrieve the Google website and save chunks to a JSON array

## Using the request package

```bash
npm install request
```

```js
const request = require('request');

request('http://google.com', (error, response, body) => {
  console.log(response.statusCode);
  console.log(body);
});
```

## Exercise: retrieving multiple websites

see learnyounode: juggling async

## Exercise: number of Google search results

# HTTP server with node

## Running an HTTP server with node

see <https://nodejs.org/en/docs/guides/getting-started-guide/>

## Running an HTTP server with node

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
};

server = http.createServer(requestHandler);

server.listen(port, hostname);
```

# Publishing npm packages

## Publishing npm packages

- create an account on _npmjs.com_
- create a package.json file
- create a _.gitignore_ or _.npmignore_ file
- run `npm publish --access public`

## package.json - basic entries

- _name_: either _mypackage_ (if still available) or _@myusername/mypackage_
- _description_
- _version_: e.g. _0.1.0_
- _author_: author's name
- _license_: e.g. _UNLICENSED_, _ISC_, _GPL-3.0_, ...

## package.json - advanced entries

- _main_: e.g. _index.js_ - the entry point when importing this package
- _scripts_: commands that can be run via _npm run_ (e.g. _build_, _test_, _start_, ...)
- _bin_: commands that can be run from the command line or via npx
- _dependencies_: npm packages that are required to use this npm package
- _devDependencies_: npm packages that are required to develop this npm package (e.g. test tools, build tools)

## package.json entries

See <https://docs.npmjs.com/files/package.json>

## Ignoring files

Create a `.gitignore` or `.npmignore` file that lists files that shouldn't be published:

```
.git
node_modules
package-lock.json
```

## Publishing

```bash
npm publish --access public
```

## npx scripts

entry "bin" in `package.json` (should match package name without username):

```json
{
  "name": "@user/foo-package",
  "bin": {
    "foo-package": "./foo-bin.js"
  }
}
```

contents of `foo-bin.js`:

```js
#! /usr/bin/env node

console.log('this is the npx script of foo-package');
```

# Resources

## Resources

- [The definitive Node.js handbook by Flavio Copes](https://medium.freecodecamp.org/the-definitive-node-js-handbook-6912378afc6e)
- [Node.js web playground on glitch.com](https://glitch.com)
