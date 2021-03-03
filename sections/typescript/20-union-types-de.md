# Union Types

## Union Types

für eine Variable, die mehrere Typen annehmen kann:

```ts
let rgbColor: string | [number, number, number] | null;

rgbColor = '#ff0000';
rgbColor = [255, 0, 0];
```

## Union Types und Type Aliases

```ts
type RgbColor = string | [number, number, number];
```

Alternative Schreibweise über mehrere Zeilen:

```ts
type TodoAction =
  | AddTodoAction
  | DeleteTodoAction
  | ToggleTodoAction;
```
