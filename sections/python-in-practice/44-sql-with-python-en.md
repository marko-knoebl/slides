# SQL with Python

## Python interfaces for SQL databases

Database API specification: standard which is implemented by various Python database bindings; standardized in PEP 249

bindings for:

- sqlite (Python package _sqlite3_)
- Postgresql (PIP package _psycopg2_)
- MySQL / mariadb (PIP package _PyMySQL_
- Oracle (PIP package _cx_oracle_)

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

## SQL statements with parameters

dangerous:

```py
search_name = input()
res = cursor.execute(
  f"""SELECT tel FROM person WHERE name = '{search_name}'"""
)
```

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
- psycopg2: pyformat
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

## Exercise: odo app

Todo application (with web interface)
(see courses-tutorials/python-todolist-wsgi-sqlite)
