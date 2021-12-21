# Data management without mutations

## Data management without mutations

options for getting updated data from previous data:

- mutate the original data
- create new - derived - data from the original data

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

We will create _pure_ functions that deal with todos

TypeScript declaration to represent a todo:

```ts
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
```

## Exercises

exercise: create the following _pure_ function that handles a todo item:

```js
const todo1 = { id: 1, title: 'foo', completed: false };

const todo2 = changeTitle(todo1, 'bar');
// { id: 1, title: 'bar', completed: false}
```

## Exercises

solution:

```js
function changeTitle(todo: Todo, newTitle: string): Todo {
  return { ...todo, title: newTitle };
}
```

## Exercises

exercise: create the following _pure_ functions that handle an array of todos

```js
const todos1 = [
  { id: 1, title: 'foo', completed: false },
  { id: 2, title: 'bar', completed: true },
];

// add a todo with title 'baz'
const todos2 = addTodo(todos1, 'baz');
// set the completed status of the first todo to 'true'
const todos3 = changeTodoStatus(todos2, 1, true);
// remove all completed todos
const todos4 = removeCompleted(todos3);
// [{ id: 3, title: 'baz', completed: false }]
```

## Exercises

```js
function addTodo(
  todos: Array<Todo>,
  newTitle: string
): Array<Todo> {
  let maxId = 0;
  for (let todo of todos) {
    maxId = Math.max(maxId, todo.id);
  }
  return [
    ...todos,
    { id: maxId + 1, title: newTitle, completed: false },
  ];
}
```

## Exercises

```js
function changeTodoStatus(
  todos: Array<Todo>,
  id: number,
  newStatus: boolean
): Array<Todo> {
  return todos.map((todo) =>
    todo.id === id
      ? { ...todo, completed: newStatus }
      : todo
  );
}
```

## Exercises

```js
function removeCompleted(todos: Array<Todo>): Array<Todo> {
  return todos.filter((todo) => !todo.completed);
}
```
