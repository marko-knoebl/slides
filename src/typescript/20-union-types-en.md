# Union types

## Union types

for variables that can be one of multiple types:

```ts
let rgbColor: string | [number, number, number] | null;

rgbColor = '#ff0000';
rgbColor = [255, 0, 0];
```

## Union types and type aliases

```ts
type RgbColor = string | [number, number, number];
```

alternative notation for long declarations across multiple lines:

```ts
type TodoAction =
  | AddTodoAction
  | DeleteTodoAction
  | ToggleTodoAction;
```
