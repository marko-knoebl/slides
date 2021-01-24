# CRUD-Operationen

## CRUD-Operationen

Grundlegende Operationen für Datenbankeinträge:

- **c**reate
- **r**ead / **r**etrieve
- **u**pdate
- **d**elete

## Create

SQL:

```sql
INSERT INTO product (name, category, price)
VALUES ('IPhone', 'electronics', 699);
```

MongoDB shell:

```js
db.products.insertOne({
  name: 'IPhone',
  category: 'electronics',
  price: 699,
});
```

## Read

SQL:

```sql
SELECT * FROM product
WHERE category = 'electronics';
```

MongoDB shell:

```js
db.products.find({ category: 'electronics' });
```

## Read

SQL:

```sql
SELECT name, category FROM product
WHERE category = 'electronics';
```

MongoDB shell:

```js
db.products
  .find({ category: 'electronics' })
  .project({ name: 1, price: 1 });
```

## Update

SQL:

```sql
UPDATE product
SET category = 'phones'
WHERE name = 'IPhone';
```

MongoDB shell:

```js
db.products.updateOne(
  { name: 'IPhone' },
  { $set: { category: 'phones' } }
);
```

## Delete

SQL:

```sql
DELETE FROM product
WHERE name = 'IPhone';
```

MongoDB shell:

```js
db.products.deleteOne({ name: 'IPhone' });
```

## Online Playgrounds

- [SQL Editor von W3Schools](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all) (enthält bereits Daten, verwendbar mit Chrome und Safari)
- [MongoDB Web Shell](https://docs.mongodb.com/manual/tutorial/getting-started/)

## Übung

Erstellen / Ändern / Abfragen von Daten in einem Online Playground
