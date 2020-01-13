# TypeScript Grundlagen

## TypeScript

= Obermenge von JavaScript mit Erweiterungen:

- **Statische Typisierung**
- Public / Private Properties
- Decorators

## Statische Typisierung

Datentypen können angegeben werden und unterstützen insbesondere die Entwicklungsumgebung:

- Anzeigen von Funktionssignaturen
- Autovervollständigung
- Fehlermeldungen bei nicht passenden Datentypen

## Statische Typisierung

Beim build: TypeScript wird in JavaScript übersetzt, alle Typeninformationen gehen dabei verloren

## Typing von Variablen

Variablentypen werden üblicherweise ohne Hilfe erkannt

_Explizites_ Angeben von Variablentypen:

```ts
let age: number = 32;
let name: string = 'Samuel';
let loggedIn: boolean = true;
```

## Typing von Funktionen

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

## Typing von Funktionen

Funktionen ohne Rückgabewert: `void`

```ts
const logMessage = (message: string): void => {
  console.log(message);
};
```

## Typing von Arrays

```js
let names: Array<string> = [];
names.push('Anna');
```

alternative Schreibweise:

```ts
let names: string[] = [];
names.push('Anna');
```

## Types & Interfaces

**Interfaces**: beschreiben die Struktur eines Objektes / einer Klasse genauer (z.B. `Todo`, `Person`)

**Types**: ähnlich wie Interfaces; auch auf Strings, Arrays, ... anwendbar

## Types & Interfaces

Types bieten im wesentlichen mehr Funktionalität als Interfaces

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

## Types bei Objekten

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

Allgemeine Typendeklaration, zu der bei der Anwendung nähere Informationen spezifiziert werden können (via `<...>`)

## Generics

Beispiel: `Array` ist ein Generic

```ts
let a: Array<number> = [1, 2, 3];
let b: Array<string> = ['one', 'two', 'three'];
```

Beispiel: Reacts `Component` ist ein Generic

```ts
class MyComp extends Component<MyProps, MyState> {
  ...
}
```

## Typendeklarationen für Libraries

Einige JavaScript Libraries beinhalten auch Typendeklarationen für TypeScript - z.B. _react_, _redux_.

Für andere Libraries gibt es meist externe Deklarationen mit dem Präfix _@types/_, z.B. für _react-redux_ existiert das Paket _@types/react-redux_.

# TypeScript intermediate

## Any

Any: lässt alle Typen zu

```ts
let myInput: any = document.getElementById('myinput');

console.log(myInput.value);
```

## Type Assertions

ermöglichen das Behandeln eines vorhandenen Objekts als bestimmter Typ

```ts
let myInput = document.getElementById(
  'first-name'
) as HTMLInputElement;

console.log(myInput.value);
```

## Typen / Interfaces und Klassen

```ts
class AdvancedTodo implements TodoType {
  /* ... */
}

class AdvancedTodo implements TodoInterface {
  /* ... */
}
```

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
  type: 'ADD_TODO';
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

## Union Types

Der Typ `x` muss entweder alle Kriterien von `a` erfüllen oder alle Kriterien von `b` erfüllen.

```ts
type x = a | b;
```

Alternative Schreibweise über mehrere Zeilen:

```ts
type TodoActionType =
  | AddTodoActionType
  | ToggleTodoActionType;
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
