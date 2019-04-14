# Redux Saga

## Redux Saga

Like Thunk, Saga is a middleware that enables asynchronous behaviour in Redux

## Installation

```bash
npm install redux-saga
```

## Including Saga Middleware

```js
import createSagaMiddleWare from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);
```

## Running a Saga

A saga is like a separate thread in our application that is responsible for side effects.

```js
import todoSaga from './todosaga';

sagaMiddleWare.run(todoSaga);
```

## Defining a Saga

Sagas are defined as generators; they can connect specific actions to functions which can in turn dispatch other actions

```js
import { takeEvery } from 'redux-saga/effects';

function* todoSaga() {
  yield takeEvery('TODOS_FETCH_REQUEST', fetchTodos);
  yield takeEvery('USERS_FETCH_REQUEST', fetchUsers);
}

export default todoSaga;
```

## Defining a Saga

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
