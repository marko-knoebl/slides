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

storing a function signature under a type alias:

```ts
type Validator = (s: string) => boolean;
```

applying the type alias:

```ts
const validateEmail: Validator = (s) => s.includes('@');

const validateYear: Validator = (s) => {
  return new RegExp('^d{4}$').test(s);
};
```
