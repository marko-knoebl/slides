# SQL Intermediate

## Online Tutorial

https://www.w3schools.com/sql/default.asp

## Wiederholung: SQL Datentypen

ISO / ANSI SQL Standard (Auswahl):

- `boolean`
- `smallint` (üblicherweise 16 Bit)
- `int` / `integer` (üblicherweise 32 Bit)
- `bigint` (üblicherweise 64 Bit)
- `real` (üblicherweise 32 Bit)
- `double precision` (üblicherweise 64 Bit)
- `varchar(n)` (Unicode-String mit Maximallänge _n_)
- `varbinary(n)` (Bytesequenz mit Maximallänge _n_)

## SQL-Datentypen: Ausnahmen

Der SQL Standard wird von keiner Implementierung voll umgesetzt

SQLServer: `boolean` → `bit`

Oracle: ~~`boolean`~~ → X, `varchar` → `varchar2`

MySQL: ~~`boolean`~~ → X, `real` → `float`

Postgres: `varbinary(n)` → `bytea` (siehe auch [Postgres SQL Conformance](https://www.postgresql.org/docs/current/features.html))

SQLite: ~~`boolean`~~ → X, (`smallint`, `int`, `bigint`) → `integer`, ~~`real`~~ → X, `varbinary` → `blob`

## Signed & unsigned

MySQL unterscheidet z.B. zwischen:

- `SMALLINT` (-32768 bis 32767)
- `UNSIGNED SMALLINT` (0 bis 65535)

## Beispiel: Datenbank chemischer Elemente

Einträge:

- _atomic_number_
- _symbol_
- _name_
- _atomic_mass_

## Beispiel: Datenbank chemischer Elemente

```sql
CREATE TABLE element(
    atomic_number INT,
    symbol VARCHAR(2),
    name VARCHAR(20),
    atomic_mass REAL
);
```

## Constraints

Einschränkungen von Spalten:

- `not null`
- `unique`
- `primary key`
- (`foreign key`)

## Not null

Eintrag darf nicht leer gelassen werden

```sql
CREATE TABLE element(
    atomic_number INT NOT NULL,
    symbol VARCHAR(2) NOT NULL,
    name VARCHAR(20) NOT NULL,
    atomic_mass REAL NOT NULL
);
```

## Unique

Jeder Eintrag in einer Spalte muss einzigartig sein

```sql
CREATE TABLE element(
    atomic_number INT NOT NULL UNIQUE,
    symbol VARCHAR(2) NOT NULL UNIQUE,
    name VARCHAR(20) NOT NULL UNIQUE,
    atomic_mass REAL NOT NULL
);
```

## Primary key

Ermöglicht eindeutige Identifizierung einer Zeile in einer Tabelle

- Sprechender Schlüssel: von Haus aus in den Daten enthalten
- Surrogatschlüssel: zusätzlich hinzugefügter Schlüssel (meist Integerwert)

Ein sprechender Schlüssel ist nur in besonderen Fällen einsetzbar, ein Surrogatschlüssel ist immer möglich

Ein Primary Key ist automatisch _unique_ und _not null_.

## Primary key

Sprechender Schlüssel:

```sql
CREATE TABLE element(
    atomic_number INT PRIMARY KEY,
    symbol VARCHAR(2) NOT NULL UNIQUE,
    name VARCHAR(20) NOT NULL UNIQUE,
    atomic_mass REAL NOT NULL
);
```

## Primary key

Surrogatschlüssel:

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

Automatisches Erstellen eines numerischen Primary Keys beginnend bei 1:

Standard SQL (implementiert in PostgreSQL, Oracle):

```sql
CREATE TABLE element(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    ...
);
```

## Auto increment

Nicht-standardisierte Varianten:

- MySQL: `AUTO_INCREMENT`
- SQLite: `AUTOINCREMENT`
- PostgreSQL: `SERIAL`

In SQLite wird immer automatisch ein numerischer eindeutiger Schlüssel unter dem Namen `rowid` angelegt.

## Code: Periodensystem

```sql
CREATE TABLE element(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    atomic_number INT,
    symbol VARCHAR(2) NOT NULL UNIQUE,
    name VARCHAR(20) NOT NULL UNIQUE,
    atomic_mass REAL NOT NULL
);

INSERT INTO element(atomic_number, symbol, name, atomic_mass)
VALUES (1, 'H', 'Hydrogen', 1.008);

INSERT INTO element(atomic_number, symbol, name, atomic_mass)
VALUES (2, 'He', 'Helium', 4.0026);

SELECT *
FROM element
WHERE name='Hydrogen';
```

## Indizes in Datenbanken

Generell: geordnete Listen können viel schneller durchsucht werden als ungeordnete (binäre Suche)

Beispiel: im Telefonbuch kann man schnell nach dem Nachnamen einer Person suchen, aber nicht nach dem Vornamen

Auf eine oder mehrere Spalten kann ein Index angewendet werden: Zusätzliche Datenstruktur, die auf die Daten in bestimmter Ordnung verweist.

## Indizes erstellen

```sql
CREATE INDEX idx_name
ON element (name);
```

Es kann nun nach den Elementnamen schneller gesucht werden
