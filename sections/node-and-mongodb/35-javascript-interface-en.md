# JavaScript interface

## JavaScript interface

the JavaScript interface is similar to - but still different from - the MongoDB shell

## Accessing collections

MongoDB shell:

```
use todolist
db.todos
```

JavaScript:

```js
const todos = db('todolist').collection('todos');
```

## Promises

functions that write data will return _promises_:

```js
await todos.insertOne({
  title: 'learn mongodb',
  completed: false,
});
await todos.deleteMany({ completed: true });
```

## Cursor objects

_find_ commands return cursor objects

the methods of cursor objects return promises:

```js
const completedCursor = todos.find({ completed: true });

const numCompleted = await completedCursor.count();
const completedTodos = await completedCursor.toArray();
await completedCursor.each((todo) =>
  console.log(todo.title)
);
```

```js
const completedTodos = await todos
  .find({ completed: true })
  .toArray();
```

## Cursor objects

documentation: https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html
