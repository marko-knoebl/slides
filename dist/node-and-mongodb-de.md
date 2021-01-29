# Node und MongoDB

# MongoDB Grundlagen

## MongoDB Grundlagen

siehe Präsentation [databases](./databases-en.html)

# Zugriff auf eine Atlas-Datenbank

## Zugriff auf eine Atlas-Datenbank

um aus _node_ eine Verbindung aufbauen zu können:

- setze erlaubte IP-Adressen
- erstelle einen Datenbank-User
- notiere die Datenbank-URL

## Atlas: erlaubte IP-Adressen

in der Sidebar: _Network Access_

füge IP-Adressen hinzu, die auf das Cluster zugreifen dürfen

## Atlas: User erstellen

in der Sidebar: _Database Access_

füge einen User hinzu, welcher sich mit Username und Passwort identifizieren kann

## Atlas: Verbindungs-URL

in der Sidebar: _Clusters_

klicke auf _connect_ und wähle _connect your application_

notiere die URL als:

```
mongodb+srv://<user>:<password>@<clusterurl>/<dbname>
```

(wir können einen beliebigen _dbname_ wählen, um eine neue Datenbank zu erstellen)

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

Dokumentation: <https://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html>

<!--
section duplicated in:
- node-web-development-with-node-and-express
- node-and-mongodb
-->

# Konfiguration mittels Umgebungsvariablen

## Konfiguration mittels Umgebungsvariablen

Zugangsdaten und Konfiguration werden üblicherweise via Umgebungsvariablen bereitgestellt

Zugangsdaten sollten nicht unter Versionskontrolle stehen

## .env-Datei

verbreitete Möglichkeit, um Zugangsdaten bereit zu stellen: speichern in einer Datei namens _.env_, laden als Umgebungsvariablen mittels _dotenv_

Stelle sicher, dass _.env_ nicht unter Versionskontrolle steht (füge es zur Datei _.gitignore_ hinzu)

## .env-Datei

Beispiel für _.env_-Datei:

```bash
PORT=3000
NODE_ENV=production
DB_URL=mongodb+srv://...
AUTH0_DOMAIN=xxx.eu.auth0.com
```

laden in JavaScript:

```js
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
```

# Database access object

## Database access object

Zugriff auf eine Datenbank mittels eines _database access objects_ (DAO):

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

Beispiel für Definition eines DAOs:

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

Übung: erweitere _demo.js_ und _TodosDAO_, um folgendes Log zu erreichen (Lösung siehe nächste Slide):

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

mögliche Lösung: <https://github.com/marko-knoebl/slides/tree/master/exercises/node-and-mongodb>

# Ressourcen

## Ressourcen

[MongoDB for JavaScript Developers](https://university.mongodb.com/courses/M220JS/about) in der MongoDB university (Login notwendig)
