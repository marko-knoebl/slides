# React & Redux

# Themen

## Themen (1/3)

- State Management mit Reducern
- Redux 1
  - State Management mit Redux
  - Redux Toolkit
  - Redux Devtools
  - Redux Store
- React und Redux
  - Grundlagen
  - Redux mit Hooks
  - Redux in Klassenkomponenten

## Themen (2/3)

- Redux 2
  - Actions im Detail
  - Asynchrome Actions mit Thunk
  - Aufteilen / Kombinieren von Reducern
  - Action Creators

## Themen (3/3)

- Redux 3
  - createAction
  - Selectors und Memoisation
  - createReducer
- Redux 4
  - Redux Ecosystem
  - Redux Middleware
  - Asynchrone Actions mit Sagas

# State Management mit Reducern

## State Managemenet mit Reducern

Siehe Präsentation zu [React advanced](./react-advanced-de.html#/5)

# Redux 1

- State Management mit Redux
- Redux Toolkit
- Redux Devtools
- Redux Store

# State Management in Redux

## State Management in Redux

Bei Redux: Anwendungszustand wird _global_ gespeichert.

Der Zustand wird unabhängig von den React Komponenten gespeichert.

Es gibt _einen_ Store, in dem alle Daten gesammelt sind.

Ein Store kann in verschiedene Teile aufgeteilt sein.

## Redux Reducer

Besonderheiten von Redux Reducern (verglichen mit dem Reducer Hook):

der Anfangszustand wird als Standardparameter übergeben:

```js
const initialState = []
const todosReducer = (oldState = initialState, action) => {...}
```

unbekannte Actions sollten den Zustand unverändert lassen:

```js
default:
  return oldState;
```

## Beispiel: Todos

```js
const initialState = [];
const todosReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...oldState,
        {
          title: action.title,
          completed: false,
          id: generateId(), // dummy function
        },
      ];
    case 'DELETE_TODO':
      return oldState.filter(todo => todo.id !== action.id);
    default:
      return oldState;
  }
};
```

# Redux toolkit

## Redux toolkit

Mit **Redux toolkit** ist ein vereinfachtes Setup von Redux und verwandten Libraries möglich (ähnlich wie bei _create-react-app_)

Wir werden es in dieser Präsentation durchgehend verwenden.

npm-Paket: _@reduxjs/toolkit_

## Redux toolkit

Funktionalität (siehe [what's included](https://redux-toolkit.js.org/introduction/quick-start#whats-included)):

- Debugging (via _redux devtools_)
- asynchrone Actions (via _thunk_)
- vereinfachtes Erstellen von Action Creators (via _createAction_)
- vereinfachtes Erstellen von Reducern (via _createReducer_)
- vereinfachtes Update des States durch direkte Änderungen (via _immer.js_)
- ...

# Redux Devtools

## Redux Devtools

<figure>
  <img src="assets/redux-devtools-airbnb.png" type="image/png" style="width: 100%" alt="Redux devtools showing the state of the airbnb website">
  <figcaption>Redux devtools showing the state of the airbnb website</figcaption>
</figure>

## Redux Devtools

Browser Plugin für Firefox / Chrome:

https://github.com/zalmoxisus/redux-devtools-extension

Anzeigen des Redux States via:

Browser-Devtools (F12) → _Redux_ → _State_ → _Chart/Tree_

## Redux Devtools

Websites, die Redux verwenden (wir können den Redux State betrachten):

- airbnb.com (nur Chrome)
- reddit.com (State-Diagram wird nicht angezeigt)
- dropbox.com (nur Chrome)
- tesla.com (sehr einfacher State)

## Redux Devtools

Funktionalität:

- State begutachten
- Änderungen am State anzeigen
- Actions auslösen (dispatchen)
- Früheren State wiederherstellen (time traveling)
- State als JSON speichern / laden

# Redux Store

## Redux Store

Ertellen eines Redux Stores, der den State enthält; der Store wird von einem Reducer verwaltet

```js
// src/index.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './state/todos';

const todosStore = configureStore({
  reducer: todosReducer,
});
```

## Redux Store

Direkte Verwendung des Stores:

```js
console.log(todosStore.getState());
todosStore.dispatch({
  type: 'addTodo',
  title: 'learn Redux',
});
console.log(todosStore.getState());
```

# React mit Redux

- Grundlagen
- Redux mit Hooks
- Redux in Klassenkomponenten

# React mit Redux

## React mit Redux

npm Pakete:

- `react-redux`
- `@types/react-redux`

## React-Redux: &lt;Provider&gt;

Provider: zum Hinzufügen eines Redux-Stores zu einer React-App

## React-Redux: &lt;Provider&gt;

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

## Presentational components / container components

Oft sinnvolle Einteilung:

**presentational components**:

- "normale" React-Komponenten, die unabhängig von Redux funktionieren
- interagieren nur mit ihrer Elternkomponente
- einfach wiederzuverwenden

**container components**:

- Komponenten, die mit dem Redux Store interagieren
- Hauptaufgabe ist das Rendern von Unterkomponenten

## Presentational components / container components

Beispiel:

Allgemeine `TodoList`-Komponente, die beliebige über Props übergebene Todos rendern kann

`TodoListContainer`-Komponente, die Daten aus dem Redux Store ausliest und eine `TodoList`-Komponente rendert

# React mit Redux: Hooks

## useSelector

Mit `useSelector` können wir die Inhalte des Redux-Stores abfragen.

Wir übergeben eine sogenannte _Selektorfunktion_ an `useSelektor`.

Die Selektorfunktion erhält den gesamten Redux-State und gibt einen daraus abgeleiteten Wert zurück.

## useSelector - Beispiel

```js
import { useSelector } from 'react-redux';

...

const todos = useSelector(state => state);
const numTodos = useSelector(state => state.length);
const numCompletedTodos = useSelector(
  state => state.filter(todo => todo.completed).length
);
```

## useDispatch

Mit `useDispatch` können wir aus React auf die `dispatch`-Funktion des Redux-Stores zugreifen und damit Actions dispatchen.

```js
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

dispatch({ type: 'deleteCompletedTodos' });
```

## useDispatch mit TypeScript

```ts
const dispatch = useDispatch<TodoAppAction>();
```

# React mit Redux: Klassenkomponenten

## Container-Komponenten

`connect`-Funktion aus `react-redux`:

- wird zum Erstellen einer Container-Komponente verwendet
- die einzige Aufgabe der Container-Komponente ist es, ihre Unterkomponente mit dem Redux Store zu verbinden

## Container-Komponenten

`connect`: verbindet React-Komponenten mit dem Redux Store

- `mapStateToProps`: verbindet React props mit dem Redux state
- `mapDispatchToProps`: verbindet React props/events mit Redux actions

Aufruf von `connect`:

```js
import { connect } from 'react-redux';

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
```

## Beispiel

Wir verbinden eine einfache `NumberInput`-Komponente mit dem Redux Store

```js
const NumberInput = ({
  value,
  onIncrement,
  onDecrement,
}) => (
  <div>
    <button onClick={onDecrement}>-</button>
    {value}
    <button onClick={onIncrement}>+</button>
  </div>
);
```

## Beispiel

Interface der `NumberInput`-Komponente:

- property: `value`
- event: `onIncrement`
- event: `onDecrement`

Redux Store:

- state-Eintrag: `fontSize`
- action: `increaseFontSize`
- action: `reduceFontSize`

## Beispiel

mit dem Redux State verbinden:

```jsx
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  value: state.fontSize,
});

const FontSizeInput = connect(mapStateToProps)(NumberInput);
```

## Beispiel

mit Redux Actions verbinden:

```js
// dispatch refers to the dispatch function of the store;
// it is provided to us via dependency injection
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch({ type: 'increaseFontSize' }),
  onDecrement: () => dispatch({ type: 'reduceFontSize' }),
});

const FontSizeInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberInput);
```

## Counter: Dispatch mit TypeScript

```ts
import { Action, Dispatch } from 'redux';

const mapDispatchToProps = (
  dispatch: Dispatch<MyAction>
) => ({
  onIncrement: () => dispatch({ type: 'increaseFontSize' }),
  onDecrement: () => dispatch({ type: 'reduceFontSize' }),
});
```

# Redux 2

- Actions im Detail
- Aufteilen / Kombinieren von Reducern
- Asynchrome Actions mit Thunk
- Action Creators

# Actions im Detail

## Actions

- Beschreiben eine Zustandsänderung
- Sind js-Objekte mit einer _type_-Property
- Der _type_ wurde usrsprünglich meist groß geschrieben (z.B. `ADD_TODO`), heute sind auch andere Schreibweisen üblich (z.B. `addTodo`)
- Actions werden oft nach dem _FSA_-Standard definiert, der eine `payload`-Property definiert, sowie `error` und `meta`

## Actions - Beispiele

```js
const action = {
  type: 'addTodo',
  title: 'Build my first Redux app',
};
```

```js
const action = {
  type: 'addTodo',
  payload: {
    title: 'Build my first Redux app',
  },
};
```

## Actions - Beispiele

```js
const action = {
  type: 'toggleTodo',
  id: 2,
};
```

```js
const action = {
  type: 'toggleTodo',
  payload: {
    id: 2,
  },
};
```

# Reducer aufteilen / kombinieren

## Reducer aufteilen / kombinieren

Mehrere Reducer können einfach zusammengeführt / kombiniert werden, um einen zusammengesetzten Reducer zu erstellen

## Reducer aufteilen / kombinieren

Beispiel: Online Shop

- _root_ Reducer: Enthält drei Einträge, die von separaten Reducern verwaltet werden:
  - _user_ Reducer: Daten zum eingeloggten Benutzer
  - _products_ Reducer: Daten zu verfügbaren Produkten (von API)
  - _cart_ Reducer: Daten zum Aktuellen Inhalt des Einkaufswagens

## Reducer aufteilen / kombinieren

Könnte manuell erfolgen - oder durch Verwendung der Funktion `combineReducers` aus Redux

## Reducer aufteilen / kombinieren

manuell:

```js
const shopReducer = (state, action) => ({
  user: userReducer(state.user, action),
  products: productsReducer(state.products, action),
  cart: cartReducer(state.cart, action),
});
```

mittels `combineReducers`:

```js
import { combineReducers } from '@reduxjs/toolkit';
const shopReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});
```

# Asynchrone Actions

## Asynchrone Actions

Asynchrone Actions betreffen beispielsweise HTTP-Anfragen oder das Abfragen von Caches oder indexedDB-Einträgen.

Asynchrone Actions können in Redux mit _middleware_ realisiert werden, z.B.:

- _thunk_
- _saga_

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

# Action Creators

## Action Creators

Action Creators: einfache Funktionen, die eine bestimmte Action erstellen

```js
const addTodo = title => ({
  type: ADD_TODO,
  payload: {
    title: title,
  },
});
```

Verwendung:

```js
dispatch(addTodo('groceries'));
```

## Action Creators vs. Actions

Achtung doppelte Bedeutung: _Action Creators_ werden oft abgekürzt als _Actions_ bezeichnet (z.B. in Dokumentation).

## Action Creators und Thunk

Action Creators können notwendig sein, um parametrische Actions in Thunk zu benutzen

Der folgende Aufruf würde eine Thunk Action erstellen und dispatchen, die ein bestimmtes Todo lädt:

```js
dispatch(loadTodoByIndex(3));
```

## Action Creators und Thunk

```js
// thunk action creator
const loadTodoByIndex = id => {
  function thunkAction(dispatch) {
    dispatch({ type: 'loadTodoRequest', id: id });
    fetch(
      `https://jsonplaceholder.typicode.com/todos/${index}`
    )
      .then(response => response.json())
      .then(todo => {
        dispatch({ type: 'loadTodoSuccess', todo: todo });
      });
  }
  return thunkAction;
};
```

## Action Creators und Thunk

kürzere Version mit verschachtelten Pfeilfunktionen:

```js
// thunk action creator
const loadTodoByIndex = id => dispatch => {
  dispatch({ type: 'loadTodoRequest', id: id });
  fetch(
    `https://jsonplaceholder.typicode.com/todos/${index}`
  )
    .then(response => response.json())
    .then(todo => {
      dispatch({ type: 'loadTodoSuccess', todo: todo });
    });
};
```

# Übungen

- Todoliste (erweitert)
- Shop
- Finanztool

# Aufgabe: Todolist (erweiterter State)

Umsetzung eines Modells für eine Todoliste in Redux

## Aufgabe: Todolist

Datenstruktur (Beispiel):

- root
  - todoData
    - todos
    - isFetching
    - hasError
  - ui
    - isAddTodoVisible
    - themeColor

## Aufgabe: Todolist

Actions (Beispiel):

- addTodo
- toggleTodo
- deleteTodo
- loadTodosFromApi

# Beispiel: Shop

## Beispiel: Shop

State des Beispiels besteht aus zwei wichtigen Teilen:

- Produktsortiment
- Anzahl der Produkte im Warenkorb

## Beispiel: Shopping cart - State

```json
{
  "cart": {
    "addedIds": [2],
    "quantityById": { 2: 2 }
  },
  "products": [
    {
      "id": 1,
      "title": "iPad 4 Mini",
      "price": 500.01,
      "inventory": 2
    },
    {
      "id": 2,
      "title": "H&M T-Shirt White",
      "price": 10.99,
      "inventory": 10
    },
    {
      "id": 3,
      "title": "Charli XCX - Sucker CD",
      "price": 19.99,
      "inventory": 5
    }
  ]
}
```

## Beispiel: Shop

Die zwei Teile - `cart` und `products` - können von zwei verschiedenen Reducern verwaltet werden.

Zusammenführen zu einem Reducer mittels der vordefinierten Funktion `combineReducers`:

```js
import { combineReducers } from 'redux';

const shopReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const store = createStore(
  shopReducer,
  composeWithDevTools(applyMiddleware())
);
```

## Beispiel: Shop

```js
const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        [action.id]: (state[action.id] || 0) + 1,
      };
    default:
      return state;
  }
};
```

## Beispiel: Shop

```js
const products = [];
const productsReducer = (state = products, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.products;
    case 'ADD_TO_CART':
      return state.map(product =>
        product.id === action.id
          ? { ...product, inventory: product.inventory - 1 }
          : product
      );
    default:
      return state;
  }
};
```

# Redux 3

- createAction
- Selectors und Memoisation
- createReducer

# createAction

## createAction

Die Funtion `createAction` aus dem Redux toolkit kann hilfreich sein, um _action creators_ zu erstellen und String-konstanten für _action types_ bereit zu stellen:

```js
import { createAction } from '@reduxjs/toolkit';

// create an action creator
const addTodo = createAction('addTodo', title => ({
  payload: { title: title },
}));

const action1 = addTodo('groceries');
```

## createAction

`createAction` versieht jeden Action Creator mit einer `type` property:

```js
addTodo.type; // 'addTodo'
```

## createAction

Verwendung der `type` Property in dem switch-Statement eines Reducers:

```js
const todosReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case addTodo.type:
      ...
    case deleteTodo.type:
      ...
    ...
  }
}
```

## createAction

`createAction` stellt eine eigene `.toString()`-Methode bei jedem Action Creator bereit:

```js
addTodo.toString(); // 'addTodo'
String(addTodo); // 'addTodo'
```

Dies kann bei der Verwendung von `createReducer` hilfreich sein.

# Selektoren

## Speicherung des minimalen States

Best Practice in Redux: Immer den _minimalen_ State speichern (keine redundanten Daten)

Negativbeispiele:

```js
{
  todos: [...],
  maxTodoId: 3
}
```

```js
{
  shoppingCartItems: [{itemid: ..., price: ...}, ...],
  totalPrice: ...
}
```

## Speicherung des minimalen States

Daten wie `maxTodoId` und `totalPrice` können aus den anderen Daten abgeleitet werden und sollten keinen separaten Eintrag im State haben.

## Selektoren

Selektor = Funktion, die abgeleitete Daten aus einem minimalen State errechnet

Ein Selektor erhält den ganzen State als Argument und gibt abgeleitete Daten zurück

## Beispiele für Selektoren

- `getMaxTodoId`
- `getFilteredTodos`

## Beispiele für Selektoren

```js
const getMaxTodoId = state =>
  state.todos.reduce((aggregator, item) =>
    Math.max(aggregator, item.id, 1)
  );
