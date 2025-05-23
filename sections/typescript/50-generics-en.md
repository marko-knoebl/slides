# Generics

## Generics

_Generics_: type declarations that can receive more specific type information when applied (via `<...>`)

## Generics

example: `Array` is a generic

```ts
const names: Array<string> = ['Alice', 'Bob', 'Charlie'];
```

## Generics

example: `Promise` is a generic

```ts
type User = { username: string; picture: string };

async function fetchUser(): Promise<User> {
  // ...
}
```
