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
const age: number = 32;
const name: string = 'Samuel';
const loggedIn: boolean = true;
```

## Typing functions

```ts
function shorten(text: string, maxLen: number): string {
  // ...
}
```

```ts
const shorten = (text: string, maxLen: number): string => {
  // ...
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

## Generics

_Generics_: type declarations that can receive more specific type information when applied (via `<...>`)

## Generics

example: `Array` is a generic

```ts
const a: Array<number> = [1, 2, 3];
const b: Array<string> = ['one', 'two', 'three'];
```

example: React's `Component` is a generic

```ts
class MyComp extends Component<MyProps, MyState> {
  // ...
}
```

## Type assertions

Type assertions enable treating an existing object as a specific type

fails:

```ts
// type: HTMLElement or null
const nameInput = document.getElementById('name-input');
console.log(nameInput.value);
```

works:

```ts
const nameInput = document.getElementById(
  'name-input'
) as HTMLInputElement;
console.log(myInput.value);
```

## Any

Any: variable can be of any type - allows accessing arbitrary properties

```ts
const myInput = document.getElementById('myinput') as any;

console.log(myInput.value);
```

## Type declarations for libraries

Several JavaScript Libraries come with type declarations for TypeScript - e.g. _redux_.

For other libraries there are usually external declaration packages that are prefixed with _@types/_; e.g. for _react_ there's the package _@types/react_.

# Type and interface declarations

## Type and interface declarations

**Interfaces** describe the structure of an object / of a class in detail (e.g.: `Todo`, `Person`)

**Types**: similar to interfaces, but are also applicable to strings, arrays, ...

## Types and interfaces

Essentialy types offer more functionality than interfaces

<https://stackoverflow.com/a/52682220/>

## Types

```ts
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoCollection = Array<Todo>;
```

## Types and objects

```ts
type Todo = {
  id: number;
  title: string;
  completed: boolean;
  // optional
  description?: string;
  // method
  toggle: (id: number) => void;
};
```

## Types / interfaces and classes

```ts
class ShoppingListItem implements Todo {
  // ...
}
```

# Union types and intersection types

## Union Types

```ts
type x = a | b;
```

The type `x` must either fulfil all criteria of `a` or all criteria of `b`.

Alternative notation across multiple lines:

```ts
type TodoActionType =
  | AddTodoActionType
  | ToggleTodoActionType;
```

## Intersection Types

Via `&`:

```ts
type x = a & b;
```

With regards to `a` the intersection type `x` may:

- restrict the values of existing properties
- add additional required properties

## Intersection Types: Restricting values

example from Redux:

```ts
type Action = {
  type: string;
  payload?: any;
};

type AddTodoAction = Action & {
  type: 'addTodo';
  payload: string;
};
```

## Intersection Types: Combining Types

```ts
type Serializable = {
  serialize: () => string;
};

type SerializableAction = Action & Serializable;
```

Objects that implement the Type `SerializableAction` must implement all entries from both `Serializable` and `Action`.
