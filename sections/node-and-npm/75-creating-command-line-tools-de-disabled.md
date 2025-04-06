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
