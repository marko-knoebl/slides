# Node and MongoDB

# MongoDB basics

## MongoDB basics

see presentation on [databases](./databases-en.html)

# Accessing an Atlas database

## Accessing an Atlas database

to connect to an Atlas project from node:

- allow (_whitelist_) IP addresses
- add database users
- get a database URL

## Atlas: allowed IP addresses

in the sidebar, select _Network Access_

add IP addresses that are permitted to access the cluster

## Atlas: users

in the sidebar, select _Database Access_

add a user that can be authenticated via username and password

## Atlas: connection URL

in the sidebar, select _Clusters_

click _connect_ and choose _connect your application_

note down the URL as:

```
mongodb+srv://<user>:<password>@<clusterurl>/<dbname>
```

(we can choose any _dbname_ to create a new database)

# Connecting to a database

## Connecting to a database

popular npm packages:

- _mongodb_
- _mongoose_

## Connecting to a database

database URL format:

```js
// demo.js
const DB_URL =
  'mongodb+srv://<user>:<password>@<clusterurl>/<dbname>';
```

note: actually credentials (username, password) should **not** be included in the source code - see section "_storing credentials_" for a proper solution

## Connecting to a database

a script that connects to a database:

```js
// demo.js
import mongodb from 'mongodb';
const main = async () => {
  const client = mongodb.MongoClient(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  console.log('Connected to database');

  // TODO: query / change data here

  await client.close();
};
main();
```

## Connecting to a database

example interaction with a database:

```js
// demo.js
const main = async () => {
  // ...

  const todos = client.db('todolist').collection('todos');
  await todos.insertOne({
    title: 'learn mongodb',
    completed: false,
  });
  console.log("Added todo: 'learn mongodb'");
  await todos.deleteMany({ completed: true });
  console.log('Deleted all completed todos');

  // ...
};
```

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

documentation: <https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html>

# Supplying credentials

## Supplying credentials

credentials and database configuration should be supplied via environment variables

credentials should not be under version control

## Supplying credentials

common way to supply credentials: store in a file named _.env_, load as environment variables via _dotenv_

_.env_:

```bash
DB_URL=mongodb+srv://<user>:<password>@<clusterurl>/<dbname>
```

loading in JavaScript:

```js
import dotenv from 'dotenv';

dotenv.config();

const DB_URL = process.env.DB_URL;
```

## Supplying credentials

make sure _.env_ is not under version control (add it to the _.gitignore_ file)

# Database access object

## Database access object

accessing a database via a _database access object_ (DAO):

```js
// demo.js
import TodosDAO from './TodosDAO.js';

const main = async () => {
  // ...

  const todosDAO = new TodosDAO(client);
  await todosDAO.addTodo('learn mongodb');
  console.log("Added todo: 'learn mongodb'");
  await todosDAO.deleteCompletedTodos();
  console.log('Deleted all completed todos');

  // ...
};
```

## Database access object

example DAO definition:

```js
class TodosDAO {
  constructor(client) {
    this.todos = client.db('todolist').collection('todos');
  }

  async addTodo(title) {
    await this.todos.insertOne({
      title: title,
      completed: false,
    });
  }
  async deleteCompletedTodos() {
    await this.todos.deleteMany({ completed: true });
  }
}
```

## Database access object

exercise: extend _demo.js_ and _TodosDAO_ to produce the following log (solution on next slide):

```
Connected to database
Deleted all existing todos
Loaded todos from jsonplaceholder.typicode.com/todos
Added new todo: 'learn mongodb'
There are now 111 incomplete and 90 completed todos
Deleted all completed todos
Todos that contain the search term "tempora":
- sunt cum tempora
- asperiores illo tempora fuga sed ut quasi adipisci
- et placeat temporibus voluptas est tempora quos quibusdam
Deleted all todos that contain "tempora"
Changed status of 'learn mongodb' to completed
Changed title of 'learn mongodb' to 'learn MongoDB'
new title: learn MongoDB
There are now 107 incomplete and 1 completed todos
```

## Database access object

solution: <https://github.com/marko-knoebl/slides/tree/master/exercises/node-and-mongodb>

# Resources

## Resources

[MongoDB for JavaScript Developers](https://university.mongodb.com/courses/M220JS/about) on MongoDB university (login required)
