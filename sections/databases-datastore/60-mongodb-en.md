# MongoDB

## MongoDB vs SQL

SQL:

- standardized language, independent of the programming language
- often used via _ORMs_ (_object relational mappings_)

MongoDB:

- _one_ query syntax per programming language

## MongoDB vs SQL

SQL:

- schema is predefined when creating tables
- changing the schema (migration) may be complex

MongoDB:

- a _document_ may have an arbitrary structure
- a validator _may_ be specified for a collection

## MongoDB vs SQL

SQL:

- mostly scales vertically: adding resources to an existing server

MongoDB:

- mostly scales horizontally: adding additional servers (via sharding)

## MongoDB vs SQL

SQL:

- mostly uses _atomic_ entries (and first normal form)

MongoDB:

- often includes composite entries (arrays, objects):

```json
{
  "name": "sue",
  "groups": ["news", "sports"]
}
```

## MongoDB

_MongoDB_ is a so-called _document oriented_ database

Its structure may look similar to that of a JSON document

## BSON file format

MongoDB is based on the BSON file format. It resembles JSON, but it is a binary format and can be read and written more efficiently

Importing and exporting can be done via the programs `mongodump` und `mongorestore`

## NeDB

NeDB: simple JavaScript library that implements the MongoDB interface
