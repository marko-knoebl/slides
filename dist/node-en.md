# {{title}}

## Presentation and code

Presentations available at: https://karuga.eu/courses-presentations

Code available at: https://github.com/marko-knoebl/courses-code

## Your Trainer

Marko Knöbl

- Frontend Web-Development
  - JavaScript
  - React, Angular
- Programming
  - Python, JavaScript

## Introduction of Participants

- Name
- Company
- Current Projects
- Prior Knowledge
- Expectations

## Organizational

- Duration
- Breaks
- Materials
- Questions, Feedback?

# Node.js and npm

## Node.js and npm

Node.js is a JavaScript runtime

It may be used to:

- run scripts locally
- provide development tools (e.g. for build process, unit tests, ...)
- run a backend

## Node.js and npm

_npm_ is short for _Node package manager_; it is used to access the npm package registry which provides a huge collection of libraries to download

npm comes bundled with node.js; another alternative would be _yarn_

## Node.js installation

Node can be downloaded from https://nodejs.org

Major releases are made available every 6 months. Major releases with even version numbers (e.g. 10) are long-term-support releases.

# npm

## npm registry

The npm registry is an online registry consisting primarily of open source JavaScript packages

With [over 800,000 packages](http://www.modulecounts.com/) it is by far the largest software registry in existence

examples: [most depended upon packages](https://www.npmjs.com/browse/depended)

## Package managers

two major package managers for the npm registry:

- _npm_: Node package manager, comes with node.js
- _yarn_: may be installed separately

## Package configuration

All the packages we find on https://www.npmjs.com are public packages that we can install.

Both public packages and our private projects will be managed via a configuration file named _package.json_.

## Package configuration

In order to add dependencies to our project we can start out with an empty _package.json_ configuration:

```json
{}
```

We could also create such a file with some content via `npm init` (or `npm init -y` for default options)

## Adding dependencies

we can add some dependencies via:

```bash
npm install lodash bootstrap
```

we can add dependencies that are only used for development (and not for building) via:

```bash
npm install eslint --save-dev
```

## Adding dependencies

What did the previous commands do? We can see the consequences in three locations:

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

The file `package-lock.json` lists _exact_ versions for all dependencies and their dependencies

## node_modules

contains the actual packages

this should not be put under version control - instead, this folder can be reacreated from `package.json` by running `npm install` (without any arguments)

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

## package.json contents (for public packages)

See https://docs.npmjs.com/files/package.json

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

The standard ES syntax for importing and exporting is currently experimental in node.js

There are plans to have it officially supported in Node 12 before it enters long-term-support mode in October 2019

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

see https://nodejs.org/en/docs/guides/getting-started-guide/

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

# Resources

## Resources

[The definitive Node.js handbook by Flavio Copes](https://medium.freecodecamp.org/the-definitive-node-js-handbook-6912378afc6e)

