# SQLite mit Python

## Datentypen

SQLite Datentypen und zugehörige Python Datentypen:

- `NULL` - `None`
- `INT` / `INTEGER` - `int`
- `REAL` - `float`
- `TEXT` - `str`
- `BLOB` - `bytes`

## Unterstützung für date und timestamp

Zwei Typen, die üblicherweise nicht von SQLite unterstütz werden:

- `TIMESTAMP` - `datetime`
- `DATE` - `date`

Speicherung dieser Typen als SQL _DECIMAL_ mit automatischer Umwandlung in / von Python Typen:

```py
connection = sqlite3.connect(
    'contacts.db'
    detect_types=sqlite3.PARSE_DECLTYPES)
```

## Unterstützung für date und timestamp

Übung: Erstelle eine Kontaktdatenbank die automatisch SQL Dezimalzahlen, die das Geburtsdatum beschreiben, als `date`-Objekte ausliest.

## Adapter und Converter

Wir können weitere Typen speichern, indem wir sogenannte _Adapter_- und _Converer_- Funktionen schreiben. Diese zusätzlichen Typen werden üblicherweise als Bytesequenzen in der Datanbank abgelegt.

Ein _Adapter_ ist eine Funktion, die ein Python Objekt in einen SQL Wert umwandelt.

Ein _Converter_ ist eine Funktion, dien einen SQL Wert in ein Python Objekt umwandelt.

Siehe:

https://docs.python.org/3/library/sqlite3.html#using-adapters-to-store-additional-python-types-in-sqlite-databases

## Adapter und Converter

Übungen:

- Schreibe Adapter und Converter, um direkt Instanzen von Pythons `ipadress.IPv4Address` zu speichern bzw zu lesen - in SQL würden diese als kodierter Bytestring gespeichert werden
