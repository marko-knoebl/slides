# Redux Saga

## Redux Saga

Like Thunk, Saga is a middleware that enables asynchronous behaviour in Redux

## Installation

npm package: `redux-saga`

## Including Saga middleware

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

## Running a saga

A saga is like a separate thread in our application that is responsible for side effects.

```js
import todoSaga from './todosaga';

sagaMiddleware.run(todoSaga);
```

## Defining a Saga

Sagas are defined as generators

The following code causes any `todosFetchRequest` action to be handled by `fetchTodos` (which we will define as a generator)

```js
import { takeEvery } from 'redux-saga/effects';

function* todoSaga() {
  yield takeEvery('todosFetchRequest', fetchTodos);
  yield takeEvery('usersFetchRequest', fetchUsers);
}

export default todoSaga;
```

## Digression: asynchronous logic via async and await

Asynchronous functions via `async` and `await` are part of JavaScript since ES2017

```js
const url = 'https://jsonplaceholder.typicode.com/todos';

async function fetchTodos() {
  const response = await fetch(url);
  const todoData = await response.json();
  console.log(todoData);
}
```

## Asynchronous logic via generators

Redux-Saga implements something very similar via generators:

```js
const url = 'https://jsonplaceholder.typicode.com/todos';

function* fetchTodos() {
  const response = yield fetch(url);
  const todoData = yield response.json();
  console.log(todoData);
}
```

([Code to run this example](https://gist.github.com/jakearchibald/31b89cba627924972ad6))

For details on generators see the next section

## Dispatching Redux actions

via `put`:

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

## Saga with error handling

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
