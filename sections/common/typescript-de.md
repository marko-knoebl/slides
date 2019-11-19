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
  return ...;
};
```

## Typsystem: void

Void: hauptsächlich genutzt für Funktionen, die nichts zurückgeben - umfasst _undefined_ und _null_

```ts
function warnUser(): void {
  alert('warning!');
}
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

Types: Ähnlich wie Interfaces, aber auch auf Strings, Arrays, ... anwendbar

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

## Intersection Types

Mittels `&`:

```ts
type x = a & b;
```

Der Intersection Typ `x` kann gegenüber `a`:

- Werte von existierenden Properties weiter einschränken
- zusätzliche verpflichtende Properties hinzufügen

## Intersection Types: Konkretisierung von Typen

```ts
type Action = {
  type: string;
  payload?: object;
};

type AddTodoAction = Action & {
  type: 'ADD_TODO';
  payload: {
    title: string;
  };
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
