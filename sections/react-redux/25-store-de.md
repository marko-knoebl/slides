# Redux Store

## Redux Store

Erstellen eines Redux Stores, der den State enthält; der Store wird von einem Reducer verwaltet

```js
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
  payload: 'learn Redux',
});
console.log(todosStore.getState());
```
