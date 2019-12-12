# React mit Redux: Hooks

## useSelector

Mit `useSelector` können wir die Inhalte des Redux-Stores abfragen.

Wir übergeben eine sogenannte _Selektorfunktion_ an `useSelektor`.

Die Selektorfunktion erhält den gesamten Redux-State und gibt einen daraus abgeleiteten Wert zurück.

## useSelector - Beispiel

```js
import { useSelector } from 'react-redux';

...

const todos = useSelector(state => state);
const numTodos = useSelector(state => state.length);
const numCompletedTodos = useSelector(
  state => state.filter(todo => todo.completed).length
);
```

## useDispatch

Mit `useDispatch` können wir aus React auf die `dispatch`-Funktion des Redux-Stores zugreifen und damit Actions dispatchen.

```js
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

dispatch({ type: 'deleteCompletedTodos' });
```

## useDispatch mit TypeScript

```ts
const dispatch = useDispatch<TodoAppAction>();
```
