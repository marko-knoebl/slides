# Type Assertions

## Type Assertions

Type Assertions ermöglichen das Behandeln eines vorhandenen Objekts als bestimmter Typ

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

Type Assertions können auch mit `any` arbeiten:

```ts
const nameInput = document.getElementById(
  'name-input'
) as any;
console.log(nameInput.value);
```
