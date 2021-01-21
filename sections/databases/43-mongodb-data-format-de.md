# MongoDB Datenformat

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

## BSON Dateiformat

MongoDB basiert auf dem BSON Dateiformat. Dieses ähnelt JSON, ist aber ein binäres Format und lässt sich effizienter lesen und schreiben.

Der Export bzw Import geschieht mittels der Programme `mongodump` und `mongorestore`