```

```js
const getFilteredTodos = state =>
  state.todos.filter(todo =>
    todo.title
      .toLowerCase()
      .includes(state.ui.filterText.toLowerCase())
  );
```

# Memoisierte Selektoren

## Memoisierung

Memoisierung bezeichnet das Cachen von Rückgabewerten reiner Funktionen

## Memoisierung in reselect

_Reselect_ = Library für Memoisierung von Selektoren.

## Memoisierung in reselect

Reselect kann zum Memoisieren komplexerer Selektoren verwendet werden

```js
import { createSelector } from 'reselect';

// normal selector
const todosSelector = state => state.todoData.todos;

// memoized selector
const numCompletedTodosSelector = createSelector(
  todosSelector,
  todos => todos.filter(todo => todo.completed).length
);
```

Der `numCompletedTodosSelector` ist vom `todosSelector` abhängig und wird nur neu asgewertet, wenn dieser einen neuen Wert zurückgibt.

## Memoisierung in reselect

```js
const lengthSelector = rect => rect.length;
const widthSelector = rect => rect.width;

const areaSelector = rect =>
  lengthSelector(rect) * widthSelector(rect);

const memoizedAreaSelector = createSelector(
  lengthSelector,
  widthSelector,
  // will only be evaluated if one of the selectors
  // returned a new value
  (length, width) => length * width
);
```

## Memoisierung in reselect

Der letzte Funktionsaufruf wird die Fläche nicht neu berechnen:

```js
areaSelector({ length: 2, width: 3, col: 'red' });
areaSelector({ length: 2, width: 3, col: 'blue' });

