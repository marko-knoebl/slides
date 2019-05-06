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
