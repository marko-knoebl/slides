# React und TypeScript

## TypeScript Grundlagen

siehe Präsentation [TypeScript](./typescript-de.html)

## Eventtypen

Bei _inline_ Eventhandlern werden Eventtypen automatisch erkannt:

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

## Eventtypen

explizite Typendeklaration für separat definierte Eventhandler:

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

## Eventtypen

häufig verwendete Eventtypen:

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLButtonElement>`

## useState mit TypeScript

oft keine Annotation notwendig:

```ts
const [filterText, setFilterText] = useState('');
```

mit Annotation:

```ts
const [todos, setTodos] = useState<Array<TodoType>>([]);
```

## Props und Events mit TypeScript

Props und Events in selbst definierten Komponenten

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

## Ressource

React+TypeScript Cheatsheets: <https://github.com/typescript-cheatsheets/react>
