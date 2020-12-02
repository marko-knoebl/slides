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
