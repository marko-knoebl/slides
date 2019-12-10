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
