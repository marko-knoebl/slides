# indexedDB

## indexedDB

_indexedDB_ is a "real" database

advantages over _localStorage_:

- non-blocking
- faster (queries via indexes)
- separation of data into "tables" (stores)
- supports various data types

disadvantage: more complicated interface

## indexedDB interfaces

- idb
- dexie
- localForage

## indexedDB promised (idb)

library that enables using indexedDB with Promises

https://github.com/jakearchibald/idb

CDN link: https://cdn.jsdelivr.net/npm/idb@2.1.2/lib/idb.min.js

## idb basics

## idb basics: open & upgrade

creates / opens a database; returns a promise

```js
idb.open(name, version, upgradeCallback);
```

## idb basics: open & upgrade

```js
const upgradeCallback = upgradeDb => {
  if (!upgradeDb.objectStoreNames.contains('todos')) {
    upgradeDb.createObjectStore('todos', {
      autoIncrement: true,
      keyPath: 'key',
    });
  }
};

const dbPromise = idb.open('todo-db', 1, upgradeCallback);
```

## idb basics: open & upgrade

The last argument (`upgradeCallback`) can be used to migrate to a new database schema; it can be used to create, delete or change stores

The callback is called any time the version number increases

## idb basics: keys

Each element in the object store has a unique key (~id)

The key can be an entry in the element or a separate value

## idb basics: keys

numeric id:

```js
upgradeDb.createObjectStore('todos', {
  autoIncrement: true,
});
```

## idb basics: keys

numeric id stored in the object

```js
upgradeDb.createObjectStore('todos', {
  autoIncrement: true,
  keyPath: 'key
})
```

## idb basics: keys

use an entry in the objects as key

```js
upgradeDb.createObjectStore('users', {
  keyPath: 'email',
});
```

## transactions

transaction = group of operations on the database (reading, adding, writing, ...)

## transactions

steps:

1. get the database object (`idb.open`)
2. open a transaction on one or more stores (two modes: `readonly` (default) or `readwrite`)
3. open the object store
4. operate on the object store

## transactions

getting the database object:

```js
let db;

idb.open('todo-db', 1).then(openedDb => {
  db = openedDb;
});
```

## transactions

adding data

```js
const transaction = db.transaction(['todos'], 'readwrite');
const todoStore = transaction.objectStore('todos');
todoStore.add({ text: 'groceries', done: false });
```

## transactions

overwriting data (put)

```js
const transaction = db.transaction(['todos'], 'readwrite');
const todoStore = transaction.objectStore('todos');
// ersetze den Eintrag mit index 1
todoStore.put({ text: 'groceris', done: true, key: 1 });
```

## transactions

deleting data

```js
const transaction = db.transaction(['todos'], 'readwrite');
const todoStore = transaction.objectStore('todos');
todoStore.delete(1);
```

## transactions

reading data (`getAll`)

```js
const transaction = db.transaction(['artists'], 'readonly');
const artistsStore = transaction.objectStore('artists');
artistsStore.getAll().then(console.log);
```

## transactions

reading data by its key

```js
const transaction = db.transaction(['artists'], 'readonly');
const artistsStore = transaction.objectStore('artists');
artistsStore.get(1).then(console.log);
```

## indexes

reading data via indexes

Entries in a database are basically stored sorted by their key.

This means it's fast to search for a specific key in the database

Example: In a phone book looking for a last name is fast, but looking for a first name or for a phone number is slow

## indexes

In order to quickly look up by something other than the primary key: additional index

```js
const store = upgradeDb.createObjectStore('contacts');
store.createIndex('email', 'email', { unique: true });
store.createIndex('firstName', 'firstName');
store.createIndex('name', ['lastName', 'firstName']);
```

## indexes

```js
const nameIndex = objectStore.index('name');
nameIndex.get(['Andy', 'Jones']).then(...)
```

## exercises

- Slides: https://developers.google.com/web/ilt/pwa/working-with-indexeddb-slides
- Lab: https://developers.google.com/web/ilt/pwa/lab-indexeddb
