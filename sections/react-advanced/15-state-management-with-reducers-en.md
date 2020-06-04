# State management with reducers

<!-- NOTE: other sections link to this section - take care when reordering -->

## State management

In more complex applications or components it makes sense to manage the state (model) separately from the view.

Often the entire application state is represented by a data model and every change to the state will be done by triggering a change to the data model.

## State management tools

- reducer hook (included in React, conceptually similar to Redux)
- Redux (based on reducers, commonly used with React)
- MobX (commonly used with React)
- ngrx (used with Angular)
- vuex (used with vue)

## State management with actions and reducers

Technique that is used in _Redux_ and in React's _reducer hook_:

An event inside an application triggers a so-called _action_.

Based on that _action_ the current _state_ will be transformed into a new _state_ via a _reducer_ function.

## State management with actions and reducers

A _reducer_ is a function that acts as the central element in Redux

The reducer receives the old state and an action describing a state change

The reducer function returns the new state. The reducer function **does not mutate the old state object** (it is a pure function)

## Reducer diagram

<img src="assets/redux-flow.svg" type="text/svg" style="width: 100%">

## Example: todos state management

Manual usage of a reducer:

```js
const state1 = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'taxes', completed: true },
];
const actionA = { type: 'addTodo', payload: 'gardening' };
const state2 = todosReducer(state1, actionA);
const actionB = { type: 'deleteTodo', payload: 1 };
const state3 = todosReducer(state2, actionB);
console.log(state3);
/* [{ id: 2, title: 'taxes', completed: true },
    { id: 3, title: 'gardening', completed: false },] */
```

## Example: todos state management

- actions are represented by JavaScript objects
- actions always have a _type_ property
- actions commonly also have a _payload_ property

```json
{
  "type": "addTodo",
  "payload": "learn React"
}
```

```json
{
  "type": "deleteTodo",
  "payload": 1
}
```

## Example: todos state management

```js
const todosReducer = (oldState, action) => {
  switch (action.type) {
    case 'addTodo':
      return [
        ...oldState,
        {
          title: action.title,
          completed: false,
          id: generateId(), // dummy function
        },
      ];
    case 'deleteTodo':
      return oldState.filter(todo => todo.id !== action.id);
    default:
      throw new Error('unknown action type');
  }
};
```

## Example: todos state management

usage with TypeScript:

```ts
type TodosState = Array<Todo>;

type TodosAction =
  | { type: 'addTodo'; payload: string }
  | { type: 'deleteTodo'; payload: number };

const todosReducer = (
  state: TodosState,
  action: TodosAction
): TodosState => {
  // ...
};
```
