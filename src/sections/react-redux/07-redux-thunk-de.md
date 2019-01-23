# Redux Thunk

---

## Redux Thunk

Thunk ist Middleware, die asynchrones Verhalten in Redux - durch das Dispatchen von Funktionen - ermöglicht

---

## Thunk sourcecode

kompletter sourcecode:

https://github.com/reduxjs/redux-thunk/blob/master/src/index.js

---

## Redux Thunk

Beispielhafter Aufruf:

```js
dispatch(getTodosFunction);
```

---

## Redux Thunk

Als asynchrone Funktion würde `getTodosFunction` nicht direkt den Redux-Store verändern.

Stattdessen würde zwei andere Actions den store erreichen:

- Die Action `LOAD_TODOS_REQUEST` würde sofort dispatched werden
- Die Action `LOAD_TODOS_SUCCESS` würde dispatched werden, sobald die Netzwerkanfrage erfolgreich war

---

## Redux Thunk

In Thunk verbleibt die synchrone Logik im Reducer.

Die asynchrone Logik wird in den Action Creator aufgenommen.

---

## Installation

```bash
npm install redux-thunk
```

---

## Thunk einbinden

```ts
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
```

---

## Beispiel: timer

```js
// sync actions
const started = () => ({ type: 'START' });
const increment = () => ({ type: 'INCREMENT' });
// async action
const start = () => dispatch => {
  dispatch(started());
  setInterval(() => {
    dispatch(increment());
  }, 1000);
};
```

---

## Beispiel: timer

Der Reducer erhält nur die synchronen Actions.

```js
const timeReducer = (
  state = { started: false, time: 0 },
  action
) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, time: state.time + 1 };
    case 'STARTED':
      return { ...state, started: true };
    default:
      return state;
  }
};
```

---

## Redux Thunk mit TypeScript

Bei Thunk müssen wir immer die gesamte Signatur von dispatch angeben

```ts
const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, void, IAction>
) => {...};
```

```ts
const myAction = () => (
  dispatch: ThunkDispatch<IState, void, IAction>
) => {...};
```

---

## Thunk: Zugriff auf den Redux store

Ein zweites Argument kann optional übergeben werden: Es erhält die `getState`-Funktion als Wert.

```ts
const actionAsync = () => (dispatch, getState) => {
  dispatch(started());
  const s = getState();
  ...
};
```

---

## Aufgabe: Todos von REST API laden

Erstelle ein thunk, das Todos vom folgenden API lädt:

`https://jsonplaceholder.typicode.com/todos`

---

## Präsentation: Taming Large React Applications w/ Redux

https://slides.com/joelkanzelmeyer/taming-large-redux-apps
