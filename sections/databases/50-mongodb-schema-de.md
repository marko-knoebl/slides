# MongoDB Schema

## MongoDB Schema

Validierung mittels JSON schema, z.B.:

```js
const elementSchema = {
  bsonType: 'object',
  required: [
    'atomic_number',
    'symbol',
    'name',
    'atomic_mass',
  ],
  properties: {
    atomic_number: {
      bsonType: 'int',
      minimum: 1,
    },
    symbol: {
      bsonType: 'string',
    },
    name: {
      bsonType: 'string',
    },
    atomic_mass: {
      bsonType: 'double',
    },
  },
};
```

## MongoDB Schema

```js
db.createCollection('elements', {
  validator: { $jsonSchema: elementSchema },
});
```
