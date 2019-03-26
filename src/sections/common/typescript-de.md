# TypeScript

## TypeScript

= Obermenge von JavaScript mit Erweiterungen:

- **Statische Typisierung**
- Public / Private Properties
- Decorators

## Statische Typisierung

Datentypen können angegeben werden und unterstützen insbesondere die Entwicklungsumgebung:

- Autovervollständigung
- Fehlermeldungen bei nicht passenden Datentypen

## Statische Typisierung

Beim build: TypeScript wird in JavaScript übersetzt, alle Typeninformationen gehen dabei verloren

## Typsystem: Variablen

```ts
let age: number = 32;
let name: string = 'Andreas';
```

## Typsystem: Arrays

```js
let names: Array<string> = ['Anna', 'Bernhard'];
```

alternative Schreibweise:

```ts
let names: string[] = ['Anna', 'Bernhard'];
```

## Typsystem: Funktionen

```ts
function repeatString(
    text: string,
    times: number): string {
  return ...;
}
```

```ts
const repeatString = (
  text: string,
  times: number
): string => {
  return ...;
};
```

## Typsystem: void

Void: umfasst _undefined_ und _null_

```ts
const warnUser = (): void => {
  alert('warning!');
};
```

## Typsystem: any

Any: lässt alle Typen zu

```ts
let myInput: any = document.getElementById('myinput');
console.log(myInput.value);
```

## Typsystem: Type assertions

```ts
(window as any).myGlobalVariable = 'foo';
```

## Typsystem: Types & Interfaces

Interfaces: beschreiben die Struktur eines Objekts / einer Klasse genauer  
z.B.: `TodoInterface`, `PersonInterface`

Types: Ähnlich wie Interfaces, nur auch auf Strings, Arrays, ... anwendbar

Types bieten im wesentlichen mehr Funktionalität als Interfaces

https://stackoverflow.com/a/52682220/

## Typsystem: Types

```ts
type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoCollection = Array<TodoType>;
```

## Types bei Objekten

```ts
type TodoType = {
  id: number;
  title: string;
  completed: boolean;
  // optional
  description?: string;
  // Methode
  toggle: (id: number) => void;
};
```

## Types bei Objekten

```ts
class AdvancedTodo implements TodoType {
  ...
}
```

## Extends

Mittels `&`:

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

## Generics

Allgemeine Typendeklaration, bei der beim Aufruf nähere Informationen spezifiziert werden können

## Generics

```ts
function reducer<MyState, MyAction>(
  state: MyState,
  action: MyAction
): MyState {
  ...
}

// Verwendung

// newState hat automatisch den richtigen Typ
const newState = reducer<TodoState, TodoAction>(
  myTodoState,
  myTodoAction
);
```

## Generics

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

## Typendeklarationen für Libraries

Einige JavaScript Libraries beinhalten auch Typendeklarationen für TypeScript - z.B. _react_, _redux_.

Für andere Libraries gibt es meist externe Deklarationen mit dem Präfix _@types/_, z.B. für _react-redux_ existiert das Paket _@types/react-redux_.
