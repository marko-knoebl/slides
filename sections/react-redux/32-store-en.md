# Redux store

## Redux store

creating a Redux store that will contain the state; the store is managed by a reducer

```js
// store.js

import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosReducer';

const todosStore = configureStore({
  reducer: todosReducer,
});
```

## Redux store

directly using the store:

```js
console.log(todosStore.getState());
todosStore.dispatch({
  type: 'ADD_TODO',
  title: 'learn Redux',
});
console.log(todosStore.getState());
```
