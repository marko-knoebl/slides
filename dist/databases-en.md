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

[Popularity according to Stack Overflow Developer Survey 2020](https://insights.stackoverflow.com/survey/2020#technology-databases)

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

# SQL vs MongoDB

## SQL vs MongoDB

SQL (Structured Query Language): developed in the 1970s, many variants

MongoDB: released in 2009

## SQL vs MongoDB

SQL: entries are stored in tables with predefined field names and field types (database schema)

MongoDB: entries (documents) in a collection may generally have arbitrary fields; a schema _may_ be defined

## SQL vs MongoDB

SQL: standardized language (in theory), independent of any programming language

MongoDB: direct bindings for programming languages

# MongoDB data format

## Data types

- numbers
  - int (32 bit) / long (64 bit)
  - double (64 bit floating point)
  - decimal (128 bit)
- bool
- string
- binData
- date (date + time)
- array
- object
- null
- objectId

see: <https://docs.mongodb.com/manual/reference/bson-types/>

## ids

entries automatically get a unique `_id` field:

```js
entry = {
  _id: ObjectId('5e715e1b31315b0be066db84'),
  name: 'Argentina',
  continent: 'South America',
};
```

## BSON file format

MongoDB is based on the BSON file format. It resembles JSON, but it is a binary format and can be read and written more efficiently

Importing and exporting can be done via the programs `mongodump` and `mongorestore`

# MongoDB Atlas

## MongoDB Atlas

[Atlas](https://www.mongodb.com/cloud/atlas): hosted MongoDB databases provided by the developers of MongoDB (Login via Google supported)

## Atlas organization

- organization
  - project
    - cluster (1 free per project)
      - database
        - collection
          - document

## Atlas cluster setup

- create a new organization
- create a new project (with members)
- create a shared cluster (free option)
  - choose any cloud provider (_AWS_, _Google_ or _Azure_)

## Atlas dataset setup

- click on the cluster name to see the details view
- click on the _Collections_ tab
- click "Load a Sample Dataset" - creates 8 sample databases

## Atlas web interface

try to:

- create another database
- create another collection
- create / update / delete multiple records / documents

# MongoDB shell

## MongoDB shell

**MongoDB shell** = simple command line interface for MongoDB that comes with MongoDB

try it online:

<https://docs.mongodb.com/manual/tutorial/getting-started/>

use a subset of MongoDB shell in pure JavaScript (without installing MongoDB):

<https://github.com/marko-knoebl/mingodb>

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

# MongoDB shell - details

## Counting

```js
db.todos.find({ completed: false }).count();
```

## Query selectors

- `$text`
- `$regex`
- `$gt`, `$gte`, `$lt`, `$lte`
- `$in`

## Query selectors

```js
db.products.find({ name: { $text: 'fairphone' } });
db.products.find({
  category: 'phone',
  price: { $lt: 300 },
});
db.products.find({
  category: { $in: ['laptop', 'tablet'] },
  price: { $lt: 400 },
});
```

see: <https://docs.mongodb.com/manual/reference/operator/query/>

# SQL Basics

## SQL

SQL = Structured Query Language

Standardized query language for tabular data

## SQL standardization

The standard is newer than most implementations

Standardized by _ANSI_ and _ISO_

Old drafts of the standard (free):

- [SQL 1992 draft (txt, 1.5 MB)](http://www.contrib.andrew.cmu.edu/~shadow/sql/sql1992.txt)
- [SQL 2011 draft (zip of PDFs, 13 MB)](www.wiscorp.com/sql20nn.zip)

## SQL implementations

open source:

- MySQL
- MariaDB
- PostgreSQL
- SQLite

proprietary:

- Oracle
- SQL Server (Microsoft)

[Popularity according to Stackoverflow Developer Survey](https://insights.stackoverflow.com/survey/2019#technology-_-databases)

## Trying SQL

<https://db-fiddle.com> (PostgreSQL, MySQL, SQLite)

<https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all> (SQLite)

Desktop application:

<https://sqlitebrowser.org/> (SQLite)

## General SQL syntax

SQL statements are terminated by `;`

Two variants of comments:

```sql
/* multi-line
comment */
```

```sql
-- single line comment
```

## General SQL syntax

SQL is motly _case insensitive_

Convention: keywords capitalized, rest lowercase and separated by underscores

example:

```sql
SELECT first_name, last_name, tel FROM person;
```

## General SQL syntax

Table names and column names are converted to uppercase by SQL, e.g. `first_name` → `FIRST_NAME`, `person` → `PERSON`

Exceptions: In _PostgreSQL_ names are converted to lowercase

## General SQL syntax

If names should be used in their exact spelling they need to be quoted; this is rather uncommon

```sql
SELECT "First_Name", "Last_Name", "Tel" FROM "Person";
```

Exception: In _MySQL_ would use backticks (\`) in place of quotes; the mode `ANSI_QUOTES` can be enabled for standards compliant behavior

## Exercise data

<https://github.com/datasets>

## Creating tables

command: `CREATE TABLE`

```sql
CREATE TABLE person(
    name VARCHAR(50),
    tel VARCHAR(20)
);
```

## SQL data types

ISO / ANSI SQL Standard (selection):

- `BOOLEAN`
- `INT` / `INTEGER`, `SMALLINT`, `BIGINT`
- `NUMERIC` / `DECIMAL`
- `REAL`, `DOUBLE PRECISION`
- `VARCHAR(n)`
- `VARBINARY(n)`
- `DATE`, `TIME`, `TIMESTAMP`

## Inserting data

```sql
INSERT INTO person (name, tel)
VALUES ('John Smith', '012345');
```

short form:

```sql
INSERT INTO person
VALUES ('John Smith', '012345');
```

## Querying data

Querying data of all persons:

```sql
SELECT name, tel FROM person;
```

or

```sql
SELECT * FROM person;
```

## Conditional queries (WHERE)

```sql
SELECT tel
FROM person
WHERE name = 'John Smith';
```

```sql
SELECT tel
FROM person
WHERE name LIKE '% Smith'
AND tel LIKE '+49%';
```

## Modifying data (UPDATE)

```sql
UPDATE person
SET name = 'John Miller'
WHERE name = 'John Smith';
```

## Deleting data (DELETE)

```sql
DELETE FROM person
WHERE name = 'John Miller';
```

## Exercise

Create and modify a contact database

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

# SQL schema and indexes

## Online Tutorial

<https://www.w3schools.com/sql/default.asp>

## Recap: SQL data types

ISO / ANSI SQL Standard (selection):

- `BOOLEAN`
- `INT` / `INTEGER`, `SMALLINT`, `BIGINT`
- `REAL`, `DOUBLE PRECISION`
- `VARCHAR(n)`
- `VARBINARY(n)`
- `DATE`, `TIME`, `TIMESTAMP`

## Boolean

Represented by the expressions `TRUE` and `FALSE`

Deviations from the standard:

- _SQL Server_: `BOOLEAN` → `BIT`
- _MySQL_, _SQLite_, _Oracle_: not supported, alternative could be `0` and `1`

## Numbers

- `SMALLINT` (commonly 16 Bit)
- `INT` / `INTEGER` (commonly 32 Bit)
- `BIGINT` (commonly 64 Bit)
- `NUMERIC` / `DECIMAL` (decimal numbers with variable accuracy)
- `REAL` (commonly 32 Bit)
- `DOUBLE PRECISION` (commonly 64 Bit)

Deviations from the standard:

- _MySQL_: `REAL` → `FLOAT`
- _SQLite_: All types are stored with 64 bit accuracy

## Numbers

Decimal number with 10 digits before and 2 digits after the decimal point:

```sql
DECIMAL(12, 2)
```

## Numbers

MySQL distinguishes between:

- `SMALLINT` (-32768 to 32767)
- `UNSIGNED SMALLINT` (0 to 65535)

## Text

- `VARCHAR(10)`: Text of up to 10 characters

Usually Unicode is supported

On _SQL Server_: Use `NVARCHAR` for Unicode support (needs twice as much space)

On _Oracle_: use `VARCHAR2`

Maximum length does not affect size on disk (but may affect size in memory)

## Text

Text is _always_ delimited by single quotes:

```SQL
INSERT INTO test VALUES ('Hello');
```

Escaping quotes by doubling:

```SQL
INSERT INTO test VALUES ('Let''s go');
```

## Binary data

`VARBINARY(n)`: Byte sequence with maximum length _n_

Deviations from the standard:

- _PostgreSQL_: `BYTEA`
- _SQLite_: Internally the data type is called `BLOB`, but `VARBINARY` is accepted

## Date, Time

Types:

- `DATE`
- `TIME`
- `TIMESTAMP`: date and time

examples:

- `'2013-02-14'` (recommended format)
- `'13:02:17'`, `'13:02:17.232'`
- `'2013-02-14 13:02:17'`, `'2013-02-14T13:02:17'`

## Date, Time

Deviations from the standard:

- not supported by `SQLite`
- _SQL Server_: `TIMESTAMP` → `DATETIME`

Limitations:

- _MySQL_: `TIMESTAMP` is limited to years between 1970 and 2038 - a better alternative would be `DATETIME`

## Resources on data types

- [SQLite data types](https://sqlite.org/datatype3.html)
- [PostgreSQL data types](https://www.postgresql.org/docs/current/datatype.html)
- [PostgreSQL SQL Conformance](https://www.postgresql.org/docs/current/features.html)

## Example: database of chemical elements

entries:

- _atomic_number_
- _symbol_
- _name_
- _atomic_mass_

## Example: database of chemical elements

```sql
CREATE TABLE element(
    atomic_number INT,
    symbol VARCHAR(2),
    name VARCHAR(20),
    atomic_mass REAL
);
```

## Constraints

Constraining columns:

- `NOT NULL`
- `UNIQUE`
- `PRIMARY KEY`
- (`FOREIGN KEY`)

## Not null

Entry may not be left blank

```sql
CREATE TABLE element(
    atomic_number INT NOT NULL,
    symbol VARCHAR(3) NOT NULL,
    name VARCHAR(20) NOT NULL,
    atomic_mass REAL NOT NULL
);
```

## Unique

Each entry in a column must be unique

```sql
CREATE TABLE element(
    atomic_number INT NOT NULL UNIQUE,
    symbol VARCHAR(2) NOT NULL UNIQUE,
    name VARCHAR(20) NOT NULL UNIQUE,
    atomic_mass REAL NOT NULL
);
```

## Primary key

Enables a unique identification of a row in a table

- natural key: is "naturally" contained in the data
- surrogate key: is added in addition to the data (as an integer)

A primary key is always _unique_ and _not null_

## Primary key

natural key:

```sql
CREATE TABLE element(
    atomic_number INT PRIMARY KEY,
    symbol VARCHAR(2) NOT NULL UNIQUE,
    name VARCHAR(20) NOT NULL UNIQUE,
    atomic_mass REAL NOT NULL
);
```

## Primary key

surrogate key:

```sql
CREATE TABLE element(
    id INT PRIMARY KEY,
    atomic_numer INT,
    symbol VARCHAR(2) NOT NULL UNIQUE,
    name VARCHAR(20) NOT NULL UNIQUE,
    atomic_mass REAL NOT NULL
);
```

## Auto increment

Automatic creation of a numeric primary key starting at 1:

Standard SQL (implemented in PostgreSQL, Oracle):

```sql
CREATE TABLE element(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY;
    ...
);
```

## Auto increment

other variants:

- MySQL: `AUTO_INCREMENT`
- SQLite: `AUTOINCREMENT`
- PostgreSQL: `SERIAL`

SQLite will always automatically generate a unique numeric key under the name `rowid`

## Indexes in databases

In general: ordered lists can be searched much quicker than unordered lists (binary search)

Example: in the phone book we can quickly search for a last name, but not for a first name

Indexes may be added to one or more columns (additional data that references the entries in a specific order)

## Creating indexes

```sql
CREATE INDEX idx_name
ON element (name);
```

Querying for names will now be faster

## Code: periodic table

```sql
CREATE TABLE element(
    atomic_number INT,
    symbol VARCHAR(2) NOT NULL UNIQUE,
    name VARCHAR(20) NOT NULL UNIQUE,
    atomic_mass REAL NOT NULL
);

CREATE INDEX idx_name
ON element (name);

INSERT INTO element(atomic_number, symbol, name, atomic_mass)
VALUES (1, 'H', 'Hydrogen', 1.008);

INSERT INTO element(atomic_number, symbol, name, atomic_mass)
VALUES (2, 'He', 'Helium', 4.0026);

SELECT *
FROM element
WHERE name='Hydrogen';
```

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

# Databases - intermediate

## Relations between tables

- `1 : 1`
- `1 : n`
- `m : n`

## Relations between tables: examples

- `0..1 : 1..1`  
  department ←manages→ employee  
  A department has 1 manager; each employee manages either 0 or 1 departments
- `0..1 : 0..n`  
  department ←works in→ employee  
  A department can have many employees; an employee can be assigned to 0 or 1 departments;
- `0..m : 0..n`  
  project ←works on→ employee  
  A project can have multiple employees working on it; an employee can work on multiple projects

## Entity-relationship model

<https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model>

## ACID

Properties of a database that guarantee its validity (protecting against errors):

- _Atomicity_: Data are modified via transactions which either succeed or fail as a whole - a transaction is never applied only partially.
- _Consistency_: There may be constraints that are defined for datasets. A transaction that would violate such a constraint will fail and will not be applied.
- _Isolation_: Transactions that run in parallel will not influence each other.
- _Durability_: If a transaction is reported to have succeeded its result must be available permanently (i.e. not just in RAM).

# SQL Joins

## Example: music database

tables:

- _artist_
- _album_
- _song_

template: Chinook Musikdatenbank

[GitHub](https://github.com/lerocha/chinook-database)

[Inspector on SchemaSpy](http://schemaspy.org/sample/index.html)

## Example: music database - artist

```sql
CREATE TABLE artist(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(20) NOT NULL,
    country VARCHAR(5) NOT NULL,
    year SMALLINT NOT NULL
);

INSERT INTO artist (name, country, year)
VALUES ('The Beatles', 'UK', 1960);

INSERT INTO artist (name, country, year)
VALUES ('AC/DC', 'AUS', 1973);
```

## Foreign key

Reference to one entry in another table

example: each entry in the table _song_ may reference an entry in the table _artist_ via the column _artist_id_

## Foreign key

```sql
CREATE TABLE song(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(30) NOT NULL,
    artist_id INT,
    FOREIGN KEY(artist_id) REFERENCES artist(id)
);

INSERT INTO song (title, artist_id)
VALUES ('Let it Be', 1);
```

## Foreign key

A foreign key guarantees the existence of a matching entry in the other associated table

```sql
INSERT INTO song (title, artist_id)
VALUES ('Wish You Were Here', 10);
```

→ error

## Joining tables (INNER JOIN)

```sql
SELECT song.title, artist.name
FROM artist
INNER JOIN song
ON artist.id=song.artist_id;
```

The above code lists all combinations where `artist.id` and `song.artist_id` match

## Joining tables (LEFT JOIN)

```sql
SELECT song.title, artist.name
FROM song
LEFT JOIN artist
ON artist.id=song.artist_id;
```

The above code lists all combinations and also includes songs that don't have an artist defined

# Querying data - examples

## Getting all data

SQL:

```sql
SELECT * FROM iris;
```

SQLAlchemy (Python):

```sql
session.query(Iris)
```

mongo shell (JS):

```js
db.iris.find({});
```

Pandas (Python): N/A

## Selecting only some columns / fields

SQL:

```sql
SELECT sepal_length, sepal_width FROM iris;
```

SQLAlchemy (Python):

```sql
session.query(Iris.sepal_length, Iris.sepal_width)
```

## Selecting only some columns / fields

Mongo shell:

```js
db.iris.find({}, { sepal_length: 1, sepal_width: 1 });
```

Pandas:

```py
iris_data.loc[:,["sepal_length", "sepal_width"]]
```

## Finding specific entries

SQL:

```sql
SELECT * FROM iris WHERE name='Iris-setosa';
```

SQLAlchemy (Python):

```py
session.query(Iris).filter(Iris.name="Iris-setosa")
```

## Finding specific entries

mongo shell:

```js
db.iris.find({ name: 'Iris-setosa' });
```

pandas (Python):

```py
iris_setosa_data = iris_data.loc[
    iris_data["name"] == "Iris-setosa"
]
```

pandas (Python): selecting a range of rows:

```py
iris_data.iloc[10:20]
```

## Combination: rows and columns

SQL:

```sql
SELECT sepal_length, sepal_width
FROM iris
WHERE name='Iris-setosa';
```

## Combination: rows and columns

SQLAlchemy (Python):

```py
session.query(
    Iris.sepal_length, Iris.sepal_width
).filter(Iris.name="Iris-setosa")
```

## Combination: rows and columns

mongo shell:

```js
db.iris.find(
  { name: 'Iris-setosa' },
  { sepal_length: 1, sepal_width: 1 }
);
```

## Combination: rows and columns

pandas (Python):

```py
iris_data.loc[
    [iris_data["name"] == "Iris-setosa"],
    ["sepal_length", "sepal_width"],
]
```

## Sorting data

SQL:

```sql
SELECT sepal_length, sepal_width
FROM iris
ORDER BY sepal_length;
```

## Sorting data

SQLAlchemy:

```py
session.query(
    Iris.sepal_length, Iris.sepal_width
).order_by(Iris.sepal_length)
```

## Sorting data

mongo shell:

```js
db.iris
  .find({}, { sepal_length: 1, sepal_width: 1 })
  .sort({ sepal_length: 1 });
```

## Sorting data

pandas (Python):

```py
iris_data.loc[["sepal_length", "sepal_width"]].sort_values(
    by="sepal_length"
)
```
