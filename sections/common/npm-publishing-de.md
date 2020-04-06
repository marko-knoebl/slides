# Veröffentlichen von npm Paketen

## Veröffentlichen von npm Paketen

- Anlegen eines Accounts auf _npmjs.com_
- Anlegen einer _package.json_ Datei
- Anlegen einer _.gitignore_ oder _.npmignore_ Datei
- Ausführen von `npm publish --access public`

## package.json - grundlegende Einträge

- _name_: entweder _mypackage_ (wenn noch verfügbar) oder _@myusername/mypackage_
- _description_
- _version_: z.B. _0.1.0_
- _author_: Name des Autors
- _license_: z.B. _UNLICENSED_, _ISC_, _GPL-3.0_, ...

## package.json - weitere Einträge

- _main_: z.B. _index.js_ - der Einstiegspunkt beim Importieren dieses Pakets
- _scripts_: Befehle, die via _npm run_ ausgeführt werden können (z.B. _build_, _test_, _start_, ...)
- _bin_: Befehle, die aus dem Terminal oder via npx ausgeführt werden können
- _dependencies_: npm Pakete, die zur Verwendung dieses Pakets benötigt werden
- _devDependencies_: npm Pakete, die benötigt werden, um dieses Paket weiterzuentwickeln (z.B. Testtools, Buildtools)

## package.json Einträge

Siehe https://docs.npmjs.com/files/package.json

## Dateien ignorieren

Erstelle eine `.gitignore` oder `.npmignore` Datei, die Dateien auflistet, die nicht veröffentlicht werden sollen:

```
.git
node_modules
package-lock.json
```

## Veröffentlichen

```bash
npm publish --access public
```

## npx Scripts

Eintrag "bin" in `package.json` (sollte mit Paketnamen - ohne eventuellen Benutzernamen - übereinstimmen):

```json
{
  "name": "@user/foo-package",
  "bin": {
    "foo-package": "./foo-bin.js"
  }
}
```

Inhalte von `foo-bin.js`:

```js
#! /usr/bin/env node

console.log('this is the npx script of foo-package');
```
