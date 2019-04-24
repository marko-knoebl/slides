# SQL

## Die Abfragesprache SQL

SQL = Structured Query Language

Standardisierte Abfragesprache für tabellarische Datenbanken

## SQL-Varianten

- SQL Server
- Oracle
- MySQL
- MariaDB
- PostgreSQL
- SQLite

## Online Tutorial

https://www.w3schools.com/sql/default.asp

## SQL ausprobieren

https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all

Desktop-Anwendung:

https://sqlitebrowser.org/

## Tabellen erstellen

Befehl: `CREATE TABLE`

```sql
CREATE TABLE person(
    name VARCHAR(50),
    tel VARCHAR(20));
```

## Tabellen erstellen

```sql
CREATE TABLE person(
    id INTEGER NOT NULL AUTO_INCREMENT,
    name TEXT,
    tel TEXT);
```

## SQL-Datentypen

| ANSI SQL         | SQLServer     | Oracle       | MySQL         | Postgres         | SQLite  |
| ---------------- | ------------- | ------------ | ------------- | ---------------- | ------- |
| boolean          | bit           | byte         |               | boolean          |         |
| smallint         | smallint      | number       | smallint      | smallint         | integer |
| int/integer      | int           | number       | int           | integer          | integer |
| bigint           | bigint        | number       | bigint        | bigint           | integer |
| float            | float         | float        | float         | real             | real    |
| double precision | float         | float        | float         | double precision | real    |
| varchar(20)      | varchar(20)   | varchar2(20) | varchar(20)   | varchar          | text    |
| varbinary(20)    | varbinary(20) | blob         | varbinary(20) | bytea            | blob    |

## signed & unsigned

MySQL unterscheidet zB zwischen:

- `SMALLINT` (-32768 bis 32767)
- `UNSIGNED SMALLINT` (0 bis 65535)

## not null

Eintrag darf nicht leer gelassen werden

```sql
/* MySQL */
CREATE TABLE person(
    id INT NOT NULL,
    name VARCHAR(50));
```

## unique

Jeder Eintrag muss einen einzigartigen Wert in der Tabelle haben

```sql
/* alle außer MySQL */
CREATE TABLE person(
    id INTEGER UNIQUE NOT NULL,
    name VARCHAR(50)
);
```

```sql
/* MySQL */
CREATE TABLE person(
    id INTEGER NOT NULL,
    name VARCHAR(50),
    UNIQUE(id)
);
```

## auto increment

Integer wird automatisch bei jedem neuen Element erhöht

```sql
/* MySQL */
CREATE TABLE person(
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(50));
```

- sqlite: `AUTOINCREMENT`
- Postgres: `SERIAL`

## primary key

Eindeutige Identifizierung einer Zeile in einer Tabelle

- Sprechender Schlüssel: von Haus aus in den Daten enthalten
- Surrogatschlüssel: zusätzlich hinzugefügter Schlüssel (meist Integerwert)

```sql
/* mysql */
CREATE TABLE person(
    id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);
```

In sqlite wird immer automatisch ein numerischer Primärschlüssel unter dem Namen `rowid` angelegt.

## foreign key

Referenz auf jeweils einen Eintrag einer anderen Tabelle

z.B.: Jeder Eintrag in der Tabelle _person_ kann über die Spalte _country_id_ mit der Tabelle _country_ verknüpft werden

Der Zusatz `FOREIGN KEY ...` garantiert, dass ein entsprechender Eintrag in der anderen Tabelle existiert

```sql
/* mysql, sqlite */
CREATE TABLE person(
    country_id INT NOT NULL,
    FOREIGN KEY (country_id) REFERENCES country(id)
);
```

## Daten eintragen

```sql
INSERT INTO person VALUES ('Andreas Berger', '012345');
```

```sql
INSERT INTO person (name, tel) VALUES ('Andreas Berger', '012345');
```

## Daten auslesen

Daten aller Personen auslesen

```sql
SELECT name, tel FROM person
SELECT * FROM person
```

## Bedingte Abfragen (WHERE)

```sql
SELECT tel FROM person WHERE name = 'Andreas Berger';
SELECT tel FROM person WHERE name LIKE 'Andreas%' AND tel LIKE '+49%';
```

## Daten eintragen (UPDATE)

```sql
UPDATE person
SET name = 'Andreas Müller'
WHERE name = 'Andreas Müller';
```

## Daten löschen (DELETE)

```sql
DELETE FROM person WHERE name = 'Andreas Müller';
```

## Tabellen verknüpfen (INNER JOIN)

```sql
SELECT song.title, album.year
FROM song
INNER JOIN album
ON song.albumid = album.id;
```

Der obige Code listet alle Kombinationen auf, bei denen `song.albumid` und `album.id` übereinstimmen

## Tabellen verknüpfen (LEFT JOIN)

```sql
SELECT song.title, album.year
FROM song
LEFT JOIN album
ON song.albumid = album.id;
```

Der obige Code listet alle Kombinationen auf und beinhaltet auch Lieder, für die kein Album definiert ist

## Indizes in Datenbanken

Generell: geordnete Listen können viel schneller durchsucht werden als ungeordnete (binäre Suche)

Beispiel: im Telefonbuch kann man schnell nach dem Nachnamen einer Person suchen, aber nicht nach dem Vornamen

Auf eine oder mehrere Spalten kann ein Index angewendet werden: Zusätzliche Datenstruktur, die auf die Daten in bestimmter Ordnung verweist.

## Indizes erstellen

```sql
CREATE INDEX person_name ON person (name)
```

## SQL ausprobieren

Auf https://pythonanywhere.com stehen _MySQL_ und _PostgreSQL_ kostenfrei zur Verfügung.
