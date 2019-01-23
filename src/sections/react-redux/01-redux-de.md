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
import counterReducer from 'counterReducer';

// counter = reducer
const counterStore = createStore(counterReducer);
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
