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

sagaMiddleWare.run(todoSaga);
```

## Ein Saga definieren

Sagas werden as Generators definiert; Sie verbinden bestimmte Actions mit Funktionen, die wiederum andere Actions dispatchen können

```js
import { takeEvery } from 'redux-saga/effects';

function* todoSaga() {
  yield takeEvery('TODOS_FETCH_REQUEST', fetchTodos);
  yield takeEvery('USERS_FETCH_REQUEST', fetchUsers);
}

export default todoSaga;
```

## Ein Saga definieren

```js
function* fetchTodos() {
  const todoData = yield fetch(
    'https://jsonplaceholder.typicode.com/todos'
  ).then(response => response.json());
  yield put({
    type: 'TODOS_FETCH_SUCCESS',
    payload: todoData,
  });
}
```
