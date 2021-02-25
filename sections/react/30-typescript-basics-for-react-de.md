<!-- closely realated content in presentations typescript and react-->

# TypeScript Grundlagen für React

## TypeScript

_TypeScript_: Obermenge von JavaScript mit Unterstützung für statische Typisierung

## Statische Typisierung

Datentypen können angegeben werden und unterstützen insbesondere die Entwicklungsumgebung:

- Autovervollständigung
- Fehlermeldungen bei nicht passenden Datentypen

## Statische Typisierung

Beim build: TypeScript wird in JavaScript übersetzt, alle Typeninformationen gehen dabei verloren

## Variablentypen

Variablentypen werden üblicherweise automatisch erkannt

_Explizites_ Angeben von Variablentypen:

```ts
const age: number = 32;
const name: string = 'Samuel';
const loggedIn: boolean = true;
```

## Funktionstypen

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

## Funktionstypen

Funktionen ohne Rückgabewert: `void`

```ts
const logMessage = (message: string): void => {
  console.log(message);
};
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

## Generics

_Generics_: allgemeine Typendeklaration, zu der bei der Anwendung nähere Informationen spezifiziert werden können (via `<...>`)

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

## Type Assertions

ermöglichen das Behandeln eines vorhandenen Objekts als bestimmter Typ

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

## Any

Any: lässt alle Typen zu - erlaubt das Zugreifen auf beliebige Properties

```ts
const nameInput = document.getElementById(
  'name-input'
) as any;
console.log(nameInput.value);
```

## Type- und Interface-Deklarationen

**Interfaces**: beschreiben die Struktur eines Objektes / einer Klasse genauer (z.B. `Todo`, `Person`)

**Types**: ähnlich wie Interfaces; auch auf Strings, Arrays, ... anwendbar

## Type- und Interface-Deklarationen

Types bieten im wesentlichen mehr Funktionalität als Interfaces

https://stackoverflow.com/a/52682220/

## Types

```ts
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoCollection = Array<Todo>;
```

## Types bei Objekten

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

## Typendeklarationen für Libraries

Manche JavaScript Libraries beinhalten auch Typendeklarationen für TypeScript - z.B. _redux_.

Für andere Libraries gibt es meist externe Deklarationen mit dem Präfix _@types/_, z.B. für _react_ existiert das Paket _@types/react_.
