# createReducer

## createReducer

`createReducer` kann das Schreiben von Reducern vereinfachen:

- Vermeiden von Boilerplate
- Erlauben von direkten Objektmutationen (via _immer.js_)

## createReducer

Übliche Implementierung eines `counterReducer`s:

```js
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return state + (action.payload || 1);
    case 'decrement':
      return state - (action.payload || 1);
    default:
      return state;
  }
};
```

## createReducer

Vereinfachte Implementierung mittels `createReducer`:

```js
import { createReducer } from '@reduxjs/toolkit';

const counterReducer = createReducer(0, {
  increment: (state, action) =>
    state + (action.payload || 1),
  decrement: (state, action) =>
    state - (action.payload || 1),
});
```

## createReducer

Implementierung für TypeScript - dies ermöglicht das feststellen von Typen:

```js
const counterReducer = createReducer(0, (builder) => {
  builder.addCase(
    'increment',
    (state, action) => state + (action.payload || 1)
  );
  builder.addCase(
    'decrement',
    (state, action) => state - (action.payload || 1)
  );
});
```

## createReducer

Bei Verwendung von `createReducer` _dürfen_ wir den alten State abändern (siehe `logIn`) - dies ist durch die Verwendung von `immer.js` im Hintergrund möglich

Das Zurückgeben von abgeleitetem State ist ebenfalls möglich (siehe `logOut`)

```js
const initialState = { loggedIn: false, userId: null };

const userReducer = createReducer(initialState, {
  logIn: (state, action) => {
    state.loggedIn = true;
    state.userId = action.payload.userId;
  },
  logOut: (state, action) => {
    return { loggedIn: false, userId: null };
  },
});
```

## createReducer und createAction

Bei Verwendung von `createAction` können wir den Action Creator direkt als Key verwenden (wegen dessen `.toString()`-Methode):

```js
const increment = createAction('increment', (amount) => ({
  amount: amount,
}));
const decrement = createAction('decrement', (amount) => ({
  amount: amount,
}));

const counterReducer = createReducer(0, {
  [increment]: (state, action) =>
    state + (action.payload || 1),
  [decrement]: (state, action) =>
    state - (action.payload || 1),
});
```
