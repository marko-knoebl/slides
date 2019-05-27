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
