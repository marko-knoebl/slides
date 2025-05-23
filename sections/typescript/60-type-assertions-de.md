# Type Assertions

## Type Assertions

Bei Funktionsaufrufen, die auf "externe" Ressourcen zugreifen kann TypeScript alleine oft nicht den Typ bestimmen.

Beispiele:

- `fetch()`
- `JSON.parse()`
- `document.getElementById()`

Type Assertions erlauben es uns, ein bestehendes Objekt als einen bestimmten Typ zu behandeln

## Type Assertions

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
console.log(nameInput.value);
```

## Type Assertions

Beispiel: Fetchen von JSON-Daten

```ts
type User = { username: string; picture: string };

async function fetchUser(): Promise<User> {
  const res = await fetch('/api/user');
  if (!res.ok) {
    throw new Error('fetch failed');
  }
  const user = (await res.json()) as User;
  return user;
}
```
