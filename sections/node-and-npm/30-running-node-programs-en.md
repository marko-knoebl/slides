# Running node programs

## Running programs in the terminal

hello.js:

```js
console.log('Hello world!');
```

running it:

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
