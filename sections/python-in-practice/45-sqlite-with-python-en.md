# SQLite with Python

## Data types

SQLite data types and corresponding Python types:

- `NULL` - `None`
- `INT` / `INTEGER` - `int`
- `REAL` - `float`
- `TEXT` - `str`
- `BLOB` - `bytes`

## Supporting dates and timestamps

Two types that are usually not supported by SQLite:

- `TIMESTAMP` - `datetime`
- `DATE` - `date`

Storing them as SQL _DECIMAL_ values with automatic conversion to / from Python types:

```py
connection = sqlite3.connect(
    'contacts.db'
    detect_types=sqlite3.PARSE_DECLTYPES)
```

## Supporting dates and timestamps

Task: Create a contacts database that automatically converts SQL decimals that represent the date of birth into Python `date` objects.

## Adapters and converters

We can add support for more types by writing so-called _adapter_ and _converter_ functions. These custom types will usually be stored as byte sequences in the database.

An _adapter_ is a custom function that converts a Python object into an SQL value.

A _converter_ is a custom function that converts an SQL value into a Python object.

see:

https://docs.python.org/3/library/sqlite3.html#using-adapters-to-store-additional-python-types-in-sqlite-databases

## Adapters and converters

Tasks:

- Write an adapter and converter that enable us to directly save instances of Python's `ipadress.IPv4Address` class - in SQL it would be saved as an encoded byte string
