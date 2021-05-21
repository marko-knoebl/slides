# Klassenkomponenten mit TypeScript

## Klassenkomponenten mit TypeScript

```tsx
type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: int) => void;
};
type TodoItemState = {};
```

```tsx
import { Component } from 'react';

class TodoItem extends Component<
  TodoItemProps,
  TodoItemState
> {
  // ...
}
```
