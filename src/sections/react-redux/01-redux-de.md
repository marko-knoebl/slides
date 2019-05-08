# Redux

### State management mit Redux

## State management

In komplexeren Anwendungen macht es Sinn, den Anwendungszustand (model) von der Ansicht (view) zu trennen.

Oft wird der gesamte Anwendungszustand durch ein Datenmodell repräsentiert. Jede Änderung am Anwendungszustand läuft über das Datenmodell.

## State management Tools

- Redux (oft mit React verwendet)
- reducer Hook (in React beinhaltet, ähnlich zu Redux)
- MobX (oft mit React verwendet)
- ngrx (mit Angular verwendet)
- vuex (mit Vue.js verwendet)

## Besonderheit von Redux

In Redux geschieht jede Zustandsänderung mittels eines _Reducers_ - einer Funktion, die einen Zustand basierend auf einer _action_ in den nächsten überführt

## Redux Diagramm

<img src="assets/redux-flow.svg" type="text/svg" style="width: 100%">

## Installation

```bash
npm install redux
```

## Einfaches Redux-Beispiel: Counter

Wir erstellen einen Counter, der eine Zahl als Zustand hat und für den die zwei Actions _increment_ und _decrement_ definiert sind.

Diese werden durch JavaScript Objekte repräsentiert:

```json
{ "type": "INCREMENT" }
```

```json
{ "type": "DECREMENT" }
```

## Einfaches Redux-Beispiel: Counter

Zentrales Element ist die _Reducer_-Funktion:

```js
const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
```

## Einfaches Redux-Beispiel: Counter

Die Reducer-Funktion erhält als Funktionsparameter den alten Zustand (State) und eine Action, die eine Zustandsänderung beschreibt.

Die Reducer-Funktion gibt den neuen Zustand zurück. Wichtig: Reducer-Funktionen ändern das alte state-Objekt nicht ab, sondern erstellen ein neues (reine Funktion)

## Einfaches Redux-Beispiel: Counter

Store = Datenspeicher, der von einem Reducer verwaltet wird

```js
// stores.js
import { createStore } from 'redux';
import counterReducer from 'counterReducer';

// counter = reducer
const counterStore = createStore(counterReducer);
```

## Einfaches Redux-Beispiel: Counter

Store verwenden

```js
counterStore.getState(); // {count: 0}
counterStore.dispatch({ type: 'INCREMENT' });
counterStore.getState(); // {count: 1}
```

## Übung

Erstelle einen neuen mathadorStore mit dem Ausgangszustand `{number: 1}` und Actions für "Mal 3" und "Minus 7"

Zusatzaufgabe: Erreiche den Zustand 4 (oder 10) durch das dispatchen passender Actions

## Reducer kombinieren

```js
const rootReducer = combineReducers({
  counter: counterReducer,
  mathador: mathadorReducer,
});

const rootStore = createStore(rootReducer);

rootStore.getState();
// {counter: {count: 0}, mathador: {number: 1}}

rootStore.dispatch({ type: 'INCREMENT' });
// {counter: {count: 1}, mathador: {number: 1}}
```

## Redux devtools

Browser-plugin:

https://github.com/zalmoxisus/redux-devtools-extension

## Redux devtools

einbinden:

```bash
npm install --save-dev redux-devtools-extension
```

```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevtools } from 'redux-devtools-extension';

const store = createStore(
  composeWithDevtools(applyMiddleware())
);
```
