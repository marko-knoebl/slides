# SQL with Python

## Python interfaces for SQL databases

Database API specification: standard which is implemented by various Python database bindings; standardized in PEP 249

## PEP 249 functionality

PEP 249 defines:

- connections (connections to a database)
  - transactions (typically one open transaction for a connection)
    - commit
    - rollback
- cursors
  - executing operations
  - fetching query results

https://www.python.org/dev/peps/pep-0249

## Libraries for SQL databases

some libraries that implement PEP 249:

- **sqlite3**: for SQLite, included in the standard library
- **psycopg**: for Postgres
- **PyMySQL**: for MySQL
- **cx_oracle**: for Oracle
- **pyodbc**: for many different databases (via ODBC)

## SQLite and Python

SQLite uses one file to store a database

comes with Python (module `sqlite3`)

```py
import sqlite3

# database stored in a file
connection = sqlite3.connect('contacts.db')

# in-memory database
connection = sqlite3.connect(':memory:')
```

## PostgreSQL and Python

PIP package _psycopg_

```py
import psycopg
```

```py
connection = psycopg.connect(host="localhost",
                             dbname="...",
                             user="...",
                             password="...")
```

or

```py
connection = psycopg.connect(
  "postgresql://user:password@localhost/dbname")
```

## MySQL and Python

PIP package _PyMySQL_

```py
import pymysql.cursors

connection = pymysql.connect(host='localhost',
                             user='user',
                             password='passwd',
                             db='db',
                             charset='utf8mb4')
```

## Python and Oracle Database

Python package _cx_Oracle_

```py
import cx_Oracle

connection = cx_Oracle.connect(user="user",
                               password="password",
                               dsn="localhost/oraclepdb")
```

## pyodbc

ODBC = open database connectivity: Standard for database interfaces (independent of Python)

pyodbc = implementation for Python - this enables access to any ODBC database

```py
import pyodbc

connection = pyodbc.connect(
  "Driver=SQLite3 ODBC Driver;Database=contacts.db")
```

## Common interface (PEP 249)

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

## SQL statements with parameters

dangerous:

```py
search_name = input()
res = cursor.execute(
  f"""SELECT tel FROM person WHERE name = '{search_name}'"""
)
```

https://xkcd.com/327/

## SQL statements with parameters

safe method (with SQL escaping):

```py
search_name = input()
res = cursor.execute(
  """SELECT tel FROM person WHERE name = ?;""",
  (search_name, )
)
```

## SQL statements with parameters

https://www.python.org/dev/peps/pep-0249/#paramstyle

The attributes `sqlite3.paramstyle`, `pymysql.paramstyle` etc. indicate the format for queries with parameters

- sqlite3: qmark
- pymysql: pyformat
- psycopg: pyformat
- cx_Oracle: named

## PEP 249: the cursor object

- `cursor.execute(command, parameters)`
- `cursor.rowcount`: number of result rows in the last query
- `cursor.fetchone()`: get a single row of the result (usually as a tuple)
- `cursor.fetchmany(10)`
- `cursor.fetchall()`

## Exercise: Forum with database binding

- authentication (MD5)
- admin script

## Exercise: todo app

Todo application (with web interface)
(see courses-tutorials/python-todolist-wsgi-sqlite)
