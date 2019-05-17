# {{title}}

## Presentation and code

Presentations available at: https://karuga.eu/courses-presentations

Code available at: https://github.com/marko-knoebl/courses-code

## Your Trainer

Marko Knöbl

- Frontend Web-Development
  - JavaScript
  - React, Angular
- Programming
  - Python, JavaScript

## Introduction of Participants

- Name
- Company
- Current Projects
- Prior Knowledge
- Expectations

## Organizational

- Duration
- Breaks
- Materials
- Questions, Feedback?

# Topics

- working with files and folders
- regular expressions
- time and date
- sys
- HTTP client
- web development
- databases
- e-mail
- NumPy


# Working with files

## Working with files

file = a sequence of bytes on a storage device

## The function "open()"

```py
file_obj = open("todos.txt")
content = file_obj.read()
file_obj.close()
print(content)
```

Open creates an instance of a subclass of IOBase

## File modes

```py
# mode: text, append
open("todos.txt", mode="ta")
```

## File modes

- `t`: text mode (default)
- `b`: binary

<!-- list-separator -->

- `r`: reading (default)
- `w`: (over)writing
- `a`: appending

## Reading and writing

```py
t = open("loremipsum.txt")
print(t.read())
t.close()
```

## Reading and writing

```py
t = open("todos.txt", mode="a", encoding="utf-8")
t.write("Learn Python")
t.close()
```

```py
coins = open("coins.b", mode="ba")
coins.write(bytes([0b01001110, 0b11100100]))
coins.close()
```

## Open and the with statement

```py
with open("todos.txt", encoding="utf-8") as file_obj:
    content = file_obj.read()
```

In this example using the with statement relieves us from explicitly closing the file object. The file will be automatically closed when the program leaves the indented block.

## character encoding

Text files may be encoded in various ways:

- ASCII
- CP-1252 / western european / latin1
- UTF-8

Recommendation: _always_ use utf-8 as the encoding for text files (best support for special characters)

## character encoding

The default character encoding for text files depends on the operating system:

```py
import locale
locale.getpreferredencoding()
```

## character encoding

Explicitly stating the character encoding:

```py
open("file.txt", encoding="utf-8")
```

## File-like objects

Objects that support using `.read()` or `.write()` etc:

- files (e.g. via `open()`)
- `sys.stdout`, `sys.stdin`
  - example: `sys.stdin.readline()`
- Network replies, e.g. via `urllib.request.urlopen('https://google.com')`

## File-like objects

```py
with file as open('myfile.txt', encoding="utf-8"):
    # read individual lines
    for line in file:
        print(line)
    # read entire file
    print(file.read())
```

## File-like objects

Methods:

- `.close()`
- `.mode`
- `.read()` (read the entire file)
- `.read(10)` (read the next 10 bytes)
- `.readline()` (read the next line)

# Working with various file formats

## Working with file formats

possibilities:

- text files
- JSON
- XML
- Python object files (via pickle and shelve)
- binary files

## JSON

## Saving JSON

```py
import json

data = ["one", "two", "three"]
jsonstring = json.dumps(data)

with open("numbers.json", encoding="utf-8") as jsonfile:
    jsonfile.write(jsonstring)
```

## Reading JSON

```py
import json

with open("numbers.json", encoding="utf-8") as jsonfile:
    jsonstring = jsonfile.read()
data = json.loads(jsonstring)
```

## XML

two packages in the standard library:

- `xml.etree.ElementTree`
- `xml.dom.minidom`

external library (extension of ElementTree):

- `lxml`

## XML with ElementTree: creating a document

```py
import xml.etree.ElementTree as et

person = et.Element('person')
name = et.SubElement(person, 'name')
name.text = 'Adam'
age = et.SubElement(person, 'age')
age.text = '40'
age.set("unit", "years")
```

## XML with ElementTree: saving

Always specify an encoding when saving XML!

```py
xmlbytestring: bytes = et.tostring(person, encoding='utf-8')
with open("myfile.xml", mode="wb") as file:
    file.write(xmlbytestring)

# or
xmlstring: str = et.tostring(person, encoding='unicode')
with open("myfile.xml", encoding="utf-8", mode="w") as file:
    file.write(xmlstring)

# or
tree = et.ElementTree(person)
tree.write("myfile.xml", encoding="utf-8")
```

## XML with ElementTree: reading

