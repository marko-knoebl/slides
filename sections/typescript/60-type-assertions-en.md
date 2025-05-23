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
// inferred type: HTMLElement or null
const nameInput = document.getElementById('name-input');
console.log(nameInput.value);
```

this works:

```ts
const nameInput = document.getElementById(
  'name-input'
) as HTMLInputElement;
console.log(nameInput.value);
```

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
