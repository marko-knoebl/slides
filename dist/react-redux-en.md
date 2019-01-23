# Redux

## State management with Redux

---

## State management

In more complex fontend-applications it makes sense to manage the state (model) separately from the view.

Often the entire application state is represented by a data model and every change to the state will be done by triggering a change to the data model.

---

## Basic principles of state management libraries

- application state is stored in a global object
- _every_ state change is triggered by an _action_, which describes the change in detail

---

## State management libraries

- Redux (commonly used with React)
- MobX (commonly used with React)
- ngrx (commonly used with Angular)
- vuex (used with vue)

---

## what makes Redux special

In Redux a state change is applied via a _reducer_ function, wich transform the previous state into the new state

---

## Installation

```bash
npm install redux
```

---

## Simple Redux example: counter

We create a counter which has two actions, _increment_ and _decrement_.

These will be represented by JavaScript objects:

```json
{ "type": "INCREMENT" }
```

```json
{ "type": "DECREMENT" }
```

---

## Simple Redux example: counter

The central element is the _reducer_ function:

```js
const initialState = { count: 0 };

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

---

## Simple Redux example: counter

The reducer function receives the old state and an action describing a state change

The reducer function returns the new state

---

## Simple Redux example: counter

Store = object that stores the redux state; a store is managed by a reducer

```js
// stores.js
import { createStore } from 'redux';

// counter = reducer
const counterStore = createStore(counter);
```

---

## Simple Redux example: counter

Using the store

```js
counterStore.getState(); // {count: 0}
counterStore.dispatch({ type: 'INCREMENT' });
counterStore.getState(); // {count: 1}
```

---

## Exercise

Create a new `mathadorStore` with an initial state of `{number: 1}` and two actions corresponding to "\*3" and "-7"

additinal tasks: reach the number 4 (or 10) by dispatching actions

----

# React with Redux

---

## React with Redux

https://redux.js.org/basics/usage-with-react

Setup: `npm install redux react-redux`

TypeScript: `npm install @types/react-redux`

---

## Presentational and Container Components

- presentational components: "Ordinary" React components (reusable)
- container components: Have access to the redux store / are connected with the Redux store

---

## React-Redux: < Provider >

Provider: Helps in adding a redux store to a React App

---

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

---

## Redux devtools

Browser-plugin:

https://github.com/zalmoxisus/redux-devtools-extension

---

## Redux devtools

include via:

```js
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

// typescript: (window as any)
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware())
);
```

---

## Counter: Connect

connect: connects React components with the Redux store

- mapStateToProps: connects React props to Redux state
- mapDispatchToProps: connects React props to Redux actions

calling connect:

```js
component = connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
```

---

## Counter: Connect (state)

```jsx
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { count: state };
}

[...]
    <div className="App">
      {JSON.stringify(this.props)}
    </div>
[...]

export default connect(mapStateToProps)(App);
```

---

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

---

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

----

# Immutability

---

## Immutability

important concept in functional programing and with React / Redux

---

## Immutability

When using Redux or React's PureComponent:

Objects that describe the application state must not be modified directly

Instead, these Objects should be replaced by new, modified Objects

Advantages: increased performance, more possibilities when it comes to debugging

---

## PureComponent

Instead of `Component` we can inherit from `PureComponent`:

The component will onl be rerendered if either state or props have changed

Entries in state or props are considered to have changed only if they refer to a different object than before

---

## Data managment without mutations

---

## Data managment without mutations: Arrays

```js
let names = ['Alice', 'Bob', 'Charlie'];
// invalid: modifies the original array
names.push('Dan');

// instead: new array
let newNames = names.slice();
newNames.push('Dan');
// overwrite the original
names = newNames;

// or:
names = [...names, 'Dan'];
```

---

## Data managment without mutations: Objects

```js
let user = {
  name: 'john'
  email: 'john@doe.com'
}
// invalid: modifies the object
user.email = 'johndoe@gmail.com';

// instead: create a new object
let newUser = { ...user, email: 'johndoe@gmail.com' };
```

----

# Redux in detail

---

## Basic elements of Redux

- _state_
- _action_: object that describes a change to the _state_
- _action creator_: simple function that creates an _action_
- _reducer_: based on an action, transforms the old _state_ into a new _state_
- _store_: where the _state_ is stored

---

## example: state

```js
{
  todos: [
    { id: 1, title: 'laundry', completed: false },
    { id: 2, title: 'groceries', completed: true },
    { id: 3, title: 'taxes', completed: false },
  ],
  filterText: '',
}
```

---

## actions

- actions describe a change to the state
- actions are objects with a _type_-property and optionally other properties
- the _type_ property is usually a string, often defined as a constant in a separate module
- actions often adhere to the _FSA_ standard, meaning they may have a _payload_, an _error_ and a _meta_ property

---

## Actions - examples

```js
import { ADD_TODO } from './constants';

