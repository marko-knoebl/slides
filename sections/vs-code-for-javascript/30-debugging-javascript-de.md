# Debugging von JavaScript

## Debugging von JavaScript

Möglichkeiten:

- ein node.js debug Terminal starten; JS Code von dort ausführen
- eine JavaScript-Datei im Debugger von node.js starten (konfiguriert via _launch.json_)
- mit dem Debugger eines Browsers verbinden (konfiguriert via _launch.json_)

aufrufbar mittels des _Run_-Tabs in der Sidebar

## Debugger-Konfiguration

Debugger wird via _.vscode/launch.json_ konfiguriert

Erstellen einer Konfigurationsdatei: In der _Run_-Sidebar, wähle _create a launch.json file_

## Debugging mit node.js

Beispiel eines _launch.json_-Eintrages für node.js:

```json
{
  "name": "Launch Node.js Program",
  "type": "node",
  "request": "launch",
  "skipFiles": ["<node_internals>/**"],
  "program": "${workspaceFolder}/index.js"
}
```

## Debugging im Browser

Beispiele für _launch.json_-Einträge zum Debugging in Browsern:

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
