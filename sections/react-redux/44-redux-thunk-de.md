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
async function loadTodos(dispatch) {
  // "dispatch" is the redux store's dispatch function
  // it is passed in automatically (dependency injection)
  dispatch({ type: 'loadTodosRequest' });
  const todos = await fetchTodos();
  dispatch({ type: 'loadTodosSuccess', payload: todos });
}
```

Wir können `dispatch(loadTodos)` aufrufen

## Thunk Sourcecode

Der komplette Thunk Sourcecode sind nur 14 Zeilen:

https://github.com/reduxjs/redux-thunk/blob/master/src/index.js

## Thunk: Zugriff auf den Redux store

Ein zweites Argument kann optional übergeben werden: Es erhält die `getState`-Funktion als Wert.

```ts
async function loadTodos(dispatch, getState) {
  dispatch({ type: 'loadTodosRequest' });
  const s = getState();
  // ...
}
```

## Thunk mit Typen

```ts
import { Dispatch } from '@reduxjs/toolkit';

async function loadTodos(
  dispatch: Dispatch<TodosDataAction>
) {
  dispatch({ type: 'loadTodosRequest' });
  // ...
  dispatch({ type: 'loadTodosSuccess', payload: data });
}
```
