# Datentypen und Typendeklarationen

## Datentypen

- boolean
- number
- string
- array
- object
- tuple
- any

## Variablentypen

Variablentypen können beim Deklarieren von Variablen angegeben werden:

```ts
let age: number = 32;
```

```ts
let age: number;
age = 32;
age++;
```

## Type Inference

in vielen Fällen kennt TypeScript den Typ automatisch (keine Annotation notwendig):

```ts
let age = 32;
```

## Primitive Typen

```ts
const age: number = 32;
const name: string = 'Alice';
const loggedIn: boolean = true;
```

## Array-Typen

```js
let names: Array<string> = [];
names.push('Alice');
```

alternative Schreibweise:

```ts
let names: string[] = [];
names.push('Alice');
```

## Objekttypen

```ts
let viewportSize: { width: number; height: number };

viewportSize = {
  width: window.innerWidth,
  height: window.innerHeight,
};
```

```ts
const todo: {
  title: string;
  completed: boolean;
  // optional
  description?: string;
} = getTodo();
```

## Tupel-Typen

```ts
let time: [number, number, number];
time = [10, 45, 0];
```

```ts
let paperFormat: [string, number];
paperFormat = ['A', 4];
```

## Any

Manchmals möchten wir die Typenüberprüfung aufheben:

```ts
const nameInput: any = document.getElementById(
  'name-input'
);
console.log(nameInput.value);
```

Deklarieren wir eine Variable asl `any`, können wir auf beliebige Properties zugreifen
