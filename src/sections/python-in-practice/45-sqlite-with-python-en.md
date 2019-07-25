# SQLite with Python

## Detecting advanced types

SQLite only supports a limited set of types. It does not natively support types like `DATE` or `TIMESTAMP` - those would have to be stored as strings.

We can make Python automatically convert these to and from a string representation by passing `detect_types=sqlite3.PARSE_DECLTYPES` to `sqlite3.connect`.

## Detecting advanced types

Task: Create a contacts database that automatically converts SQL strings that represent the date of birth into Python `date` objects.

## Adapters and converters

We can add support for more types by writing so-called _adapter_ and _converter_ functions. These custom types will usually be stored as byte sequences in the database.

An _adapter_ is a custom function that converts a Python object into an SQL value.
A _converter_ is a custom function that converts an SQL value into a Python object.

see:

https://docs.python.org/3/library/sqlite3.html#using-adapters-to-store-additional-python-types-in-sqlite-databases

## Adapters and converters

Tasks:

- Write an adapter and converter that enable us to directly save instances of Python's `ipadress.IPv4Address` class - in SQL it would be saved as an encoded byte string
