# React with TypeScript

## create-react-app with TypeScript

```bash
npx create-react-app my-app --typescript
```

## components (functions)

```ts
type TodoListProps = {
  todos: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = (props: TodoListProps) => {
  const [filterText, setFilterText] = useState<string>('');

  return <div>...</div>;
};
```

## components (classes)

```tsx
// TodoList.tsx
type TodoItemProps {
  todo: TodoType;
  onToggle: (id: int) => void;
}
interface TodoItemState {}
```

```tsx
class TodoItem extends React.PureComponent<
  TodoItemProps,
  TodoItemState
> {}
```

## Event types

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLDivElement>`