```py
import xml.etree.ElementTree as et

person = et.fromstring(xmlstring)
for childnode in person:
    print(childnode.tag)
    print(childnode.text)
    print(childnode.attrib)
```

## Pickle

File format that can be used to save various types of Python objects

Warning:

- Pickle files can only be read by Python Programs
- Pickle files may contain malicious code

## Pickle

```py
import pickle
import datetime

now = datetime.datetime.now()

serialized = pickle.dumps()

with open("datetime.pickle", mode="wb") as picklefile:
    picklefile.write(serialized)
```

## Pickle

```py
import pickle

with open("datetime.pickle", mode="rb") as picklefile:
    serialized = picklefile.read()
earlier = pickle.reads(serialized)
```

## Exercise

saving / loading of a tic-tac-toe board in various formats

Python data structure:

```py
field = [
  ['X', 'O', None],
  ['X', 'X', 'O'],
  ['O', 'O', 'X']
]
```

# Working with files and folders

## Working with files and folders

two important packages:

- _os_
- _shutil_

## os

- `os.getcwd()` (current directory)
- `os.chdir()`
- `os.chmod()`
- `os.listdir()`
- `os.mkdir('foo')`
- `os.rename('foo', 'bar')`
- `os.mkdir('foo/bar/baz')`
- `os.remove('foo/bar/baz/qux.txt')`
- `os.rmdir('foo/bar/baz')`
- `os.walk()`

## shutil

- `shutil.copy('origin', 'destination')` (copy file)
- `shutil.copytree()` (copy folder)
- `shutil.rmtree()` (delete folder)
- `shutil.move()` (move file or folder)

## Exercise

create a program that searches for occurrences of a term in all files from a folder and prints their number

# Regular expressions

## Regular expressions

Regular expressions are used to find a substring of a specific pattern inside a string

in Python regular expressions can be handled via the `re` Package, in particular:

- `re.search`
- `re.finditer`

## Regular expressions

example:

```py
import re

match = re.search(r"[a-z][A-Z]", "abCdE")

if match:
    print("match")
    print(match[0]) # bC
else:
    print("no match")
```

## Finding multiple occurrences

example:

```py
import re

match_iter = re.finditer(r"https?://.+?\\.com", website_content)

for match in match_iter:
    print(match[0])
```

## Finding multiple occurrences

Exercise: find all URLs in a HTML document on the drive

For an example, save the page https://news.ycombinator.com to disk

## Finding an expression and sub expressions

```py
times = re.finditer(
    r'(\d?\d):(\d\d)',
    'The course times are 9:30 - 16:30'
)

for time in times:
    print(f"hour: {time[1]}")
    print(f"minute: {time[2]}")
```

## Exercises

- find and parse equations in text
- find function definitions in a Python file

## Solution: finding equations

`\A-?\d+x[\+-]\d+y[\+-]\d+z=\d+\Z`

# Date and time

## Date and time

Python packages:

### datetime

Working with times and dates

### time

Working with Unix timestamps, sleep

## datetime

- `datetime.date`
- `datetime.time`
- `datetime.datetime`

## datetime

```py
a = datetime.time(hour, minute, second, microsecond)
```

```py
b = datetime.datetime(2018, 1, 13)
c = datetime.datetime(2018, 3, 26, 12, 30)

c - b
```

## time.sleep

```py
import time
for i in range(10):
    print(i)
    time.sleep(1)
```

## time.time

current Unix time (seconds since 1970-01-01 00:00:00 UTC)

```py
import time
time.time()
```

# sys

## sys

Functions for the Python environment

examples:

- `argv`
- `stdout.write`
- `getrefcount`
- `path`
- `version`
- `version_info`

## Command line parameters

may be read via `sys.argv`

## Overwriting stdout.write

```py
import sys

old_stdout = sys.stdout

class LoudStdout:
    def write(self, text):
        old_stdout.write(text.upper())

loudstdout = LoudStdout()

sys.stdout = loudstdout
```

# HTTP with Python

## HTTP with Python

- http.client.HTTP(S)Connection
- urllib
- requests

## HTTP via TCP

```py
import socket

client = socket.socket()
client.connect(("google.com", 80))
client.send(b"GET / HTTP/1.1\r\nHost: www.google.com\r\n\r\n")

response = client.recv(4096)
print(response)
```

Exercise: script that reads and processes a file named `request.httpreq` and creates a file named `response.httpres`

## HTTP(S)Connection

low level HTTP interface

