# Function signatures and function types

## Function signatures

```ts
function shorten(text: string, maxLen: number): string {
  // ...
}
```

```ts
const shorten = (text: string, maxLen: number): string => {
  // ...
};
```

## Function signatures

Functions without a return value: `void`

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

## Event handlers in React

example: event handlers in React:

```ts
import { MouseEvent } from 'react';
```

```ts
function handleClick(event: MouseEvent): void {
  event.stopPropagation();
  // ...
}
```

```js
<button onClick={handleClick}>click</button>
```

## Event handlers in React

common event types in React:

- `React.FormEvent` (e.g. Submit)
- `React.ChangeEvent`
- `React.MouseEvent` (e.g. Click)

## Function types

storing a function signature under a type alias:

```ts
// a validator is a function that receives a string
// and returns a boolean
type Validator = (s: string) => boolean;
```

applying the type alias:

```ts
const validateEmail: Validator = (s) => s.includes('@');

const validateYear: Validator = (s) =>
  new RegExp('^d{4}$').test(s);
```

## Function types

when writing custom React components, we will pass in event handler functions as props:

```ts
type TodoListProps = {
  // properties
  todos: Array<Todo>;
  // event handlers
  onDelete: (id: number) => void;
  onChangeCompleted: (id: number, completed: boolean) => void;
}
```
