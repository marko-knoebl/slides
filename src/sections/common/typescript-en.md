# TypeScript

## TypeScript

= superset of JavaScript with extensions:

- **static typing**
- public / private properties
- decorators

## static typing

data types may be specified in order to support the development environment:

- auto completion
- errors when types mismatch

## static typing

when building: TypeScript is translated to JavaScript, all type information is discarded

## type system: variables

```ts
let age: number = 32;
let name: string = 'Andreas';
```

## type system: functions

```ts
function repeatString(
    text: string,
    times: number): string {
  return ...;
}
```

## type system: arrow functions

```ts
const repeatString: (
  text: string,
  times: number
) => string = (text, times) => (...);
```

## type system: arrays

```ts
let names: string[] = ['Anna', 'Bernhard', 'Caro'];

// alternative syntax

let names: Array<string> = ['Anna', 'Bernhard'];
```

## type system: tuples

Arrays with a predefined length and a type for every entry

```ts
let todo: [string, boolean];
```

## type system: objects and properties

objects that have specific properties:

```ts
let p: { name: string; age: number } = getPerson();
```

## type system: object interfaces

```ts
interface IPerson {
  name: string;
  nickname?: string; // optional
  birthYear: number;
  // Method which takes a number as a parameter
  // and returns a number
  getAge: (currentYear: number) => number;
}

let p: IPerson = getPerson();
```

## type system: classes and interfaces

```ts
class User implements IPerson {
  ...
}
```

## type system: void

Void: can either be _undefined_ or _null_ - is often used with functions that don't return anything

```ts
function warnUser(): void {
  alert('warning!');
}
```

## type system: any

Any: variable can be of any type - disables the typechecker for this variable

```ts
let ib: any = document.getElementById('myinput');
console.log(ib.value);
```

## type system: type assertions

```ts
let someValue: any = 'this is a string';

let strLength: number = (someValue as string).length;
```

## type system: union types

```ts
function foo(arg: string | number) {...}

function foo(arg: string | undefined) {...}
```

## type system: generics

```ts
function thrice<T>(element: T): T[] {
  return [element, element, element];
}
```

## private & public properties

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
