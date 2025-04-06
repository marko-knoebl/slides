# Ausführen von Node-Programmen

## Ausführen von Programmen im Terminal

hello.js:

```js
console.log('Hello world!');
```

ausführen:

```bash
node hello.js
```

## Ausführen von Programmen in VS Code

Mit Debugging: _F5_

Ohne Debugging: _Ctrl_ + _F5_

## Ausführen von Programmen in VS Code

festlegen, wie JavaScript-Dateien ausgeführt werden sollen:

in der Befehlspalette, suche nach _Debug: Open launch.json_ und wähle _Node.js_ als Umgebung

der Befehl erstellt eine neue Datei unter _.vscode/launch.json_

## Ausführen von Programmen in VS Code

Mögliche Konfigurationseinträge (_.vscode/launch.json_):

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
