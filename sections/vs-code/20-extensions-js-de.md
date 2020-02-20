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
