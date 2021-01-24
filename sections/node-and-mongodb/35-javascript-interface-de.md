# JavaScript Interface

## JavaScript Interface

das JavaScript Interface ähnelt sehr der MongoDB Shell

## Zugriff auf Collections

MongoDB Shell:

```
use todolist
db.todos
```

JavaScript:

```js
const todos = db('todolist').collection('todos');
```

## Promises

Funktionen, die Daten schreiben / ändern geben Promises zurück:

```js
await todos.insertOne({
  title: 'learn mongodb',
  completed: false,
});
await todos.deleteMany({ completed: true });
```

## Cursor-Objekte

_find_-Befehle geben Cursor-Objekte zurück

die Methoden von Cursor-Objekten geben Promises zurück:

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

## Cursor-Objekte

Dokumentation: https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html
