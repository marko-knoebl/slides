# React mit TypeScript

## Create-React-App

```bash
npx create-react-app my-app --typescript
```

## Komponenten

```tsx
// TodoList.tsx
interface ITodoItemProps {
  todo: ITodo;
  onToggle: (id: int) => void;
}
interface ITodoItemState {}
```

```tsx
class TodoItem extends React.PureComponent<
  ITodoItemProps,
  ITodoItemState
> {}
```

## Events

Typen:

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLDivElement>`
