# Immutable state

## Immutable state

**Immutability**: important concept in functional programing and with React / Redux

Data is not modified directly - instead, new data is derived from existing data (and may replace the existing data)

## Immutable state

if there are arrays or objects in the state we _could_ try and mutate them directly

don't do this - React will usually not notice the changes and will not rerender the view

state should be viewed as _immutabe_ (unchangeable)

## Immutable state

When `setState` is called, React will compare the object the old state points to with the object the new state points to

If the old state and the new state reference the same object (even if it has changed), the component will not be rerendered.

## Immutable state

code like this is **not** allowed for changing state as React will not "see" the mutation:

```js
todos[0].completed = true;
todos.push({ title: 'study', completed: false });
```

## Data management without mutations: Arrays

initial data:

```js
const names = ['Alice', 'Bob', 'Charlie'];
```

**mutation**: this modifies the original array

```js
names.push('Dan');
```

**no mutation**: creates a new array

```js
const newNames = [...names, 'Dan'];
```

## Data management without mutations: Objects

initial data:

```js
const user = {
  name: 'john'
  email: 'john@doe.com'
}
```

**mutation**: this modifies the object

```js
user.email = 'johndoe@gmail.com';
```

**no mutation**: creates a new object

```js
const newUser = { ...user, email: 'johndoe@gmail.com' };
```

## immer.js

**immer.js** is a library that helps with immutable data

is recommended by the Redux team

## immer.js

this code would mutate the todos array:

```js
todos[0].completed = true;
todos.push({ title: 'study', completed: false });
```

avoiding mutations by using immer:

```js
import produce from 'immer';

const newTodos = produce(todos, todosDraft => {
  todosDraft[0].completed = true;
  todosDraft.push({ title: 'study', completed: false });
});
```
