# Type assertions

## Type assertions

Type assertions enable treating an existing object as a specific type

this fails:

```ts
// type: HTMLElement or null
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

type assertions can also work with `any`:

```ts
const nameInput = document.getElementById(
  'name-input'
) as any;
console.log(nameInput.value);
```
