# Type checkers for React

## Type checkers for React

Declaring types can be useful, especially when it comes to component props and events

possibilities:

- library `prop-types`
- using `TypeScript` as a language

## prop-types

example:

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

## React with TypeScript

new Project:

```bash
npx create-react-app my-app --typescript
```

## React with TypeScript

extensive resource: https://github.com/piotrwitek/react-redux-typescript-guide

<!--

redux with typescript:

- https://github.com/piotrwitek/react-redux-typescript-guide
- https://medium.com/@resir014/a-type-safe-approach-to-redux-stores-in-typescript-6474e012b81e
- https://www.carlrippon.com/strongly-typed-react-redux-code-with-typescript/

-->

## Components with TypeScript (functions)

```tsx
import React, { FC } from 'react';

type TodoListProps = {
  todos: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList: FC<TodoListProps> = props => {
  const [filterText, setFilterText] = useState<string>('');

  return <div>...</div>;
};
```

## Components with TypeScript (Classes)

```tsx
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

## Event types

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLDivElement>`
