# Debugging JavaScript

## Debugging JavaScript

possibilities:

- start a node.js debug terminal; run JS code there
- run a JavaScript file in the node.js debugger (configured via _.vscode/launch.json_)
- connect to a browser's debugger (configured via _.vscode/launch.json_)

accessible via the _Run_ tab in the sidebar

## Debugger configuration

debugger configuration via _.vscode/launch.json_

To create a debugger configuration file: In the _Run_ sidebar, select _create a launch.json file_

## Debugging with node.js

example _launch.json_ configuration entries for node.js:

```json
{
  "name": "Launch Node.js Program",
  "type": "node",
  "request": "launch",
  "skipFiles": ["<node_internals>/**"],
  "program": "${workspaceFolder}/index.js"
}
```

## Debugging in the browser

example _launch.json_ configuration entries for debugging in Chrome / Edge:

```json
{
  "name": "Launch Chrome",
  "type": "pwa-chrome",
  "request": "launch",
  "url": "http://localhost:8080",
  "webRoot": "${workspaceFolder}"
}
```

```json
{
  "name": "Launch Edge for React",
  "type": "pwa-msedge",
  "request": "launch",
  "url": "http://localhost:3000"
}
```
