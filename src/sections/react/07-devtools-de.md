# Entwicklerwerkzeuge für React

## React Developer Tools

https://github.com/facebook/react-devtools

- Anzeige der Komponententags im Inspektor
- Anzeige von State und Props
- Hervorhebung von Änderungen von State und Props

## Debugging in VS Code

Extensions:

- **Debugger for Chrome**
- Debugger for Firefox

## Debugging in VS Code: Konfiguration

Konfigurationsdatei erstellen: In der Debugger-Sidebar auf das Zahnradsymbol (_Configure or fix 'launch.json'_)

in _launch.json_:

```json
{
  "type": "chrome",
  "request": "launch",
  "name": "Launch Chrome",
  "url": "http://localhost:3000",
  "webRoot": "${workspaceFolder}"
}
```

## Debugging in VS Code: starten

Mittels _F5_
