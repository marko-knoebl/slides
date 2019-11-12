# State management with actions and reducers

## State management with actions and reducers

Technique that is used in _Redux_ and in React's _reducer hook_:

An event inside an application triggers a so-called _action_. Based on that _action_ the current _state_ will be transformed into a new _state_ via a _reducer_ function.

## Reducer diagram

<img src="assets/redux-flow.svg" type="text/svg" style="width: 100%">

## Example: todos state management

We manage an array of todos via a reducer. We start with two possible actions:

- adding a todo
- deleting a todo

## Example: todos state management

The _state_ could look like this:

```json
[
  {
    "id": 1,
    "title": "groceries",
    "completed": false
  },
  {
    "id": 2,
    "title": "gardening",
    "completed": false
  }
]
```

## Example: todos state management

_Actions_ will be represented by JavaScript objects; actions always have a type property

```json
{
  "type": "ADD_TODO",
  "title": "learn React"
}
```

```json
{
  "type": "DELETE_TODO",
  "id": 1
}
```

## Example: todos state management

A _reducer_ is a function that acts as the central element in Redux

The reducer receives the old state and an action describing a state change

The reducer function returns the new state. Importantly, the reducer function doesn't mutate the old state object (it is a pure function)

## Example: todos state management

```js
const todosReducer = (oldState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...oldState, {
        title: action.title,
        completed: false,
        id: generateId() // dummy function
      }]
    case 'DELETE_TODO':
      return oldState.filter(todo => todo.id !== action.id)
    default:
      // unknown action - change nothing
      return oldState;
  }
}
```

## Example: todos state management

Usage of the reducer (remember: it takes the old state and an action and returns the new state)

```js
const state1 = [
  {id: 1, title: "groceries", completed: false}
];
const state2 = todosReducer(
  state1,
  {type: "ADD_TODO", title: "gardening"}
);
const state3 = todosReducer(
  state2,
  {type: "DELETE_TODO", id: 1}
)
// state3: [{id: 2, title: "gardening", completed: false}]
```

## Example: todos state management

Example usage with the reducer hook:

```js
import todosReducer from '../reducers/todos';

const initialState = [];

const MyComponent = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialState);

  return <button onClick={() => {
    dispatch({type: "DELETE_TODO", id: 2})
  }}>delete (demo)</button>;
}
```