memoizedAreaSelector({ length: 2, width: 3, col: 'red' });
memoizedAreaSelector({ length: 2, width: 3, col: 'blue' });
```

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
      return state + (action.amount || 1);
    case 'decrement':
      return state - (action.amount || 1);
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
    state + (action.amount || 1),
  decrement: (state, action) =>
    state - (action.amount || 1),
});
```

## createReducer

Implementierung für TypeScript - dies ermöglicht das feststellen von Typen:

```js
const counterReducer = createReducer(0, builder => {
  builder.addCase(
    'increment',
    (state, action) => state + (action.amount || 1)
  );
  builder.addCase(
    'decrement',
    (state, action) => state - (action.amount || 1)
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
const increment = createAction('increment', amount => ({
  amount: amount,
}));
const decrement = createAction('decrement', amount => ({
  amount: amount,
}));

const counterReducer = createReducer(0, {
  [increment]: (state, action) =>
    state + (action.amount || 1),
  [decrement]: (state, action) =>
    state - (action.amount || 1),
});
```

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
- Middleware, die eine einzelne Action erhält und basierend darauf verschiedene andere Actions asynchron auslöst (z.B. redux-thunk)

## Redux Middleware - Implementierung

```js
const myLogger = store => next => action => {
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
const fetcher = store => next => action => {
  if (action.type === 'fetchJson') {
    store.dispatch({ type: 'fetchJsonStart' });
    fetch(action.payload.url)
      .then(response => response.json())
      .then(parsedResponse => {
        store.dispatch({
          type: 'fetchJsonComplete',
          requestedUrl: url,
          response: parsedResponse,
        });
      });
  } else {
    next(action);
  }
};
```

