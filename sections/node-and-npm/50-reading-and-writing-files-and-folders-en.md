# Reading and writing files and folders

## Reading and writing files and folders

Examples:

asynchronous via promises (recommended):

```js
import { readFile } from 'node:fs/promises';
```

asynchronous via callbacks:

```js
import { readFile } from 'node:fs';
```

synchronous:

```js
import { readFileSync } from 'node:fs';
```

## Writing text files

```js
import { writeFile } from 'node:fs/promises';

await writeFile('message.txt', 'hello world');
```

This will write to a text file in UTF-8 encoding.

## Reading text files

```js
const fileContent = await readFile('package.json', 'utf8');
```

When reading files as text, we _must_ specify an encoding (in this case, UTF-8)

## Reading folder content

```js
const folderContent = await readdir('.');

console.log(folderContent);
```
