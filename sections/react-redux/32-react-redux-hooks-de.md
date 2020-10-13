# React mit Redux: Hooks

## useSelector

Mit `useSelector` können wir die Inhalte des Redux-Stores abfragen.

Wir übergeben eine sogenannte _Selektorfunktion_ an `useSelector`.

Die Selektorfunktion erhält den gesamten Redux-State und gibt einen daraus abgeleiteten Wert zurück.

## useSelector - Beispiel

```js
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state);
  const numTodos = useSelector((state) => state.length);
  const numCompletedTodos = useSelector(
    (state) => state.filter((todo) => todo.completed).length
  );
  // ...
};
```

## useSelector mit TypeScript

erhalten des State-Types:

```ts
// rootReducer.ts
export type State = Array<Todo>;
```

oder

```ts
// store.ts
export type State = ReturnType<typeof todosStore.getState>;
```

verwenden mit `useSelector`:

```ts
useSelector((state: State) => state.length);
```

## useDispatch

Mit `useDispatch` können wir aus React auf die `dispatch`-Funktion des Redux-Stores zugreifen und damit Actions dispatchen.

```js
import { useDispatch } from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch();
  ...
  dispatch({ type: 'deleteCompletedTodos' });
};
```

## useDispatch mit TypeScript

```ts
import { Dispatch } from '@reduxjs/toolkit';

const dispatch = useDispatch<Dispatch<TodoAppAction>>();
```
