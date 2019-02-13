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
const repeatString = (
  text: string,
  times: number
): string => (...);
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

## Typsystem: das Schlüsselwort _type_

```ts
type PersonCollection = Array<IPerson>;
type TodoAction = 'ADD_TODO' | 'DELETE_TODO';
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

Allgemeine Klassen- oder Funktionsdefinition, die während deren Aufruf genauere Typinformationen übergeben bekommen.

```ts
function reducer<MyState, MyAction>(
  state: MyState,
  action: MyAction
): MyState {
  ...
}
```

Verwendung:

```ts
// newState hat automatisch den richtigen Typ
const newState = reducer<TodoState, TodoAction>(
  myTodoState,
  myTodoAction
);
```

## Typsystem: Generics

```ts
class Component<Props, State> {
  props: Props;
  state: State;

  setState: (newState: Partial<State>) => void;
}
```

Verwendung:

```ts
class MyComp extends Component<MyProps, MyState> {
  ...
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
