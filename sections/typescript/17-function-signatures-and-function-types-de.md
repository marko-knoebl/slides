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
