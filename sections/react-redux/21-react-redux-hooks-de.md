# React mit Redux (mit Hooks)

## React mit Redux (mit Hooks)

https://redux.js.org/basics/usage-with-react

Setup: `npm install redux react-redux`

Typescript: `npm install @types/react-redux`

## React-Redux: < Provider >

Provider: Hinzufügen von Redux-Store zu einer React-App

## React-Redux: < Provider >

```js
// index.js
import { Provider } from 'react-redux';

[...]

ReactDOM.render(
  <Provider store={myStore}>
    <App/>
  </Provider>
  ...
);
```

## useSelector

Mit `useSelector` können wir in einer React-Komponente die Inhalte des Redux-Stores abfragen.

Wir übergeben eine sogenannte _Selektorfunktion_ an `useSelektor`. Die Selektorfunktion erhält den gesamten Redux-State und gibt einen daraus abgeleiteten Wert zurück.

Beispiel:

```js
const numTodos = useSelector(state => state.todos.length);
```

## useDispatch

Mit `useDispatch` können wir aus React auf die `dispatch`-Funktion des Redux-Stores zugreifen und damit Actions dispatchen.

```js
const dispatch = useDispatch();

dispatch({
  type: 'REMOVE_COMPLETED_TODOS',
});
```

## useDispatch mit TypeScript

```ts
import { Dispatch } from 'redux';

const dispatch: Dispatch<TodolistAction> = useDispatch();
```
