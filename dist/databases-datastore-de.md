# {{title}}

## Präsentation und Code

Präsentationen verfügbar unter: https://karuga.eu/courses-presentations

Code verfügbar unter: https://github.com/marko-knoebl/courses-code

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

## Vorstellung der Teilnehmer

- Name
- Firma
- Aktuelle Projekte
- Grund der Schulung
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

# Agenda

- Datenformate
- Datenbanken
- SQL-Abfragesprache

# Datenformate

## Datenformate

Wichtige Formate zum Speichern bzw zum Austausch von Daten:

- CSV (Comma-separated values, Textbasierte tabellarische Dokumente)
- JSON (JavaScript Object Notation)
- XML (Extensible Markup Language, ähnlich zu HTML)
- SQL Datenbanken
- andere Datenbanken

# Datentypen

## Datentypen

Datentypen und Datenstrukturen, mit denen in der Informatik oft gearbeitet wird:

- Zahlen (Kommazahlen und Ganzzahlen)
- Ja/Nein - Werte
- Text
- Binärdaten (Folgen von 0 und 1, die beliebige Informationen repräsentieren können - z.B. ein Bild, ein Video, Text, ...)
- Zeit- / Datumsangaben
- Aufreihungen anderer Daten (z.B. eine Reihe von Zahlen)
- Assoziative Arrays (Sammlungen benannter Einträge)
- fehlende Daten - oft mit _null_ repräsentiert

## Beispiele für Online-Datenquellen

