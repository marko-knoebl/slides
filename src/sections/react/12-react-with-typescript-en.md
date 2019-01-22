# React with TypeScript

---

## create-react-app with TypeScript

```bash
npx create-react-app my-app --typescript
```

---

## installing requirements

```bash
npm install redux react-redux @types/react-redux redux-thunk
```

---

## components

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

---

## events

types:

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLDivElement>`
