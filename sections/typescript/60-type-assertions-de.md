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
// TypeScript type: HTMElement or null
const nameInput = document.getElementById('name-input');
// error: nameInput is possibly null
console.log(nameInput.id);
// error: nameInput is possibly null
console.log(nameInput.value);
```

## Type Assertions

"Assertion", dass ein Wert nicht _null_ oder _undefined_ ist mittels "!":


```ts
// TypeScript type: HTMLElement
const nameInput = document.getElementById('name-input')!;
// works
console.log(nameInput.id);
// error: property `value` does not exist on type `HTMLElement`
console.log(nameInput.value)
```

## Type Assertions

"Assertion", dass ein Wert einen bestimmten Typ hat mittels "as":

```ts
const nameInput = document.getElementById(
  'name-input'
) as HTMLInputElement;
// works
console.log(nameInput.id);
// works
console.log(nameInput.value);
```

(Bemerkung: `HTMLInputElement` ist eine Unterklasse von `HTMLElement`)

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
