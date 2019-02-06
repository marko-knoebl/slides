# running node programs

## running programs on the command line

hello.js:

```js
console.log('Hello world!');
```

```bash
node hello.js
```

## running code in VS Code

debugging: `F5`

without debugging: `Ctrl + F5`

choose node as an environment in the debugger pane

## running code in VS Code

configuration file (launch.json):

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug file",
  "program": "${file}"
}
```
