# Mit einer Datenbank verbinden

## Mit einer Datenbank verbinden

beliebte npm-Pakete:

- _mongodb_
- _mongoose_

## Mit einer Datenbank verbinden

URL-Format:

```js
// demo.js
const DB_URL =
  'mongodb+srv://<user>:<password>@<clusterurl>/<dbname>';
```

beachte: tatsächlich sollten Zugangsdaten (Benutzername, Passwort) **nicht** im Sourcecode stehen - siehe Abschnitt "Speichern von Zugangsdaten" für eine _echte_ Lösung

## Mit einer Datenbank verbinden

ein Skript, das mit einer Datenbank verbindet:

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

## Mit einer Datenbank verbinden

Beispiel für Interaktion mit einer Datenbank:

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