## Eigene Middleware - Nachbau von Thunk

```js
const myThunk = store => next => action => {
  if (typeof action === 'function') {
    // we pass dispatch to the action function
    // so the action can call it
    return action(store.dispatch);
  } else {
    return next(action);
  }
};
```

# Redux Saga

## Redux Saga

Wie auch bei Thunk handelt es sich bei Saga um Middleware, die asynchrones Verhalten in Redux ermöglicht

## Installation

npm-Paket: `redux-saga`

## Saga Middleware einbinden

```js
import {
  getDefaultMiddleware,
  configureStore,
} from '@reduxjs/redux-toolkit';
import createSagaMiddleWare from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});
```

## Ein Saga ausführen

Ein Saga ist ähnlich einem separaten Thread in unserer Anwendung, der für side effects verantwortlich ist.

```js
import todoSaga from './todosaga';

sagaMiddleware.run(todoSaga);
```

## Ein Saga definieren

Sagas werden als Generators definiert

Der folgende Code bewirkt, dass z.B. `todosFetchRequest` von `fetchTodos` behandelt wird (welches wir als Generator erstellen werden).

```js
import { takeEvery } from 'redux-saga/effects';

function* todoSaga() {
  yield takeEvery('todosFetchRequest', fetchTodos);
  yield takeEvery('usersFetchRequest', fetchUsers);
}

export default todoSaga;
```

