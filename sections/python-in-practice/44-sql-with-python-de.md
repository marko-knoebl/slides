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

# database stored in a file
connection = sqlite3.connect('contacts.db')

# in-memory database
connection = sqlite3.connect(':memory:')
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
cursor.execute("SELECT ...")
print(cursor.fetchall())
...
cursor = connection.cursor()
cursor.execute("INSERT INTO ...")
cursor.execute("INSERT INTO ...")
connection.commit()
...
connection.close()
```

## PEP 249

https://www.python.org/dev/peps/pep-0249

## SQL Statements mit Parametern

gefährlich:

```py
search_name = input()
res = cursor.execute(
  f"""SELECT tel FROM person WHERE name = '{search_name}'"""
)
```

## SQL Statements mit Parametern

sichere Methode (mit SQL-Escaping):

```py
search_name = input()
res = cursor.execute(
  """SELECT tel FROM person WHERE name = ?;""",
  (search_name, )
)
```

## SQL Statements mit Parametern

https://www.python.org/dev/peps/pep-0249/#paramstyle

Die Attribute `sqlite3.paramstyle`, `pymysql.paramstyle` etc. geben das Format für Abfragen mit Parametern an

- sqlite3: qmark
- pymysql: pyformat
- psycopg2: pyformat
- cx_Oracle: named

## PEP 249: das cursor Objekt

- `cursor.execute(command, parameters)`
- `cursor.rowcount`: Anzahl der letzten Ergebnisse
- `cursor.fetchone()`: Eine Zeile des Resultats auslesen (üblicherweise als Tupel)
- `cursor.fetchmany(10)`
- `cursor.fetchall()`

## Beispiel: Forum mit Datenbankanbindung

- Authentifizierung (MD5)
- Admin-Skript

## Beispiel: Todo-Anwendung

- run_server.py und (minimale) app.py
- init_db.py
- db_interface.get_all_todos

siehe courses-tutorials/python-todolist-wsgi-sqlite
