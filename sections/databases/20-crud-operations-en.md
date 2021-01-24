# CRUD operations

## CRUD operations

basic operations for database records:

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
SELECT name, price FROM product
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

## Online playgrounds

- [SQL Editor from W3Schools](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all) (contains predefined data, usable on Chrome and Safari)
- [MongoDB Web Shell](https://docs.mongodb.com/manual/tutorial/getting-started/)

## Exercise

Create / change / query data in an online playground
