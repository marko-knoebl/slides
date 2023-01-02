# Data types and type declarations

## Data types and type declarations

data types that we'll use:

- boolean
- number
- string
- array
- object

## Variable types

variable types can be specified when declaring variables:

```ts
let age: number = 32;
```

## Type inference

in many cases, TypeScript will know (infer) a type automatically (type annotation not needed):

```ts
let age = 32;
```

## Primitive types

```ts
const age: number = 32;
const name: string = 'Alice';
const loggedIn: boolean = true;
```

## Array types

```js
const names: Array<string> = [];
names.push('Alice');
```

alternative syntax:

```ts
const names: string[] = [];
names.push('Alice');
```

## Object types

type declaration:

```ts
let todo: {
  id: number;
  title: string;
  completed: boolean;
};
```

assignment:

```ts
todo = { id: 1, title: 'foo', completed: false };
```

## Object types

optional entries are marked with `?`

```ts
let todo: {
  id: number;
  title: string;
  completed: boolean;
  date?: string;
};
```

## Combination

combining it all:

```ts
let todos: Array<{
  id: number;
  title: string;
  completed: boolean;
}>;
```

```ts
todos = [
  { id: 1, title: 'foo', completed: false },
  { id: 2, title: 'bar', completed: true },
];
```

## Any

Sometimes we may want to make the type checker less strict

```ts
const nameInput: any = document.getElementById(
  'name-input'
);
console.log(nameInput.value);
```

Declaring a variable as `any` enables accessing arbitrary properties

## Union types

variables that can be one of multiple types:

```ts
let width: string | number | undefined;

width = '16px';
width = 16;
```
