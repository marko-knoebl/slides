# SQL Grundlagen

## SQL

SQL = Structured Query Language

Standardisierte Abfragesprache für tabellarische Datenbanken

## SQL Standardisierung

Standardisiert von _ANSI_ und _ISO_ - allerdings weichen Implementierungen oft vom Standard ab

Alte Version des Standards (kostenlos): http://www.contrib.andrew.cmu.edu/~shadow/sql/sql1992.txt

## SQL Implementierungen

proprietär:

- Oracle
- SQL Server (Microsoft)

open source:

- MySQL
- MariaDB
- PostgreSQL
- SQLite

## SQL ausprobieren

https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all

https://db-fiddle.com

Desktop-Anwendung:

https://sqlitebrowser.org/

## Tabellen erstellen

Befehl: `CREATE TABLE`

```sql
CREATE TABLE person(
    name VARCHAR(50),
    tel VARCHAR(20)
)
```

## SQL-Datentypen

ISO / ANSI SQL Standard (Auswahl):

- `boolean`
- `smallint` (üblicherweise 16 Bit)
- `int` / `integer` (üblicherweise 32 Bit)
- `bigint` (üblicherweise 64 Bit)
- `real` (üblicherweise 32 Bit)
- `double precision` (üblicherweise 64 Bit)
- `varchar(n)` (Unicode-String mit Maximallänge _n_)
- `varbinary(n)` (Bytesequenz mit Maximallänge _n_)

## Daten eintragen

```sql
INSERT INTO person
VALUES ('John Smith', '012345');
```

```sql
INSERT INTO person (name, tel)
VALUES ('John Smith', '012345');
```

## Daten auslesen

Daten aller Personen auslesen

```sql
SELECT name, tel FROM person
SELECT * FROM person
```

## Bedingte Abfragen (WHERE)

```sql
SELECT tel
FROM person
WHERE name = 'John Smith';
```

```sql
SELECT tel
FROM person
WHERE name LIKE 'John%' AND tel LIKE '+49%';
```

## Daten eintragen (UPDATE)

```sql
UPDATE person
SET name = 'John Miller'
WHERE name = 'John Smith';
```

## Daten löschen (DELETE)

```sql
DELETE FROM person
WHERE name = 'John Miller';
```

## Übung

Erstellen und Abändern einer Kontaktdatenbank
