# Lesen und Schreiben von Textdateien

## Lesen und Schreiben von Dateien

Beispiele:

asynchron via Promises (empfohlen):

```js
import { readFile } from 'node:fs/promises';
```

asynchron via Callbacks:

```js
import { readFile } from 'node:fs';
```

synchron:

```js
import { readFileSync } from 'node:fs';
```

## Schreiben von Textdateien

```js
import { writeFile } from 'node:fs/promises';

await writeFile('message.txt', 'hello world');
```

dies erstellt eine Textdatei mit UTF-8 als Encoding

## Lesen von Textdateien

```js
const fileContent = await readFile('package.json', 'utf8');
```

Beim Lesen von Dateien als Text _muss_ ein Encoding angegeben werden (in diesem Fall UTF-8)

## Lesen von Ordnerinhalten

```js
const folderContent = await readdir('.');

console.log(folderContent);
```
