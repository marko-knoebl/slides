# Generics

## Generics

_Generics_: type declarations that can receive more specific type information when applied (via `<...>`)

## Generics

example: `Array` is a generic

```ts
const names: Array<string> = ['Alice', 'Bob', 'Charlie'];
```

example: React's `Component` is a generic

```ts
class MyComp extends Component<MyProps, MyState> {
  // ...
}
```
