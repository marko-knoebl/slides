# TypeScript Grundlagen

<!-- closely realated content in presentations typescript and react-->

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

## Typendeklarationen für Libraries

Manche JavaScript Libraries beinhalten TypeScript-Deklarationen - z.B. _redux_.

Andere verbreitete Libraries haben meist Typendeklarations-Pakete mit dem Präfix _@types_

z.B. für _react_: _@types/react_

# Datentypen und Typendeklarationen

## Datentypen

- boolean
- number
- string
- array
- object
- tuple
- any

## Variablentypen

Variablentypen können beim Deklarieren von Variablen angegeben werden:

```ts
let age: number = 32;
```

```ts
let age: number;
age = 32;
age++;
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
let names: Array<string> = [];
names.push('Alice');
```

alternative Schreibweise:

```ts
let names: string[] = [];
names.push('Alice');
```

## Objekttypen

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

## Tupel-Typen

```ts
let time: [number, number, number];
time = [10, 45, 0];
```

```ts
let paperFormat: [string, number];
paperFormat = ['A', 4];
```

## Any

Manchmals möchten wir die Typenüberprüfung aufheben:

```ts
const nameInput: any = document.getElementById(
  'name-input'
);
console.log(nameInput.value);
```

Deklarieren wir eine Variable asl `any`, können wir auf beliebige Properties zugreifen

# Type Aliases

## Type Aliases

Mit _Type Aliases_ können wir eine Typendeklaration unter einem Namen speichern

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

## Type Aliases

```ts
const todo: Todo = {
  title: 'learn TypeScript',
  completed: false,
};
```

```ts
const now: Time = [10, 45, 0];
```

## Type Aliases und Interfaces

_Interfaces_ könnten eine Alternative für Type Aliases darstellen - Sie können in ähnlichen Szenarien angewendet werden, haben aber eine andere Syntax

## Type Aliases exportieren

```ts
export type Todo = {
  title: string;
  completed: boolean;
};
```

oder

```ts
type Todo = {
  title: string;
  completed: boolean;
};

export type { Todo };
```

# Funktionssignaturen und Funktionstypen

## Funktionssignaturen

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

## Funktionssignaturen

Funktionen ohne Rückgabewert: `void`

```ts
const logMessage = (message: string): void => {
  console.log(message);
};
```

## Funktionstypen

Deklarieren eines Type Alias für eine Funktion:

```ts
type Logger = (message: string) => void;
```

Anwenden der Type Alias:

```ts
const log: Logger = (message) => {
  console.log(message);
};
const logUpper: Logger = (message) => {
  console.log(message.toUpperCase());
};
```

# Type Assertions

## Type Assertions

Type Assertions ermöglichen das Behandeln eines vorhandenen Objekts als bestimmter Typ

dies schlägt fehl:

```ts
// type: HTMLElement or null
const nameInput = document.getElementById('name-input');
console.log(nameInput.value);
```

dies klappt:

```ts
const nameInput = document.getElementById(
  'name-input'
) as HTMLInputElement;
console.log(myInput.value);
```

## Type Assertions

Type Assertions können auch mit `any` arbeiten:

```ts
const nameInput = document.getElementById(
  'name-input'
) as any;
console.log(nameInput.value);
```

# Generics

## Generics

_Generic_: allgemeine Typendeklaration, zu der bei der Anwendung nähere Informationen spezifiziert werden können (via `<...>`)

## Generics

Beispiel: `Array` ist ein Generic

```ts
const names: Array<string> = ['Alice', 'Bob', 'Charlie'];
```

Beispiel: Reacts `Component` ist ein Generic

```ts
class MyComp extends Component<MyProps, MyState> {
  // ...
}
```

# Union Types

## Union Types

für eine Variable, die mehrere Typen annehmen kann:

```ts
let rgbColor: string | [number, number, number] | null;

rgbColor = '#ff0000';
rgbColor = [255, 0, 0];
```

## Union Types und Type Aliases

```ts
type RgbColor = string | [number, number, number];
```

Alternative Schreibweise über mehrere Zeilen:

```ts
type TodoAction =
  | AddTodoAction
  | DeleteTodoAction
  | ToggleTodoAction;
```

# Type-Aliases und Interfaces

## Type-Aliases und Interfaces

_Type-Aliases_: ermöglichen das speichern einer Typendeklaration unter einem Namen

_Interfaces_: ähnliche Funktionalität, andere Syntax, etwas eingeschränktere Funktionalität

## Type-Aliases und Interfaces

detaillierter Vergleich zwischen Type Aliases und Interfaces:

<https://stackoverflow.com/a/52682220/>

## Type-Aliases / Interfaces und Klassen

```ts
class ShoppingListItem implements Todo {
  // ...
}
```

# Intersection Types

## Intersection Types

Mittels `&`:

```ts
type x = a & b;
```

Der Intersection Typ `x` kann gegenüber `a`:

- Werte von existierenden Properties weiter einschränken
- zusätzliche verpflichtende Properties hinzufügen

## Intersection Types: Konkretisierung von Typen

Beispiel aus Redux:

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

## Intersection Types: Kombinieren von Typen

```ts
type Serializable = {
  serialize: () => string;
};

type SerializableAction = Action & Serializable;
```

Objekte, die den Typ `SerializableAction` implementieren, müssen sowohl alle Einträge aus `Serializable` als auch aus `Action` implementieren.
