# MongoDB basics

## MongoDB shell

**MongoDB shell** = simple command line interface for MongoDB that comes with MongoDB

try it online:

https://docs.mongodb.com/manual/tutorial/getting-started/

use a subset of MongoDB shell in pure JavaScript (without installing MongoDB):

https://github.com/marko-knoebl/mingodb

## data types

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

## Create

creating entries in a collection:

```js
db.countries.insertOne({
  name: 'Argentina',
  continent: 'South America',
});
```

## Create

creating multiple entries at once:

```js
db.countries.insertMany([
  { name: 'Finland', continent: 'Europe' },
  { name: 'Greece', continent: 'Europe' },
]);
```

## Read

reading an array of all entries:

```js
db.countries.find();
```

only query for some specific entries:

```js
db.countries.find({ continent: 'Europe' });
```

## Read

reading a single entry via `findOne`:

```js
db.countries.findOne({ name: 'Greece' });
```

## Update

changing an entry by setting its population:

```js
db.countries.updateOne(
  { name: 'Argentina' },
  { $set: { population: 44 } }
);
```

## Update

replacing an entry:

```js
db.countries.replaceOne(
  { name: 'Brazil' },
  { name: 'Brazil', population: 210 }
);
```

## Delete

deleting an entry:

```js
db.countries.deleteOne({ name: 'Finland' });
```

deleting all entries:

```js
db.countries.deleteMany({});
```

## BSON file format

MongoDB is based on the BSON file format. It resembles JSON, but it is a binary format and can be read and written more efficiently

Importing and exporting can be done via the programs `mongodump` and `mongorestore`

## Exercise

Create and modify a contact database
