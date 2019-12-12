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

## Redux toolkit

**Redux toolkit** enables a simplified setup of Redux and associated libraries (in the spirit of _create-react-app_)

We will use it throughout this presentation

```bash
npm install @reduxjs/toolkit
```

## Redux toolkit

functionality (see [what's included](https://redux-toolkit.js.org/introduction/quick-start#whats-included)):

- debugging (via _redux devtools_)
- simpler reducer creation (via _createReducer_)
- simpler state updates by direct mutations (via _immer.js_)
- asynchronous actions (via _thunk_)
- ...
