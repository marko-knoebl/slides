# SQL vs MongoDB 2

## SQL vs MongoDB 2

SQL: Skalierung hauptsächlich vertikal: Hinzufügen von zusätzlichen Resourcen zu einem vorhandenen Server

MongoDB: Skalierung hauptsächlich horizontal: Hinzufügen zusätzlicher Server (via Sharding)

## SQL vs MongoDB 2

SQL: Verwendet _atomare_ Einträge (und erste Normalform)

MongoDB: Enthält oft zusammengesetzte Einträge (Arrays, Objekte):

```json
{
  "name": "sue",
  "groups": ["news", "sports"]
}
```
