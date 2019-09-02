# TypeScript

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

## Type system: variables

```ts
let age: number = 32;
let name: string = 'Andreas';
```

## Type system: arrays

```js
let names: Array<string> = ['Anna', 'Bernhard'];
```

alternative syntax:

```ts
let names: string[] = ['Anna', 'Bernhard'];
```

## Type system: functions

<!-- prettier-ignore -->
```ts
function repeatString(
  text: string,
  times: number
): string {
  return ...
}
```

```ts
const repeatString = (
  text: string,
  times: number
): string => {
  return ...
};
```

## Type system: void

Void: can either be _undefined_ or _null_ - is mostly used with functions that don't return anything

```ts
function warnUser(): void {
  alert('warning!');
}
```

## Type system: any

Any: variable can be of any type - disables the typechecker for this variable

```ts
let myInput: any = document.getElementById('myinput');
console.log(myInput.value);
```

## Type system: type assertions

```ts
(window as any).myGlobalVariable = 'foo';
```

## Type system: types & interfaces

Interfaces describe the structure of an object / of a class in detail  
e.g.: `TodoInterface`, `PersonInterface`

Types are similar to interfaces, but are also applicable to strings, arrays, ...

Essentialy types offer more functionality than interfaces

https://stackoverflow.com/a/52682220/

## Type system: types

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

## Types and objects

```ts
class AdvancedTodo implements TodoType {
  ...
}
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

```ts
type ActionType = {
  type: string;
  payload?: object;
};

type AddTodoActionType = ActionType & {
  type: 'ADD_TODO';
  payload: {
    title: string;
  };
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

## Union Types

The type `x` must either fulfil all criteria of `a` or all criteria of `b`.

```ts
type x = a | b;
```

Alternative notation across multiple lines:

```ts
type TodoActionType =
  | AddTodoActionType
  | ToggleTodoActionType;
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

## Private & public properties

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

## Type declarations for libraries

Several JavaScript Libraries come with type declarations for TypeScript - e.g. _react_, _redux_.

For other libraries there are usually external declaration packages that are prefixed with _@types/_; e.g. for _react-redux_ there's the package _@types/react-redux_.
