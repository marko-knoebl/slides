# MongoDB Grundlagen

## MongoDB Shell

**MongoDB Shell** = einfaches Befehlszeileninterface für MongoDB

online ausprobieren:

https://docs.mongodb.com/manual/tutorial/getting-started/

eine Untermenge der MongoDB shell in reinem JavaScript verwenden (ohne Installation von MongoDB):

https://github.com/marko-knoebl/mingodb

## Datentypen

- Zahlen
  - int (32 bit) / long (64 bit)
  - double (64 bit floating point)
  - decimal (128 bit)
- bool
- string
- binData
- date (Datum + Uhrzeit)
- array
- object
- null
- objectId

siehe: https://docs.mongodb.com/manual/reference/bson-types/

## ids

Dokumente bekommen automatisch ein eindeutiges `_id`-Feld:

```js
entry = {
  _id: ObjectId('5e715e1b31315b0be066db84'),
  name: 'Argentina',
  continent: 'South America',
};
```

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

## BSON Dateiformat

MongoDB basiert auf dem BSON Dateiformat. Dieses ähnelt JSON, ist aber ein binäres Format und lässt sich effizienter lesen und schreiben.

Der Export bzw Import geschieht mittels der Programme `mongodump` und `mongorestore`

## Übung

Erstellen und Ändern einer Kontaktdatenbank
