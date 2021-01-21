# MongoDB data format

## Data types

- numbers
  - int (32 bit) / long (64 bit)
  - double (64 bit floating point)
  - decimal (128 bit)
- bool
- string
- binData
- date (date + time)
- array
- object
- null
- objectId

see: https://docs.mongodb.com/manual/reference/bson-types/

## ids

entries automatically get a unique `_id` field:

```js
entry = {
  _id: ObjectId('5e715e1b31315b0be066db84'),
  name: 'Argentina',
  continent: 'South America',
};
```

## BSON file format

MongoDB is based on the BSON file format. It resembles JSON, but it is a binary format and can be read and written more efficiently

Importing and exporting can be done via the programs `mongodump` and `mongorestore`
