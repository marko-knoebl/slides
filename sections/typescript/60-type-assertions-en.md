# Type assertions

## Type assertions

With function calls that access "external" resources, TypeScript may be unable to correctly infer the type on its own

examples:

- `fetch()`
- `JSON.parse()`
- `document.getElementById()`

Type assertions allow us to treat an existing object as a specific type

## Type assertions

this fails:

```ts
// TypeScript type: HTMElement or null
const nameInput = document.getElementById('name-input');
// error: nameInput is possibly null
console.log(nameInput.id);
// error: nameInput is possibly null
console.log(nameInput.value);
```

## Type assertions

asserting that a value is not _null_ or _undefined_ by using "!":

```ts
// TypeScript type: HTMLElement
const nameInput = document.getElementById('name-input')!;
// works
console.log(nameInput.id);
// error: property `value` does not exist on type `HTMLElement`
console.log(nameInput.value)
```

## Type assertions

asserting that a value has a specific type by using "as":

```ts
// TypeScript type: HTMLInputElement
const nameInput = document.getElementById(
  'name-input'
) as HTMLInputElement;
// works
console.log(nameInput.id);
// works
console.log(nameInput.value);
```

(note: `HTMLInputElement` is a subclass of `HTMLElement`)

## Type assertions

example: fetching JSON data

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
