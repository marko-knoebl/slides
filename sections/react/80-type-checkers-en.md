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

## TypeScript

TypeScript Basics: siehe Präsentation [TypeScript](./typescript-en.html)

## React with TypeScript

extensive resource: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet

<!--

redux with typescript:

- https://github.com/piotrwitek/react-redux-typescript-guide
- https://medium.com/@resir014/a-type-safe-approach-to-redux-stores-in-typescript-6474e012b81e
- https://www.carlrippon.com/strongly-typed-react-redux-code-with-typescript/

-->

## Props with TypeScript (function components)

```tsx
import React, { FC } from 'react';

type TodoListProps = {
  todos: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList: FC<TodoListProps> = props => {
  // ....
};
```

## useState with TypeScript

often no annotation is necessary:

```ts
const [filterText, setFilterText] = useState('');
```

with annotation:

```ts
const [todos, setTodos] = useState<Array<TodoType>>([]);
```

## Event types

With inline event handlers no event type must be declared:

```jsx
<button
  onClick={event => {
    event.stopPropagation();
  }}>
  test
</button>
```

## Event types

Event types for event handlers that are defined separately:

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLDivElement>`

## Class Components with TypeScript

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
> {
  // ...
}
```
