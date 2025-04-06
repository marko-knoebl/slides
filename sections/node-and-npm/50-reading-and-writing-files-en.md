# Reading and writing files

## Reading and writing files

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

## Reading files as binary

```js
const myFile = readFile('./package.json');
```

This will return a buffer (a sequence of bytes)

converting a buffer into a string:

```js
const fileTextContent = myFile.toString('utf-8');
```
