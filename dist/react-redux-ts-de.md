# Redux

## State management mit Redux

---

## State management

In komplexeren Anwendungen macht es Sinn, den Anwendungszustand (model) von der Ansicht (view) zu trennen.

Oft wird der gesamte Anwendungszustand durch ein Datenmodell repräsentiert. Jede Änderung am Anwendungszustand läuft über das Datenmodell.

---

## Grundprinzipien von state management libraries


- Anwendungszustand (state) wird in globalem Objekt gespeichert
- _Jede_ Zustandsänderung wird durch eine _Action_ ausgelöst, die die Zustandsänderung genau beschreibt

---

## State management libraries

- Redux (oft mit React verwendet)
- MobX (oft mit React verwendet)
- ngrx (oft mit Angular verwendet)
- vuex (mit Vue.js verwendet)

---

## Besonderheit von Redux

In Redux geschieht jede Zustandsänderung mittels eines _Reducers_ - einer Funktion, die einen Zustand in den nächsten überführt

---

## Installation

```bash
npm install redux
```

---

## Einfaches Redux-Beispiel: Counter

Wir erstellen einen Counter, der eine Zahl als Zustand hat und für den die zwei Actions _increment_ und _decrement_ definiert sind.

Diese werden durch JavaScript Objekte repräsentiert:

```json
{ "type": "INCREMENT" }
```

```json
{ "type": "DECREMENT" }
```

---

## Einfaches Redux-Beispiel: Counter

Zentrales Element ist die _Reducer_-Funktion:

```js
const initialState = { count: 0 };

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

---

## Einfaches Redux-Beispiel: Counter

Die Reducer-Funktion erhält als Funktionsparameter den alten Zustand (State) und eine Action, die eine Zustandsänderung beschreibt.

Die Reducer-Funktion gibt den neuen Zustand zurück.

---

## Einfaches Redux-Beispiel: Counter

Store = Datenspeicher, der von einem Reducer verwaltet wird

```js
// stores.js
import { createStore } from 'redux';

// counter = reducer
const counterStore = createStore(counter);
```

---

## Einfaches Redux-Beispiel: Counter

Store verwenden

```js
counterStore.getState(); // {count: 0}
counterStore.dispatch({ type: 'INCREMENT' });
counterStore.getState(); // {count: 1}
```

---

## Übung

Erstelle einen neuen mathadorStore mit dem Ausgangszustand `{number: 1}` und Actions für "Mal 3" und "Minus 7"

Zusatzaufgabe: Erreiche den Zustand 4 (oder 10) durch das dispatchen passender Actions

----

# React mit Redux

---

## React mit Redux

https://redux.js.org/basics/usage-with-react

Setup: `npm install redux react-redux`

Typescript: `npm install redux react-redux @types/react-redux`

---

## Presentational und Container Components

- presentational components: "Normale" React-Komponenten (wiederverwendbar)
- container components: Zugriff auf Redux-Store

---

## React-Redux: < Provider >

Provider: Hinzufügen von Redux-Store zu einer React-App

---

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

---
---

## Redux devtools

Browser-plugin:

https://github.com/zalmoxisus/redux-devtools-extension

---

## Redux devtools

einbinden:

```js
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware())
);
```

---

## Counter: Connect

connect: verbindet React-Komponenten mit dem Redux store

- mapStateToProps: verbindet React props mit Redux state
- mapDispatchToProps: verbindet React props mit Redux actions

Aufruf:

```js
const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
```

---

## Counter: Connect (state)

```jsx
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ count: state });
}

[...]
    <div className="App">
      {JSON.stringify(this.props)}
    </div>
[...]

export default connect(mapStateToProps)(App);
```

---

## Counter: Connect (actions)

```jsx
const mapDispatchToProps = dispatch => ({
  // dispatch ist die dispatch-Funktion des Stores.
  // sie wird uns hier mittels dependency injection
  // zur Verfügung gestellt
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});
```

```xml
<button onClick={this.props.increment}>+</button>
<button onClick={this.props.decrement}>-</button>
```

---

## Counter: Connect (actions)

```jsx
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
```

----

# Immutability

---

## Immutability

(Unveränderlichkeit)

Wichtiges Konzept in der funktionalen Programmierung und bei React / Redux

---

## Immutability

Bei der Verwendung von Redux bzw von Reacts PureComponent:

Objekte, die den Anwendungszustand (state) beschreiben, sollten nicht direkt abgeändert werden

Stattdessen sollten sie durch neue Objekte ersetzt werden

Vorteile: Bessere Performance, mehr Möglichkeiten beim debugging

---

## PureComponent

Statt von `React.Component` ist es möglich, von `React.PureComponent` zu erben:

Die Entsprechende Komponente wird nur neu gerendert, wenn sich entweder state oder props geändert haben.

In einer PureComponent gelten Einträge in state bzw props dann als geändert, wenn sie sich auf ein anderes Objekt als zuvor beziehen

---

## Verwaltung von Daten ohne Mutationen

---

## Datenverwaltung ohne Mutationen: Arrays

```js
let names = ['Alice', 'Bob', 'Charlie'];
// nicht zulässig: verändert das ursprüngliche array
names.push('Dan');

// stattdessen: neues Array;
let newNames = names.slice();
newNames.push('Dan');
// überschreiben des ursprünglichen Arrays
names = newNames;

