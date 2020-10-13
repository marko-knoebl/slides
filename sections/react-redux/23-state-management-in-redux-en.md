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
