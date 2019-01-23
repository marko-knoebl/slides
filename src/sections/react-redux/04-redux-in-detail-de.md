# Redux im Detail

---

## Elemente von Redux

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
  payload: {
    title: 'Build my first redux app',
  },
};
```

---

## Actions - Beispiele

```js
let a = {
  type: TOGGLE_TODO,
  payload: {
    id: 2,
  },
};
```

---

## Action Creators

Action creators sind meist sehr einfache Funktionen, die eine bestimmte Action erstellen

```js
const addTodo = (title, completed = false) => ({
  type: ADD_TODO,
  payload: {
    title: title,
    completed: completed,
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
import counterReducer from './counterReducer';

const store = createStore(counterReducer);
```

---

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

---

## Beispiel: Todo-Verwaltung mit Redux
