# Generics

## Generics

_Generics_: type declarations that can receive more specific type information when applied (via `<...>`)

## Generics

example: `Array` is a generic

```ts
const names: Array<string> = ['Alice', 'Bob', 'Charlie'];
```

## Generics

example: React's `useState` can be used as a generic

```ts
const [todos, setTodos] = useState<Array<Todo>>([]);
```

## Generics

example: React's event types can be used as generics:

```ts
function handleChange(
  event: ChangeEvent<HTMLInputElement>
) {
  const newValue = event.target.value;
  // ...
}
```
