# npm

## npm Registry

Die npm Registry enthält hauptsächlich open source JavaScript Pakete

Beispiele: [most depended upon packages](https://gist.github.com/anvaka/8e8fa57c7ee1350e3491#file-01-most-dependent-upon-md)

## Package Manager

wichtige Package Manager für die npm Registry:

- _npm_: Node package manager, in _node.js_ beinhaltet
- _pnpm_
- _yarn_

## Paketkonfiguration

Sowohl öffentliche Pakete als auch private Projekte werden über die Konfigurationsdatei _package.json_ konfiguriert

## Paketkonfiguration

Um Abhängigkeiten zu installieren können wir mit einer leeren _package.json_ beginnen:

```json
{}
```

Alternative: _package.json_ mit Inhalten mittels `npm init` (oder `npm init -y` für Standardoptionen) erstellen

## Abhängigkeiten hinzufügen

Beispiel zur Installation von Abhängigkeiten:

```bash
npm install lodash bootstrap
```

## Abhängigkeiten hinzufügen

Wenn wir eine Library entwickeln, die wir in der npm Registry veröffentlichen wollen:

Abhängigkeiten, die nur für die Entwicklung, nicht für die Verwendung von Bedeutung sind werden als _dev-dependencies_ installiert:

```bash
npm install eslint --save-dev
```

## Abhängigkeiten hinzufügen

Auswirkungen der bisherigen `npm install` Befehle:

- `package.json` - listet Minimalversionen der gerade installierten Pakete
- `node_modules` - Ordner, der alle installierten Pakete enthält
- `package-lock.json` - listet exakte Versionen aller Pakete in `node_modules` auf

## Abhängigkeiten in package.json

Die Datei `package.json` listet nun Abhängigkeiten gemeinsam mit deren Version auf.

Die Versionen verwenden typischerweise _semantic versioning_: `major.minor.patch`

Mögliche Konfigurationen:

- `"bootstrap": "4.3.1"` - genau diese Version
- `"bootstrap": "~4.3.1"` - Updates der Patch-Version sind erlaubt - z.B. auf `4.3.2`
- `"bootstrap": "^4.3.1"` - Updates der Minor-Version sind erlaubt - z.B. auf `4.4.0`

## Abhängigkeiten in package-lock.json

`package-lock.json` listet _exakte_ Versionen aller Abhängigkeiten (und derer Abhängigkeiten ...)

## node_modules Ordner

enthält die tatsächlichen Pakete

sollte nicht unter Versionskontrolle stehen - kann stattdessen aus `package.json` neu generiert werden - durch ausführen von `npm install` ohne Argumente

## npm Scripts

Npm kann verwendet werden, um Scripts / Befehle auszuführen, z.B.:

- `npm run test` - würde Unit Tests ausführen
- `npm run build` - würde einen Build erstellen
- `npm run start`
- `npm run deploy`

Manche npm Scripts haben Abkürzungen, insbesondere `npm test` und `npm start`

## npm scripts

Npm Scripts werden in `package.json` konfiguriert:

```json
{
  "scripts": { "start": "node run-server.js" }
}
```

## Globale Installation und npx

Node Pakete können global auf einem Computer installiert werden oder direkt aus der npm Registry ausgeführt werden

direkte Ausführung (ohne Installation):

```bash
npx cowsay hello
```

globale Installation von `cowsay`:

```bash
npm install -g cowsay

cowsay hello
```
