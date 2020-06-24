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
class TodoItem extends React.Component<
  TodoItemProps,
  TodoItemState
> {
  // ...
}
```
