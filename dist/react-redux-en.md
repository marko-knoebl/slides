# React & Redux

# Topics

## Topics (1/3)

- state management with reducers
- Redux 1
  - state management in Redux
  - Redux toolkit
  - Redux devtools
  - Redux store
- React and Redux
  - integrating Redux with React
  - Redux hooks
  - container components

## Topics (2/3)

- Redux 2
  - splitting / combining reducers
  - actions in more detail
  - asynchronous actions via Thunk
  - action creators
  - Redux and TypeScript

## Topics (3/3)

- Redux 3
  - createSlice
  - createAction
  - selectors and memoization
  - createReducer
- Redux 4
  - Redux ecosystem
  - Redux middleware
  - asynchronous actions via Sagas

# State management with actions and reducers

## State management with actions and reducers

See presentation on [React advanced](./react-advanced-en.html#/8)

# Redux 1

- State management in Redux
- Redux toolkit
- Redux devtools
- Redux store

# State management in Redux

## State management in Redux

In Redux: application state is stored _globally_.

The state is stored independent from React components.

There is _one_ store that contains all data.

A store may be composed of different parts.

## Redux reducers

Characteristics of Redux reducers (compared to the reducer hook):

the initial state is passed in as a default parameter:

```js
const initialState = []
const todosReducer = (oldState = initialState, action) => {...}
```

unknown actions should leave the state unchanged:

```js
default:
  return oldState;
```

## Example: Todos

```js
const initialState = [];
const todosReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'addTodo':
      return [
        ...oldState,
        {
          title: action.payload,
          completed: false,
          id: Math.max(0, ...oldState.map((t) => t.id)) + 1,
        },
      ];
    case 'deleteTodo':
      return oldState.filter(
        (todo) => todo.id !== action.payload
      );
    default:
      return oldState;
  }
};
```

# Redux toolkit

## Redux toolkit

**Redux toolkit** enables a simplified setup of Redux and associated libraries (in the spirit of _create-react-app_)

We will use it throughout this presentation

npm package: _@reduxjs/toolkit_

## Redux toolkit

functionality (see [what's included](https://redux-toolkit.js.org/introduction/quick-start#whats-included)):

- debugging (via _redux devtools_)
- asynchronous actions (via _thunk_)
- simpler action creators (via _createAction_)
- simpler reducer creation (via _createReducer_)
- simpler state updates by direct mutations (via _immer.js_)
- ...

# Redux devtools

## Redux devtools

<figure>
  <img src="assets/redux-devtools-airbnb.png" type="image/png" style="width: 100%" alt="Redux devtools showing the state of the airbnb website">
  <figcaption>Redux devtools showing the state of the airbnb website</figcaption>
</figure>

## Redux devtools

Browser plugin for Firefox / Chrome:

<https://github.com/zalmoxisus/redux-devtools-extension>

View Redux state via:

browser-devtools (F12) → _Redux_ → _State_ → _Chart/Tree_

## Redux devtools

websites that use Redux (we can inspect the Redux state):

- airbnb.com (Chrome only)
- reddit.com (state chart doesn't display)
- dropbox.com (Chrome only)
- tesla.com (very simple state)

## Redux devtools

functionality:

- inspect state
- display changes to the state
- trigger (dispatch) actions
- restore previous state (time traveling)
- save / restore state to / from JSON

# Redux store

## Redux store

creating a Redux store that will contain the state; the store is managed by a reducer

```js
// src/index.js
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
  title: 'learn Redux',
});
console.log(todosStore.getState());
```

# React and Redux

- integrating Redux with React
- Redux hooks
- container components

# React with Redux

## React with Redux

npm packages:

- `react-redux`
- `@types/react-redux`

## React with Redux: &lt;Provider>

Provider: is used to add a Redux store to a React app

All sub-components of the provider can access the store

## React-Redux: &lt;Provider>

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

# React with Redux: hooks

## useSelector

By using `useSelector` we can query the state of the Redux store.

We pass a so-called _selector function_ to `useSelector`.

The selector function receives the entire Redux state and returns a value that is derived from the state.

## useSelector - example

```js
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state);
  const numTodos = useSelector(state => state.length);
  const numCompletedTodos = useSelector(
    state => state.filter(todo => todo.completed).length
  );

  ...
};
```

## useDispatch

By using `useDispatch` we can access the `dispatch` function of the Redux store and use it to dispatch actions.

```js
import { useDispatch } from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch();
  ...
  dispatch({ type: 'deleteCompletedTodos' });
};
```

## useDispatch with TypeScript

```ts
const dispatch = useDispatch<TodoAppAction>();
```

# React with Redux: container components

## Container components

distinction that can be useful:

**presentational components**:

- "regular" React components that are unaware of the Redux store
- interact with their parent component normally
- easily reusable

**container components**:

- components that interact with the Redux store
- main role is to render subcomponents and connect them to the Redux store

## Container components

example:

generic React `TodoList` component with these props/events:

- `todos`
- `onToggle`
- `onDelete`

`TodoListContainer` component which connects the `TodoList` component with the Redux store:

- props of `TodoList` receive values from the Redux store's state
- events of `TodoList` trigger actions in the Redux store

## Container components

manual connection:

```js
const TodoListContainer = () => {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <TodoList
      todos={todos}
      onToggle={id => dispatch({ type: 'toggle', id: id })}
      onDelete={id => dispatch({ type: 'delete', id: id })}
    />
  );
};
```

## Container components

The `connect` function:

```js
import { connect } from 'react-redux';

const TodoListContainer = connect(
  state => ({ todos: state }),
  dispatch => ({
    onToggle: id => dispatch({ type: 'toggle', id: id }),
    onDelete: id => dispatch({ type: 'delete', id: id }),
  })
)(TodoList);
```

## Container components

The `connect` function:

`connect` receives two functions; these functions are often defined separately under the names `mapStateToProps` and `mapDispatchToProps`:

```js
import { connect } from 'react-redux';

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
```

## Example

We connect a simple `NumberInput` component to the Redux store

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

## Example

interface of the component:

- property: `value`
- event: `onIncrement`
- event: `onDecrement`

interface of the Redux store:

- state entry: `fontSize`
- action: `increaseFontSize`
- action: `reduceFontSize`

## Example (manual)

```js
import { useSelector, useDispatch } from 'react-redux';

const FontSizeInput = () => {
  const fontSize = useSelector(state => state.ui.fontSize);
  const dispatch = useDispatch();

  return (
    <NumberInput
      value={fontSize}
      onIncrement={dispatch({ type: 'increaseFontSize' })}
      onDecrement={dispatch({ type: 'reduceFontSize' })}
    />
  );
};
```

## Example (via connect)

```js
const FontSizeInput = connect(
  state => ({
    value: state.fontSize,
  }),
  dispatch => ({
    onIncrement: () =>
      dispatch({ type: 'increaseFontSize' }),
    onDecrement: () => dispatch({ type: 'reduceFontSize' }),
  })
)(NumberInput);
```

# Redux 2

- splitting / combining reducers
- actions in more detail
- asynchronous actions with Thunk
- action creators
- Redux and TypeScript

# Splitting / combining reducers

## Splitting / combining reducers

Reducers can be easily combined to form a "containing" reducer

## Splitting / combining reducers

example: online shop

- _root_ reducer: contains three entries managed by separate reducers:
  - _user_ reducer: data on the logged-in user
  - _products_ reducer: data on available products (from API)
  - _cart_ reducer: data on current contents of the cart

## Splitting / combining reducers

Combining reducers could be done manually - or via the function `combineReducers` from Redux

## Splitting / combining reducers

Reducers that directly manage data are usually implemented by using a `switch` statement.

Reducers that are composed of other reducers can be implemented like this:

```js
const shopReducer = (state, action) => ({
  user: userReducer(state.user, action),
  products: productsReducer(state.products, action),
  cart: cartReducer(state.cart, action),
});
```

## Splitting / combining reducers

via `combineReducers`:

```js
import { combineReducers } from '@reduxjs/toolkit';

const shopReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});
```

# Actions in more detail

## Actions

- actions describe a change to the state
- actions always have a _type_ property
- the _type_ property used to be capitalized (e.g. `ADD_TODO`), more recently alternatives have also become popular (e.g. `addTodo`)
- the _type_ is commonly namespaced, e.g. `"todoData/addTodo"` or `"ui/showAddTodoDialog"`
- actions often adhere to the _FSA_ standard, meaning they may have a _payload_, an _error_ and a _meta_ property

## Actions - examples

```js
const action = {
  type: 'todoData/todos/addTodo',
  title: 'Build my first Redux app',
};
```

```js
const action = {
  type: 'addTodo',
  payload: 'Build my first Redux app',
};
```

## Actions - examples

```js
const action = {
  type: 'todoData/todos/toggleTodo',
  id: 2,
};
```

```js
const action = {
  type: 'todoData/todos/toggleTodo',
  payload: 2,
};
```

# Asynchronous actions

## Asynchronous actions

Asynchronous actions can occur in the context of HTTP requests or from reading caches or entries in indexedDB.

In Redux asynchronous actions can be handled via _middleware_, e.g.:

- _thunk_
- _saga_

# Thunk

## Thunk

**Thunk**: middleware that enables asynchronous behaviour in Redux - by dispatching functions

## Thunk

For example, we could call:

```js
dispatch(loadTodosFunction);
```

## Thunk

As an asynchronous action, `loadTodosFunction` would not directly affect the redux store.

Instead, it would usually lead to other actions reaching the redux store:

- `loadTodosRequest` is triggered immediately
- `loadTodosSuccess` is triggered once the response has arrived
- `loadTodosError` could indicate a failure

## Thunk

In Thunk, the synchronous logic remains in the reducer while the asynchronous logic is included in the action.

## Example: loadTodos

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

We can call `dispatch(loadTodos)`

## Thunk sourcecode

The complete Thunk sourcecode is just 14 lines:

<https://github.com/reduxjs/redux-thunk/blob/master/src/index.js>

## Thunk: accessing the Redux state

Supply a second argument - it will receive the `getState` function as its value

```ts
const actionAsync = () => (dispatch, getState) => {
  dispatch(started());
  const s = getState();
  ...
};
```

# Action creators

## Action creators

Action creators are usually very simple functions used to create a specific action

```js
const addTodo = title => ({
  type: 'addTodo',
  payload: title,
});
```

usage:

```js
dispatch(addTodo('groceries'));
```

## Action creators vs. actions

Be aware of the double meaning: _Action creators_ are often called _actions_ for short in documentation.

## Action creators and thunk

Action creators may be necessary when using parametric actions in thunk

The following call would create and dispatch a thunk action that loads a specific todo:

```js
dispatch(loadTodoByIndex(3));
```

## Action creators and thunk

```js
// thunk action creator
const loadTodoByIndex = id => {
  function thunkAction(dispatch) {
    dispatch({ type: 'loadTodoRequest', payload: id });
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

## Action creators and thunk

shorter version with nested arrow functions

```js
// thunk action creator
const loadTodoByIndex = id => dispatch => {
  dispatch({ type: 'loadTodoRequest', payload: id });
  fetch(
    `https://jsonplaceholder.typicode.com/todos/${index}`
  )
    .then(response => response.json())
    .then(todo => {
      dispatch({ type: 'loadTodoSuccess', payload: todo });
    });
};
```

# Redux and TypeScript

## Redux and TypeScript

- defining action types
- typing a reducer
- getting state / action types from reducers
- typing a thunk action

## Defining action types

```ts
import { Action, PayloadAction } from '@reduxjs/toolkit';

type TodosAction =
  | PayloadAction<string, 'todos/addTodo'>
  | PayloadAction<number, 'todos/toggleTodo'>
  | Action<'todos/deleteCompletedTodos'>;
```

## Typing a reducer

```ts
type TodosState = Array<Todo>;

const todosReducer = (
  state: TodosState,
  action: TodosAction
): TodosState => {};
```

## Getting state type / action types from a reducer

```ts
import todosReducer from './todosReducer';

type TodosAction = Parameters<typeof todosReducer>[1];
type TodosState = ReturnType<typeof todosReducer>;
```

## Typing a Thunk action

```ts
import { Dispatch } from '@reduxjs/toolkit';

const asyncAction = () => (
  dispatch: Dispatch<TodosDataAction>
) => {
  dispatch({ type: 'todosData/loadTodosRequest' });
  ...
  dispatch({
    type: 'todosData/loadTodosSuccess',
    payload: data,
  });
};
```

# Exercises

- Todo list (extended)
- Shop
- Personal finance tool

# Exercise: todo list (advanced state)

Implementing a model for a todo list in Redux

## Exercise: todo list

data structure (example):

- root
  - todoData
    - todos
    - isFetching
    - hasError
  - ui
    - isAddTodoVisible
    - themeColor

## Exercise: todo list

Actions (examples):

- addTodo
- toggleTodo
- deleteTodo
- loadTodosFromApi

# Exercise: shop

## Exercise: shop

State consists of two important parts:

- product catalog
- number of products in the shopping cart

## Exercise: shop - state

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

## Exercise: shop

The two parts - `cart` and `products` - can be managed by two different reducers.

Combining the reducers into one reducer via the function `combineReducers`:

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

## Exercise: shop

```js
const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case 'addToCart':
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };
    default:
      return state;
  }
};
```

## Exercise: shop

```js
const products = [];
const productsReducer = (state = products, action) => {
  switch (action.type) {
    case 'setProducts':
      return action.payload;
    case 'addToCart':
      return state.map(product =>
        product.id === action.payload
          ? { ...product, inventory: product.inventory - 1 }
          : product
      );
    default:
      return state;
  }
};
```

# Redux 3

- createSlice
- createAction
- createReducer
- selectors and memoization

# createAction

## createAction

The `createAction` function from Redux toolkit can help with creating _action creators_ and providing string constants for _action types_:

```js
import { createAction } from '@reduxjs/toolkit';

// create an action creator
const addTodo = createAction('addTodo', title => ({
  payload: { title: title },
}));

const action1 = addTodo('groceries');
```

## createAction

`createAction` attaches a `type` property to each action creator:

```js
addTodo.type; // 'addTodo'
```

## createAction

using the `type` property in a reducer's switch statement:

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

`createAction` provides a custom `.toString()` method on each action creator:

```js
addTodo.toString(); // 'addTodo'
String(addTodo); // 'addTodo'
```

This can become useful when using `createReducer`.

# createReducer

## createReducer

`createReducer` can simplify writing reducers by:

- removing boilerplate
- allowing object mutations (through _immer.js_)

## createReducer

"traditional" implementation of a `counterReducer`:

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

simplified implementation via `createReducer`:

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

implementation with _TypeScript_ - this enables better type inference:

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

With `createReducer` we _can_ mutate existing state (see `logIn`) - this is possible via `immer.js` in the background

Returning derived state is possible as well (see `logOut`)

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

## createReducer and createAction

if we've used _createAction_ we can use the action creator as the key (because of its `.toString()` method):

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

# createSlice

## createSlice

- simplified creation of a reducer and associated action creators
- can be used if the actions associated with a reducer are not used in any other reducer

## createSlice

uses `createAction` and `createReducer` behind the scenes

## createSlice

```js
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todoData/todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        title: action.title,
        completed: false,
        id: Math.max(0, ...state.map((t) => t.id)) + 1,
      });
    },
    deleteTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.id),
  },
});
```

## createSlice

the call will create:

a reducer (`todosSlice.reducer`)

two action creators:

- `todosSlice.actions.addTodo` (action type: `"todoData/todos/addTodo"`)
- `todosSlice.actions.deleteTodo` (action type: `"todoData/todos/deleteTodo"`)

## createSlice

calling an action creator:

```js
addTodo('groceries');
```

```json
{
  "type": "todoData/todos/addTodo",
  "payload": "groceries"
}
```

# Selectors

## Storing the minimal state

Best practice in Redux: always store the _minimal_ state tree (i.e. no redundant data)

Examples of non-conforming states:

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

## Storing the minimal state

Data like `maxTodoId` and `totalPrice` can be computed from the other data and shouldn't have an extra entry in the state.

## Selectors

Selector = function that computes derived data based on a minimal state

Selectors receive the entire state as their argument and return derived data.

## Example Selectors

- `getMaxTodoId`
- `getFilteredTodos`

## Example Selectors

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

# Memoized selectors

## Memoization

Memoization is the practice of caching return values of a pure function so they don't need to be recomputed every time

## Memoization in reselect

**Reselect**: library for memoization of selectors

## Memoization in reselect

Reselect can be used for memoizing complex selectors

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

`numCompletedTodosSelector` depends on `todosSelector` and will only be evaluated if `todosSelector` returns a new value.

## Memoization in reselect

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

## Memoization in reselect

The last function call will not recompute the area

```js
areaSelector({ length: 2, width: 3, col: 'red' });
areaSelector({ length: 2, width: 3, col: 'blue' });

