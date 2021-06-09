# Immutability-Hilfslibraries

## Immutability-Hilfslibraries

direktes Arbeiten mit unveränderlichem State kann kompliziert sein

Hilfslibraries:

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
