# React & Redux

# State Management mit Reducern

## State Managemenet mit Reducern

Siehe Präsentation zu [React advanced](/react-advanced-de.html)

# State Management in Redux

## State Management in Redux

Bei Redux: Anwendungszustand wird _global_ gespeichert.

Es gibt _einen_ Store, in dem alle Daten gesammelt sind.

Ein Store kann in verschiedene Teile aufgeteilt sein.

## Installation

```bash
npm install redux
```

## Beispiel: Todos

Unterschiede zwischen Redux und dem Reducer Hook:

Der Anfangszustand wird bei Redux dem Reducer als Standardparameter übergeben

```js
const initialState = []
const todosReducer = (oldState = initialState, action) => {
    ...
}
```

Bei unbekannten Actions soll der Zustand in Redux unverändert bleiben:

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

## Beispiel: Todos Store

```js
// store.js
import { createStore } from 'redux';
import todosReducer from 'todosReducer';

const todosStore = createStore(todosReducer);
```

## Beispiel: Todos Store

Direkte Verwendung:

```js
todosStore.getState();
todosStore.dispatch({
  type: 'ADD_TODO',
  title: 'learn Redux',
});
todosStore.getState();
```

## Redux Devtools

Browser-plugn:

https://github.com/zalmoxisus/redux-devtools-extension

## Redux Devtools

einbinden:

```bash
npm install redux-devtools-extension
```

```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware())
);
```

## Redux Devtools

Funktionalitäten:

- State inspizieren
- Änderungen am State anzeigen
- Actions auslösen (dispatchen)
- Früheren State wiederherstellen (Time Traveling)
- State als JSON speichern / wiederherstellen

## Beispiel: Shopping cart

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

## Beispiel: Shopping cart

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

## Beispiel: Shopping cart

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

## Beispiel: Shopping cart

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

# Aufgabe: Todolist

Umsetzung eines Modells für eine Todoliste in Redux

## Aufgabe: Todolist

Datenstruktur (Beispiel):

- todoData
  - todos
  - isFetching
  - hasError
- ui
  - newTodoTitle
  - filterText

## Aufgabe: Todolist

Actions (Beispiel):

- addTodo
- toggleTodo
- deleteTodo
- loadTodosFromApi

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

_Reselect_ = Library für Memoisierung.

Einfaches Standardverhalten:

Letzter Input und Output einer Berechnung werden gecacht; Wird die Berechnung erneut mit dem gleichen Input angefordert, wird das gecachte Resultat verwendet

## Memoisierung in reselect

```js
import { createSelector } from 'reselect';

// regular function that computes the area of a rectangle
const getRectArea = rect => rect.length * rect.width;

// memoized function that computes the area of a rectangle
const getRectAreaMemoized = createSelector(
  // selector functions signify which input values to watch:
  [rect => rect.length, rect => rect.width],
  // this function will only be called if one of the
  // input values changed:
  (length, width) => length * width
);
```

## Memoisierung in reselect

The last function call will not recompute the area

```js
getRectArea({ length: 2, width: 3, color: 'blue' });
getRectArea({ length: 2, width: 3, color: 'red' });

getRectAreaMemoized({ length: 2, width: 3, color: 'blue' });
getRectAreaMemoized({ length: 2, width: 3, color: 'red' });
```

## Reselect installieren

```bash
npm install reselect
```

# Redux im Detail

## Elemente von Redux

- _state_: Anwendungszustand
- _action_: Beschreibt eine Änderung am _state_
- _action creator_: Erzeugt eine _action_
- _reducer_: Führt einen _state_ basierend auf einer _action_ in einen nächsten _state_ über
- _store_: Ort der Speicherung für _state_

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

## Actions

- Beschreiben eine Zustandsänderung
- Sind js-Objekte mit einer _type_-Property und _optional_ beliebigen anderen Properties
- Die _type_-Property ist üblicherweise ein String, oft als Konstante in einem separaten Modul definiert
- Actions werden oft nach dem _FSA_-Standard definiert, der eine `payload`-Property definiert, sowie `error` und `meta`

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

## Actions - Beispiele

```js
let a = {
  type: TOGGLE_TODO,
  payload: {
    id: 2,
  },
};
```

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

## Beispiel: Todo-Verwaltung mit Redux

# Asynchrone Actions

## Asynchrone Actions

Asynchrone Actions betreffen beispielsweise HTTP-Anfragen oder das Abfragen von Caches oder indexedDB-Einträgen.

Asynchrone Actions können in Redux mit _middleware_ realisiert werden, z.B.:

- _thunk_
- _saga_

# Redux Thunk

## Redux Thunk

Thunk ist Middleware, die asynchrones Verhalten in Redux - durch das Dispatchen von Funktionen - ermöglicht

## Thunk sourcecode

kompletter sourcecode:

https://github.com/reduxjs/redux-thunk/blob/master/src/index.js

## Redux Thunk

Beispielhafter Aufruf:

```js
dispatch(getTodosFunction);
```

## Redux Thunk

Als asynchrone Funktion würde `getTodosFunction` nicht direkt den Redux-Store verändern.

Stattdessen würde zwei andere Actions den store erreichen:

