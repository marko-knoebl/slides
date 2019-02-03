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

- kann zu einem Redux Store hinzugefügt werden
- Erweiterungspunkt / Eingriffspunkt zwischen dem Dispatchen einer Aktion und dem Zeitpunkt an dem sie beim Reducer eintrifft

## Redux Middleware - Beispiele

- Middleware, die eine action loggt (zB redux-logger)
- Middleware, die eine einzelne action erhält und basierend darauf verschiedene andere actions asynchron auslöst (zB redux-thunk)

## Redux Middleware - Implementierung

```js
const myLogger = store => next => action => {
  console.log(action);
  next(action);
};
```

## Redux Middleware - Einbindung

```ts
const store = createStore(
  rootReducer,
  applyMiddleware(myLogger)
);
```

## Eigene Middleware - json fetcher

Beispielhafte Nutzung:

```js
dispatch({
  type: 'FETCH_JSON',
  payload: {
    url: 'https://jsonplaceholder.typicode.com/todos',
  },
});
```

## Eigene Middleware - json fetcher

Die action `FETCH_JSON` sollte im Hintergrund zwei einzelne actions dispatchen:

- `FETCH_JSON_START`
- `FETCH_JSON_COMPLETE` (diese enthält auch JSON-daten als payload)

## Eigene Middleware - json fetcher

```js
const fetcher = store => next => action => {
  if (action.type === 'FETCH_JSON') {
    store.dispatch({ type: 'FETCH_JSON_START' });
    fetch(action.payload.url)
      .then(response => response.json())
      .then(parsedResponse => {
        store.dispatch({
          type: 'FETCH_JSON_COMPLETE',
          payload: parsedResponse,
        });
      });
  } else {
    next(action);
  }
};
```

## Eigene Middleware - eine Funktion dispatchen

Wir wollen noch flexibler sein und eine Funktion dispatchen.

Diese Funktion soll asynchrone Anfragen durchführen und weitere Actions dispatchen können.

## Eigene Middleware - eine Funktion dispatchen

```js
const functionMiddleware = store => next => action => {
  if (typeof action === 'function') {
    // we pass dispatch to the action function
    // so the action can call it
    return action(store.dispatch);
  } else {
    return next(action);
  }
};
```
