# VS Code für JavaScript

## VS Code - Extensions für JavaScript

Extensions-Sidebar öffnen: fünftes Symbol auf der linken Seite

mögliche Extensions:

- Prettier (Code-Formatierung)
- ESLint (Linter)

## Prettier

- automatische Code-Formatierung nach strikten Regeln
- für JavaScript, HTML, CSS
- Tastenkürzel: _Alt_ + _Shift_ + _F_

## Prettier

Konfiguration:

z.B. über _.prettierrc.json_:

```json
{
  "singleQuote": true,
  "arrowParens": "always"
}
```

## ESLint

Linter mit mehr Funktionalität als der Standard-Linter von VS Code

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

Beispiel für _launch.json_-Einträge zum Debugging in Chrome / Edge:

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