// oder:
names = [...names, 'Dan'];
```

---

## Datenverwaltung ohne Mutationen: Objekt

```js
let user = {
  name: 'john'
  email: 'john@doe.com'
}
// nicht zulässig: verändert das Objekt
user.email = 'johndoe@gmail.com';

// stattedessen: Erzeugen eines neuen Objekts:
let newUser = { ...user, email: 'johndoe@gmail.com' };
```

----

# Redux im Detail

---

## Grundelemente von Redux

- _state_: Anwendungszustand
- _action_: Beschreibt eine Änderung am _state_
- _action creator_: Erzeugt eine _action_
- _reducer_: Führt einen _state_ basierend auf einer _action_ in einen nächsten _state_ über
- _store_: Ort der Speicherung für _state_

---

## Beispiel: state

```js
{
  todos: [
    { id: 1, title: 'laundry', completed: false },
    { id: 2, title: 'groceries', completed: true },
    { id: 3, title: 'taxes', completed: false },
  ],
  filterText: '',
}
```

---

## Actions

- Beschreiben eine Zustandsänderung
- Sind js-Objekte mit einer _type_-Property und _optional_ beliebigen anderen Properties
- Die _type_-Property ist üblicherweise ein String, oft als Konstante in einem separaten Modul definiert
- Actions werden oft nach dem _FSA_-Standard definiert, der eine `payload`-Property definiert, sowie `error` und `meta`

---

## Actions - Beispiele

```js
import { ADD_TODO } from './constants';

let a = {
  type: ADD_TODO,
  payload: 'Build my first redux app',
};
```

---

## Actions - Beispiele

```js
let a = {
  type: TOGGLE_TODO,
  payload: 2,
};
```

---

## Action Creators

Action creators sind meist sehr einfache Funktionen, die eine bestimmte Action erstellen

```js
const addTodo = (title, completed = false) => ({
  type: ADD_TODO,
  payload: {
    title,
    completed,
  },
});
```

---

## Reducers

- Actions werden von reducer-Funktionen verarbeitet
- Reducer-Funktionen erhalten als Argumente den alten Zustand (State) und eine Action
- Reducer-Funktionen geben den neuen Zustand zurück
- wichtig: Reducer-Funktionen ändern das alte state-Objekt nicht ab, sondern erstellen ein neues (reine Funktionen)

---

## Stores

Store = Datenspeicher, der von einem Reducer verwaltet wird

```js
import { createStore } from 'redux';

// counter = reducer
const store = createStore(counter);
```

---

## Reducer kombinieren

```js
const rootReducer = combineReducers({
  a: counter,
  b: mathador,
});

const rootStore = createStore(rootReducer);

rootStore.getState();
// {a: {count: 0}, b: {number: 1}}

rootStore.dispatch({ type: 'INCREMENT' });
// {a: {count: 1}, b: {number: 1}}
```

---

## Beispiel: Todo-Verwaltung mit Redux

----

# Redux mit TypeScript

---

## Typendefinitionen für react-redux installieren

```bash
npm install @types/react-redux
```

---

## Redux devtools

```ts
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;
```

---

## React-Redux

```ts
import { Action, Dispatch } from 'redux';

const mapDispatchToProps = (
  dispatch: Dispatch<Action>
) => ({
  decrement: () => {
    dispatch({ type: 'DECREMENT' });
  },
  increment: () => {
    dispatch({ type: 'INCREMENT' });
  },
});
```

----

# Redux Ecosystem

---

## Redux Ecosystem - Beispiele

- redux-logger
- redux-thunk: asynchrone Actions
- redux-saga: asynchrone Actions
- normalizr: normalisierte Struktur für state
- reselect: Performanceverbesserung via Memoisation
- redux-actions: Boilerplate-Reduktion (createAction, createReducer)
- immutable.js

---

## Redux Middleware

- kann zu einem Redux Store hinzugefügt werden
- Erweiterungspunkt / Eingriffspunkt zwischen dem Dispatchen einer Aktion und dem Zeitpunkt an dem sie beim Reducer eintrifft

---

## Redux Middleware - Beispiele

- Middleware, die eine action loggt (zB redux-logger)
- Middleware, die eine einzelne action erhält und basierend darauf verschiedene andere actions asynchron auslöst (zB redux-thunk)

---

## Redux Middleware - Implementatierung

```js
const myLogger = store => next => action => {
  console.log(action);
  next(action);
};
```

---

## Redux Middleware - Einbindung

```ts
const store = createStore(
  rootReducer,
  applyMiddleware(myLogger)
);
```

---

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

---

## Eigene Middleware - json fetcher

Die action `FETCH_JSON` sollte im Hintergrund zwei einzelne actions dispatchen:

- `FETCH_JSON_START`
- `FETCH_JSON_COMPLETE` (diese enthält auch JSON-daten als payload)

---

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

---

## Eigene Middleware - eine Funktion dispatchen

Wir wollen noch flexibler sein und eine Funktion dispatchen.

Diese Funktion soll asynchrone Anfragen durchführen und weitere Actions dispatchen können.

---

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

----

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

----

# Redux-Thunk mit TypeScript

---

## Redux-Thunk

Bei Thunk müssen wir immer die gesamte Signatur des dispatchs angeben

```ts
const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, void, IAction>
) => {...};
```

---

## Redux-Thunk

```ts
const myAction = () => (
  dispatch: ThunkDispatch<IState, void, IAction>
) => {...};
```
