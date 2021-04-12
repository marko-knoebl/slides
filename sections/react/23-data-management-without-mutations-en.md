# Data management without mutations

NOTE:

topics: functional programming / data management without mutations / array methods

## Data management without mutations

topics:

- creating derived variants from arrays and objects
- array methods: `.map()` and `.filter()`

## Data management without mutations

- adding properties to a an object
- adding entries to an array
- removing entries from an array
- changing entries in an array
- changing individual properties of an object

## Data management without mutations

- adding properties to a an object (_spread syntax_)
- changing individual properties of an object (_spread syntax_)
- adding elements to an array (_spread syntax_)
- removing elements from an array (_filter_)
- changing elements in an array (_map_)

## Data management without mutations

```js
const todo1 = { title: 'foo', completed: false };

const todo2 = withCompletedToggled(todo1);
// { title: 'foo', completed: true }

const todo3 = withTitleChanged(todo2, 'bar');
// { title: 'bar', completed: true}
```

## Data management without mutations

```js
const todos1 = [
  { title: 'foo', completed: false },
  { title: 'bar', completed: true },
];

const todos2 = withUniqueIdsAdded(todos1);
const todos3 = withNewTodoAdded(todos2, 'baz');
const todos4 = withCompletedTodosRemoved(todos3);
const todos5 = withTodoToggled(todos4, 1);
console.log(todos5);

/*
[
  { id: 1, title: "foo", completed: true },
  { id: 3, title: "baz", completed: false },
]
*/
```

## Data management without mutations

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

const withUniqueIdsAdded = (todos) => {
  const newTodos = [];
  let id = 0;
  for (let todo of todos) {
    id++;
    newTodos.push({ ...todo, id: id });
  }
};

const withCompletedTodosRemoved = (todos) =>
  todos.filter((todo) => !todo.completed);

const withTodoToggled = (todos, id) =>
  todos.map((todo) =>
    todo.id === id ? withCompletedToggled(todo) : todo
  );

const withTodoToggled = (todos, id) =>
  todos.map((todo) =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  );
```
