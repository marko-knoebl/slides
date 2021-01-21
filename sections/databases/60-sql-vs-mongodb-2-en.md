# SQL vs MongoDB 2

## SQL vs MongoDB

SQL: mostly scales vertically: adding resources to an existing server

MongoDB: mostly scales horizontally: adding additional servers (via sharding)

## SQL vs MongoDB

SQL: mostly uses _atomic_ entries (and first normal form)

MongoDB: often includes composite entries (arrays, objects):

```json
{
  "name": "sue",
  "groups": ["news", "sports"]
}
```
