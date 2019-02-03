# Angular - Grundlagen

## Entwicklung mit node.js und npm

- node.js: JS-Runtime
  - Angular CLI
  - Ausführen des Testservers
  - Unit-Tests
- npm: Paketmanager
  - zum Verwalten von Abhängigkeiten
  - Pakete im _node_modules_-Ordner
  - Konfiguration in _package.json_

## Angular CLI

Meistgenutzte Methode zum Erstellen von Angular-Anwendungen: _Angular CLI (ng)_

setup:

```bash
npm install -g @angular/cli
```

siehe auch: https://github.com/angular/angular-cli/wiki

## Angular CLI: neues Projekt

```bash
ng new playground
```

Angular CLI installiert im Hintergrund einige Abhängigkeiten und legt diese im Ordner _node_modules_ ab.

## Angular CLI: Konfiguration

- add Angular routing?
- stylesheet format?

## Angular CLI: Testserver

Im Projektordner:

```bash
ng serve --open
```

## Angular CLI: Befehle

- `ng new $projectname`: Erstellt neues Angular-Projekt
- `ng serve`: Startet den Testserver
- `ng generate component $name`: Erstellt eine neue Komponente
- `ng generate service $name`: Erstellt ein neues Service
- `ng build --prod`: Führt einen Production-Build aus (im dist-Ordner)

## Standard Projektstruktur

Angular CLI erstellt umfangreiche Projektstruktur

Uns interessiert hauptsächlich der Ordner _src/app_

## Standard Projektstruktur

- **package.json**: npm-Konfiguration
- **karma.conf, protractor.conf**: Tests
- **tsconfig.json**: Typescript-Konfiguration
- **src/index.html**: Einstiegspunkt
- **src/polyfills.ts**: Polyfills für „ältere“ Browser
- **src/app/**: eigentliche Angular-App

## src/polyfills.ts

- Wird für Unterstützung älterer Browser benötigt (zB IE9-IE11)
- Zum testen auf / deployen für ältere Browser: entsprechende Zeilen „einkommentieren“ und entsprechende Abhängigkeiten mittels npm installieren
- Details: https://angular.io/guide/browser-support

## Komponentenstruktur

Mit angular-cli (ng) erstellte Komponenten gliedern sich in drei Dateien, zB:

- app.component.html (Template)
- app.component.css (auf Komponente beschränkter Stil)
- app.component.ts (Programmcode)

## Beispiel: Änderungen an der Komponente

Aufgaben

- Die Komponente soll „Hallo, $name“ ausgeben, wobei der Name in der .ts-Datei definiert wird

## Weitere Beispiele

- `<app-time>`-Komponente, die die aktuelle Uhrzeit anzeigt
- `<app-roulette>`-Komponente, die eine Zufallszahl von 0-36 anzeigt

## ng build

Mittels

```bash
ng build --prod
```

führen wir einen Production-Build aus
