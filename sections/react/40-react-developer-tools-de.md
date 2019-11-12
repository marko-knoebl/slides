# Entwicklerwerkzeuge für React

## React Developer Tools

- [Chrome Plugin](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox Plugin](https://addons.mozilla.org/de/firefox/addon/react-devtools/)

Features:

- Anzeige der Komponentenstruktur
- Anzeige von State und Props
- Ändern von State und Props
- Performanceanalyse des Renderings von Komponenten

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
  "name": "Launch Chrome for React",
  "url": "http://localhost:3000"
}
```

## Debugging in VS Code: starten

Testserver muss im Hintergrund schon laufen

Debugging in VS Code starten: mittels _F5_
