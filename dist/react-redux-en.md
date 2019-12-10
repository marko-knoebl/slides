# React & Redux

# State management with reducers

## State management with reducers

See presentation on [React advanced](./react-advanced-en.html)

# State management in Redux

## State management in Redux

In Redux: application state is stored _globally_.

There is _one_ store that contains all data.

A store may be composed of different parts.

## Users of Redux

- [airbnb](https://airbnb.com)
- [reddit](https://reddit.com)
- [dropbox](https://dropbox.com)

## Redux devtools

<figure>
  <img src="assets/redux-devtools-airbnb.png" type="image/png" style="width: 100%" alt="Redux devtools showing the state of the airbnb website">
  <figcaption>Redux devtools showing the state of the airbnb website</figcaption>
</figure>

## Redux devtools

Browser plugin for Firefox / Chrome:

https://github.com/zalmoxisus/redux-devtools-extension

View Redux state via:

browser-devtools → _Redux_ → _State_ → _Chart/Tree_

## Installation of Redux

```bash
npm install redux
```

## Example: Todos

Differences between Redux and the reducer hook:

In Redux the initial state is passed to the reducer as a default parameter:

```js
const initialState = []
const todosReducer = (oldState = initialState, action) => {
    ...
}
```

If a reducer does not recognize an action the Redux state should remain unchanged:

```js
default:
  return oldState;
```

## Example: Todos

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

## Example: todos store

```js
// store.js
import { createStore } from 'redux';
import todosReducer from 'todosReducer';

const todosStore = createStore(todosReducer);
```

## Example: todos store

direct use:

```js
todosStore.getState();
todosStore.dispatch({
  type: 'ADD_TODO',
  title: 'learn Redux',
});
todosStore.getState();
```

## Redux devtools

Including the devtools in an application:

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

## Redux devtools

functionality:

- inspect state
- display changes to the state
- trigger (dispatch) actions
- restore previous state (time traveling)
- saving / restoring State from / to JSON

## Example: shopping cart

State consists of two important parts:

- product catalog
- number of products in the shopping cart

## Example: shopping cart - state

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

## Example: shopping cart

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

## Example: shopping cart

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

## Example: shopping cart

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

# Exercise: todo list

Implementing a model for a todo list in Redux

## Exercise: todo list

data structure (example):

- todoData
  - todos
  - isFetching
  - hasError
- ui
  - newTodoTitle
  - filterText

## Exercise: todo list

Actions (examples):

- addTodo
- toggleTodo
- deleteTodo
- loadTodosFromApi

# Redux in detail

## Basic elements of Redux

- _state_
- _action_: object that describes a change to the _state_
- _action creator_: simple function that creates an _action_
- _reducer_: based on an action, transforms the old _state_ into a new _state_
- _store_: where the _state_ is stored
- _selector_: function that reads some (derived) data from the state

# Actions

## Actions

- actions describe a change to the state
- actions are objects with a _type_ property and optionally other properties
- the _type_ property is usually a string, often defined as a constant in a separate module
- actions often adhere to the _FSA_ standard, meaning they may have a _payload_, an _error_ and a _meta_ property

## Actions - examples

```js
import { ADD_TODO } from './constants';

let a = {
  type: ADD_TODO,
  payload: {
    title: 'Build my first redux app',
  },
};
```

## Actions - examples

```js
let a = {
  type: TOGGLE_TODO,
  payload: {
    id: 2,
  },
};
```

## Action creators

Action creators are usually very simple functions used to create a specific action

```js
const addTodo = title => ({
  type: ADD_TODO,
  payload: {
    title,
  },
});
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

Functions that compute derived data based on a minimal state are called selectors. They take in the complete state as an argument and return derived data.

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

Reselect is a library that can help with memoization. Its default behavior is very simple: It remembers the last input for a function; if that function is called again with the same input the computation is skipped and it will directly output the previously stored resut

## Memoization in reselect

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

## Memoization in reselect

The last function call will not recompute the area

```js
getRectArea({ length: 2, width: 3, color: 'blue' });
getRectArea({ length: 2, width: 3, color: 'red' });

getRectAreaMemoized({ length: 2, width: 3, color: 'blue' });
getRectAreaMemoized({ length: 2, width: 3, color: 'red' });
```

## Installing reselect

```bash
npm install reselect
```

# Asynchronous actions

## Asynchronous actions

Asynchronous actions can occur in the context of HTTP requests or from reading caches or entries in indexedDB.

In Redux asynchronous actions can be handled via _middleware_, e.g.:

- _thunk_
- _saga_

# Redux Thunk

## Redux Thunk

Thunk is a middleware that enables asynchronous behaviour in Redux - by dispatching functions

With Thunk it's possible to dispatch so-called _asynchronous actions_ which in turn can dispatch multiple synchronous actions after some time.

## Thunk sourcecode

complete sourcecode:

https://github.com/reduxjs/redux-thunk/blob/master/src/index.js

## Redux Thunk

For example, we could call:

```js
dispatch(getTodosFunction);
```

## Redux Thunk

As an asynchronous action, `getTodosFunction` would not directly affect the redux store.

Instead, it would usually lead to two other actions reaching the redux store:

- the action `LOAD_TODOS_REQUEST` would be dispatched immediately
- the action `LOAD_TODOS_SUCCESS` would be dispatched once the network request is complete

## Redux Thunk

In Thunk, the synchronous logic remains in the reducer while the asynchronous logic is included in the action creator.

## Installation

```bash
npm install redux-thunk
```

## Including Thunk

```ts
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
```

## example: timer

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

## Redux Thunk with TypeScript

We have to give the complete signature of `dispatch`:

```ts
dispatch: ThunkDispatch<IState, void, IAction>
```

## example: timer

The reducer only receives synchronous actions

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

## Thunk: accessing the Redux state

Supply a second argument - it will receive the `getState` function as its value

```ts
const actionAsync = () => (
  dispatch: ThunkDispatch<IState, void, Action>,
  getState: () => IState
) => {
  dispatch(started());
  const s = getState();
  ...
};
```

## task: loading Todos from a REST API

create a thunk that will load example todos from `https://jsonplaceholder.typicode.com/todos`

## task: loading Todos from a GraphQL API

create a thunk that will load example todos from `https://5qn401kkl9.lp.gql.zone/graphql`

(admin: https://launchpad.graphql.com/5qn401kkl9)

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

sagaMiddleware.run(todoSaga);
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

## Asynchronous logic via async and await

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

## Dispatching Redux actions

via `put`:

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

## Saga with error handling

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
    yield put({
      type: 'TODOS_FETCH_ERROR'
    })
  }
}
```

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

Middleware can be added to a Redux store. It provides an extension and can interfere between dispatching an action and the moment it reaches the reducer.

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
const store = createStore(
  rootReducer,
  applyMiddleware(myLogger)
);
```

## Custom Middleware - json fetcher

example usage:

```js
dispatch({
  type: 'FETCH_JSON',
  payload: {
    url: 'https://jsonplaceholder.typicode.com/todos',
  },
});
```

## Custom Middleware - json fetcher

In the background the action `FETCH_JSON` should dispatch two separate actions: `FETCH_JSON_START` and `FETCH_JSON_COMPLETE`. The action `FETCH_JSON_COMPLETE` should carry the json content as its payload.

## Custom Middleware - json fetcher

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

## Custom Middleware - dispatching a function

We want to be even more flexible and be able to dispatch a function. This function should then be able to do asynchronous requests and dispatch more actions during that time.

## Custom Middleware - dispatching a function

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

## resource: Taming Large React Applications w/ Redux

https://slides.com/joelkanzelmeyer/taming-large-redux-apps

# React with Redux (with Hooks)

## React with Redux (with Hooks)

https://redux.js.org/basics/usage-with-react

Setup: `npm install redux react-redux`

Typescript: `npm install @types/react-redux`

## React-Redux: < Provider >

Provider: Helps with adding a redux store to a React app

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

By using `useSelector` we can query the state of the Redux store.

We pass a so-called _selector function_ to `useSelector`. The selector function receives the entire Redux state and returns a value that is derived from the state.

example:

```js
const numTodos = useSelector(state => state.todos.length);
```

## useDispatch

By using `useDispatch` we can access the `dispatch` function of the Redux store and use it to dispatch actions.

```js
const dispatch = useDispatch();

dispatch({
  type: 'REMOVE_COMPLETED_TODOS',
});
```

## useDispatch with TypeScript

```ts
import { Dispatch } from 'redux';

const dispatch: Dispatch<TodolistAction> = useDispatch();
```

# React with Redux (with classes)

## React with Redux (with classes)

https://redux.js.org/basics/usage-with-react

Setup: `npm install redux react-redux`

TypeScript: `npm install @types/react-redux`

## Presentational and Container Components

- presentational components: "ordinary" React components (reusable)
- container components: Have access to the redux store / are connected to the Redux store

## React-Redux: < Provider >

Provider: Helps with adding a redux store to a React app

## React-Redux: < Provider >

```js
// index.js
import { Provider } from 'react-redux';

[...]

ReactDOM.render(
  <Provider store={myStore}>
    <App/>
  </Provider>
);
```

## Counter: Connect

connect: connects React components to the Redux store

- `mapStateToProps`: connects React props to Redux state
- `mapDispatchToProps`: connects React props to Redux actions

calling connect:

```js
component = connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
```

## Counter: Connect (state)

```jsx
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { count: state.count };
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
const mapDispatchToProps = dispatch => {
  // dispatch refers to the dispatch function of the store;
  // it is provided to us via dependency injection.
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};
```

```xml
<button onClick={this.props.increment}>+</button>
<button onClick={this.props.decrement}>-</button>
```

## Counter: Dispatch with TypeScript

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

## Redux with TypeScript

see https://github.com/piotrwitek/react-redux-typescript-guide

