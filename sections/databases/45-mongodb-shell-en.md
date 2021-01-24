# MongoDB shell

## MongoDB shell

**MongoDB shell** = simple command line interface for MongoDB that comes with MongoDB

try it online:

https://docs.mongodb.com/manual/tutorial/getting-started/

use a subset of MongoDB shell in pure JavaScript (without installing MongoDB):

https://github.com/marko-knoebl/mingodb

## Commands

important commands:

- `.insertOne`
- `.insertMany`
- `.find`
- `.findOne`
- `.updateOne`
- `.replaceOne`
- `.deleteOne`
- `.deleteMany`

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

## Exercise

Create and modify a contact database
