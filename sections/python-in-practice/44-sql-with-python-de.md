# SQL mit Python

## Python-Anbindung von SQL-Datenbanken

Database API Specification: Standard, der von verschiedenen Python-Datenbankanbindungen umgesetzt wird; standardisiert in PEP 249

## PEP 249 Funktionalität

PEP 249 definiert:

- Connections (Verbindung zu einer Datenbank)
  - Transaction (typischerweise eine offene Transaktion für eine Connection)
    - commit
    - rollback
- Cursors
  - Ausführen von Operationen
  - Auslesen von Query-Ergebnissen

https://www.python.org/dev/peps/pep-0249

## Libraries für SQL-Datenbanken

Libraries, die PEP 249 implementieren:

- **sqlite3**: für SQLite, ist Teil der Standardlibrary
- **psycopg**: für Postgres
- **PyMySQL**: für MySQL
- **cx_oracle**: für Oracle
- **pyodbc**: für viele verschiedene Datenbanken (via ODBC)

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

## PostgreSQL und Python

PIP-Paket _psycopg_

```py
import psycopg

connection = psycopg.connect(host="localhost",
                             user="...",
                             password="...",
                             dbname="...")
```

oder

```py
connection = psycopg.connect(
  "postgresql://user:password@localhost/dbname")
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
cursor = connection.cursor()

cursor.execute("SELECT ...")
print(cursor.fetchall())
...
cursor.execute("INSERT INTO ...")
cursor.execute("INSERT INTO ...")
connection.commit()
...
connection.close()
```

## SQL Statements mit Parametern

gefährlich:

```py
search_name = input()
res = cursor.execute(
  f"""SELECT tel FROM person WHERE name = '{search_name}'"""
)
```

https://xkcd.com/327/

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
- psycopg: pyformat
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
