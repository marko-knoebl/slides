# Data types and type declarations

## Data types

- boolean
- number
- string
- array
- object
- any

## Variable types

variable types can be specified when declaring variables:

```ts
let age: number = 32;
```

```ts
let age: number;
age = 32;
age++;
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
let names: Array<string> = [];
names.push('Alice');
```

alternative syntax:

```ts
let names: string[] = [];
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

## Any

Sometimes we may want to relax the type checker:

```ts
const nameInput: any = document.getElementById(
  'name-input'
);
console.log(nameInput.value);
```

Declaring a variable as `any` enables accessing arbitrary properties
