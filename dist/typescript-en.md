# TypeScript Basics

<!-- closely realated content in presentations typescript and react-->

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

during build: TypeScript is translated to JavaScript, all type information is discarded

## Type declarations for libraries

some libraries include TypeScript declarations - e.g. _redux_.

other popular libraries mostly have type declaration packages that are prefixed with _@types_

e.g. for _react_: _@types/react_

# Data types and type declarations

## Data types

- boolean
- number
- string
- array
- object
- tuple
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

## Tuple types

```ts
let time: [number, number, number];
time = [10, 45, 0];
```

```ts
let paperFormat: [string, number];
paperFormat = ['A', 4];
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

# Type aliases

## Type aliases

With _type aliases_ we can store a type declaration under a name

```ts
type Todo = {
  title: string;
  completed: boolean;
  description?: string;
};
```

```ts
type TodoCollection = Array<Todo>;
```

```ts
type Time = [number, number, number];
```

## Using type aliases

```ts
const todo: Todo = {
  title: 'learn TypeScript',
  completed: false,
};
```

```ts
const now: Time = [10, 45, 0];
```

## Type aliases and interfaces

_interfaces_ could be an alternative for type aliases - they can be applied in similar scenarios but have different syntaxes

## Exporting type aliases

```ts
export type Todo = {
  title: string;
  completed: boolean;
};
```

or

```ts
type Todo = {
  title: string;
  completed: boolean;
};

export type { Todo };
```

# Function signatures and function types

## Function signatures

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

## Function signatures

Functions without a return value: `void`

```ts
const logMessage = (message: string): void => {
  console.log(message);
};
```

## Function types

declaring a type alias for a function:

```ts
type Logger = (message: string) => void;
```

applying the type alias:

```ts
const log: Logger = (message) => {
  console.log(message);
};
const logUpper: Logger = (message) => {
  console.log(message.toUpperCase());
};
```

# Type assertions

## Type assertions

Type assertions enable treating an existing object as a specific type

this fails:

```ts
// type: HTMLElement or null
const nameInput = document.getElementById('name-input');
console.log(nameInput.value);
```

this works:

```ts
const nameInput = document.getElementById(
  'name-input'
) as HTMLInputElement;
console.log(myInput.value);
```

## Type assertions

type assertions can also work with `any`:

```ts
const nameInput = document.getElementById(
  'name-input'
) as any;
console.log(nameInput.value);
```

# Generics

## Generics

_Generics_: type declarations that can receive more specific type information when applied (via `<...>`)

## Generics

example: `Array` is a generic

```ts
const names: Array<string> = ['Alice', 'Bob', 'Charlie'];
```

example: React's `Component` is a generic

```ts
class MyComp extends Component<MyProps, MyState> {
  // ...
}
```

# Union types

## Union types

for variables that can be one of multiple types:

```ts
let rgbColor: string | [number, number, number] | null;

rgbColor = '#ff0000';
rgbColor = [255, 0, 0];
```

## Union types and type aliases

```ts
type RgbColor = string | [number, number, number];
```

alternative notation for long declarations across multiple lines:

```ts
type TodoAction =
  | AddTodoAction
  | DeleteTodoAction
  | ToggleTodoAction;
```

# Type aliases and interfaces

## Type aliases and interfaces

_Type aliases_: allow for storing a type declaration under a name

_Interfaces_: similar functionality, different syntax, somewhat limited functionality

## Type aliases and interfaces

detailed comparison of type aliases and interfaces:

<https://stackoverflow.com/a/52682220/>

## Types aliases / interfaces and classes

```ts
class ShoppingListItem implements Todo {
  // ...
}
```

# Intersection types

## Intersection types

Via `&`:

```ts
type X = A & B;
```

With regards to `A` the intersection type `X` may:

- restrict the values of existing properties
- add additional required properties

## Intersection types: restricting values

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

## Intersection types: combining types

```ts
type Serializable = {
  serialize: () => string;
};

type SerializableAction = Action & Serializable;
```

Objects that implement the Type `SerializableAction` must implement all entries from both `Serializable` and `Action`.
