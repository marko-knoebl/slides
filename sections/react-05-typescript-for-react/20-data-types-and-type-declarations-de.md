# Datentypen und Typendeklarationen

## Datentypen und Typendeklarationen

Datentypen, die wir verwenden werden:

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

## Kombination

Kombination der Deklarationen:

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

Manchmals möchten wir die Typenüberprüfung aufheben:

```ts
const nameInput: any = document.getElementById(
  'name-input'
);
console.log(nameInput.value);
```

Deklarieren wir eine Variable als `any`, können wir auf beliebige Properties zugreifen

## Union Types

Variablen, die mehrere Typen annehmen können:

```ts
let width: string | number | undefined;

width = '16px';
width = 16;
```