- Die Action `LOAD_TODOS_REQUEST` würde sofort dispatched werden
- Die Action `LOAD_TODOS_SUCCESS` würde dispatched werden, sobald die Netzwerkanfrage erfolgreich war

## Redux Thunk

In Thunk verbleibt die synchrone Logik im Reducer.

Die asynchrone Logik wird in den Action Creator aufgenommen.

## Installation

```bash
npm install redux-thunk
```

## Thunk einbinden

```ts
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
```

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

## Thunk: Zugriff auf den Redux store

Ein zweites Argument kann optional übergeben werden: Es erhält die `getState`-Funktion als Wert.

```ts
const actionAsync = () => (dispatch, getState) => {
  dispatch(started());
  const s = getState();
  ...
};
```

## Aufgabe: Todos von REST API laden

Erstelle ein thunk, das Todos vom folgenden API lädt:

`https://jsonplaceholder.typicode.com/todos`

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

# Redux Saga

## Redux Saga

Wie auch bei Thunk handelt es sich bei Saga um Middleware, die asynchrones Verhalten in Redux ermöglicht

## Installation

```bash
npm install redux-saga
```

## Saga Middleware einbinden

```js
import createSagaMiddleWare from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);
```

## Ein Saga ausführen

Ein Saga ist ähnlich einem separaten Thread in unserer Anwendung, der für side effects verantwortlich ist.

```js
import todoSaga from './todosaga';

sagaMiddleware.run(todoSaga);
```

## Ein Saga definieren

Sagas werden als Generators definiert

Der folgende Code bewirkt, dass z.B. `TODOS_FETCH_REQUEST` von `fetchTodos` behandelt wird.

```js
import { takeEvery } from 'redux-saga/effects';

function* todoSaga() {
  yield takeEvery('TODOS_FETCH_REQUEST', fetchTodos);
  yield takeEvery('USERS_FETCH_REQUEST', fetchUsers);
}

export default todoSaga;
```

## Asynchrone Logik mittels async und await

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

## Redux Actions aus Saga dispatchen

mittels `put`:

```js
import { put } from 'redux-saga/effects';

function* fetchTodos() {
  const response = yield fetch(url);
  const todoData = yield response.json();
  yield put({
    type: 'TODOS_FETCH_SUCCESS',
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
      type: 'TODOS_FETCH_SUCCESS',
      payload: todoData,
    });
  } else {
    cield put({
      type: 'TODOS_FETCH_ERROR'
    })
  }
}
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
          requestedUrl: url,
          response: parsedResponse,
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

## Präsentation: Taming Large React Applications w/ Redux

https://slides.com/joelkanzelmeyer/taming-large-redux-apps

# React mit Redux (mit Hooks)

## React mit Redux (mit Hooks)

https://redux.js.org/basics/usage-with-react

Setup: `npm install redux react-redux`

Typescript: `npm install @types/react-redux`

## React-Redux: < Provider >

Provider: Hinzufügen von Redux-Store zu einer React-App

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

## useSelector

Mit `useSelector` können wir in einer React-Komponente die Inhalte des Redux-Stores abfragen.

Wir übergeben eine sogenannte _Selektorfunktion_ an `useSelektor`. Die Selektorfunktion erhält den gesamten Redux-State und gibt einen daraus abgeleiteten Wert zurück.

Beispiel:

```js
const numTodos = useSelector(state => state.todos.length);
```

## useDispatch

Mit `useDispatch` können wir aus React auf die `dispatch`-Funktion des Redux-Stores zugreifen und damit Actions dispatchen.

```js
const dispatch = useDispatch();

dispatch({
  type: 'REMOVE_COMPLETED_TODOS',
});
```

## useDispatch mit TypeScript

```ts
import { Dispatch } from 'redux';

const dispatch: Dispatch<TodolistAction> = useDispatch();
```

# React mit Redux (mit Klassen)

## React mit Redux (mit Klassen)

https://redux.js.org/basics/usage-with-react

Setup: `npm install redux react-redux`

Typescript: `npm install @types/react-redux`

## Presentational und Container Components

- presentational components: "Normale" React-Komponenten (wiederverwendbar)
- container components: Zugriff auf Redux-Store / Mit dem Redux-Store verbunden

## React-Redux: < Provider >

Provider: Hinzufügen von Redux-Store zu einer React-App

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

## Counter: Connect

connect: verbindet React-Komponenten mit dem Redux store

- `mapStateToProps`: verbindet React props mit Redux state
- `mapDispatchToProps`: verbindet React props mit Redux actions

Aufruf:

```js
const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
```

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

## Counter: Dispatch mit TypeScript

```ts
import { Action, Dispatch } from 'redux';

interface MyAction extends Action {
  payload: any;
}

const mapDispatchToProps = (
  dispatch: Dispatch<MyAction>
) => ({
  increment: () => {
    dispatch({ type: 'INCREMENT', payload: 1 });
  },
});
```

## Redux mit TypeScript

siehe:

- https://github.com/piotrwitek/react-redux-typescript-guide
- https://medium.com/@resir014/a-type-safe-approach-to-redux-stores-in-typescript-6474e012b81e
- https://www.carlrippon.com/strongly-typed-react-redux-code-with-typescript/

