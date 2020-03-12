# Redux and TypeScript

## Redux and TypeScript

- defining action types
- typing a reducer
- getting state / action types from reducers
- typing a thunk action

## Defining action types

```ts
import { Action, PayloadAction } from '@reduxjs/toolkit';

type TodosAction =
  | PayloadAction<string, 'todos/addTodo'>
  | PayloadAction<number, 'todos/toggleTodo'>
  | Action<'todos/deleteCompletedTodos'>;
```

## Typing a reducer

```ts
type TodosState = Array<Todo>;

const todosReducer = (
  state: TodosState,
  action: TodosAction
): TodosState => {};
```

## Getting state type / action types from a reducer

```ts
import todosReducer from './todosReducer';

type TodosAction = Parameters<typeof todosReducer>[1];
type TodosState = ReturnType<typeof todosReducer>;
```

## Typing a Thunk action

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
