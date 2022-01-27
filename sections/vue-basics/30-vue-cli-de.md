# Vue CLI

## Vue CLI

Tool zum Initialisieren eines Vue-Projekts

## Entwicklung mit node.js und npm

- node.js: JS-Runtime
  - Ausführen des lokalen Enwicklungsservers
  - Unit-Tests
- npm: Paketmanager
  - zum Verwalten von Abhängigkeiten
  - Pakete im _node_modules_-Ordner
  - Konfiguration in _package.json_

## Vue CLI

Installieren und Ausführen:

```bash
npm install -g @vue/cli

vue create my-app
```

oder direktes Ausführen:

```bash
npx @vue/cli create my-app
```

## Vue CLI

Erstellt eine einfache Vue-App, die als Ausgangspunkt verwendet werden kann

viele Aspekte können automatisch eingerichtet werden:

- webpack und babel für den Build
- lokaler Entwicklungsserver
- Linter
- TypeScript
- Tests
- CSS-Werkzeuge

## Vue CLI

Konfiguration:

- Version (2 oder 3)
- TypeScript
- Router
- Vuex
- CSS Pre-processors
- Linter / Formatter (Build schlägt standardmäßig bei Linter-Fehlern fehl)
- Unit Testing
- E2E Testing

## Vue CLI

damit der Build bei ESLint-Fehlern nicht fehlschlägt:

neue Datei _vue.config.js_:

```js
module.exports = {
  lintOnSave: 'warning',
};
```

## Vue CLI

Überprüfe Imports auf Fehler:

```bash
npm install eslint-plugin-import
```

in der _eslint_-Konfiguration unter `"extends"`, füge `"plugin:import/recommended"` hinzu

## Standard Projektstruktur

- _public/index.html_, _src/main.js_: Einstiegspunkte
- _src/App.vue_: definiert die App-Komponente
- _node_modules_: Abhängigkeiten

## Entwicklungsserver und Build

im Projektordner:

- `npm run serve`: Startet den lokalen Entwicklungsserver
- `npm run build`: Erstellt einen Build (zum Deployment)
