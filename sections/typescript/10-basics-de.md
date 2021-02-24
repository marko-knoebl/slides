# TypeScript Grundlagen

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

## Typing von Variablen

Variablentypen werden üblicherweise ohne Hilfe erkannt

_Explizites_ Angeben von Variablentypen:

```ts
const age: number = 32;
const name: string = 'Samuel';
const loggedIn: boolean = true;
```

## Typing von Funktionen

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

## Generics

_Generics_: allgemeine Typendeklaration, zu der bei der Anwendung nähere Informationen spezifiziert werden können (via `<...>`)

## Generics

Beispiel: `Array` ist ein Generic

```ts
const a: Array<number> = [1, 2, 3];
const b: Array<string> = ['one', 'two', 'three'];
```

Beispiel: Reacts `Component` ist ein Generic

```ts
class MyComp extends Component<MyProps, MyState> {
  // ...
}
```

## Type Assertions

ermöglichen das Behandeln eines vorhandenen Objekts als bestimmter Typ

schlägt fehl:

```ts
// type: HTMLElement or null
const nameInput = document.getElementById('name-input');
console.log(nameInput.value);
```

klappt:

```ts
const nameInput = document.getElementById(
  'name-input'
) as HTMLInputElement;
console.log(myInput.value);
```

## Any

Any: lässt alle Typen zu - erlaubt das Zugreifen auf beliebige Properties

```ts
const myInput = document.getElementById('myinput') as any;

console.log(myInput.value);
```

## Typendeklarationen für Libraries

Manche JavaScript Libraries beinhalten auch Typendeklarationen für TypeScript - z.B. _redux_.

Für andere Libraries gibt es meist externe Deklarationen mit dem Präfix _@types/_, z.B. für _react_ existiert das Paket _@types/react_.
