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
