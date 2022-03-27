# Function signatures and function types

## Function signatures

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

## Function signatures

Functions without a return value: `void`

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

## Function types

declaring a type alias for a function:

```ts
type Logger = (message: string) => void;
```

applying the type alias:

```ts
const log: Logger = (message) => {
  console.log(message);
};
const logUpper: Logger = (message) => {
  console.log(message.toUpperCase());
};
```