```py
from http.client import HTTPSConnection

connection = HTTPSConnection("www.google.com")
connection.request("GET", "/")
answer = connection.getresponse()
content = answer.read()
connection.close()
print(content)
```

## urllib

part of the standard library

```py
import urllib

content: bytes = urllib.request.urlopen(
                    "https://www.google.com").read()
```

## requests

external package that may be installed via _pip_:

```bash
pip install requests
```

```py
import requests

content: str = requests.get("https://www.google.com").text
```

## Exercises

- web scraping: number of Google search results
- APIs: weather data
  https://automatetheboringstuff.com/chapter14/
- web scraping: xkcd downloader
  https://automatetheboringstuff.com/chapter11/

## Selenium

Installation:

```bash
pip install selenium
```

geckodriver / chromedriver / ...

download geckodriver from:

https://github.com/mozilla/geckodriver/releases/tag/v0.23.0

Download and save in a folder in Python's `sys.path` - or in the project directory

# HTTP

## HTTP

Hypertext Transfer Protocol

= protocol for requesting and transferring resources over a network

## HTTP

Pair: Request - Response

Request: from the browser (mostly)

Response: from the server

HTTP requests and responses are transferred via a _lower-level_ protocol, most commonly _TCP_

## Experimenting with HTTP

via:

- Firefox tools under _network_
- VS Code Plugin _HTTP Client_

## HTTP example: Wikipedia

Request:

```http
GET /wiki/Main_Page HTTP/2.0
Host: en.wikipedia.org
Connection: keep-alive
```

Response:

```http
HTTP/2.0 200 OK
Date: Wed, 24 Apr 2019 07:50:41 GMT
Content-Type: text/html; charset=UTF-8

<!DOCTYPE html>
<html ...
```

## HTTP example: Wikipedia search (1)

request:

```http
GET /w/index.php?search=test&title=Special:Search&go=Go HTTP/2.0
Host: en.wikipedia.org
Connection: keep-alive
```

response:

```http
HTTP/2.0 302 Found
Location: https://en.wikipedia.org/wiki/Test
Content-Length: 0
```

## HTTP example: Wikipedia search (2)

request:

```http
GET /wiki/Test HTTP/2.0
Host: en.wikipedia.org
Connection: keep-alive
```

response:

```http
HTTP/2.0 200 OK
Content-Type: text/html; charset=UTF-8

<!DOCTYPE html>
<html ...
```

## HTTP example: POST request

request:

```http
POST /submit-posting HTTP/2.0
Host: example.com
Connection: keep-alive
Content-Type: text/plain; encoding=UTF-8
Content-Length: 33

This is the post content (body)
```

response:

```http
HTTP/2.0 200 OK
Content-Type: text/html; charset=UTF-8

...
```

## HTTP example: API

```http
GET /todos/12
Host: jsonplaceholder.typicode.com
Connection: keep-alive
```

```http
HTTP/2.0 200 OK
Content-Type: application/json; charset=utf-8
Etag: W/"5c-cn8o...

{
  "userId": 1,
  "id": 12,
  "title": "ipsa repellendus fugit nisi",
  "completed": true
}
```

## Important request header fields

- _`Host`_
- _`Connection`_
- `Origin`
- `Accept`
- `Accept-Encoding`
- `Cookie`
- `Cache-Control`
- `Dnt`

## Important HTTP status codes

- `200 OK`

<!-- list separator -->

- `301 Moved Permanently`
- `307 Temporary Redirect` (Redirect to other address)
- `303 See Other` (Redirect to other address, HTTP method changes is set to `GET`)
- `308 Permanent Redirect`
- `304 Not Modified` (Resource did not change since last query)

## Important HTTP status codes

- `400 Bad Request`
- `401 Unauthorized`
- `403 Forbidden`
- `404 Not Found`

<!-- list separator -->

- `500 Internal Server Error`

see also: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

## Important response header fields

- `Content-Length`
- `Content-Type`
- `Set-Cookie`
- `Location`
- `Cache-Control`

## Header field "Content-Type"

possible values:

- `text/plain; charset=utf-8`
- `text/html; charset=utf-8`
- `application/json`
- `application/javascript`
- `application/ecmascript`
- `image/jpeg`
- `image/png`
- ...

## Header field "Set-Cookie"

example:

```http
GET /
Host: www.google.com

Set-Cookie: 1P_JAR=2019-04-24-08; expires=...; path=/; domain=.google.com
Set-Cookie: IDCC=AN0-TYtU7...fo; expires=...; path=/; domain=.google.com
```

