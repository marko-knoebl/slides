# Ein React-Projekt initialisieren

## Entwicklung mit node.js und npm

- node.js: JS-Runtime
  - Ausführen des lokalen Enwicklungsservers
  - Unit-Tests
- npm: Paketmanager
  - zum Verwalten von Abhängigkeiten
  - Pakete im _node_modules_-Ordner
  - Konfiguration in _package.json_

## Ein React-Projekt initialisieren

Möglichkeiten:

- **create-react-app** (meistverwendete Methode)
- vite
- next.js (ermöglicht _Static Site Generation_ und serverseitiges Rendering)

## Ein React-Projekt initialisieren

Mögliche Befehle zum Initialisieren eines Projekts namens "todolist":

```bash
npx create-react-app@latest todolist
npx create-react-app@latest todolist --template typescript
```

```bash
npm create vite@latest
```

```bash
npx create-next-app@latest
npx create-next-app@latest --ts
```

siehe auch: https://reactjs.org/docs/create-a-new-react-app.html

## Ein React-Projekt initialisieren

Beispiel:

```bash
npx create-react-app@latest todolist --template typescript
```

- verwendet die neueste Version von _create-react-app_
- erstellt ein Projekt in einem neuen Ordner namens _todolist_
- verwendet die _typescript_-Projektvorlage

## Ein React-Projekt initialisieren

Viele Aspekte können vorkonfiguriert sein:

- Build-System (z.B. webpack und babel)
- lokaler Entwicklungsserver
- Unittest-Framework
- CSS Module
- ...
