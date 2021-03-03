# React and TypeScript

## TypeScript basics

see presentation [TypeScript](./typescript-en.html)

## Event types

When using _inline_ event handlers, event types can be inferred directly:

```jsx
<button
  onClick={(event) => {
    // automatic type: React.MouseEvent<HTMLButtonElement>
    event.stopPropagation();
    // ...
  }}
>
  test
</button>
```

## Event types

explicit type declaration for separate event handler:

```tsx
const handleClick = (
  event: React.MouseEvent<HTMLButtonElement>
) => {
  event.stopPropagation();
  // ...
};
```

```tsx
<button onClick={handleClick}>test</button>
```

## Event types

common event types:

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLButtonElement>`

## useState and TypeScript

often no annotation is necessary:

```ts
const [filterText, setFilterText] = useState('');
```

use with annotation:

```ts
const [todos, setTodos] = useState<Array<Todo>>([]);
```

## Props and events with TypeScript

Props and and events in custom components:

```tsx
type TodoListProps = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = (props: TodoListProps) => {
  // ...
};
```

## Resource

React+TypeScript Cheatsheets: <https://github.com/typescript-cheatsheets/react>