# Server-side HTTP

## Operating a local file server with Python

```bash
python -m http.server
```

## Overview

https://docs.python.org/2/howto/webservers.html

(info is somewhat dated)

## CGI

CGI = _Common Gateway Interface_

Standard for letting a program on a server reply to an HTTP request

Interface between server software (e.g. Apache) and web application (written in any programming language)

Interface relies on _stdin_, _stdout_ and environment variables

Drawback: a new Process has to be started for every request (which is slow)

## WSGI

WSGI = Web Server Gateway Interface

Standard for letting a Python program on a server reply to an HTTP request

Inspired by CGI; advantage: _one_ running Process can handle multiple request one after another

## Python web frameworks

- Werkzeug (Python WSGI utility library)
- Flask (fully fledged, modular framework based on Werkzeug)
- Django (full framework)

## WSGI interface

The entry point is a Python function:

The function will receive two parameters: `environ` and `start_response`

The request parameters are available via `environ` (e.g. URL, HTTP headers, form data, ...)

The second parameter is a function which we usually name `start_response`.

## WSGI

In order to start a response we call `start_response(status, response_headers)`, e.g.:

```py
start_response(
    "200 OK",
    [("Content-Type", "text/plain; charset=utf-8")]
)
```

The response body is an iterable (e.g. a list) of bytestrings.

## WSGI server software

server software:

- gunicorn
- uWSGI
- mod_wsgi

## Custom WSGI server in Python

```py
from wsgiref.simple_server import make_server

from app import application

server = make_server("localhost", 8000, application)
server.serve_forever()
```

This part will usually be handled by libraries like _guinicorn_

## WSGI application

```py
# app.py
def application(environ, start_response):
    response_status = "200 OK"
    response_body_text = "hello"
    response_body = response_body_text.encode("utf-8")
    response_headers = [
        ("Content-Type", "text/plain; charset=utf-8"),
        ("Content-Length", str(len(response_body))),
    ]
    start_response(response_status, response_headers)
    return [response_body]
```

## The environ dictionary

We can view it in the debugger, e.g.:

```py
{
    "CONTENT_LENGTH": "12"
    "HTTP_USER_AGENT": 'Mozilla/5.0 (Win...',
    "HTTP_COOKIE":
    "PATH_INFO": "/todos/new",
    "REQUEST_METHOD": "GET",
    "wsgi.input": ...
}
```

https://www.python.org/dev/peps/pep-0333/#environ-variables

## PATH_INFO

PATH_INFO in the environ dictionary: requested path on the server

task: show different pages at different addresses

## Redirects with HTTP

```py
response_headers = [
    ("Location", "/login"),
    ("Content-Length", "0")
]
start_response("307 Temporary Redirect", response_headers)
return [b'']
```

Task: Make some pages redirect, e.g. make `/now` redirect to `/time`

## Cookies

Cookies = small sets of data which may be placed in the Browser by a website

Cookies may be used to recognize a previous visitor, e.g. for:

- staying logged in
- tracking user activities
- displaying custom ads

## Cookies

setting cookies:

```py
response_headers.append((
    "Set-Cookie", "mycookie123=abcd; Max-Age=30"
))
```

## Cookies

reading cookies:

```py
try:
    current_cookies_str = environ["HTTP_COOKIE"]
except KeyError:
    ...
```

result may be: `"cookie1=one; cookie2=two"`

## Cookies

parsing cookies

```py
from http import cookies

...

mycookies = cookies.SimpleCookie()
mycookies.load(current_cookies_str)
mycookies["cookie1"].value
```

## Cookies

deleting cookies (by setting an expired cookie):

```py
response_headers.append((
    "Set-Cookie",
    "mycookie123=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
))
```

## Cookies

Task: Create a website which only lets the user visit content 5 times before requiring them to log in

## Forms and POST requests

This is how we read parameters from forms:

```py
from urllib.parse import parse_qs

request_body_size = int(environ.get('CONTENT_LENGTH', '0'))
# environ["wsgi.input"] is a file-like object
request_body = (environ["wsgi.input"]
                .read(request_body_size)
                .decode("utf-8"))

parameters = parse_qs(request_body)
first_name = parameters.get("first-name")[0]
```

## Exercises

- online voting
- guest book
- chat
- todo application

## Beware: JavaScript injection

## Deployment on pythonanywhere.com

- new user account on https://pythonanywhere.com
- add new web app
- manual configuration

