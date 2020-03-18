# MongoDB schema

## MongoDB schema

validation via JSON schema, e.g.:

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

## MongoDB schema

```js
db.createCollection('elements', {
  validator: { $jsonSchema: elementSchema },
});
```
