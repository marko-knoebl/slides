# indexedDB

## indexedDB

Vollwertige Datenbank

Vorteile gegenüber localStorage:

- non-blocking
- schneller (Abfrage mit Indizes)
- Aufteilung in "Tabellen" (stores)
- verschiedene Datentypen

Nachteil: Komplexeres Interface

## indexedDB Interfaces

- idb
- dexie
- localForage

## indexedDB promised (idb)

library, die es erlaubt, bei indexedDB mit Promises zu arbeiten

https://github.com/jakearchibald/idb

Einbinden über CDN: https://cdn.jsdelivr.net/npm/idb@2.1.2/lib/idb.min.js

## idb Grundlagen

## idb Grundlagen: open & upgrade

Erstellen / Öffnen einer DB; gibt ein Promise zurück

```js
idb.open(name, version, upgradeCallback);
```

## idb Grundlagen: open & upgrade

Beispiel

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

## idb Grundlagen: open & upgrade

Letztes Argument (`upgradeCallback`) kann zur Migration auf ein neues Datenbankschema genutzt werden; z.B. können darin Stores erstellt, gelöscht oder abgeändert werden

Callbackfunktion wird immer aufgerufen, wenn sich die Versionsnummer der Datenbank erhöht

## Keys

Jedes Element im object store hat einen einzigartigen key (~id);

Der key kann ein Eintrag im Objekt sein oder ein unabhängiger Wert

## Keys: numerische id

```js
upgradeDb.createObjectStore('todos', {
  autoIncrement: true,
});
```

## Keys: numerische id, die im Objekt abgespeichert wird

```js
upgradeDb.createObjectStore('todos', {
  autoIncrement: true,
  keyPath: 'key',
});
```

## Keys: Eintrag im Objekt

Verwendung eines Eintrags im Objekt als Key

```js
upgradeDb.createObjectStore('users', {
  keyPath: 'email',
});
```

## Transaktionen

Transaktion = Gruppe von Operationen auf der Datenbank (auslesen / hinzufügen / überschreiben ...)

## Transaktionen - Schritte

1.  Datenbankobjekt holen (idb.open)
2.  Eine Transaktion auf einem oder mehreren Stores beginnen (zwei Modi: 'readonly' (Standard) oder 'readwrite')
3.  Object Store öffnen
4.  Operation auf Object Store ausführen

## Datenbankobjekt holen

```js
let db;

idb.open('todo-db', 1).then(openedDb => {
  db = openedDb;
});
```

## Daten hinzufügen (add)

```js
const transaction = db.transaction(['todos'], 'readwrite');
const todoStore = transaction.objectStore('todos');
todoStore.add({ text: 'groceries', done: false });
```

## Daten überschreiben (put)

```js
const transaction = db.transaction(['todos'], 'readwrite');
const todoStore = transaction.objectStore('todos');
// ersetze den Eintrag mit index 1
todoStore.put({ text: 'groceris', done: true, key: 1 });
```

## Daten löschen

```js
const transaction = db.transaction(['todos'], 'readwrite');
const todoStore = transaction.objectStore('todos');
todoStore.delete(1);
```

## Daten auslesen (getAll)

```js
const transaction = db.transaction(['artists'], 'readonly');
const artistsStore = transaction.objectStore('artists');
artistsStore.getAll().then(console.log);
```

## Daten auslesen (get)

Auslesen anhand des keys:

```js
const transaction = db.transaction(['artists'], 'readonly');
const artistsStore = transaction.objectStore('artists');
artistsStore.get(1).then(console.log);
```

## Daten auslesen - via indizes

Die Einträge werden in der Datenbank im wesentlichen nach dem key sortiert abgelegt.

Dadurch kann von der Datenbank schnell nach dem key gesucht werden.

Beispiel: In einem Telefonbuch kann man schnell nach einem Nachnamen suchen, jedoch nicht nach einem Vornamen oder einer Telefonnummer

## Indizes

Um schnell nach etwas anderem als dem primary key zu suchen: zusätzlicher Index (aber: größerer Datenverbrauch)

```js
const store = upgradeDb.createObjectStore('contacts');
store.createIndex('email', 'email', { unique: true });
store.createIndex('firstName', 'firstName');
store.createIndex('name', ['lastName', 'firstName']);
```

## Indizes

```js
const nameIndex = objectStore.index('name');
nameIndex.get(['Andy', 'Jones']).then(...)
```

## Übungen

- Slides: https://developers.google.com/web/ilt/pwa/working-with-indexeddb-slides
- Lab: https://developers.google.com/web/ilt/pwa/lab-indexeddb
