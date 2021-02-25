# Typisierung von Redux Reducern

## Definieren von Action Types

```ts
import { Action, PayloadAction } from '@reduxjs/toolkit';

export type TodosAction =
  | PayloadAction<string, 'todos/addTodo'>
  | PayloadAction<number, 'todos/toggleTodo'>
  | Action<'todos/deleteCompletedTodos'>;
```

## Typisierung eines Reducers

```ts
export type TodosState = Array<Todo>;

const todosReducer = (
  state: TodosState,
  action: TodosAction
): TodosState => {
  // ...
};
```

## Erhalten des State Types / Action Types eines Reducers

```ts
import todosReducer, {
  TodosState,
  TodosAction,
} from './todosReducer';
```

oder:

```ts
import todosReducer from './todosReducer';

type TodosAction = Parameters<typeof todosReducer>[1];
type TodosState = ReturnType<typeof todosReducer>;
```

<!--
- https://github.com/piotrwitek/react-redux-typescript-guide
- https://medium.com/@resir014/a-type-safe-approach-to-redux-stores-in-typescript-6474e012b81e
- https://www.carlrippon.com/strongly-typed-react-redux-code-with-typescript/
-->
