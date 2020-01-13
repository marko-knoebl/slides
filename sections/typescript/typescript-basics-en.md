# TypeScript Basics

## TypeScript

= superset of JavaScript with extensions:

- **static typing**
- public / private properties
- decorators

## Static typing

data types may be specified in order to support the development environment:

- auto completion
- errors when types mismatch

## Static typing

when building: TypeScript is translated to JavaScript, all type information is discarded

## Typing variables

Variable types are usually detected automatically

_explicitly_ declaring variable types:

```ts
let age: number = 32;
let name: string = 'Samuel';
let loggedIn: boolean = true;
```

## Typing functions

```ts
function shorten(
  text: string,
  maxLength: number
): string {
  return ...
}
```

```ts
const shorten = (
  text: string,
  maxLength: number
): string => {
  return ...;
};
```

## Typing functions

Functions without a return value: `void`

```ts
const logMessage = (message: string): void => {
  console.log(message);
};
```

## Typing arrays

```js
let names: Array<string> = [];
names.push('Anna');
```

alternative syntax:

```ts
let names: string[] = [];
names.push('Anna');
```

## Types & interfaces

**Interfaces** describe the structure of an object / of a class in detail  
e.g.: `Todo`, `Person`

**Types**: similar to interfaces, but are also applicable to strings, arrays, ...

## Types & interfaces

Essentialy types offer more functionality than interfaces

https://stackoverflow.com/a/52682220/

## Types

```ts
type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoCollection = Array<TodoType>;
```

## Types and objects

```ts
type TodoType = {
  id: number;
  title: string;
  completed: boolean;
  // optional
  description?: string;
  // method
  toggle: (id: number) => void;
};
```

## Generics

Generic type declarations that can receive more specific type information when applied (via `<...>`)

## Generics

example: `Array` is a generic

```ts
let a: Array<number> = [1, 2, 3];
let b: Array<string> = ['one', 'two', 'three'];
```

example: React's `Component` is a generic

```ts
class MyComp extends Component<MyProps, MyState> {
  ...
}
```

## Type declarations for libraries

Several JavaScript Libraries come with type declarations for TypeScript - e.g. _react_, _redux_.

For other libraries there are usually external declaration packages that are prefixed with _@types/_; e.g. for _react-redux_ there's the package _@types/react-redux_.
