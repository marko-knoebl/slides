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

const validateYear: Validator = (s) => {
  return new RegExp('^d{4}$').test(s);
};
```
