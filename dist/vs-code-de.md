# VS Code

## VS Code

<https://code.visualstudio.com>

Open-Source-Entwicklungsumgebung

Unabhängig vom eigentlichen Visual Studio

## Grundlegendes

- Öffnen eines Ordners
- Datei-Explorer
- Teilen der Editor-Ansicht

## Terminal

Öffnen und Schließen der Ansicht via _Strg_ + _Ö_

zusätzliches Terminal via Symbol _+_

übernimmt das aktuell geöffnete Verzeichnis

## Konfiguration

Via _File - Preferences - Settings_

Eingeteilt in _User Settings_ und _Workspace Settings_

## Konfigurationsmöglichkeiten

Empfehlungen:

- Accept Suggestion on Commit Character (Autovervollständigung ohne _Enter_): _deaktivieren_
- Tab Size: _2_ oder _4_

Weitere Möglichkeiten:

- Auto Save
- Format on Save
- Word Wrap
- EOL
- Workbench: Color Theme

## Befehlspalette

_F1_ oder _Ctrl_ + _Shift_ + _P_: Befehlspalette

- durchsuchbar
- zeigt Kurzbefehle an

Beispiele für Befehle:

- _Find_
- _Search: Find in Files_
- _Format Document_
- _Toggle line comment_ / _Toggle block comment_
- _Go to definition_ / _Peek definition_ (nur für bestimmte Dateitypen)
- _Rename symbol_ (nur für bestimmte Dateitypen)

## Mehrere Textcursor

- _Ctrl_ + _F2_: Mehrere Textcursor setzen
- _Alt_ + Mausklick: Mehrere Textcursor setzen

# VS Code für JavaScript

## VS Code - Extensions für JavaScript

Extensions-Sidebar öffnen: fünftes Symbol auf der linken Seite

mögliche Extensions:

- Prettier (Code-Formatierung)
- ESLint (Linter)

## Prettier

- automatische Code-Formatierung nach strikten Regeln
- für JavaScript, HTML, CSS
- Tastenkürzel: _Shift_ + _Alt_ + _F_

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

# VS Code für Python

## Python: Extensions und Pakete

VS Code Extensions:

- _Python_
- _Pylance_ (Preview-Release)

Python-Pakete zur Verwendung mit VS Code:

- _pylint_ (Linter)
- _black_ (Formatierer)

## Python-Extension

Installation:

- Extensions-Sidebar öffnen: fünftes Symbol auf der linken Seite
- Installation der _Python_-Extension

Konfiguration:

- Befehlspalette öffnen (F1)
- Suchen nach "Python: select interpreter"
- Enter
- warten...
- gewünschte Python-Version auswählen

## Python Extension: Ausführen von Programmen

grünes Play-Symbol zur Editoransicht

oder

_Debug_ - _Start Without Debugging (Ctrl + F5)_

## PyLint

um Fehler in VS Code angezeigt zu bekommen: Installation des Python-Pakets _pylint_

```bash
pip install pylint
```

## Autoformatierung

Automatische Formatierung mittels _Shift_ + _Alt_ + _F_

Für Python Code mittels des Formatters _black_:

```bash
pip install black
```
