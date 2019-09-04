# Typechecker für React

## Typechecker für React

Insbesondere was das Interface von Komponenten angeht, ist es sehr sinvoll, vorhandene Properties und Events anzugeben

Dies kann mit Hilfe der Library `prop-types` geschehen

Eine noch viel weitreichendere Unterstützung liefert die Verwendung von TypeScript als Programmiersprache

## prop-types

Beispiel:

```js
import PropTypes from 'prop-types';

// definition of Rating component here

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
  onStarsChange: PropTypes.func,
};
```

## prop-types in VS Code

Plugin: _React PropTypes IntelliSense_

## React mit TypeScript

neues Projekt:

```bash
npx create-react-app my-app --typescript
```

## Komponenten mit TypeScript (Funktionen)

```tsx
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

## Komponenten mit TypeScript (Klassen)

```tsx
// TodoList.tsx
type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: int) => void;
};
type TodoItemState = {};
```

```tsx
class TodoItem extends React.PureComponent<
  TodoItemProps,
  TodoItemState
> {}
```

## Eventtypen

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLDivElement>`