## Deployment on pythonanywhere.com

WSGI configuration file

```py
# /var/www/username_pythonanywhere_com_wsgi.py
import sys

path = "/home/username/"
if path not in sys.path:
    sys.path.append(path)

from app import application
```

# Databases

For basics see presentation _databases and data store_

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

connection = sqlite3.connect('contacts.db')
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

## PEP 249: types

- `Date`
- `Time`
- `Timestamp`
- `Binary`
- `STRING`
- `NUMBER`

## Queries with parameters

dangerous:

```py
search_name = input()
command = f"""SELECT tel FROM person WHERE name = '{search_name}'"""
res = c.execute(command)
```

## Queries with parameters

safe method (with SQL escaping):

```py
search_name = input()
res = cursor.execute(
  """SELECT tel FROM person WHERE name = ?;""",
  (search_name, )
)
```

## Queries with parameters

https://www.python.org/dev/peps/pep-0249/#paramstyle

The attributes `sqlite3.paramstyle`, `pymysql.paramstyle` etc indicate the format for queries with parameters

- sqlite3: qmark
- pymysql: pyformat
- psycopg2: pyformat
- cx_Oracle: named

## PEP 249: the cursor object

- `cursor.rowcount`: number of result rows in the last query
- `cursor.fetchone()`: get a single row of the result (usually as a tuple)
- `cursor.fetchmany(10)`
- `cursor.fetchall()`
- `cursor.execute(command, parameters)`

## Exercises

- Forum with database binding (and admin script)
- Todo application (with web interface)
  (see courses-tutorials/python-todolist-wsgi-sqlite)

# SQLAlchemy

## SQLAlchemy

SQLAlchemy = Object Relational Mapper

Object oriented access to arbitrary SQL databases

potential alternative: Django ORM

## SQLAlchemy

Pip package _sqlalchemy_

## Connecting with an SQLite database

```py
# db_interface.py
from sqlalchemy import create_engine

engine = create_engine("sqlite:///music.db", echo=True)

engine.connect()
```

## Defining tables

```py
# schema.py
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

Base = declarative_base()

class Artist(Base):
    __tablename__ = "artist"
    id = Column(Integer, primary_key=True)
    name = Column(String(30))
    country = Column(String(20))
```

```py
# db_interface.py
Base.metadata.create_all(engine)
```

## Working with sessions

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

becomes:

```py
beatles = Artist(name="The Beatles", country="United Kingdom")
session.add(beatles)
```

## Select

```sql
SELECT name, country FROM artist;
```

becomes:

```py
for artist in session.query(Artist):
    print(f"{artist.name} ({artist.country})")
```

or

```py
for name, country in session.query(Artist.name, Artist.country):
    print(f"{name} ({country})")
```

## Order by

```sql
SELECT name, country FROM artist ORDER BY name;
```

becomes:

```py
for name, country in session.query(
        Artist.name, Artist.country).order_by(Artist.name):
    ...
```

## Where

```sql
SELECT name, country FROM artist WHERE artist.name='The Beatles'
```

becomes:

```py
session.query(Artist).filter_by(Artist.name=="The Beatles").one()
```

## Nicer representation of entries

currently:

```txt
&ltdb_schema.Song object at 0x00000175902A5FD0>
```

better:

```txt
Help! - The Beatles
```

We can achieve this via the methods `__repr__` / `__str__`

## Update

```sql
UPDATE song
SET title = 'Help'
WHERE title = 'Help!';
```

becomes

```py
entry = session.query(Song).filter_by(Song.title=="Help!").one()
entry.title = "Help"
```

## Delete

```sql
DELETE
FROM song
WHERE title = 'Help!';
```

becomes

```py
session.query(Song).filter_by(Song.title=="Help!").delete()
```

## Defining a foreign key

```py
class Song(Base):
    __tablename__ = "song"
    id = Column(Integer, primary_key=True)
    title = Column(String(30))
    artist_id = Column(Integer, ForeignKey("artist.id"))
```

## Querying a related table

```py
from sqlalchemy.orm import relationship

class Artist(Base):
    ...
    songs = relationship("Song")

class Song(Base):
    ...
    artist_id = Column(Integer, ForeignKey("artist.id"))

    artist = relationship("Artist")
```

## Querying a related table

```py
yesterday = Song(title="Yesterday", artist=beatles)
help = Song(title="Help!", artist_id=beatles.id)
session.add(...)

print(yesterday.artist)
print(beatles.songs)
```

