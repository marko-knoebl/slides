# Node and npm

# Node and npm: overview

## Node and npm: overview

Node.js is a JavaScript runtime

It may be used to:

- run scripts locally
- provide development tools (e.g. for build process, unit tests, ...)
- run a backend

## Node and npm: overview

_npm_ = _Node package manager_

is included in the node.js installation

## Installation

Download from <https://nodejs.org>

Major releases every 6 months; long-term-support releases every 12 months

# npm

## npm registry

The npm registry is an online registry consisting primarily of open source JavaScript packages

by far the largest software registry ([over 1 million packages](http://www.modulecounts.com/))

examples: [most depended upon packages](https://www.npmjs.com/browse/depended)

## Package managers

two major package managers for the npm registry:

- _npm_: Node package manager, comes with node.js
- _yarn_: may be installed separately

## Package configuration

Both public packages and private projects are managed via a configuration file named _package.json_

## Package configuration

In order to add dependencies - start out with an empty _package.json_ configuration:

```json
{}
```

Alternative: create a _package.json_ with some content via via `npm init` (or `npm init -y` for default options)

## Adding dependencies

Add dependencies via e.g.:

```bash
npm install lodash bootstrap
```

## Adding dependencies

When developing a reusable library to be published on the npm package registry:

Install dependencies that are only needed for development as _dev-dependencies_:

```bash
npm install eslint --save-dev
```

## Adding dependencies

Effects of the previous `npm install` commands:

- `package.json` - lists minimum versions of the packages we just installed
- `node_modules` - folder that contains all installed packages
- `package-lock.json` - lists exact versions of all packages in `node_modules`

## Dependencies in package.json

The file `package.json` now lists dependencies together with a version specifier

The version specifier uses _semantic versioning_: `major.minor.patch`

possible configurations:

- `"bootstrap": "4.3.1"` - exactly this version
- `"bootstrap": "~4.3.1"` - patch version updates allowed - for example to `4.3.2`
- `"bootstrap": "^4.3.1"` - minor version updates allowed - for example to `4.4.0`

## Dependencies in package-lock.json

`package-lock.json` lists _exact_ versions for all dependencies and their recursive dependencies

## node_modules folder

contains the actual packages

this should not be put under version control - can be recreated from `package.json` by running `npm install` (without any arguments)

## npm scripts

Npm can be used to execute scripts / commands that are needed for development, for example:

- `npm run test` - would run unit tests
- `npm run build` - would create a build
- `npm run start`
- `npm run deploy`

Some npm scripts have shorthands, notably `npm test` and `npm start`

## npm scripts

Npm scripts are configured in `package.json`:

```json
{
  "scripts": { "start": "node run-server.js" }
}
```

## Global installs and npx

Node packages may be installed globally on a computer or may be executed directly from the npm registry

direct execution (without installation):

```bash
npx cowsay hello
```

global installation of `cowsay`:

```bash
npm install -g cowsay

cowsay hello
```

# Running node programs

## Running programs in the terminal

hello.js:

```js
console.log('Hello world!');
```

```bash
node hello.js
```

## Running programs in VS Code

with debugging: _F5_

without debugging: _Ctrl_ + _F5_

## Running programs in VS Code

to determine how a JavaScript file should be run:

with a JavaScript file open, open the "Run" sidebar

select _create a launch.json file_ - _Node.js_ to create a file under _.vscode/launch.json_

## Running programs in VS Code

possible configuration entries (_.vscode/launch.json_):

```json
{
  "name": "Run current file",
  "type": "node",
  "request": "launch",
  "program": "${file}",
  "skipFiles": ["<node_internals>/**"]
}
```

```json
{
  "name": "Run index.js",
  "type": "node",
  "request": "launch",
  "program": "${workspaceFolder}/index.js",
  "skipFiles": ["<node_internals>/**"]
}
```

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
"type": "module"
```

## Importing modules

to switch to the more modern syntax inside of individual JavaScript files, change their file endings to `.mjs` (needs node ≥ 13)

## Importing modules

task: write a node script that uses imports via the old syntax, then switch to the new syntax

# Local modules

## Local modules

A JavaScript file that exports objects is called a module

## Local modules

example of a module with modern syntax:

```js
const message1 = 'hello!';
const message2 = 'have a nice day!';

export { message1, message2 };
```

## Local modules

there may be one default export

```js
const mainMessage = 'xyz';

const message1 = 'hello!';
const message2 = 'have a nice day!';

export { message1, message2 };
export default mainMessage;
```

## Local modules

local modules are referenced via relative file paths:

```js
import mainMessage, { message1 } from './messages.js';
```

the filename extension is optional:

```js
import mainMessage, { message1 } from './messages';
```

## Local modules

older export syntax:

```js
const message1 = 'hello!';
const message2 = 'have a nice day!';

module.exports.message1 = message1;
module.exports.message2 = message2;
// shorthand
exports.message3 = 'Bye';
```

default export:

```js
const mainMessage = 'xyz';

module.exports = mainMessage;
```

# Globals and built-in modules

## Globals

different globals than in the browser

## Globals

browser-only globals:

- `window` (global namespace) - alternative name `globalThis`
- `fetch`
- `localStorage`, `sessionStorage`

node-only globals:

- `global` (global namespace) - alternative name `globalThis`
- `process` (e.g. `process.argv`)
- `__filename` and `__dirname`

## Built-in modules

- assert
- fs (file system)
- http(s)
- net (TCP)
- os
- path
- ...

# Process

## Process

`process` is a global

- `process.argv` (command line arguments)
- `process.cwd()`
- `process.exit()`
- ... (see <https://nodejs.org/dist/latest-v15.x/docs/api/process.html>)

## Process

exercise: implement a program that can be run like this:

```bash
node sum.js 1 2 3

the sum is 6
```

# Reading and writing files

## Reading and writing files

Via the _fs_ module:

```js
import fs from 'fs';
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

## Reading files as binary

```js
const myFile = fs.readFileSync('./package.json');
```

This will return a buffer (a sequence of bytes)

converting a buffer into a string:

```js
const fileTextContent = myFile.toString('utf-8');
```

## Asynchronous I/O

Reading a file will take (relatively) long. With the previous code node cannot execute any code during that time.

## Asynchronous I/O with promises

```js
fs.promises
  .readFile('read-file.js', 'utf8')
  .then(console.log)
  .catch(() => {
    console.log('error while reading file');
  });
```

## Asynchronous I/O with async / await

```js
const readFileAsync = async () => {
  try {
    const fileContent = await fs.promises.readFile(
      'read-file.js',
      'utf8'
    );
  } catch {
    console.log('error while reading file');
  }
  console.log(fileContent);
};

readFileAsync();
```

## Exercises

create a series of HTML form letters for different recipients from a template

list all files of a specific type (see exercise from learnyounode)

# HTTP client

## Retrieving a website

Low-level functionality (separate TCP packages)

```js
import http from 'http';

http.get('http://www.google.com', (responseStream) => {
  responseStream.setEncoding('latin1');
  responseStream.on('data', console.log);
  responseStream.on('error', console.error);
});
```

## Exercise

exercise: retrieve the Google website and save chunks to a JSON array

## Libraries

libraries for HTTP calls:

- fetch libraries (_node-fetch_, _isomorphic-fetch_)
- axios

## Node-fetch

```bash
npm install node-fetch
```

```js
import fetch from 'node-fetch';

fetch('https://google.com')
  .then((res) => res.text())
  .then((content) => console.log(content));
```

## Exercises

- retrieve multiple websites (see learnyounode: juggling async)
- number of Google search results for some specific topic

# HTTP server with node

## Running an HTTP server with node

see <https://nodejs.org/en/docs/guides/getting-started-guide/>

## Running an HTTP server with node

```js
import http from 'http';

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

## HTTP server frameworks

- connect: middleware
- express: middleware, routing

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
