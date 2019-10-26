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