- OpenWeatherMap: [Beispieldaten (nicht live)](https://samples.openweathermap.org/data/2.5/weather?q=Berlin&appid=b6907d289e10d714a6e88b30761fae22)
- DataHub: [Core Data](https://datahub.io/core)

# Zahlen

## Zahlen

wichtige Arten von Zahlen in der Informatik:

- _integer_ (Ganzzahlen)
- _floating-point number_ oder _float_ (Kommazahlen im Binärsystem)
- _decimal_ (Kommazahlen im Dezimalsystem)

## Zahlen

In Programmiersprachen werden hauptsächlich _integer_ und _floats_ verwendet

In Datenbanken oder CSV-Dateien kommt auch der Typ _decimal_ vor

## Zahlen

Achtung Rundungsfehler: Einige Zahlen können nicht genau als Kommazahlen repräsentiert werden, sie werden immer gerundet

z.B.: `1/3`

Im Binärsystem können auch Zahlen wie `0.1` oder `0.2` nicht genau repräsentiert werden - hier gibt es ganz kleine Abweichungen

Beispiel: `0.3 - 0.2` ergibt in Programmiersprachen nicht exakt `0.1`, sondern meist `0.09999999999999998`

## Zahlen

Typen wie _integer_ oder _float_ haben üblicherweise eine vorgegebene Genauigkeit

Beispiele:

- ein _integer_ in _SQL_ kann typischerweise die Werte _-2,147,483,648_ bis _2,147,483,647_ annehmen
- eine Kommazahl im Binärsystem hat oft eine Genauigkeit von etwa 15 Dezimalstellen (_64-Bit_ Genauigkeit)

## Zahlen

Speicherung als Zahl oder als Text?

Wie speichert man Kreditkartennummern, Postleitzahlen, Telefonnummern, ...?

## Zahlen

Kreditkartennummern, Postleitzahlen, Telefonnummern, etc sollten als Text gespeichert werden

Gründe:

- solche Daten können mit Nullen beginnen, die bei einer Zahl nicht erfasst würden
- solche Daten können Sonderzeichen (z.B. `/`, Leerzeichen, ...) enthalten

Grundregel: wenn mit einer Zahl nicht sinnvoll gerechet werden kann, sollte sie als String gespeichert werden.

# Boolesche Werte

## Boolesche Werte

Boolescher Wert = Ja/Nein bzw wahr/falsch - Wert

Haben entweder einen eigenen Datentyp oder werden durch die Werte `1` und `0` repräsentiert

Werden üblicherweise durch die Ausdrücke `true` und `false` (oder `True` und `False`) bezeichnet

# Strings

## Strings

Ein _String_ - auch _Zeichenkette_ genannt - repräsentiert Text

Heutzutage können in Strings _meist_ alle Unicode-Zeichen verwendet werden; in manchen Fällen ist die Zeichenauswahl allerdings eingeschränkt - z.B. auf _ASCII_

## Strings

Strings werden üblicherweise mit einfachen oder doppelten Anführungszeichen begrenzt

Gültiger String in Python, JavaScript, JSON:

```txt
"Hello, world!"
```

Gültiger String in Python, JavaScript, SQL:

```txt
'Hello, world!'
```

## Strings - Escape-Sequenzen

Problem: Wie schreiben wir Zeichen wie z.B. `"` innerhalb eines Strings?

Ungültig:

```py
"He said: "hi!""
```

## Strings - Escape-Sequenzen

Lösungen in Python, JavaScript, JSON:

```JSON
"He said: \"hi!\""
```

Die Zeichenfolge `\"` wird wie ein einzelnes Anführungszeichen interpretiert

Lösung in CSV (und ähnlich in SQL):

```
"He said: ""hi!"""
```

Die Zeichenfolge `""` wird wie ein einzelnes gewöhnliches Anführungszeichen interpretiert

## Strings - Escape-Sequenzen

Weitere Escape-Sequenzen in Programmiersprachen:

Zeilenumbruch in 1 Zeile (Linux, Mac):

```json
"line 1\nline 2"
```

Zeilenumbruch in 1 Zeile (Windows):

```json
"line 1\r\nline 2"
```

Einzelner Backslash:

```json
"C:\\programs\\firefox"
```

# null

## null

Mit `null` wird ausgedrückt, dass ein bestimmter Wert fehlt oder unbekannt ist

# CSV

## CSV

CSV (_comma-separated values_) ist ein Dateiformat, das tabellarische Daten beinhalten kann

## Beispiel

```csv
ISO,Country,Capital,Languages
AD,Andorra,Andorra la Vella,"ES,FR"
AE,United Arab Emirates,Abu Dhabi,"AE,fa,en,hi,ur"
AF,Afghanistan,Kabul,"AF,tk"
```

## Standardisierung

Es gibt keinen definitiven Standard

Varianten des CSV Formats können sich durch die folgenden Aspekte unterscheiden:

- Trennzeichen: kann z.B. ein Komma, Semikolon oder Tab sein
- Vorhandensein einer Tabellenkopfzeile
- Regeln zum Setzen und _Escapen_ von Anführungszeichen

## Standardisierung

- RFC 4180: https://tools.ietf.org/html/rfc4180
- W3C: https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/

## Standardisierung

Regeln aus _RFC 4180_ und dem _W3C_-Standard

- Werte werden durch Kommas getrennt
- Erste Zeile _kann_ (RFC) / _sollte_ (W3C) die Spaltennamen beinhalten
- Zeilen _müssen_ (RFC) / _sollten_ (W3C) durch die Zeichenfolge _CRLF_ (carriage return & line feed) getrennt sein
- Felder können von doppelten Anführungszeichen umfasst werden - dies ist notwendig, falls ein Feld ein Komma, ein doppeltes Anführungzeichen oder einen Zeilenumbruch enthält
- Falls ein doppeltes Anführungszeichen (`"`) innerhalb eines Felds vorkommt, muss es verdoppelt werden (`""`)

## Beispiel

```csv
ISO,Country,Capital,Languages
AD,Andorra,Andorra la Vella,"ES,FR"
AE,United Arab Emirates,Abu Dhabi,"AE,fa,en,hi,ur"
AF,Afghanistan,Kabul,"AF,tk"
```

## TSV

In Anlehnung an CSV: _tab-separated values_

Vorteile: eventuell besser zu lesen, Kommas müssen nicht escaped werden

Nachteile: nicht Standardisiert, weniger verbreitet

```tsv
ISO	Country	Capital	Languages
AD	Andorra	Andorra la Vella	ES,FR
AE	United Arab Emirates	Abu Dhabi	AE,fa,en,hi,ur
AF	Afghanistan	Kabul	AF,tk
```

## Übung

Übung: selbst in VS Code einfache CSV-Datei anlegen und in Tabellenansicht begutachten (Icon _open in preview_ rechts oben in der Ansicht)

# JSON

## JSON

JSON = _JavaScript Object Notation_: Datenformat, das insbesondere in der Webentwicklung wichtig ist.

## Datentypen

- Number
- String
- Boolean
- Null
- Array
- Object

## Null

Der Ausdruck `null` symbolisiert, dass ein Wert fehlt oder unbekannt ist

```json
null
```

## String

Strings werden in JSON mit doppelten Anführungszeichen begrenzt

(In JavaScript wären als Alternative auch einfache Anführungszeichen erlaubt)

## Array

Ein _Array_ beinhaltet eine Abfolge von anderen Objekten

```json
["Anne", "Bob", "Chris"]
```

```json
[2, 3, 5, 7, 11]
```

## Objekt

Ein _Objekt_ beinhaltet benannte Einträge

```json
{
  "firstName": "Thomas",
  "lastName": "Edison",
  "birthYear": 1847,
  "living": false
}
```

(In JavaScript könnten die Namen der Einträge auch ohne Anführungszeichen stehen, z.B. `firstName`)

# XML

## XML

XML = Extensible Markup Language

Sprache, die viele Ähnlichkeiten zu HTML hat

War lange Zeit eine sehr wichtige Standardsprache für Datenaustausch; wird zunehmend durch JSON ersetzt

## XML

Beispiel

```xml
<person>
  <name>Adam</name>
  <age unit="years">40</age>
</person>
```

# Datenbanken

## Datenbanken

Verwendung: Verwaltung großer Datenmengen

## Entity-Relationship-Diagramme

https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model

## Tabellen und Datenschemata

Die meisten Datenbanken verwalten ihre Daten in Tabellen

## Erfassen von Daten in Tabellen

Überlegungen:

- Modellierung von Verwandtschaftsverhältnissen
- Modellierung von Freundschaften

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

# SQL Intermediate

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

# SQL Joins

## Beispiel: Musikdatenbank

Tabellen:

- _artist_
- _album_
- _song_

Vorlage: Chinook Musikdatenbank

[GitHub](https://github.com/lerocha/chinook-database)

[Inspektor auf SchemaSpy](http://schemaspy.org/sample/index.html)

## Beispiel: Musikdatenbank - artist

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

Referenz auf jeweils einen Eintrag einer anderen Tabelle

z.B.: Jeder Eintrag in der Tabelle _song_ kann über die Spalte _artist_id_ mit der Tabelle _artist_ verknüpft werden

Der Zusatz `FOREIGN KEY(column) REFERENCES other_table(column)` garantiert, dass ein entsprechender Eintrag in der anderen Tabelle existiert

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

Ein foreign key garantiert, dass ein entsprechender Eintrag in der zugehörigen anderen Tabelle existiert

```sql
INSERT INTO song (title, artist_id)
VALUES ('Wish You Were Here', 10);
```

→ Fehlermeldung

## Tabellen verknüpfen (INNER JOIN)

```sql
SELECT song.title, artist.name
FROM artist
INNER JOIN song
ON artist.id=song.artist_id;
```

Der obige Code listet alle Kombinationen auf, bei denen `artist.id` und `song.artist_id` übereinstimmen

## Tabellen verknüpfen (LEFT JOIN)

```sql
SELECT song.title, artist.name
FROM song
LEFT JOIN artist
ON artist.id=song.artist_id;
```

Der obige Code listet alle Kombinationen auf und beinhaltet auch Lieder, für die kein Künstler definiert ist

# MongoDB

## MongoDB vs SQL

SQL:

- standardisierte Sprache, unabhängig von der verwendeten Programmiersprache
- Verwendung aus Programmiersprachen oft über viele verschiedene _ORMs_ (_object realtional mappings_)

MongoDB:

- _ein_ Abfrageschema pro Programmiersprache

## MongoDB vs SQL

SQL:

- vordefiniertes Schema bei der Erstellung von Tabellen
- Änderung eines Tabellenschemas (Migration) kann aufwändig sein

MongoDB:

- Ein _Dokument_ kann grundsätzlich Einträge beliebiger Struktur enthalten
- Optional können

## MongoDB vs SQL

SQL:

- Skalierung hauptsächlich vertikal: Ergänzen von Resourcen bei einem bestehenden Server

MongoDB:

- Skalierung hauptsächlich horizontal: Ergänzen zusätzlicher Server (via Sharding)

## MongoDB vs SQL

SQL:

- verwendet meist _atomare_ Einträge (und erste Normalform)

MongoDB:

- beinhaltet oft zusammengesetzte Einträge (Arrays, Objekte):

```json
{
  "name": "sue",
  "groups": ["news", "sports"]
}
```

## MongoDB

_MongoDB_ ist eine sogenannte _dokumentorientierte_ Datenbank

Ihre Struktur kann ähnlich aussehen wie die eines JSON-Dokuments

## BSON Dateiformat

MongoDB basiert auf dem BSON Dateiformat. Dieses ähnelt JSON, ist aber ein binäres Format und lässt sich effizienter lesen und schreiben.

Der Export bzw Import geschieht mittels der Programme `mongodump` und `mongorestore`

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
session.query(Iris).filter_by(Iris.name="Iris-setosa")
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
).filter_by(Iris.name="Iris-setosa")
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

