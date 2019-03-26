# Reducer hook

## Reducer hook

In complex components / applications it makes sense to separate the state (model) from the view. This can happen via external state management libraries like _redux_ or, in simple cases, via the reducer hook.

## Reducer hook

In state management tools each state change happens through an _event_ - which is usually a simple JavaScript object:

```json
{
  "type": "ADD_TODO",
  "payload": {
    "title": "learn react"
  }
}
```

## Reducer hook

State management with reducers:

when using the _reducer hook_ or _Redux_:

The transition from one state to the next happens via a reducer function:

The reducer function receives two arguments: the old state and an action describing the state change

The reducer function returns the new state

## Reducer hook

The reducer hook is included in a way that is similar to the state hook:

in general:

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

specific example: count:

```js
const [count, countDispatch] = useReducer(countReducer, 0);
```

## Reducer hook

```js
const countReducer = (count, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1;
    case 'DECREMENT':
      return count - 1;
    default:
      throw new Error('unknown action');
  }
};
```

## Reducer hook

In order to trigger actions, we call the `dispatch` function of the reducer with the action as an argument
