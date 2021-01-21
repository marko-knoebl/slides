# SQL schema and indexes

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
