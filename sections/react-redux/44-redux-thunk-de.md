# Thunk

## Thunk

**Thunk** ist Middleware, die asynchrones Verhalten in Redux - durch das Dispatchen von Funktionen - ermöglicht

## Thunk

Beispielhafter Aufruf:

```js
dispatch(getTodosFunction);
```

## Thunk

Als asynchrone Funktion wird `loadTodosFunction` nicht direkt den Redux-Store verändern.

Stattdessen werden zwei andere Actions den store erreichen:

- `loadTodosRequest` wird sofort ausgelöst
- `loadTodosSuccess` wird ausgelöst, sobald die Netzwerkanfrage erfolgreich war
- `loadTodosError` würde einen Fehler anzeigen

## Thunk

In Thunk verbleibt die synchrone Logik im Reducer, die asynchrone Logik wird in die Action aufgenommen.

## Beispiel: loadTodos

```js
const loadTodos = dispatch => {
  // "dispatch" is the redux store's dispatch function
  // it is passed in automatically (dependency injection)
  dispatch({ type: 'loadTodosRequest' });
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      dispatch({ type: 'loadTodosSuccess', todos: todos });
    });
};
```

Wir können `dispatch(loadTodos)` aufrufen

## Thunk Sourcecode

Der komplette Thunk Sourcecode sind nur 14 Zeilen:

https://github.com/reduxjs/redux-thunk/blob/master/src/index.js

## Thunk mit TypeScript

Bei Thunk müssen wir immer die gesamte Signatur von dispatch angeben:

```ts
dispatch: ThunkDispatch<IState, void, IAction>
```

## Thunk: Zugriff auf den Redux store

Ein zweites Argument kann optional übergeben werden: Es erhält die `getState`-Funktion als Wert.

```ts
const actionAsync = () => (dispatch, getState) => {
  dispatch(started());
  const s = getState();
  ...
};
```
