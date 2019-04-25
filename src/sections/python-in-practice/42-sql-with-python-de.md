# SQL mit Python

## Python-Anbindung von SQL-Datenbanken

Database API Specification: Standard, der von verschiedenen Python-Datenbankanbindungen umgesetzt wird; standardisiert in PEP 249

Anbindungen für:

- sqlite (Python-Paket _sqlite3_)
- Postgresql (PIP-Paket _psycopg2_)
- MySQL / mariadb (PIP-Paket _PyMySQL_
- Oracle (PIP-Paket _cx_oracle_)

## SQLite und Python

SQLite: Datenbank, die nur eine einzelne Datenbankdatei verwendet

Ist in Python integriert (Modul `sqlite3`)

```py
import sqlite3

connection = sqlite3.connect('contacts.db')
```

## MySQL und Python

PIP-Paket _PyMySQL_

```py
import pymysql.cursors

connection = pymysql.connect(host='localhost',
                             user='user',
                             password='passwd',
                             db='db',
                             charset='utf8mb4')
```

## Python und Oracle Database

Python-Paket _cx_Oracle_

```py
import cx_Oracle

connection = cx_Oracle.connect(user="user",
                               password="password",
                               dsn="localhost/oraclepdb")
```

## pyodbc

ODBC = open database connectivity: Standard zur Anbindung an Datenbanken (unabhängig von Python)

pyodbc = Implementierung für Python, damit können beliebige ODBC-Datenbanken angebunden werden

```py
import pyodbc

connection = pyodbc.connect(
  "Driver=SQLite3 ODBC Driver;Database=contacts.db")
```

## Gemeinsames Interface (PEP 249)

```py
connection = ...
...
cursor = connection.cursor()
cursor.execute(...)
print(cursor.fetchall())
connection.commit()
...
cursor = connection.cursor()
cursor.execute(...)
print(cursor.fetchall())
conection.commit()
...
connection.close()
```

## PEP 249

https://www.python.org/dev/peps/pep-0249

## PEP 249: Typen

- `Date`
- `Time`
- `Timestamp`
- `Binary`
- `STRING`
- `NUMBER`

## Bedingte Abfragen mit Parametern

```py
search_name = input()
command = f"""SELECT tel FROM person WHERE name = '{search_name}'"""
res = c.execute(command)
```

## Achtung: SQL-Injections

## Achtung: SQL-Injections

sichere Methode (mit SQL-Escaping):

```py
search_name = input()
res = c.execute(
  """SELECT tel FROM person WHERE name = ?;""",
  (search_name, )
)
```

## Abfrageparameter

https://www.python.org/dev/peps/pep-0249/#paramstyle

Die Attribute `sqlite3.paramstyle`, `pymysql.paramstyle` etc geben das Format für Abfragen mit Parametern an

- sqlite3: qmark
- pymysql: pyformat
- psycopg2: pyformat
- cx_Oracle: named

## PEP 249: das cursor Objekt

- `cursor.rowcount`: Anzahl der letzten Ergebnisse
- `cursor.fetchone()`: Eine Zeile des Resultats auslesen (üblicherweise als Tupel)
- `cursor.fetchmany(10)`
- `cursor.fetchall()`
- `cursor.execute(command, parameters)`
