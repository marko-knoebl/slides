# React and TypeScript

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

## Resource

React+TypeScript Cheatsheets: <https://github.com/typescript-cheatsheets/react>
