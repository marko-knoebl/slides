# Creating command-line tools

## Creating command-line tools

npm package for creating command-line tools: _prompt_

## Creating command-line tools

example:

when we run `node ./hello.js` we want this interaction:

```txt
prompt: first name: Marko
prompt: birth year: 1988
Hi, Marko!
In the year 2030 you'll be 42!
```

## Creating command-line tools

simple use:

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

## Creating command-line tools

advanced use with validation:

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
