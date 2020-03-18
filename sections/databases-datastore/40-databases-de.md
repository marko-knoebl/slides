# Datenbanken

## Datenbanken

Verwendung: Verwaltung großer Datenmengen

## Datenbanken

Beispiele:

- SQL databases
  - MySQL
  - PostgreSQL
  - Microsoft SQL Server
  - SQLite
  - Oracle
- MongoDB
- Redis

[Verbreitung laut Stack Overflow Developer Survey 2019](https://insights.stackoverflow.com/survey/2019#technology-_-databases)

## Terminologie

- **Tabelle / Collection**: Ansammlung ähnlicher Datenobjekte (z.B. eine für Produkte)
- **Zeile / Eintrag / Dokument**: Einzelner Eintrag in einer Tabelle (z.B. für ein einzelnes Produkt)
- **Feld**: Ein Wert in einem Eintrag (z.B. _Preis_)

## CRUD-Operationen

Grundlegende Operationen für Datenbankeinträge:

- **c**reate
- **r**ead / **r**etrieve
- **u**pdate
- **d**elete

## Create

SQL:

```sql
INSERT INTO product (name, category)
VALUES ('IPhone', 'electronics')
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

## Online Playgrounds

- [SQL Editor von W3Schools](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all) (enthält bereits Daten, verwendbar mit Chrome und Safari)
- [MongoDB Web Shell](https://docs.mongodb.com/manual/tutorial/getting-started/)

## Übung

Erstellen / Ändern / Abfragen von Daten in einem Online Playground
