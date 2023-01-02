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
function logMessage(message: string): void {
  console.log(message);
}
```

## Event-Handler in React

Beispiel: Event-Handler in React:

```ts
import { MouseEvent } from 'react';
```

```ts
function handleClick(event: MouseEvent): void {
  event.stopPropagation();
  // ...
}
```

```js
<button onClick={handleClick}>click</button>
```

## Event-Handler in React

wichtige Eventtypen in React:

- `React.FormEvent` (z.B. Submit)
- `React.ChangeEvent`
- `React.MouseEvent` (z.B. Click)

## Funktionstypen

Speichern einer Funktionssignatur unter einem Type Alias:

```ts
// a validator is a function that receives a string
// and returns a boolean
type Validator = (s: string) => boolean;
```

Anwenden der Type Alias:

```ts
const validateEmail: Validator = (s) => s.includes('@');

const validateYear: Validator = (s) =>
  new RegExp('^d{4}$').test(s);
```

## Funktionstypen

beim schreiben von eigenen React-Komponenten werden wir Eventhandler-Funktionen als Props übergeben:

```ts
type TodoListProps = {
  // properties
  todos: Array<Todo>;
  // event handlers
  onDelete: (id: number) => void;
  onChangeCompleted: (id: number, completed: boolean) => void;
}
```
