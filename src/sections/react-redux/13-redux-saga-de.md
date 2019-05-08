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
