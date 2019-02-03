# TypeScript

## TypeScript

= Obermenge von JavaScript mit Erweiterungen:

- **Static Typing**
- Decorators
- Public / Private Properties

## Static Typing

Datentypen können angegeben werden und unterstützen insbesondere die Entwicklungsumgebung:

- Auto-Vervollständigung
- Fehlermeldungen bei nicht passenden Datentypen

## Static Typing

Beim build: TypeScript wird in JavaScript übersetzt, alle Typeninformationen gehen dabei verloren

## Typsystem: Variablen

```ts
let age: number = 32;
let name: string = 'Andreas';
```

## Typsystem: Funktionen

```ts
function repeatString(
    text: string,
    times: number): string {
  return ...;
}
```

## Typsystem: Pfeilfunktionen

```ts
const repeatString: (
  text: string,
  times: number
) => string = (text, times) => (...);
```

## Typsystem: Arrays

```ts
let names: string[] = ['Anna', 'Bernhard', 'Caro'];

// Alternative Syntax

let names: Array<string> = ['Anna', 'Bernhard'];
```

## Typsystem: Tupel

Arrays mit vorgegebener Länge und Datentypen für jeden Eintrag

```ts
let todo: [string, boolean];
```

## Typsystem: Objekte & Properties

Objekt mit bestimmten Properties:

```ts
let p: { name: string; age: number } = getPerson();
```

## Typsystem: Objekte - Interfaces

```ts
interface IPerson {
  name: string;
  nickname?: string; // optional
  birthYear: number;
  // Methode, die eine Zahl als Parameter übernimmt
  // und eine Zahl zurückgibt
  getAge: (currentYear: number) => number;
}

let p: IPerson = getPerson();
```

## Typsystem: Klassen & Interfaces

```ts
class User implements IPerson {
  ...
}
```

## Typsystem: void

Void: umfasst _undefined_ und _null_

```ts
function warnUser(): void {
  alert('warning!');
}
```

## Typsystem: any

Any: lässt alle Typen zu

```ts
let ib: any = document.getElementById('myinput');
console.log(ib.value);
```

## Typsystem: Type assertions

```ts
let someValue: any = 'this is a string';

let strLength: number = (someValue as string).length;
```

## Typsystem: Union Types

```ts
function foo(arg: string | number) {...}

function foo(arg: string | undefined) {...}
```

## Typsystem: Generics

```ts
function thrice<T>(element: T): T[] {
  return [element, element, element];
}
```

## Private & Public Properties

```ts
class Clock {
  private formatTime(time) {
    return ...
  }
  public start() {
    ...
  }
}
```
