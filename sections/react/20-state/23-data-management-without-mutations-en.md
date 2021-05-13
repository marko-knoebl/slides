# Data management without mutations

## Data management without mutations

options for getting updated data from previous data:

- mutate the original data
- create new - derived - data from the original data

## Data management without mutations

initial data:

```js
const names = ['Alice', 'Bob', 'Charlie'];
```

**mutation**: this modifies the original array

```js
names.push('Dan');
```

**no mutation**: creates a new array (spread syntax)

```js
const newNames = [...names, 'Dan'];
```

## Data management without mutations

topics:

- adding properties to an object
- changing individual properties of an object
- adding elements to an array
- changing elements in an array
- removing elements from an array

## Data management without mutations

mechanisms:

- spread syntax (`...`)
- special array methods (`.map`, `.filter`)

## Data management without mutations

spread syntax for arrays:

```js
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];
// moreNumbers: [1, 2, 3, 4, 5, 6]
```

## Data management without mutations

spread syntax for objects:

```js
const person = {
  firstName: 'Joe',
  lastName: 'Doe',
  age: 31,
};
const newPerson = { ...person, email: 'j@d.com', age: 32 };
// {firstName: 'Joe', lastName: 'Doe', email: 'j@d.com', age: 32}
```

## Data management without mutations

the `.map` method:

- derives a new value for each entry in an array
- returns a new array with those values

```js
const myNumbers = [1, 2, 3, 4];

const tripledNumbers = myNumbers.map((n) => 3 * n);
// [3, 6, 9, 12]
```

## Data management without mutations

the `.filter` method:

- creates a new array where only specific entries are kept in
- uses a function to specify the condition
- returns a new array

```js
const myNumbers = [1, 2, 3, 4];

const isEven = (n) => n % 2 === 0;

const evenNumbers = myNumbers.filter(isEven);
// [2, 4]
```

## Data management without mutations

mechanisms:

- adding properties to a an object: _spread syntax_
- changing individual properties of an object: _spread syntax_
- adding elements to an array: _spread syntax_
- changing elements in an array: _map_
- removing elements from an array: _filter_

## Exercises

exercise: create the following _pure_ functions that handle a todo item (an object):

```js
const todo1 = { id: 1, title: 'foo', completed: false };

const todo2 = withCompletedToggled(todo1);
// { id: 1, title: 'foo', completed: true }

const todo3 = withTitleChanged(todo2, 'bar');
// { id: 1, title: 'bar', completed: true}
```

## Exercises

solutions:

```js
const withCompletedToggled = (todo) => ({
  ...todo,
  completed: !todo.completed,
});
```

```js
const withTitleChanged = (todo, newTitle) => ({
  ...todo,
  title: newTitle,
});
```

## Exercises

exercise: create the following _pure_ functions that handle an array of todos

```js
const todos1 = [
  { id: 1, title: 'foo', completed: false },
  { id: 2, title: 'bar', completed: true },
];

const todos2 = withNewTodoAdded(todos1, 'baz');
const todos3 = withTodoToggled(todos2, 1);
const todos4 = withCompletedTodosRemoved(todos3);
console.log(todos4);

// [{ id: 3, title: 'baz', completed: false }]
```

## Exercises

solution 1:

```js
const withNewTodoAdded = (todos, newTitle) => {
  let maxId = 0;
  for (let todo of todos) {
    maxId = Math.max(maxId, todo.id);
  }
  return [
    ...todos,
    { id: maxId + 1, title: newTitle, completed: false },
  ];
};
```

## Exercises

solution 2:

```js
const withTodoToggled = (todos, id) =>
  todos.map((todo) =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  );
```

or - with the help of `withCompletedToggled`:

```js
const withTodoToggled = (todos, id) =>
  todos.map((todo) =>
    todo.id === id ? withCompletedToggled(todo) : todo
  );
```

## Exercises

solution 3:

```js
const withCompletedTodosRemoved = (todos) =>
  todos.filter((todo) => !todo.completed);
```
