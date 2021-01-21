# SQL Schema und Indizes

## Online Tutorial

https://www.w3schools.com/sql/default.asp

## Wiederholung: SQL Datentypen

ISO / ANSI SQL Standard (Auswahl):

- `BOOLEAN`
- `INT` / `INTEGER`, `SMALLINT`, `BIGINT`
- `REAL`, `DOUBLE PRECISION`
- `VARCHAR(n)`
- `VARBINARY(n)`
- `DATE`, `TIME`, `TIMESTAMP`

## Boolean

Werden durch die Ausdrücke `TRUE` und `FALSE` repräsentiert

Abweichungen vom Standard:

- _SQL Server_: `BOOLEAN` → `BIT`
- _MySQL_, _SQLite_, _Oracle_: nicht unterstützt, Alternativen z.B. `0` und `1`

## Zahlen

- `SMALLINT` (üblicherweise 16 Bit)
- `INT` / `INTEGER` (üblicherweise 32 Bit)
- `BIGINT` (üblicherweise 64 Bit)
- `NUMERIC` / `DECIMAL` (Dezimalzahlen mit variabler Genauigkeit)
- `REAL` (üblicherweise 32 Bit)
- `DOUBLE PRECISION` (üblicherweise 64 Bit)

Abweichungen vom Standard:

- _MySQL_: `REAL` → `FLOAT`
- _SQLite_: Erlaubt für alle Typen 64 Bit Genauigkeit

## Zahlen

Dezimalzahl mit 10 Stellen vor und 2 Stellen nach dem Komma:

```sql
DECIMAL(12, 2)
```

## Zahlen

MySQL unterscheidet z.B. zwischen:

- `SMALLINT` (-32768 bis 32767)
- `UNSIGNED SMALLINT` (0 bis 65535)

Dies ist nicht Teil des SQL Standards

## Text

- `VARCHAR(10)`: Text der Maximallänge 10

Üblicherweise wird Unicode unterstützt

Bei _SQL Server_ sollte für Unicodeunterstütztung `NVARCHAR` verwendet werden (benötigt doppelt so viel Speicherplatz)

bei _Oracle_ nennt sich der entsprechende Datentyp `VARCHAR2`

Die Maximallänge hat keine Auswirkung auf den Speicherbedarf auf der Festplatte; allerdings kann sie den RAM-Verbrauch beim Lesen und Schreiben beeinflussen

## Text

Text wird _immer_ mit einfachen Anführungszeichen begrenzt.

```SQL
INSERT INTO test VALUES ('Hello');
```

Escapen von einfachen Anführungszeichen durch Verdoppelung:

```SQL
INSERT INTO test VALUES ('Let''s go');
```

## Binärdaten

`VARBINARY(n)`: Bytesequenz mit Maximallänge _n_

Abweichungen vom Standard:

- _PostgreSQL_: `BYTEA`
- _SQLite_: Intern heißt der Datentyp `BLOB`, aber `VARBINARY` wird akzeptiert

## Date, Time

Typen:

- `DATE`: Datum
- `TIME`: Uhrzeit
- `TIMESTAMP`: Datum und Uhrzeit

Beispiele:

- `'2013-02-14'` (empfohlenes Format)
- `'13:02:17'`, `'13:02:17.232'`
- `'2013-02-14 13:02:17'`, `'2013-02-14T13:02:17'`

## Date, Time

Abweichungen vom Standard:

- nicht von `SQLite` unterstützt
- _SQL Server_: `TIMESTAMP` → `DATETIME`

Einschränkungen:

- in _MySQL_ ist `TIMESTAMP` auf Jahre zwischen 1970 und 2038 beschränkt - eine bessere Alternative ist `DATETIME`

## Resourcen zu Datentypen

- [SQLite Datentypen](https://sqlite.org/datatype3.html)
- [Postgres Datentypen](https://www.postgresql.org/docs/current/datatype.html)
- [Postgres SQL Conformance](https://www.postgresql.org/docs/current/features.html)

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

- `NOT NULL`
- `UNIQUE`
- `PRIMARY KEY`
- (`FOREIGN KEY`)

## Not null

Eintrag darf nicht leer gelassen werden

```sql
CREATE TABLE element(
    atomic_number INT NOT NULL,
    symbol VARCHAR(3) NOT NULL,
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
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY;
    ...
);
```

## Auto increment

Nicht-standardisierte Varianten:

- MySQL: `AUTO_INCREMENT`
- SQLite: `AUTOINCREMENT`
- PostgreSQL: `SERIAL`

In SQLite wird immer automatisch ein numerischer eindeutiger Schlüssel unter dem Namen `rowid` angelegt.

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

## Code: Periodensystem

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
