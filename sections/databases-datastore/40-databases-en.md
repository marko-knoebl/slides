# Databases

## Databases

use: managing big amounts of data

## Databases

examples:

- SQL databases
  - MySQL
  - PostgreSQL
  - Microsoft SQL Server
  - SQLite
  - Oracle
- MongoDB
- Redis

[Popularity according to Stack Overflow Developer Survey 2019](https://insights.stackoverflow.com/survey/2019#technology-_-databases)

## Terminology

- **table / collection**: a set of similar data objects (e.g. one for products)
- **row / record / document**: an entry in a table (e.g. a single product)
- **field**: a property of a record (e.g. _price_)

## CRUD operations

basic operations for database records:

- **c**reate
- **r**ead / **r**etrieve
- **u**pdate
- **d**elete

## Create

SQL:

```sql
INSERT INTO product (name, category)
VALUES ('IPhone', 'electronics');
```

MongoDB shell:

```js
db.products.insertOne({
  name: 'IPhone',
  category: 'electronics',
});
```

## Read

SQL:

```sql
SELECT name, category FROM product
WHERE category = 'electronics';
```

MongoDB shell:

```js
db.products.find({ category: 'electronics' });
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

## Online playgrounds

- [SQL Editor from W3Schools](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all) (contains predefined data, usable on Chrome and Safari)
- [MongoDB Web Shell](https://docs.mongodb.com/manual/tutorial/getting-started/)

## Exercise

Create / change / query data in an online playground
