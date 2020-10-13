# Redux store

## Redux store

creating a Redux store that will contain the state; the store is managed by a reducer

```js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './state/todos';

const todosStore = configureStore({
  reducer: todosReducer,
});
```

## Redux store

Directly using the store:

```js
console.log(todosStore.getState());
todosStore.dispatch({
  type: 'addTodo',
  payload: 'learn Redux',
});
console.log(todosStore.getState());
```