memoizedAreaSelector({ length: 2, width: 3, col: 'red' });
memoizedAreaSelector({ length: 2, width: 3, col: 'blue' });
```

# Redux 4

- Redux ecosystem
- Redux middleware
- asynchronous actions via Sagas

# Redux Ecosystem

## Redux Ecosystem - examples

- redux-logger
- redux-thunk: asynchronous actions
- redux-saga: asynchronous actions
- normalizr: normalize state data structure
- reselect: better performance via memoized derived data
- redux-actions: reduces boilerplate (createAction, createReducer)
- immutable.js

## Redux Middleware

Middleware can be added to a Redux store.

It provides an extension and can interfere between dispatching an action and the moment it reaches the reducer.

## Redux Middleware - examples

- middleware that logs the action (e.g. redux-logger)
- middleware that receives a single action and dispatches multiple asynchronous actions based on it (e.g. redux-thunk)

## Redux Middleware - implementation

```js
const myLogger = store => next => action => {
  console.log(action);
  next(action);
};
```

## Redux Middleware - inclusion

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

## Custom Middleware - json fetcher

example usage:

```js
dispatch({
  type: 'fetchJson',
  url: 'https://jsonplaceholder.typicode.com/todos',
});
```

## Custom Middleware - json fetcher

In the background the action `fetchJson` should dispatch two separate actions:

- `fetchJsonStart`
- `fetchJsonComplete` (this action should contain the json content)

## Custom Middleware - json fetcher

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

## Custom middleware - recreating thunk

```js
const myThunk = store => next => action => {
  if (typeof action === 'function') {
    // we pass dispatch to the action function
    // so the action can use it
    return action(store.dispatch);
  } else {
    return next(action);
  }
};
```

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

# Iterables, iterators and generators

## Iterables

Iterable = object which can be iterated over via `for ... of`

Examples: Arrays, Iterators

Iterables define a Method under the symbol `Symbol.iterator`

## Iterators

Superficially: An iterator is a particular object that can be iterated over via `for (let item of iterator)`.

More precisely: An iterator is a particular object that has a method named `next`.

Iterators can be created in various ways.

## Generator functions

A generator function is one way to to create an iterator. A generator function can be entered an left repeatedly. It will remember its state in the meantime.

## Generator functions

A generator function is defined with the keyword `function*`. Instead of `return` statements it will contain `yield` statements.

```js
function* countTo100() {
  let i = 1;
  while (i <= 100) {
    yield i;
    i++;
  }
}
```

## Generator functions

usage:

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

# Resources

## Resources

- [Redux Style Guide (best practices)](https://redux.js.org/style-guide/style-guide)
- [Slides: Taming large React Applications with Redux (2016)](https://slides.com/joelkanzelmeyer/taming-large-redux-apps)
