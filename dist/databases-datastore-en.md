# Databases and data store

## Presentation and code

Presentations available at: https://karuga.eu/courses-presentations

Code available at: https://github.com/marko-knoebl/courses-code

## Your Trainer

Marko Knöbl

- Frontend Web-Development
  - JavaScript
  - React, Angular
- Programming
  - Python, JavaScript

## Introduction of Participants

- current projects
- prior knowledge
- expectations

## Organizational

- duration
- breaks
- lunch
- materials
- questions, feedback?

# Agenda

- data formats
- databases
- SQL query language

# Data formats

## Data formats

Important formats for saving / exchanging data:

- CSV (comma-separated values, text-based tabular documents)
- JSON (JavaScript Object Notation)
- XML (Extensible Markup Language, similar to HTML)
- SQL databases
- other databases

# Data types

## Data types

Data types and data structures that are important in IT:

- numbers (integers and non-integers)
- yes/no values
- text
- binary data (sequences of 0 and 1 that can represent arbitrary information - e.g. images, video, text, ...)
- time and date
- sequences of other data (e.g. a sequence of numbers)
- associative arrays (key-value mappings)
- missing data - often represented as _null_

## Example online data sources

- DataHub: [Core Data](https://datahub.io/core)
- OpenWeatherMap: [example data (not live)](https://samples.openweathermap.org/data/2.5/weather?q=Berlin&appid=b6907d289e10d714a6e88b30761fae22)

# Numbers

## Numbers

types of numbers:

- _integer_
- _floating-point number_ or _float_ (binary system)
- _decimal_

## Numbers

Programming languages commonly use _integers_ and _floats_

Databases and some data formats additionally use _decimals_

## Numbers

Be cautious of rounding errors: Some numbers cannot be represented as floating point numbers - the will always be rounded

e.g.: `1/3`

A computer is also unable to represent numbers like `0.1` or `0.2` exactly

Example: `0.3 - 0.2` will often not evaluate to `0.1`, but `0.09999999999999998`

## Numbers

Types like _integer_ or _float_ usually have a specific accuracy

examples:

- an _integer_ in _SQL_ can typically represent the values _-2,147,483,648_ to _2,147,483,647_
- a binary floating point number often has an accuracy of about 15 decimal places (_64-Bit numbers_)

## Numbers

Saving as a number or as text?

How should we store credit card numbers, ZIP codes, telephone numbers, ...

## Numbers

Credit card numbers, ZIP codes, telephone numbers should be stored as text

reasons:

- these numbers can start with zeros
- these numbers can include special characters (e.g. `/`, spaces)

Principle: if a number cannot be sensibly used for coputations it should be stored as text

# Boolean values

## Boolean values

Boolean value = value representing yes/no or true/false

Boolean values can be represented via a separate data type or via the values `1` and `0`

Are usually named `true` and `false`

# Strings

## Strings

A _string_ represents text

Today strings can _mostly_ include all Unicode characters; in some cases the character set will be limited, e.g. to _ASCII_

## Strings

Strings are usually delimited by single or double quotes

Valid string literal in Python, JavaScript, JSON:

```txt
"Hello, world!"
```

String in Python, JavaScript, SQL:

```txt
'Hello, world!'
```

## Strings - escape sequences

Problem: how do we write characters like `"` inside of a string?

invalid:

```py
"He said: "hi!""
```

## Strings - escape sequences

Solution in Python, JavaScript, JSON:

```JSON
"He said: \"hi!\""
```

The character sequence `\"` is treated like a single quotation mark

Solution in CSV (and similarly in SQL):

```
"He said: ""hi!"""
```

The character sequence `""` is treated like a single quotation mark

## Strings - escape sequences

More escape sequences in programming languages:

Including a line break in a line (Linux, Mac):

```json
"line 1\nline 2"
```

Including a line break in a line (Windows):

```json
"line 1\r\nline 2"
```

Including a single backslash:

```json
"C:\\programs\\firefox"
```

# null

## null

The special value `null` commonly represents missing / unknown data
# CSV

## CSV

CSV is a file format which can hold tabular data

## Example

```csv
ISO,Country,Capital,Languages
AD,Andorra,Andorra la Vella,"ES,FR"
AE,United Arab Emirates,Abu Dhabi,"AE,fa,en,hi,ur"
AF,Afghanistan,Kabul,"AF,tk"
```

## Standardization

There is no official definitive standard

CSV formats can vary based on:

- separation character: could be a comma, semicolon, tab
- presence of table header
- rules for quoting and escaping values

## Standardization

The format is older than the standards - in practice the format varies widely

- RFC 4180: https://tools.ietf.org/html/rfc4180
- W3C: https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/
  - includes _Best Practice CSV_

## Standardization

- First line _can_ (RFC) / _should_ (W3C) be a comma-separated list of column names
- Lines _must_ (RFC) / _should_ (W3C) be separated by CRLF (carriage return & line feed)
- Fields may be enclosed in double quotes; this is necessary if a field contains a comma, a double quote or a line break
- If a double quote (`"`) appears within a field, it must be escaped by doubling it (`""`)

## TSV

Derived from CSV: _tab-separated values_

Advantages: easier to read, commas don't have to be escaped

Disadvantages: not standardized, not as popular

```tsv
ISO	Country	Capital	Languages
AD	Andorra	Andorra la Vella	ES,FR
AE	United Arab Emirates	Abu Dhabi	AE,fa,en,hi,ur
AF	Afghanistan	Kabul	AF,tk
```

## Exercise

Create a simple CSV file in VS Code and view it in tabular view (icon _open in preview_ in the top right corner)

# JSON

## JSON

JSON = _JavaScript Object Notation_: File format which is especially relevant in web development.

## Data types

- Number
- String
- Boolean
- Null
- Array
- Object

## Null

The expression `null` symbolizes the absence of a value

```json
null
```

## String

Strings are delimited by double quotes

(In JavaScript single quotes would be allowed as well)

## Array

An _array_ contains a sequence of other objects

```json
["Anne", "Bob", "Chris"]
```

```json
[2, 3, 5, 7, 11]
```

## Object

An _object_ contains named entries

```json
{
  "firstName": "Thomas",
  "lastName": "Edison",
  "birthYear": 1847,
  "living": false
}
```

(In JavaScript the names of entries can be stated without quotes, e.g. `firstName`)

# XML

## XML

XML = Extensible Markup Language

Language that is similar to HTML

Was a default language for data exchange; is being replaced more and more by JSON

## XML

example:

```xml
<person>
  <name>Adam</name>
  <age unit="years">40</age>
</person>
```

# Databases

## Databases

use: managing big amounts of data

## Tables and schemas

most databases store their data in tables

## Relations between tables

- `1 : 1`
- `1 : n`
- `m : n`

## Relations between tables: examples

- `0..1 : 1..1`  
  department ←manages→ person
- `0..1 : 0..n`  
  department ←works in→ person
- `0..m : 0..n`  
  project ←works on→ person

## Entity-relationship model

https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model

## ACID

Properties of a database that guarantee its validity (protecting against errors):

- _Atomicity_: Data are modified via transactions which either succeed or fail as a whole - a transaction is never applied only partially.
- _Consistency_: There may be constraints that are defined for datasets. A transaction that would violate such a constraint will fail and will not be applied.
- _Isolation_: Transactions that run in parallel will not influence each other.
- _Durability_: If a transaction is reported to have succeeded its result must be available permanently (i.e. not just in RAM).

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

https://db-fiddle.com (PostgreSQL, MySQL, SQLite)

https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all (SQLite)

Desktop application:

https://sqlitebrowser.org/ (SQLite)

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

https://github.com/datasets

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

# SQL Intermediate

## Online Tutorial

https://www.w3schools.com/sql/default.asp

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

Deviations from

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

# Querying data

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
db.collection('iris').find({});
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
db.collection('iris').find(
  {},
  { sepal_length: 1, sepal_width: 1 }
);
```

Pandas:

```py
iris_data.loc[:,["sepal_length", "sepal_width"]]
```

## Finding specific rows

SQL:

```sql
SELECT * FROM iris WHERE name='Iris-setosa';
```

SQLAlchemy (Python):

```py
session.query(Iris).filter(Iris.name="Iris-setosa")
```

## Finding specific rows

mongo shell:

```js
db.collection('iris').find({ name: 'Iris-setosa' });
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
db.collection('iris').find(
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
db.collection('iris')
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

