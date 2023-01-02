# TypeScript for React

<!-- closely realated content in presentations typescript and react-->

## TypeScript for React

majority of React projects will use _TypeScript_ instead of _JavaScript_

_static typing_ → better autocompletion and error detection

## TypeScript for React

topics:

- basic type declarations
- _type aliases_ and _interfaces_
- parameter types and return types of functions
- _generics_
- _type assertions_

## Static typing

data types may be _specified explicitly_ by the developer or _inferred_ by the development invironment

benefits:

- better auto completion
- better error detection

## Static typing

example:

```ts
let names: Array<string> = [];

names.push('Alice');
names.push('Bob');

console.log(names[0].toUpperCase());
```

## Playground

experiment with TypeScript online:

https://www.typescriptlang.org/play
