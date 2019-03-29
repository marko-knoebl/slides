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

## type system: arrays

```js
let names: Array<string> = ['Anna', 'Bernhard'];
```

alternative syntax:

```ts
let names: string[] = ['Anna', 'Bernhard'];
```

## type system: functions

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

## type system: void

Void: can either be _undefined_ or _null_ - is mostly used with functions that don't return anything

```ts
function warnUser(): void {
  alert('warning!');
}
```

## type system: any

Any: variable can be of any type - disables the typechecker for this variable

```ts
let myInput: any = document.getElementById('myinput');
console.log(myInput.value);
```

## type system: type assertions

```ts
(window as any).myGlobalVariable = 'foo';
```

## type system: types & interfaces

Interfaces describe the structure of an object / of a class in detail  
e.g.: `TodoInterface`, `PersonInterface`

Types are similar to interfaces, but are also applicable to strings, arrays, ...

Essentialy types offer more functionality than interfaces

https://stackoverflow.com/a/52682220/

## type system: types

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

## Extends

Via `&`:

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

## Union Types

```ts
type TodoActionType =
  | AddTodoActionType
  | ToggleTodoActionType;
```

## generics

Generic type declarations that can receive more specific type information when applied (via `<...>`)

## generics

example:

`Array` is a generic

```ts
let a: Array<number> = [1, 2, 3];
let b: Array<string> = ['one', 'two', 'three'];
```

## Generics

```ts
class Component<Props, State> {
  props: Props;
  state: State;

  setState: (newState: Partial<State>) => void;
}
```

usage:

```ts
class MyComp extends Component<MyProps, MyState> {
  ...
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

## Type declarations for libraries

Several JavaScript Libraries come with type declarations for TypeScript - e.g. _react_, _redux_.

For other libraries there are usually external declaration packages that are prefixed with _@types/_; e.g. for _react-redux_ there's the package _@types/react-redux_.
