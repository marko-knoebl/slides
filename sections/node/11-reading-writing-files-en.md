# Reading and writing files

## Reading binary files

Reading a file

```js
const myFile = fs.readFileSync('./package.json');
```

This will return a buffer (a sequence of bytes)

## Reading files

converting a buffer into a string:

```js
const fileTextContent = myFile.toString('utf-8');
```

## Asynchronous I/O

Reading a file will take (relatively) long. With the previous code node cannot execute any code during that time.

## Asynchronous I/O with callbacks

```js
const fs = require('fs');

fs.readFile('read-file.js', 'utf8', (err, data) => {
  console.log(data);
});
```

## Asynchronous I/O with callbacks: error handling

```js
const fs = require('fs');

fs.readFile('read-file.js', 'utf8', (err, data) => {
  if (err) {
    console.log('Error while reading file');
    return;
  }
  console.log(data);
});
```

## Asynchronous I/O with promises

```js
const fs = require('fs');

fs.promises
  .readFile('read-file.js', 'utf8')
  .then(console.log)
  .catch(() => {
    console.log('error while reading file');
  });
```

## Asynchronous I/O with async / await

```js
const fs = require('fs');

const readFileAsync = async () => {
  const fileContent = await fs.promises.readFile(
    'read-file.js',
    'utf8'
  );
  console.log(fileContent);
};

readFileAsync();
```

## Exercise: listing all files of a specific type

(see exercise from learnyounode)
