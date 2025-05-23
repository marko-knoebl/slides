# Datentypen und Typendeklarationen

## Datentypen

Datentypen und Deklarationen, die wir verwenden werden:

- boolean
- number
- string
- array
- object

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
const names: Array<string> = [];
names.push('Alice');
```

alternative Schreibweise:

```ts
const names: string[] = [];
names.push('Alice');
```

## Objekttypen

Typendeklaration:

```ts
let todo: {
  id: number;
  title: string;
  completed: boolean;
};
```

Zuweisung:

```ts
todo = { id: 1, title: 'foo', completed: false };
```

## Objekttypen

optionale Einträge werden mit `?` gekennzeichnet

```ts
let todo: {
  id: number;
  title: string;
  completed: boolean;
  date?: string;
};
```

## Union Types

Variablen, die mehrere Typen annehmen können:

```ts
let width: string | number | undefined;

width = '16px';
width = 16;
```
