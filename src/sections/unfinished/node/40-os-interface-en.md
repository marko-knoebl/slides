# interfacing with the OS

## reading command line arguments

command line arguments are available via the global `process.argv`

example:

```bash
node program.js 1 2 3
```

will result in

```json
["node", "/path/to/your/program.js", "1", "2", "3"];
```

## reading files

via the _fs_ module:

```js
const fs = require('fs');
```

## reading files

Reading a file

```js
const myFile = fs.readFileSync('./package.json');
```

This will return a buffer (a sequence of bytes)

## reading files

converting a buffer into a string:

```js
const fileTextContent = myFile.toString('utf-8');
```

## asynchronous IO

Reading a file will take (relatively) long. With the previous code node cannot execute any code during that time.

## asynchronous IO with callbacks

```js
const fs = require('fs');

fs.readFile('read-file.js', (err, data) => {
  const fileTextContent = data.toString('utf-8');
  console.log(fileTextContent);
});
```

## asynchronous IO with callbacks: error handling

```js
const fs = require('fs');

fs.readFile('read-file.js', (err, data) => {
  if (err) {
    console.log('Error while reading file');
    return;
  }
  const fileTextContent = data.toString('utf-8');
  console.log(fileTextContent);
});
```

## asynchronous IO with async / await (experimental)

TODO: fix error

```js
const fs = require('fs');

const readFileAsync = async () => {
  const fileBuffer = await fs.promises.readFile(
    'read-file-async.js'
  );
  console.log(fileBuffer.toString());
};

readFileAsync();
```

## exercise: listing all files of a specific type

(see exercise from learnyounode)
