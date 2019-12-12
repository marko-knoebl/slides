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
