# SQL Joins

## Example: music database

tables:

- _artist_
- _album_
- _song_

template: Chinook Musikdatenbank

[GitHub](https://github.com/lerocha/chinook-database)

[Inspector on SchemaSpy](http://schemaspy.org/sample/index.html)

## Example: music database - artist

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

Reference to one entry in another table

example: each entry in the table _song_ may reference an entry in the table _artist_ via the column _artist_id_

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

A foreign key guarantees the existence of a matching entry in the other associated table

```sql
INSERT INTO song (title, artist_id)
VALUES ('Wish You Were Here', 10);
```

→ error

## Joining tables (INNER JOIN)

```sql
SELECT song.title, artist.name
FROM artist
INNER JOIN song
ON artist.id=song.artist_id;
```

The above code lists all combinations where `artist.id` and `song.artist_id` match

## Joining tables (LEFT JOIN)

```sql
SELECT song.title, artist.name
FROM song
LEFT JOIN artist
ON artist.id=song.artist_id;
```

The above code lists all combinations and also includes songs that don't have an artist defined
