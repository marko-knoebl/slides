# Redux in detail

## Basic elements of Redux

- _state_
- _action_: object that describes a change to the _state_
- _action creator_: simple function that creates an _action_
- _reducer_: based on an action, transforms the old _state_ into a new _state_
- _store_: where the _state_ is stored

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

## actions

- actions describe a change to the state
- actions are objects with a _type_-property and optionally other properties
- the _type_ property is usually a string, often defined as a constant in a separate module
- actions often adhere to the _FSA_ standard, meaning they may have a _payload_, an _error_ and a _meta_ property

## Actions - examples

```js
import { ADD_TODO } from './constants';

let a = {
  type: ADD_TODO,
  payload: 'Build my first redux app',
};
```

## Actions - examples

```js
let a = {
  type: TOGGLE_TODO,
  payload: 2,
};
```

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

## Exercise: state managment in the todo app
