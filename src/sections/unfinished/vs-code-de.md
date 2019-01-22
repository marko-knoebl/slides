class: center, middle

# VS Code

---

# VS Code

- Open-Source-Entwicklungsumgebung
- Unabhängig vom eigentlichen Visual Studio

---

# VS Code - Kurzbefehle

- Ctrl + Shift + P: nach Befehl suchen
- Ctrl + Ö: Terminal öffnen
- Alt + Shift + F: Code formatieren

---

# VS Code - Konfiguration

Datei - Automatisch speichern

---

# VS Code - Konfiguration

Via _File - Preferences - Settings_

links: Standardeinstellungen

rechts: selbst gesetzte Einstellungen

---

# VS Code - Konfigurationsmöglichkeiten

- Format on Save
- Format on Paste
- Auto Save
- Accept Suggestion on Commit Character
- EOL

- List: Open Mode

- Tab size

---

# VS Code - Plugins

Empfohlene Plugins:

- Debugger for Chrome (Firefox / ...)
- ESLint
  npm install --save-dev eslint
  ./node_modules/.bin/eslint --init

(siehe auch _Show Popular Extensions_ in VS Code)

???

http://www.snappyjs.com/2018/03/25/vscode-extensions-for-javascript-developers/
ESLint
JSRefactor
auto rename tag
auto close tag (in html in mordernem VS Code nicht mehr notwendig)
npm Intellisense
guides
rainbow brackets
wakatime

---

# VS Code - Plugins

für React:

- Prettier

für Angular:

- Angular v5 Snippets (by John Papa)
- Angular Language Service

---

# Prettier - Konfiguration

prettierrc.json:

```json
{
  "bracketSpacing": false,
  "singleQuote": true,
  "jsxBracketSameLine": true,
  "trailingComma": "all",
  "printWidth": 80
}
```

---
