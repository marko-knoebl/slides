# SQLAlchemy

<!--
requirements: classes
-->

## SQLAlchemy

SQLAlchemy = Object Relational Mapper

Objektorientierter Zugriff auf beliebige SQL-Datenbanken

Alternative: Django ORM

## Verbinden mit SQLite-Datenbank

```py
# db_interface.py
from sqlalchemy import create_engine

engine = create_engine("sqlite:///music.db", echo=True)

engine.connect()
```

## Tabellen definieren

```py
# schema.py
from sqlalchemy.orm import mapped_column, Mapped, DeclarativeBase

class Base(DeclarativeBase):
    pass

class Artist(Base):
    __tablename__ = "artist"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column()
    country: Mapped[str] = mapped_column()
```

```py
# db_interface.py
Base.metadata.create_all(engine)
```

## Mit Sessions arbeiten

```py
from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind=engine)

session = Session()

...

session.commit()
```

## Insert

```sql
INSERT INTO artist VALUES ('The Beatles', 'United Kingdom');
```

wird zu:

```py
beatles = Artist(name="The Beatles", country="United Kingdom")
session.add(beatles)
```

## Select

```sql
SELECT name, country FROM artist;
```

wird zu:

```py
for artist in session.query(Artist):
    print(f"{artist.name} ({artist.country})")
```

oder

```py
for name, country in session.query(Artist.name, Artist.country):
    print(f"{name} ({country})")
```

## Order by

```sql
SELECT name, country FROM artist ORDER BY name;
```

wird zu:

```py
for name, country in session.query(
        Artist.name, Artist.country).order_by(Artist.name):
    ...
```

## Where

```sql
SELECT name, country FROM artist WHERE artist.name='The Beatles'
```

wird zu:

```py
session.query(Artist).filter(Artist.name=="The Beatles").one()
```

## Sprechende Ausgabe von Einträgen

aktuell:

```txt
&ltdb_schema.Song object at 0x00000175902A5FD0>
```

besser:

```txt
Help! - The Beatles
```

umsetzbar mittels `__repr__` / `__str__`

## Update

```sql
UPDATE song
SET title = 'Help'
WHERE title = 'Help!';
```

wird zu

```py
entry = session.query(Song).filter(Song.title=="Help!").one()
entry.title = "Help"
```

## Delete

```sql
DELETE
FROM song
WHERE title = 'Help!';
```

wird zu

```py
session.query(Song).filter(Song.title=="Help!").delete()
```

## Definition eines Fremdschlüssels

```py
class Song(Base):
    __tablename__ = "song"
    id = Column(Integer, primary_key=True)
    title = Column(String(30))
    artist_id = mapped_column(ForeignKey("artist.id"))
```

## Einfaches Abfragen einer verknüpften Tabelle

```py
from sqlalchemy.orm import relationship

class Artist(Base):
    ...
    songs: Mapped[Song] = relationship("Song", back_populates="artist")

class Song(Base):
    ...
    artist_id = mapped_column(ForeignKey("artist.id"))

    artist: Mapped[Artist] = relationship("Artist", back_populates="song")
```

## Einfaches Abfragen einer verknüpften Tabelle

```py
yesterday = Song(title="Yesterday", artist=beatles)
help = Song(title="Help!", artist_id=beatles.id)
session.add(...)

print(yesterday.artist)
print(beatles.songs)
```
