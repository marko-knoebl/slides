# Redux Ecosystem

## Redux Ecosystem - Beispiele

- redux-logger
- redux-thunk: asynchrone Actions
- redux-saga: asynchrone Actions
- normalizr: normalisierte Struktur für state
- reselect: Performanceverbesserung via Memoisation
- redux-actions: Boilerplate-Reduktion (createAction, createReducer)
- immutable.js

## Redux Middleware

kann zu einem Redux Store hinzugefügt werden

Erweiterungspunkt / Eingriffspunkt zwischen dem Dispatchen einer Aktion und dem Zeitpunkt an dem sie beim Reducer eintrifft

## Redux Middleware - Beispiele

- Middleware, die eine Action loggt (z.B. redux-logger)
- Middleware, die eine einzelne Action erhält und basierend darauf verschiedene andere Actions asynchron auslöst (z.B. redux-thunk, redux-listener, redux-saga)

## Redux Middleware - Implementierung

```js
const myLogger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
```

## Redux Middleware - Einbindung

```ts
import {
  getDefaultMiddleware,
  configureStore,
} from '@reduxjs/redux-toolkit';

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), myLogger],
});
```

## Eigene Middleware - json fetcher

Beispielhafte Nutzung:

```js
dispatch({
  type: 'fetchJson',
  url: 'https://jsonplaceholder.typicode.com/todos',
});
```

## Eigene Middleware - json fetcher

Die action `fetchJson` sollte im Hintergrund zwei einzelne actions dispatchen:

- `fetchJsonStart`
- `fetchJsonComplete` (diese enthält auch JSON-daten als payload)

## Eigene Middleware - json fetcher

```js
const fetcher = (store) => (next) => (action) => {
  if (action.type === 'fetchJson') {
    store.dispatch({ type: 'fetchJsonStart' });
    fetch(action.payload.url)
      .then((response) => response.json())
      .then((data) => {
        store.dispatch({
          type: 'fetchJsonComplete',
          payload: {
            url: action.payload.url,
            data: data,
          },
        });
      });
  } else {
    next(action);
  }
};
```

## Eigene Middleware - Nachbau von Thunk

```js
const myThunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    // we pass dispatch to the action function
    // so the action can call it
    return action(store.dispatch);
  } else {
    return next(action);
  }
};
```