## Exkurs: asynchrone Logik mittels async und await

Asynchrone Funktionen mittels `async` und `await` sind seit ES2017 im JavaScript Standard

```js
const url = 'https://jsonplaceholder.typicode.com/todos';

async function fetchTodos() {
  const response = await fetch(url);
  const todoData = await response.json();
  console.log(todoData);
}
```

## Asynchrone Logik mittels Generators

Redux-Saga setzt etwas ganz ähnliches mittels Generators um:

```js
const url = 'https://jsonplaceholder.typicode.com/todos';

function* fetchTodos() {
  const response = yield fetch(url);
  const todoData = yield response.json();
  console.log(todoData);
}
```

([Benötigter Code zum Ausführen dieses Beispiels](https://gist.github.com/jakearchibald/31b89cba627924972ad6))

für Details zu Generators siehe nächster Abschnitt

## Redux Actions aus Saga dispatchen

mittels `put`:

```js
import { put } from 'redux-saga/effects';

function* fetchTodos() {
  const response = yield fetch(url);
  const todoData = yield response.json();
  yield put({
    type: 'todosFetchSuccess',
    payload: todoData,
  });
}
```

## Saga mit Fehlerbehandlung

```js
import { put } from 'redux-saga/effects';

function* fetchTodos() {
  const response = yield fetch(url);
  if (response.ok) {
    const todoData = yield response.json();
    yield put({
      type: 'todosFetchSuccess',
      payload: todoData,
    });
  } else {
    yield put({
      type: 'todosFetchError',
    });
  }
}
```

# Iterables, Iterators und Generators

## Iterable

Iterable = Objekt, über das mit `for ... of` iteriert werden kann

Beispiele: Arrays, Iterators

Iterables definieren eine Methode unter dem Symbol `Symbol.iterator`

## Iterators

Oberflächlich: Ein Iterator ist ein besonderes Objekt, über das wir mit `for (let item of iterator)` iterieren können.

Genauer Hintergrund: Ein Iterator ist ein besonderes Objekt, das eine `next`-Methode besitzt.

Iterators können auf verschiedene Arten erzeugt werden.

## Generator-Funktionen

Eine Generator-Funktion ist eine Möglichkeit, einen Iterator zu erstellen. Eine Generator-Funktion kann wiederholt betreten und verlassen werden. Sie "merkt" sich in der Zwischenzeit ihren Zustand.

## Generator-Funktionen

Eine Funktion kann mit `function*` definiert werden und anstatt eines `return`-Statements ein `yield` Statement enthalten - sie wird damit zu einer Generator-Funktion, die beim Aufruf einen Iterator zurückgibt.

```js
function* countTo100() {
  let i = 1;
  while (i <= 100) {
    yield i;
    i++;
  }
}
```

## Generator-Funktionen

Verwendung:

```js
for (let i of countTo100()) {
  console.log(i);
}
```

```js
const c = countTo100();
const firstEnetry = c.next();
console.log(firstEntry.value);
const secondEntry = c.next();
console.log(secondEntry.value);
```

# Ressourcen

## Ressourcen

- [Redux Style Guide (best practices)](https://redux.js.org/style-guide/style-guide)
- [Slides: Taming large React Applications with Redux (2016)](https://slides.com/joelkanzelmeyer/taming-large-redux-apps)

