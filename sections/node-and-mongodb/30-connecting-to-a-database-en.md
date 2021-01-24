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
