# Reading and writing files

## Reading and writing files

Via the _fs_ module:

```js
import fs from 'fs';
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

## Reading files as binary

```js
const myFile = fs.readFileSync('./package.json');
```

This will return a buffer (a sequence of bytes)

converting a buffer into a string:

```js
const fileTextContent = myFile.toString('utf-8');
```

## Asynchronous I/O

Reading a file will take (relatively) long. With the previous code node cannot execute any code during that time.

## Asynchronous I/O with promises

```js
fs.promises
  .readFile('read-file.js', 'utf8')
  .then(console.log)
  .catch(() => {
    console.log('error while reading file');
  });
```

## Asynchronous I/O with async / await

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

## Exercises

create a series of HTML form letters for different recipients from a template

list all files of a specific type (see exercise from learnyounode)
