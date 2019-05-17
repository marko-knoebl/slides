# SQL Grundlagen

## SQL

SQL = Structured Query Language

Standardisierte Abfragesprache für tabellarische Datenbanken

## SQL Standardisierung

Standardisiert von _ANSI_ und _ISO_ - allerdings weichen Implementierungen oft vom Standard ab

Die beste Unterstützung für standardisiertes SQL bietet wohl _PostgreSQL_

Alte Entwürfe des Standards (kostenlos):

- [SQL 1992 Entwurf (txt, 1.5 MB)](http://www.contrib.andrew.cmu.edu/~shadow/sql/sql1992.txt)
- [SQL 2011 Entwurf (zip von PDFs, 13 MB)](www.wiscorp.com/sql20nn.zip)

## SQL Implementierungen

open source:

- MySQL
- MariaDB
- PostgreSQL
- SQLite

proprietär:

- Oracle
- SQL Server (Microsoft)

[Popularität laut Stackoverflow Developer Survey](https://insights.stackoverflow.com/survey/2019#technology-_-databases)

## SQL ausprobieren

https://db-fiddle.com (PostgreSQL, MySQL, SQLite)

https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all (SQLite)

Desktop-Anwendung:

https://sqlitebrowser.org/ (SQLite)

## Allgemeine SQL Syntax

SQL Statements werden mit `;` beendet

Kommentare sind auf zwei Arten möglich:

```sql
/* mehrzeiliger
Kommentar */
```

```sql
-- einzeiliger Kommentar
```

## Allgemeine SQL Syntax

SQL ist größtenteils _case-insensitive_

Konvention: Keywords groß geschrieben, Rest meist klein und durch Unterstriche getrennt

Beispiel:

```sql
SELECT first_name, last_name, tel FROM person;
```

## Allgemeine SQL Syntax

Tabellen- und Spaltennamen werden von SQL in Großschreibweise konvertiert, z.B. `first_name` → `FIRST_NAME`, `person` → `PERSON`

Ausnahme: In _PostgreSQL_ werden Namen in Kleinschreibweise konvertiert

## Allgemeine SQL Syntax

Sollen Namen in exakter Schreibweise übernommen werden, müssen sie in Anführungszeichen gesetzt werden. Dies ist eher unüblich.

```sql
SELECT "First_Name", "Last_Name", "Tel" FROM "Person";
```

Ausnahme: In _MySQL_ würden hier Backticks (\`) statt Anführungszeichen verwendet werden; hier kann über den Modus `ANSI_QUOTES` ein Standard-kompatibles Verhalten erreicht werden

## Übungsdaten

https://github.com/datasets

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
- `NUMERIC` / `DECIMAL`
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
