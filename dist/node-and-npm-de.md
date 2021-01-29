# Node und npm

# Node.js und npm

## Node.js

Node.js ist eine JavaScript Runtime

Verwendung für:

- lokales ausführen von Scripts
- Entwicklerwerkzeuge (z.B. Build-Prozess, Unittests, ...)
- Backend ausführen

## npm

_npm_ = _Node package manager_

ist in der node.js-Installation beinhaltet

## Node.js Installation

Download von <https://nodejs.org>

Major Releases alle 6 Monate; Long-Term-Support Releases alle 12 Monate

# npm

## npm Registry

Die npm Registry enthält hauptsächlich open source JavaScript Pakete

Mit [über 1 Million Pakete](http://www.modulecounts.com/) die bei weitem größte Software Registry

Beispiele [most depended upon packages](https://www.npmjs.com/browse/depended)

## Package Manager

zwei wichtige Package Manager für die npm Registry:

- _npm_: Node package manager, in _node.js_ beinhaltet
- _yarn_: Kann zusätzlich installiert werden

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

Die Version verwendet _semantic versioning_: `major.minor.patch`

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

Npm Scripts werden `package.json` konfiguriert:

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

# Ausführen von Node-Programmen

## Ausführen von Programmen im Terminal

hello.js:

```js
console.log('Hello world!');
```

```bash
node hello.js
```

## Ausführen von Programmen in VS Code

Mit Debugging: _F5_

Ohne Debugging: _Ctrl_ + _F5_

## Ausführen von Programmen in VS Code

festlegen, wie JavaScript-Dateien ausgeführt werden sollen:

in der Befehlspalette, suche nach _Debug: Open launch.json_ und wähle _Node.js_ als Umgebung

der Befehl erstellt eine neue Datei unter _.vscode/launch.json_

## Ausführen von Programmen in VS Code

Mögliche Konfigurationseinträge (_.vscode/launch.json_):

```json
{
  "name": "Run current file",
  "type": "node",
  "request": "launch",
  "program": "${file}",
  "skipFiles": ["<node_internals>/**"]
}
```

```json
{
  "name": "Run index.js",
  "type": "node",
  "request": "launch",
  "program": "${workspaceFolder}/index.js",
  "skipFiles": ["<node_internals>/**"]
}
```

# Module

## Module

Node-Programme können Objekte aus sogenannten Modulen importieren

Kategorien:

- eingebaute Module (built-ins)
- Module von _npm_
- Module im lokalen Verzeichnis

## Importieren von Modulen

moderne Möglichkeit:

```js
import fs from 'fs';

const currentDirectoryContent = fs.readdirSync('.');
console.log(currentDirectoryContent);
```

ältere Syntax:

```js
const fs = require('fs');

const currentDirectoryContent = fs.readdirSync('.');
console.log(currentDirectoryContent);
```

## Importieren von Modulen

für Verwendung der moderneren Syntax: in _package.json_ als _"module"_ deklarieren (benötigt node ≥ 13):

```json
{
  "type": "module",

  "eslintConfig": {
    "sourceType": "module"
  }
}
```

## Importieren von Modulen

auf die moderne Syntax kann auch individuell in einzelnen Dateien gewechselt werden: verwende dazu die Datiendung _.mjs_ (benötigt node ≥ 13)

## Importieren von Modulen

Aufgabe: Schreibe ein node-Script, das die alte Syntax benutzt, migriere es dann zur neuen Syntax

# Lokale Module

## Lokale Module

Eine JavaScript-Datei, die Objekte exportiert, ist ein sogenanntes _Modul_

## Lokale Module

Beispiel für ein Modul mit moderner Syntax:

```js
const message1 = 'hello!';
const message2 = 'have a nice day!';

export { message1, message2 };
```

## Lokale Module

es kann einen default Export geben

```js
const mainMessage = 'xyz';

const message1 = 'hello!';
const message2 = 'have a nice day!';

export { message1, message2 };
export default mainMessage;
```

## Lokale Module

Lokale Module werden mittels relativer Dateipfade importiert

```js
import mainMessage, { message1 } from './messages.js';
```

Dateiendung ist optional:

```js
import mainMessage, { message1 } from './messages';
```

## Lokale Module

ältere Syntax für den Export:

```js
const message1 = 'hello!';
const message2 = 'have a nice day!';

module.exports.message1 = message1;
module.exports.message2 = message2;
// shorthand
exports.message3 = 'Bye';
```

default Export:

```js
const mainMessage = 'xyz';

module.exports = mainMessage;
```

# Globals und eingebaute Module

## Globals

etwas andere globale Objekte als im Browser

## Globals

nur im Browser:

- `window` (globaler Namespace) - Alternativname `globalThis`
- `fetch`
- `localStorage`, `sessionStorage`

nur in Node

- `global` (globaler Namespace) - Alternativname `globalThis`
- `process` (z.B. `process.argv`)
- `__filename` und `__dirname`

## Eingabaute Module (built-in)

- assert
- fs (file system)
- http(s)
- net (TCP)
- os
- path
- ...

## Reading command line arguments

command line arguments are available via the global `process.argv`

example:

```bash
node program.js 1 2 3
```

will result in

```json
["node", "/path/to/your/program.js", "1", "2", "3"];
```

## Exercise

Implement a program that would work like this:

```bash
node sum.js 1 2 3

the sum is 6
```

# Process

## Process

`process` ist eine globale Variable

- `process.argv` (Kommandozeilenparameter)
- `process.cwd()`
- `process.exit()`
- ... (siehe <https://nodejs.org/dist/latest-v15.x/docs/api/process.html>)

## Process

Übung: schreibe ein Programm, das wie folgt aufgerufen werden kann:

```bash
node sum.js 1 2 3

the sum is 6
```

# Lesen und Schreiben von Textdateien

## Lesen und Schreiben von Dateien

mittels des _fs_-Moduls:

```js
import fs from 'fs';
```

## Schreiben von Textdateien

```js
fs.writeFileSync('message.txt', 'hello world');
```

dies erstellt eine Textdatei mit UTF-8 als Encoding

## Lesen von Textdateien

```js
const fileContent = fs.readFileSync('package.json', 'utf8');
```

Beim Lesen von Textdateien _muss_ ein Encoding angegeben werden (in diesem Fall UTF-8)

## Lesen von Dateien als binär

```js
const myFile = fs.readFileSync('./package.json');
```

gibt ein _buffer_-objekt zurück (eie Folge von Bytes)

Umwandeln in einen String:

```js
const fileTextContent = myFile.toString('utf-8');
```

## Asynchrones I/O

Lesen einer Datei kann (relativ) lange dauern. Mit dem bisherigen Code kann node währenddessen keinen Code ausführen.

## Asynchrones I/O mit Promises

```js
fs.promises
  .readFile('read-file.js', 'utf8')
  .then(console.log)
  .catch(() => {
    console.log('error while reading file');
  });
```

## Asynchronous I/O mit async / await

```js
const readFileAsync = async () => {
  try {
    const fileContent = await fs.promises.readFile(
      'read-file.js',
      'utf8'
    );
  } catch {
    console.log('error while reading file');
  }
  console.log(fileContent);
};

readFileAsync();
```

## Übungen

Erstelle einen HTML-"Serienbrief" für verschidene Empfänger aus einer Vorlage

liste alle Dateien eines bestimmten Typs auf (siehe Übung von learnyounode)

# HTTP client

## Abfragen einer Website

"low-level" (einzelne TCP-Pakete):

```js
import http from 'http';

http.get('http://www.google.com', (responseStream) => {
  responseStream.setEncoding('latin1');
  responseStream.on('data', console.log);
  responseStream.on('error', console.error);
});
```

## Übung

Übung: rufe die Google-Website ab und schreibe Stücke davon in eine JSON-Array

## Libraries

Libraries für HTTP-Aufrufe:

- Fetch-Libraries (_node-fetch_, _isomorphic-fetch_)
- axios

## Node-fetch

```bash
npm install node-fetch
```

```js
import fetch from 'node-fetch';

fetch('https://google.com')
  .then((res) => res.text())
  .then((content) => console.log(content));
```

## Übungen

- rufe mehrere Websites ab (siehe _learnyounode_: juggling async)
- Anzahl der Goggle-Suchresultate für ein bestimmtes Thema

# HTTP server

## Betreiben eines HTTP-Servers mit node

siehe <https://nodejs.org/en/docs/guides/getting-started-guide/>

## Betreiben eines HTTP-Servers mit node

```js
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
};

server = http.createServer(requestHandler);

server.listen(port, hostname);
```

## HTTP server frameworks

- connect: Middleware
- express: Middleware, Routing

# Command-Line Tools erstellen

## Command-Line Tools erstellen

npm-Paket für Command-Line Tools: _prompt_

## Command-Line Tools erstellen

Beispiel:

beim Ausführen von `node ./hello.js` wünschen wir folgende Interaktion:

```txt
prompt: first name: Marko
prompt: birth year: 1988
Hi, Marko!
In the year 2030 you'll be 42!
```

## Command-Line Tools erstellen

einfache Verwendung:

```js
import prompt from 'prompt';

const main = async () => {
  prompt.start();
  const person = await prompt.get([
    'first name',
    'birth year',
  ]);
  console.log(`Hi, ${person['first name']}!`);
  const birthYear = Number(person['birth year']);
  console.log(`In 2030 you'll be ${2030 - birthYear}!`);
};
main();
```

## Command-Line Tools erstellen

fortgeschrittene Verwendung mit Validierung:

```js
const main = async () => {
  prompt.start();
  const person = await prompt.get({
    properties: {
      'first name': {},
      'birth year': {
        description: 'year when you were born',
        pattern: /^\d{4}$/,
      },
    },
  });
  console.log(`Hi, ${person['first name']}!`);
  const birthYear = Number(person['birth year']);
  console.log(`In 2030 you'll be ${2030 - birthYear}!`);
};
```

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

Siehe <https://docs.npmjs.com/files/package.json>

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

# Ressourcen

## Ressourcen

- [The definitive Node.js handbook by Flavio Copes](https://medium.freecodecamp.org/the-definitive-node-js-handbook-6912378afc6e)
- [Node.js web playground on glitch.com](https://glitch.com)
