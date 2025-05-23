# Generics

## Generics

_Generic_: allgemeine Typendeklaration, zu der bei der Anwendung nähere Informationen spezifiziert werden können (via `<...>`)

## Generics

Beispiel: `Array` ist ein Generic

```ts
const names: Array<string> = ['Alice', 'Bob', 'Charlie'];
```

## Generics

Beispiel: `Promise` ist ein Generic

```ts
type User = { username: string; picture: string };

async function fetchUser(): Promise<User> {
  // ...
}
```
