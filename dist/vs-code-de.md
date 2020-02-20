# VS Code

## VS Code

https://code.visualstudio.com

Open-Source-Entwicklungsumgebung

Unabhängig vom eigentlichen Visual Studio

## VS Code: Ordner öffnen

ganzen Ordner öffnen mit _File_ - _Open Folder_

## VS Code: Datei-Explorer, Split Editor

## VS Code: Terminal

Öffnen und Schließen der Ansicht via _Strg_ + _Ö_

zusätzliches Terminal via Symbol _+_

übernimmt das aktuell geöffnete Verzeichnis

## VS Code - Konfiguration

Via _File - Preferences - Settings_

Eingeteilt in _User Settings_ und _Workspace Settings_

## VS Code - Konfigurationsmöglichkeiten

Empfehlungen:

- Accept Suggestion on Commit Character (Autovervollständigung ohne _Enter_): _deaktivieren_
- Tab Size: _2_ oder _4_

Weitere Möglichkeiten:

- Auto Save
- Format on Save
- Word Wrap
- EOL
- Workbench: Color Theme

## VS Code - Befehle

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

## VS Code - Mehrere Textcursor

- _Ctrl_ + _F2_: Mehrere Textcursor setzen
- _Alt_ + Mausklick: Mehrere Textcursor setzen

# VS Code für JavaScript

## VS Code - Extensions für JavaScript

Extensions-Sidebar öffnen: fünftes Symbol auf der linken Seite

mögliche Extensions:

- Prettier (Code-Formatierung)
- ESLint (Linter)
- (Debugger for Chrome / Debugger for Firefox)

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
  "trailingComma": "all"
}
```

## ESLint

Linter mit mehr Funktionalität als der Standard-Linter von VS Code

## Debugging von client-seitigem JavaScript

Extensions:

- **Debugger for Chrome**
- Debugger for Firefox

diese verbinden den browser-eigenen Debugger mit dem Debugger UI von VS Code

## Debugging von client-seitigem JavaScript

Konfigurationsdatei erstellen: In der Debugger-Sidebar auf das Zahnradsymbol klicken (_Configure or fix 'launch.json'_)

Beispiel für _launch.json_:

```json
{
  "type": "chrome",
  "request": "launch",
  "name": "Launch Chrome for React",
  "url": "http://localhost:3000"
}
```

## Debugging von client-seitigem JavaScript

Starten des Debuggings vis F5 (lokaler Entwicklungsserver muss schon laufen)

# VS Code für Python

## VS Code für Python

**Python-Extension**

Installation:

- Extensions-Sidebar öffnen: fünftes Symbol auf der linken Seite
- Installation der _Python_-Extension

Konfiguration:

- Befehlspalette öffnen (F1)
- Suchen nach "Python: select interpreter"
- Enter
- warten...
- gewünschte Python-Version auswählen

## VS Code - Ausführen von Python-Programmen

grünes Play-Symbol zur Editoransicht

oder

_Debug_ - _Start Without Debugging (Ctrl + F5)_

## VS Code - PyLint

um Fehler in VS Code angezeigt zu bekommen: Installation des Python-Pakets _pylint_

```bash
pip install pylint
```

