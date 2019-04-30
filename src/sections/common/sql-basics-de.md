# SQL Grundlagen

## SQL

SQL = Structured Query Language

Standardisierte Abfragesprache für tabellarische Datenbanken

## SQL Standardisierung

Standardisiert von _ANSI_ und _ISO_ - allerdings weichen Implementierungen oft vom Standard ab

Die beste Unterstützung für standardisiertes SQL bietet wohl _PostgreSQL_

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

[Popularität laut Stackoverflow Developer Survey](https://insights.stackoverflow.com/survey/2019#technology-_-databases)

## SQL ausprobieren

https://db-fiddle.com (PostgreSQL, MySQL, SQLite)

https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all (SQLite)

Desktop-Anwendung:

https://sqlitebrowser.org/ (SQLite)

## Allgemeine SQL Syntax

Größtenteils _case-insensitive_; Konvention: Keywords _groß_ geschrieben, Rest normal

SQL Statements werden mit `;` beendet

Kommentare sind auf zwei Arten möglich:

```sql
/* mehrzeiliger
Kommentar */
```

```sql
-- einzeiliger Kommentar
```

## Tabellen erstellen

Befehl: `CREATE TABLE`

```sql
CREATE TABLE person(
    name VARCHAR(50),
    tel VARCHAR(20)
);
```

## SQL Datentypen

ISO / ANSI SQL Standard (Auswahl):

- `BOOLEAN`
- `INT` / `INTEGER`, `SMALLINT`, `BIGINT`
- `REAL`, `DOUBLE PRECISION`
- `VARCHAR(n)`
- `VARBINARY(n)`
- `DATE`, `TIME`, `TIMESTAMP`

## Daten eintragen

```sql
INSERT INTO person (name, tel)
VALUES ('John Smith', '012345');
```

Kurzschreibweise:

```sql
INSERT INTO person
VALUES ('John Smith', '012345');
```

## Daten auslesen

Daten aller Personen auslesen

```sql
SELECT name, tel FROM person;
```

oder

```sql
SELECT * FROM person;
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
WHERE name LIKE '% Smith'
AND tel LIKE '+49%';
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
