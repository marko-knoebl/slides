# Immutability helper libraries

## Immutability helper libraries

working directly with immutable state can be complicated / tedious

helper libraries:

- _immer.js_ (commonly used with _Redux_)
- _immutable.js_

## immer.js

```js
import produce from 'immer';

const todos = [
  // ...
];
const newTodos = produce(todos, (todosDraft) => {
  todosDraft[0].completed = true;
  todosDraft.push({ title: 'study', completed: false });
});
```
