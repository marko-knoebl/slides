# MongoDB Shell

## MongoDB Shell

**MongoDB Shell** = einfaches Befehlszeileninterface für MongoDB

online ausprobieren:

https://docs.mongodb.com/manual/tutorial/getting-started/

eine Untermenge der MongoDB shell in reinem JavaScript verwenden (ohne Installation von MongoDB):

https://github.com/marko-knoebl/mingodb

## Befehle

wichtige Befehle:

- `.insertOne`
- `.insertMany`
- `.find`
- `.findOne`
- `.updateOne`
- `.replaceOne`
- `.deleteOne`
- `.deleteMany`

## Create

Erstellen eines Eintrags:

```js
db.countries.insertOne({
  name: 'Argentina',
  continent: 'South America',
});
```

## Create

Erstellen mehrerer Einträge:

```js
db.countries.insertMany([
  { name: 'Finland', continent: 'Europe' },
  { name: 'Greece', continent: 'Europe' },
]);
```

## Read

Auslesen aller Elemente:

```js
db.countries.find();
```

Auslesen bestimmter Elemente:

```js
db.countries.find({ continent: 'Europe' });
```

## Read

Auslesen eines einzelnen Eintrags mittels `findOne`:

```js
db.countries.findOne({ name: 'Greece' });
```

## Update

Abändern eines Dokuments - Setzen des Eintrags "population":

```js
db.countries.updateOne(
  { name: 'Argentina' },
  { $set: { population: 44 } }
);
```

## Update

Ersetzen eines Dokuments:

```js
db.countries.replaceOne(
  { name: 'Brazil' },
  { name: 'Brazil', population: 210 }
);
```

## Delete

Löschen eines Dokuments:

```js
db.countries.deleteOne({ name: 'Finland' });
```

Löschen aller Einträge:

```js
db.countries.deleteMany({});
```

## Übung

Erstellen und Ändern einer Kontaktdatenbank
