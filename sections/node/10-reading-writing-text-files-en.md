# Reading and writing text files

## Reading and writing files

Via the _fs_ module:

```js
const fs = require('fs');
```

## Writing text files

```js
fs.writeFileSync('message.txt', 'hello world');
```

This will write to a text file in UTF-8 encoding.

## Reading text files

```js
const fileContent = fs.readFileSync('package.json', 'utf8');
```

When reading text files, we _must_ specify an encoding (in this case, UTF-8)

## Exercise: form letters

create a series of HTML form letters for different recipients from a template
