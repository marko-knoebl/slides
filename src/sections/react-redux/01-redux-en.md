# Redux

### State management with Redux

## State management

In more complex fontend-applications it makes sense to manage the state (model) separately from the view.

Often the entire application state is represented by a data model and every change to the state will be done by triggering a change to the data model.

## Basic principles of state management libraries

- application state is stored in a global object
- _every_ state change is triggered by an _action_, which describes the change in detail

## State management tools

- Redux (commonly used with React)
- reducer hook (included in React, similar to Redux)
- MobX (commonly used with React)
- ngrx (used with Angular)
- vuex (used with vue)

## What makes Redux special

In Redux a state change is applied via a _reducer_ function, wich transform the previous state into the new state based on an _action_

## Redux diagram

<img src="assets/redux-flow.svg" type="text/svg" style="width: 100%">

## Installation

```bash
npm install redux
```

## Simple Redux example: counter

We create a counter which has two actions, _increment_ and _decrement_.

These will be represented by JavaScript objects:

```json
{ "type": "INCREMENT" }
```

```json
{ "type": "DECREMENT" }
```

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

## Simple Redux example: counter

The reducer function receives the old state and an action describing a state change

The reducer function returns the new state. Importantly, reducer functions don't mutate the old state object (they are pure functions)

## Simple Redux example: counter

Store = object that stores the redux state; a store is managed by a reducer

```js
// stores.js
import { createStore } from 'redux';

// counter = reducer
const counterStore = createStore(counter);
```

## Simple Redux example: counter

Using the store

```js
counterStore.getState(); // {count: 0}
counterStore.dispatch({ type: 'INCREMENT' });
counterStore.getState(); // {count: 1}
```

## Exercise

Create a new `mathadorStore` with an initial state of `{number: 1}` and two actions corresponding to "\*3" and "-7"

additinal tasks: reach the number 4 (or 10) by dispatching actions

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