# GUI

## Graphical User Interface

## GUI-Libraries for Python

- tk
- Qt
- Kivy

## tk

- Simple UI library
- Python interface: tkinter
- comes with Python

## Qt

- widely used UI library
- Python interfaces: PyQt or PySide

## Kivy

- specifically developed for Python

# Tkinter

## Example

```py
# simple.pyw
import tkinter

# ein Objekt vom Typ "Tk" erstellen
window = tkinter.Tk()
# Programm (event loop) starten
#   (auf Benutzerinteraktion warten)
window.mainloop()
```

## Displaying text

```py
import tkinter

window = tkinter.Tk()

hello_label = tkinter.Label(master=window, text="Hello!")
hello_label.pack()

window.mainloop()
```

## Modifying elements

```py
time_label = tkinter.Label(master=window, text="")
time_label.config(text="Hello!")
```

## User interactions

```py
...

message_label = tkinter.Label(master=window, text="")
message_label.pack()

def display_message():
    message_label.config(text="Hello!")

hello_button = tkinter.Button(master=window,
                              text="Say Hello!",
                              command=display_message)
hello_button.pack()

...
```

## Example: counter

Implement a button that starts at 0 and counts the number of clicks

## Widget configuration

config options:

- `height`
- `width`
- `borderwidth`
- `background` (background color)
- `foreground` (text color)
- `justify` (text alignments, values: `CENTER`, `LEFT`, `RIGHT`)
- `padx`, `pady` (distance between the border and the content)

## Widgets

- `Label`
- `Button`
- `Frame`

## Examples

- Snellen chart

# SMTP / IMAP

## SMTP / IMAP

https://automatetheboringstuff.com/chapter16/

(for error corrections see next slide)

for hidden password entry: use module _getpass_

## SMTP / IMAP

Errors in the resource:

provide the query as two entries:

~~`UIDs = imapObj.search(['SINCE 05-Jul-2014'])`~~

`UIDs = imapObj.search(['SINCE', '05-Jul-2014'])`

use newer version of _pyzmail_:

~~`pyzmail`~~ → `pyzmail36`

use bytes instead of a string:

~~`'BODY[]'`~~ → `b'BODY[]`

# NumPy

## NumPy

Library for efficient data processing

Data are stored in multidimensional arrays of numeric values which are implemented in an efficient way

Data can represent images, sound, measurements and much more

## NumPy

common import convention:

```python
import numpy as np
```

## NumPy

NumPy Arrays vs Python lists:

Arrays are implemented in C; the entries (e.g. integers) are no Python Objects and are therefore lighter on resources

## NumPy

NumPy Arrays vs Python lists:

```py
# Python lists (with references to Python integer objects)
list_a = [1, 2]
list_b = [3, 4]

# NumPy array
# data are contained within the array without referencing
# Python integers
array_a = numpy.array(list_a)
array_b = numpy.array(list_b)

# fast multiplication (C implemented in C)
array_a * array_b
```

## Arrays

Each array can only hold data of one type (e.g. only 64 bit floats or only bytes)

## Arrays

Creating a 2-dimensional array:

```py
np.array([[1, 2, 3], [2, 4, 6], [3, 6, 9]])
```

output:

```py
array([[1, 2, 3],
       [2, 4, 6],
       [3, 6, 9]])
```

## Arrays

Creating a 3-dimensional array:

```py
np.array([[[1, 2], [3, 4]], [[5, 6], [7,8]]])
```

output:

```py
array([[[1, 2],
        [3, 4]],

       [[5, 6],
        [7, 8]]])
```

## Array types

Each array has a predefined data type for all entries

```py
a = np.array([1])
a.dtype # int32
b = np.array([1.0])
b.dtype # float64
c = np.array(['abc'])
c.dtype # <U3
d = np.array([b'abc'])
d.dtype # |S3
```

## Array types

Types may be named explicitly:

```py
a = np.array([1], dtype='int64')
b = np.array([1], dtype='uint8')
```

If possible, types are converted automatically:

```py
c = a + b
c.dtype # int64
```

## Overflow

Be careful with values that are too big or too small

The type `int8` is only suitable for values in the range from  `-128` to `+127`

```py
np.array([127, 128, 129], dtype="int8")
```

Output:

```py
array([127, -128, -127])
```

## Exercises

- 10 million dice rolls (with 10 dice) - histograms
- solving linear equations
- inventory of products & price list