let a = {
  type: ADD_TODO,
  payload: 'Build my first redux app',
};
```

---

## Actions - examples

```js
let a = {
  type: TOGGLE_TODO,
  payload: 2,
};
```

---

## Action creators

Action creators are usually very simple functions used to create a specific action

```js
const addTodo = (title, completed = false) => ({
  type: ADD_TODO,
  payload: {
    title,
    completed,
  },
});
```

---

## Reducers

- Actions are processed by reducer functions
- reducers receive the old state and an action
- reducers return the new state
- note: reducers never modify the old state object, but they construct a new one based on it (reducers are pure functions)

---

## Stores

```js
import { createStore } from 'redux';

// counter = reducer
const store = createStore(counter);
```

---

## combining reducers

```js
const rootReducer = combineReducers({
  a: counter,
  b: mathador,
});

const rootStore = createStore(rootReducer);

rootStore.getState();
// {a: {count: 0}, b: {number: 1}}

rootStore.dispatch({ type: 'INCREMENT' });
// {a: {count: 1}, b: {number: 1}}
```

---

## Exercise: state managment in the todo app

----

# Redux Ecosystem

---

## Redux Ecosystem - examples

- redux-logger
- redux-thunk: asynchronous actions
- redux-saga: asynchronous actions
- normalizr: normalize state data structure
- reselect: better performance via memoized derived data
- redux-actions: reduces boilerplate (createAction, createReducer)
- immutable.js

---

## Redux Middleware

Middleware can be added to a Redux store. It provides an extension and can interfere between dispatching an action and the moment it reaches the reducer.

---

## Redux Middleware - examples

- middleware that logs the action (e.g. redux-logger)
- middleware that receives a single action and dispatches multiple asynchronous actions based on it (e.g. redux-thunk)

---

## Redux Middleware - implementation

```js
const myLogger = store => next => action => {
  console.log(action);
  next(action);
};
```

---

## Redux Middleware - inclusion

```ts
const store = createStore(
  rootReducer,
  applyMiddleware(myLogger)
);
```

---

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

---

## Custom Middleware - json fetcher

In the background the action `FETCH_JSON` should dispatch two separate actions: `FETCH_JSON_START` and `FETCH_JSON_COMPLETE`. The action `FETCH_JSON_COMPLETE` should carry the json content as its payload.

---

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
          payload: parsedResponse,
        });
      });
  } else {
    next(action);
  }
};
```

---

## Custom Middleware - dispatching a function

We want to be even more flexible and be able to dispatch a function. This function should then be able to do asynchronous requests and similar and dispatch more actions during that time.

---

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

----

# Redux Thunk

---

## Redux Thunk

Thunk is a middleware that enables asynchronous behaviour in Redux - by dispatching functions

With Thunk it's possible to dispatch so-called _asynchronous actions_ which in turn can dispatch multiple synchronous actions after some time.

---

## Thunk sourcecode

complete sourcecode:

https://github.com/reduxjs/redux-thunk/blob/master/src/index.js

---

## Redux Thunk

For example, we could call:

```js
dispatch(getTodosFunction);
```

---

## Redux Thunk

As an asynchronous action, `getTodosFunction` would not directly affect the redux store.

Instead, it would usually lead to two other actions reaching the redux store:

- the action `LOAD_TODOS_REQUEST` would be dispatched immediately
- the action `LOAD_TODOS_SUCCESS` would be dispatched once the network request is complete

---

## Redux Thunk

In Thunk, the synchronous logic remains in the reducer while the asynchronous logic is included in the action creator.

---

## Installation

```bash
npm install redux-thunk
```

---

## Including Thunk

```ts
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
```

---

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

---

## Redux Thunk with TypeScript

We have to give the complete signature of `dispatch`:

```ts
dispatch: ThunkDispatch<IState, void, IAction>
```

---

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

---

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

---

## task: loading Todos from a REST API

create a thunk that will load example todos from `https://jsonplaceholder.typicode.com/todos`

---

## task: loading Todos from a GraphQL API

create a thunk that will load example todos from `https://5qn401kkl9.lp.gql.zone/graphql`

???

admin: https://launchpad.graphql.com/5qn401kkl9

---

## resource: Taming Large React Applications w/ Redux

https://slides.com/joelkanzelmeyer/taming-large-redux-apps
