# Redux und TypeScript

## Redux und TypeScript

- Definieren von Action Types
- Typing eines Reducers
- State Type / Action Types eines Reducers abfragen
- Thunk mit Typen

## Definieren von Action Types

```ts
import { Action, PayloadAction } from '@reduxjs/toolkit';

type TodosAction =
  | PayloadAction<string, 'todos/addTodo'>
  | PayloadAction<number, 'todos/toggleTodo'>
  | Action<'todos/deleteCompletedTodos'>;
```

## Typing eines Reducers

```ts
type TodosState = Array<Todo>;

const todosReducer = (
  state: TodosState,
  action: TodosAction
): TodosState => {};
```

## State Type / Action Types eines Reducers abfragen

```ts
import todosReducer from './todosReducer';

type TodosAction = Parameters<typeof todosReducer>[1];
type TodosState = ReturnType<typeof todosReducer>;
```

## Thunk mit Typen

```ts
import { Dispatch } from '@reduxjs/toolkit';

const asyncAction = () => (
  dispatch: Dispatch<TodosDataAction>
) => {
  dispatch({ type: 'todosData/loadTodosRequest' });
  ...
  dispatch({
    type: 'todosData/loadTodosSuccess',
    payload: data,
  });
};
```
