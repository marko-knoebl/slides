# {{title}}

## Präsentation und Code

Präsentationen verfügbar unter: https://karuga.eu/courses-presentations

Code verfügbar unter: https://github.com/marko-knoebl/courses-code

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

## Vorstellung der Teilnehmer

- Name
- Firma
- Aktuelle Projekte
- Grund der Schulung
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

# Themen

- Arbeiten mit Dateien und Ordnern
- Reguläre Ausdrücke
- Zeit und Datum
- sys
- HTTP Client
- Webentwicklung
- Datenbanken
- GUI
- e-mail
- Numpy

# Arbeiten mit Dateien

## Arbeiten mit Dateien

Datei = Abfolge von Bytes auf einem Speichermedium

## Die Funktion "open"

```py
file_obj = open("todos.txt")
content = file_obj.read()
file_obj.close()
print(content)
```

Open erstellt eine Instanz einer Unterklasse von IOBase

## Dateimodi

```py
# mode: text, append
open("todos.txt", mode="ta")
```

## Dateimodi

- `t`: Textmodus (standard)
- `b`: Binär

<!-- list-separator -->

- `r`: Lesen (standard)
- `w`: (Über)schreiben
- `a`: Anhängen

## Lesen und Schreiben

```py
t = open("loremipsum.txt")
print(t.read())
t.close()
```

## Lesen und Schreiben

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

## Open und das with-Statement

```py
with open("todos.txt", encoding="utf-8") as file_obj:
    content = file_obj.read()
```

Kein explizites Schließen des Dateiobjekts mehr notwendig. Datei wird automatisch geschlossen, wenn der eingerückte Abschnitt verlassen wird.

## Zeichencodierung

Textdateien können unterschiedlich codiert sein:

- ASCII
- CP-1252 / western european / latin1
- UTF-8

Praxistipp: Immer UTF-8 verwenden

## Zeichencodierung

Die Standard-Zeichencodierung für Textdateien hängt vom Betriebssystem ab:

```py
import locale
locale.getpreferredencoding()
```

## Zeichencodierung

Explizites angeben der Textcodierung:

```py
open("file.txt", encoding="utf-8")
```

## File-like objects

Objekte, die zB `.read()` oder `.write()` unterstützen:

- Dateien (zB via `open()`)
- `sys.stdout`, `sys.stdin`
  - z.B. `sys.stdin.readline()`
- Antworten aus dem Netzwerk, zB via `urllib.request.urlopen('https://google.com')`

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

Methoden:

- `.close()`
- `.mode`
- `.read()` (lies die ganze Datei ein)
- `.read(10)` (lies die nächsten 10 Bytes)
- `.readline()` (lies die nächste Zeile)

# Speichern verschiedener Dateiformate

## Speichern verschiedener Dateiformate

Möglichkeiten:

- Speichern in Text-Datei
- Speichern als JSON
- Speichern von Python-Objekten mittels pickle (und shelve)
- Speichern als XML
- Speichern von Binärdaten in eigenem Format

## JSON

## JSON speichern

```py
import json

data = ["one", "two", "three"]
jsonstring = json.dumps(data)

with open("numbers.json", encoding="utf-8") as jsonfile:
    jsonfile.write(jsonstring)
```

## JSON lesen

```py
import json

with open("numbers.json", encoding="utf-8") as jsonfile:
    jsonstring = jsonfile.read()
data = json.loads(jsonstring)
```

## XML

zwei Pakete in der Python-Standardlibrary:

- `xml.etree.ElementTree`
- `xml.dom.minidom`

externe Library (Erweiterung von ElementTree):

- `lxml`

## XML mit ElementTree: erstellen

```py
import xml.etree.ElementTree as et

person = et.Element('person')
name = et.SubElement(person, 'name')
name.text = 'Adam'
age = et.SubElement(person, 'age')
age.text = '40'
age.set("unit", "years")
```

## XML mit ElementTree: speichern

Beim Speichern von XML immer ein Encoding angeben!

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

## XML mit ElementTree: lesen

```py
import xml.etree.ElementTree as et

person = et.fromstring(xmlstring)
for childnode in person:
    print(childnode.tag)
    print(childnode.text)
    print(childnode.attrib)
```

## Pickle

Eigenes Dateiformat, in dem verschiedene Python-Dateitypen gespeichert werden können

Achtung:

- Pickle-Dateien können nur von Python gelesen werden
- Pickle-Dateien können bösartigen Code enthalten

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

## Übung

Speichern und Lesen eines Tic-Tac-Toe-Feldes in verschiedenen Formaten

Python-Datenstruktur:

```py
field = [
  ['X', 'O', None],
  ['X', 'X', 'O'],
  ['O', 'O', 'X']
]
```

# Arbeiten mit Dateien und Ordnern

## Arbeiten mit Dateien und Ordnern

zwei wichtige Pakete:

- _os_
- _shutil_

## os

- `os.getcwd()` (aktueller Pfad)
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

- `shutil.copy('origin', 'destination')` (Datei kopieren)
- `shutil.copytree()` (Ordner kopieren)
- `shutil.rmtree()` (Ordner löschen)
- `shutil.move()` (Datei oder Ordner verschieben)

## Übung

Programm, das alle Textdateien in einem Ordner nach einem Begriff durchsucht und die Anzahlen angibt

# Reguläre Ausdrücke

## Reguläre Ausdrücke

Beispiel:

```py
import re

match = re.search(r"[a-z][A-Z]", "abCdE")

if match:
    print("match")
    print(match[0]) # bC
else:
    print("no match")
```

## Mehrfach finden

Beispiel:

```py
import re

match_iter = re.finditer(r"https?://.+?\\.com", website_content)

for match in match_iter:
    print(match[0])
```

## Mehrfach finden

Aufgabe: finde alle URLs in einem HTML-Dokument auf der Festplatte

(Beispieldokument: z.B. Seite https://news.ycombinator.com auf Festplatte speichern)

## Einen Ausdruck und Unterausdrücke finden

```py
re.search(
    r'\d?\d\.\d?\d\.\d\d\d\d',
    'Heute ist der 23.10.1970!'
)
```

## Einen Ausdruck und Unterausdrücke finden

```py
m = re.search(
    r'(\d?\d)\.(\d?\d)\.(\d\d\d\d)',
    'Heute ist der 23.1.1970!'
)
m[0] # 23.1.1970
m[1] # 23
m[2] # 1
m[3] # 1970
```

## Beispiele

- Lesbarkeitsanalyse (Lesbarkeitsindex)
- Beispiel: Gleichungen erkennen und auslesen
- Beispiel: Alle Funktionsdefinitionen in einer Python-Datei finden

## Lösung: Gleichung erkennen

`\A-?\d+x[\+-]\d+y[\+-]\d+z=\d+\Z`

# Datum und Zeit

## Datum und Zeit

Python-Pakete:

### datetime

Arbeiten mit Zeiten und Datumsangaben

### time

Arbeiten mit Unix-Timestamps, sleep

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

aktuelle Unix-Zeit

```py
import time
time.time()
```

# sys

## sys

Funktionen zur Python-Umgebung

Beispiele:

- `argv`
- `stdout.write`
- `getrefcount`
- `path`
- `version`
- `version_info`

## Kommandozeilenparameter

Auslesbar über `sys.argv`

## Überschreiben von stdout.write

```py
import sys

old_stdout = sys.stdout

class LoudStdout:
    def write(self, text):
        old_stdout.write(text.upper())

loudstdout = LoudStdout()

sys.stdout = loudstdout
```

# HTTP mit Python

## HTTP

- http.client.HTTP(S)Connection
- urllib
- requests

## HTTP(S)Connection

low-level Interface

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

in Standardlibrary

```py
import urllib

content: bytes = urllib.request.urlopen(
                    "https://www.google.com").read()
```

## requests

Externes Paket, installierbar via _pip_:

```bash
pip install requests
```

```py
import requests

content: str = requests.get("https://www.google.com").text
```

## Web Scraping: Anzahl der Google-Suchergebnisse

## APIs: Wetterdaten

https://automatetheboringstuff.com/chapter14/

## Web Scraping: xkcd-Downloader

https://automatetheboringstuff.com/chapter11/

## Selenium

Installation:

```bash
pip install selenium
```

geckodriver / chromedriver / ...

geckodriver Download von:

https://github.com/mozilla/geckodriver/releases/tag/v0.23.0

Herunterladen und in einem Pfad in Pythons `sys.path` ablegen - oder im aktuellen Verzeichnis (working directory)

# HTTP

## HTTP

Hypertext Transfer Protocol

= Protokoll, auf dessen Basis Resourcen über das Netzwerk angefragt und übertragen werden können

## HTTP

Paar: Anfrage - Antwort

Anfrage: meist aus dem Browser

Antwort: kommt vom Server

Beispiel: Siehe Browser-Tools unter "Netzwerkanalyse"

## HTTP: Beispiel Wikipedia

Anfrage:

```http
GET /wiki/Main_Page HTTP/2.0
Host: en.wikipedia.org
Connection: keep-alive
```

Antwort:

```http
HTTP/2.0 200 OK
Date: Wed, 24 Apr 2019 07:50:41 GMT
Content-Type: text/html; charset=UTF-8

<!DOCTYPE html>
<html ...
```

## HTTP: Beispiel Wikipedia Suche (1)

Anfrage:

```http
GET /w/index.php?search=test&title=Special:Search&go=Go HTTP/2.0
Host: en.wikipedia.org
Connection: keep-alive
```

Antwort:

```http
HTTP/2.0 302 Found
Location: https://en.wikipedia.org/wiki/Test
Content-Length: 0
```

## HTTP: Beispiel Wikipedia Suche (2)

Anfrage:

```http
GET /wiki/Test HTTP/2.0
Host: en.wikipedia.org
Connection: keep-alive
```

Antwort:

```http
HTTP/2.0 200 OK
Content-Type: text/html; charset=UTF-8

<!DOCTYPE html>
<html ...
```

## HTTP: Beispiel POST-Request

Anfrage:

```http
POST /submit-posting HTTP/2.0
Host: example.com
Connection: keep-alive
Content-Type: text/plain; encoding=UTF-8
Content-Length: 33

This is the post content (body)
```

Antwort:

```http
HTTP/2.0 200 OK
Content-Type: text/html; charset=UTF-8

...
```

## HTTP: Beispiel API

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

## wichtige Anfrage-Headerfelder

- _`Host`_
- _`Connection`_
- `Origin`
- `Accept`
- `Accept-Encoding`
- `Cookie`
- `Cache-Control`
- `Dnt`

## Wichtige HTTP-Statuscodes

- `200 OK`

<!-- list separator -->

- `301 Moved Permanently`
- `307 Temporary Redirect` (Weiterleitung auf eine andere Adresse)
- `303 See Other` (Weiterleitung auf eine andere Adresse, Methode ändert sich zu `GET`)
- `308 Permanent Redirect`
- `304 Not Modified` (Resource hat sich seit letzter Anfrage nicht geändert)

## Wichtige HTTP-Statuscodes

- `400 Bad Request`
- `401 Unauthorized`
- `403 Forbidden`
- `404 Not Found`

<!-- list separator -->

- `500 Internal Server Error`

siehe auch: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

## wichtige Antwort-Headerfelder

- `Content-Length`
- `Content-Type`
- `Set-Cookie`
- `Location`
- `Cache-Control`

## Content-Type-Headerfeld

Mögliche Werte:

- `text/plain; charset=utf-8`
- `text/html; charset=utf-8`
- `application/json`
- `application/javascript`
- `application/ecmascript`
- `image/jpeg`
- `image/png`
- ...

## Set-Cookie-Headerfeld

Beispiel:

```http
GET /
Host: www.google.com

Set-Cookie: 1P_JAR=2019-04-24-08; expires=...; path=/; domain=.google.com
Set-Cookie: IDCC=AN0-TYtU7...fo; expires=...; path=/; domain=.google.com
```

# Serverseitiges HTTP

## Exkurs: Lokalen Dateiserver mit Python betreiben

```bash
python -m http.server
```

## Python am Server - Überblick

https://docs.python.org/2/howto/webservers.html

(etwas veraltet)

## CGI

CGI = _Common Gateway Interface_

Standard, um ein Programm am Server auf eine HTTP-Anfrage antworten zu lassen

Interface zwischen Serversoftware (z.B. Apache) und Webanwendung (geschrieben in beliebiger Programmiersprache)

Interface beruht auf _stdin_, _stdout_ und Umgebungsvariablen

Nachteil: für jede Anfrage muss ein neuer Prozess gestartet werden (langsam)

## WSGI

WSGI = Web Server Gateway Interface

Standard, um ein Python-Programm am Server auf HTTP-Anfragen antworten zu lassen

Inspiriert von CGI; wichtiger Vorteil: _ein_ laufender Prozess kann der Reihe nach mehrere Anfragen beantworten

## Python Web-Frameworks

- Werkzeug (Python WSGI Utility Library)
- Flask (vollwertiges, modulares Framework basierend auf Werkzeug)
- Django (vollwertiges Framework)

## WSGI-Interface

Einstiegspunkt ist eine Python-Funktion

Die Funktion bekommt zwei Parameter übergeben: `environ` und `start_response`

Die Anfrageparameter sind über `environ` abzufragen (z.B. URL, HTTP Header, Formulardaten, ...)

Der zweite Parameter ist eine Funktion, üblicherweise `start_response` genannt.

## WSGI

Zum starten der Antwort rufen wir `start_response(status, response_headers)` auf, z.B.:

```py
start_response(
    "200 OK",
    [("Content-Type", "text/plain; charset=utf-8")]
)
```

Der Antwortkörper wird als ein Iterable von Bytestrings zurückgegeben, z.B. als Liste von Bytestrings.

## WSGI-Server-Software

server-software:

- gunicorn
- uWSGI
- mod_wsgi

## Eigener WSGI-Server in Python

```py
from wsgiref.simple_server import make_server

from app import application

server = make_server("localhost", 8000, application)
server.serve_forever()
```

Dieser Teil wird üblicherweise von Libraries wie gunicorn übernommen

## Eigene WSGI-Anwendung in Python

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

## Das environ-dictionary

Wir können es im debugger begutachten, z.B.:

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

PATH_INFO im environ-dictionary: angefragter Pfad am Server

## PATH_INFO

Aufgabe: Anzeige verschiedener Seiten unter verschiedenen Adressen

## Redirects mit HTTP

```py
response_headers = [
    ("Location", "/login"),
    ("Content-Length", "0")
]
start_response("307 Temporary Redirect", response_headers)
return [b'']
```

## Redirects mit HTTP

Aufgabe: Weiterleitung einiger Seiten, z.B. `/now` leitet weiter auf `/time`

## Cookies

Cookies = kleine Datenmengen, die von einer Website im Browser abgelegt werden können

Cookies dienen insbesondere dazu, einen früheren Besucher wiederzuerkennen, z.B. für:

- Eingeloggt bleiben auf Websites
- Personenbezogene Werbung
- Tracking der Useraktivitäten

## Cookies setzen

```py
response_headers.append((
    "Set-Cookie", "mycookie123=abcd; Max-Age=30"
))
```

## Cookies lesen

```py
try:
    current_cookies_str = environ["HTTP_COOKIE"]
except KeyError:
    ...
```

Resultat z.B.: `"cookie1=one; cookie2=two"`

## Cookies parsen

```py
from http import cookies

...

mycookies = cookies.SimpleCookie()
mycookies.load(current_cookies_str)
mycookies["cookie1"].value
```

## Cookies löschen

indem ein neues Cookie gesetzt wird, dessen "Ablaufsdatum" in der Vergangenheit liegt:

```py
response_headers.append((
    "Set-Cookie",
    "mycookie123=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
))
```

## Cookies

Aufgabe: Website, die einen Benutzer nur 5x eine Seite aufrufen lässt und ihn dann auffordert, sich zu registrieren, um die Seite weiter zu verwenden

## Formular und post-request

So lesen wir Parameter aus Formularen aus:

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

## wsgi-Beispiele

- Online-Abstimmung
- Gästebuch
- Chat-System
- Todo-Anwendung

## Achtung: JavaScript-Injection

## Deployment auf pythonanywhere.com

- neues Benutzerkonto auf https://pythonanywhere.com
- add new web app
- manual configuration

## Deployment auf pythonanywhere.com

WSGI Konfigurationsdatei

```py
# /var/www/username_pythonanywhere_com_wsgi.py
import sys

path = "/home/username/"
if path not in sys.path:
    sys.path.append(path)

from app import application
```

# Datenbanken

## Datenbanken

Verwendung: Verwaltung großer Datenmengen

## Entity-Relationship-Diagramme

https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model

## Tabellen und Datenschemata

Die meisten Datenbanken verwalten ihre Daten in Tabellen

## Erfassen von Daten in Tabellen

Überlegungen:

- Modellierung von Verwandtschaftsverhältnissen
- Modellierung von Freundschaften

# SQL Grundlagen

## SQL

SQL = Structured Query Language

Standardisierte Abfragesprache für tabellarische Datenbanken

## SQL Standardisierung

Standardisiert von _ANSI_ und _ISO_ - allerdings weichen Implementierungen oft vom Standard ab

Alte Version des Standards (kostenlos): http://www.contrib.andrew.cmu.edu/~shadow/sql/sql1992.txt

## SQL Implementierungen

proprietär:

- Oracle
- SQL Server (Microsoft)

open source:

- MySQL
- MariaDB
- PostgreSQL
- SQLite

## SQL ausprobieren

https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all

https://db-fiddle.com

Desktop-Anwendung:

https://sqlitebrowser.org/

## Tabellen erstellen

Befehl: `CREATE TABLE`

```sql
CREATE TABLE person(
    name VARCHAR(50),
    tel VARCHAR(20)
)
```

## SQL-Datentypen

ISO / ANSI SQL Standard (Auswahl):

- `boolean`
- `smallint` (üblicherweise 16 Bit)
- `int` / `integer` (üblicherweise 32 Bit)
- `bigint` (üblicherweise 64 Bit)
- `real` (üblicherweise 32 Bit)
- `double precision` (üblicherweise 64 Bit)
- `varchar(n)` (Unicode-String mit Maximallänge _n_)
- `varbinary(n)` (Bytesequenz mit Maximallänge _n_)

## Daten eintragen

```sql
INSERT INTO person
VALUES ('John Smith', '012345');
```

```sql
INSERT INTO person (name, tel)
VALUES ('John Smith', '012345');
```

## Daten auslesen

Daten aller Personen auslesen

```sql
SELECT name, tel FROM person
SELECT * FROM person
```

## Bedingte Abfragen (WHERE)

```sql
SELECT tel
FROM person
WHERE name = 'John Smith';
```

```sql
SELECT tel
FROM person
WHERE name LIKE 'John%' AND tel LIKE '+49%';
```

## Daten eintragen (UPDATE)

```sql
UPDATE person
SET name = 'John Miller'
WHERE name = 'John Smith';
```

## Daten löschen (DELETE)

```sql
DELETE FROM person
WHERE name = 'John Miller';
```

## Übung

Erstellen und Abändern einer Kontaktdatenbank

# SQL Intermediate

## Online Tutorial

https://www.w3schools.com/sql/default.asp

## Wiederholung: SQL Datentypen

ISO / ANSI SQL Standard (Auswahl):

- `boolean`
- `smallint` (üblicherweise 16 Bit)
- `int` / `integer` (üblicherweise 32 Bit)
- `bigint` (üblicherweise 64 Bit)
- `real` (üblicherweise 32 Bit)
- `double precision` (üblicherweise 64 Bit)
- `varchar(n)` (Unicode-String mit Maximallänge _n_)
- `varbinary(n)` (Bytesequenz mit Maximallänge _n_)

## SQL-Datentypen: Ausnahmen

Der SQL Standard wird von keiner Implementierung voll umgesetzt

SQLServer: `boolean` → `bit`

Oracle: ~~`boolean`~~ → X, `varchar` → `varchar2`

MySQL: ~~`boolean`~~ → X, `real` → `float`

Postgres: `varbinary(n)` → `bytea` (siehe auch [Postgres SQL Conformance](https://www.postgresql.org/docs/current/features.html))

SQLite: ~~`boolean`~~ → X, (`smallint`, `int`, `bigint`) → `integer`, ~~`real`~~ → X, `varbinary` → `blob`

## Signed & unsigned

MySQL unterscheidet z.B. zwischen:

- `SMALLINT` (-32768 bis 32767)
- `UNSIGNED SMALLINT` (0 bis 65535)

## Beispiel: Datenbank chemischer Elemente

Einträge:

- _atomic_number_
- _symbol_
- _name_
- _atomic_mass_

## Beispiel: Datenbank chemischer Elemente

```sql
CREATE TABLE element(
    atomic_number INT,
    symbol VARCHAR(2),
    name VARCHAR(20),
    atomic_mass REAL
);
```

## Constraints

Einschränkungen von Spalten:

- `not null`
- `unique`
- `primary key`
- (`foreign key`)

## Not null

Eintrag darf nicht leer gelassen werden

```sql
CREATE TABLE element(
    atomic_number INT NOT NULL,
    symbol VARCHAR(2) NOT NULL,
    name VARCHAR(20) NOT NULL,
    atomic_mass REAL NOT NULL
);
```

## Unique

Jeder Eintrag in einer Spalte muss einzigartig sein

```sql
CREATE TABLE element(
    atomic_number INT NOT NULL UNIQUE,
    symbol VARCHAR(2) NOT NULL UNIQUE,
    name VARCHAR(20) NOT NULL UNIQUE,
    atomic_mass REAL NOT NULL
);
```

## Primary key

Ermöglicht eindeutige Identifizierung einer Zeile in einer Tabelle

- Sprechender Schlüssel: von Haus aus in den Daten enthalten
- Surrogatschlüssel: zusätzlich hinzugefügter Schlüssel (meist Integerwert)

Ein sprechender Schlüssel ist nur in besonderen Fällen einsetzbar, ein Surrogatschlüssel ist immer möglich

Ein Primary Key ist automatisch _unique_ und _not null_.

## Primary key

Sprechender Schlüssel:

```sql
CREATE TABLE element(
    atomic_number INT PRIMARY KEY,
    symbol VARCHAR(2) NOT NULL UNIQUE,
    name VARCHAR(20) NOT NULL UNIQUE,
    atomic_mass REAL NOT NULL
);
```

## Primary key

Surrogatschlüssel:

```sql
CREATE TABLE element(
    id INT PRIMARY KEY,
    atomic_numer INT,
    symbol VARCHAR(2) NOT NULL UNIQUE,
    name VARCHAR(20) NOT NULL UNIQUE,
    atomic_mass REAL NOT NULL
);
```

## Auto increment

Automatisches Erstellen eines numerischen Primary Keys beginnend bei 1:

Standard SQL (implementiert in PostgreSQL, Oracle):

```sql
CREATE TABLE element(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    ...
);
```

## Auto increment

Nicht-standardisierte Varianten:

- MySQL: `AUTO_INCREMENT`
- SQLite: `AUTOINCREMENT`
- PostgreSQL: `SERIAL`

In SQLite wird immer automatisch ein numerischer eindeutiger Schlüssel unter dem Namen `rowid` angelegt.

## Code: Periodensystem

```sql
CREATE TABLE element(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    atomic_number INT,
    symbol VARCHAR(2) NOT NULL UNIQUE,
    name VARCHAR(20) NOT NULL UNIQUE,
    atomic_mass REAL NOT NULL
);

INSERT INTO element(atomic_number, symbol, name, atomic_mass)
VALUES (1, 'H', 'Hydrogen', 1.008);

INSERT INTO element(atomic_number, symbol, name, atomic_mass)
VALUES (2, 'He', 'Helium', 4.0026);

SELECT *
FROM element
WHERE name='Hydrogen';
```

## Indizes in Datenbanken

Generell: geordnete Listen können viel schneller durchsucht werden als ungeordnete (binäre Suche)

Beispiel: im Telefonbuch kann man schnell nach dem Nachnamen einer Person suchen, aber nicht nach dem Vornamen

Auf eine oder mehrere Spalten kann ein Index angewendet werden: Zusätzliche Datenstruktur, die auf die Daten in bestimmter Ordnung verweist.

## Indizes erstellen

```sql
CREATE INDEX idx_name
ON element (name);
```

Es kann nun nach den Elementnamen schneller gesucht werden

# SQL Joins

## Beispiel: Musikdatenbank

Tabellen:

- _artist_
- _album_
- _song_

## Beispiel: Musikdatenbank - artist

```sql
CREATE TABLE artist(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(20) NOT NULL,
    country VARCHAR(5) NOT NULL,
    year SMALLINT NOT NULL
);

INSERT INTO artist (name, country, year)
VALUES ('The Beatles', 'UK', 1960);

INSERT INTO artist (name, country, year)
VALUES ('AC/DC', 'AUS', 1973);
```

## Foreign key

Referenz auf jeweils einen Eintrag einer anderen Tabelle

z.B.: Jeder Eintrag in der Tabelle _song_ kann über die Spalte _artist_id_ mit der Tabelle _artist_ verknüpft werden

Der Zusatz `FOREIGN KEY(column) REFERENCES other_table(column)` garantiert, dass ein entsprechender Eintrag in der anderen Tabelle existiert

## Foreign key

```sql
CREATE TABLE song(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(30) NOT NULL,
    artist_id INT,
    FOREIGN KEY(artist_id) REFERENCES artist(id)
);

INSERT INTO song (title, artist_id)
VALUES ('Let it Be', 1);
```

## Foreign key

Ein foreign key garantiert, dass ein entsprechender Eintrag in der zugehörigen anderen Tabelle existiert

```sql
INSERT INTO song (title, artist_id)
VALUES ('Wish You Were Here', 10);
```

→ Fehlermeldung

## Tabellen verknüpfen (INNER JOIN)

```sql
SELECT song.title, artist.name
FROM artist
INNER JOIN song
ON artist.id=song.artist_id;
```

Der obige Code listet alle Kombinationen auf, bei denen `artist.id` und `song.artist_id` übereinstimmen

## Tabellen verknüpfen (LEFT JOIN)

```sql
SELECT song.title, artist.name
FROM song
LEFT JOIN artist
ON artist.id=song.artist_id;
```

Der obige Code listet alle Kombinationen auf und beinhaltet auch Lieder, für die kein Künstler definiert ist

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

## Beispiel: Forum mit Datenbankanbindung

- Authentifizierung (MD5)
- Admin-Skript

## Beispiel: Todo-Anwendung

## Beispiel: Todo-Anwendung

- run_server.py und (minimale) app.py
- init_db.py
- db_interface.get_all_todos

siehe courses-tutorials/python-todolist-wsgi-sqlite

# SQLAlchemy

## SQLAlchemy

SQLAlchemy = Object Relational Mapper

Objektorientierter Zugriff auf beliebige SQL-Datenbanken

Alternative: Django ORM

## SQLAlchemy

Pip-Paket _sqlalchemy_

## Verbinden mit SQLite-Datenbank

```py
# db_interface.py
from sqlalchemy import create_engine

engine = create_engine("sqlite:///music.db", echo=True)

engine.connect()
```

## Tabellen definieren

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

## Mit Sessions arbeiten

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

wird zu:

```py
beatles = Artist(name="The Beatles", country="United Kingdom")
session.add(beatles)
```

## Select

```sql
SELECT name, country FROM artist;
```

wird zu:

```py
for artist in session.query(Artist):
    print(f"{artist.name} ({artist.country})")
```

oder

```py
for name, country in session.query(Artist.name, Artist.country):
    print(f"{name} ({country})")
```

## Order by

```sql
SELECT name, country FROM artist ORDER BY name;
```

wird zu:

```py
for name, country in session.query(
        Artist.name, Artist.country).order_by(Artist.name):
    ...
```

## Where

```sql
SELECT name, country FROM artist WHERE artist.name='The Beatles'
```

wird zu:

```py
session.query(Artist).filter_by(Artist.name=="The Beatles").one()
```

## Sprechende Ausgabe von Einträgen

aktuell:

```txt
&ltdb_schema.Song object at 0x00000175902A5FD0>
```

besser:

```txt
Help! - The Beatles
```

umsetzbar mittels `__repr__` / `__str__`

## Update

```sql
UPDATE song
SET title = 'Help'
WHERE title = 'Help!';
```

wird zu

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

wird zu

```py
session.query(Song).filter_by(Song.title=="Help!").delete()
```

## Definition eines Fremdschlüssels

```py
class Song(Base):
    __tablename__ = "song"
    id = Column(Integer, primary_key=True)
    title = Column(String(30))
    artist_id = Column(Integer, ForeignKey("artist.id"))
```

## Einfaches Abfragen einer verknüpften Tabelle

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

## Einfaches Abfragen einer verknüpften Tabelle

```py
yesterday = Song(title="Yesterday", artist=beatles)
help = Song(title="Help!", artist_id=beatles.id)
session.add(...)

print(yesterday.artist)
print(beatles.songs)
```

# GUI

## Graphical User Interface

## GUI-Libraries für Python

- tk
- Qt
- Kivy

## tk

- Einfache UI-Library
- Anbindung an Python: tkinter
- in Python vorinstalliert

## Qt

- Weit verbreitete UI-Library
- Anbindungen an Python: PyQt oder PySide

## Kivy

- speziell für Python entwickelt

# Tkinter

## Tkinter - Beispiel

```py
# simple.pyw
import tkinter

# ein Objekt vom Typ "Tk" erstellen
window = tkinter.Tk()
# Programm (event loop) starten
#   (auf Benutzerinteraktion warten)
window.mainloop()
```

## Tkinter - Text anzeigen

```py
import tkinter

window = tkinter.Tk()

hello_label = tkinter.Label(master=window, text="Hello!")
hello_label.pack()

window.mainloop()
```

## Tkinter - Elemente nachträglich ändern

```py
time_label = tkinter.Label(master=window, text="")
time_label.config(text="Hello!")
```

## Tkinter - Benutzerinteraktion

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

## Beispiel: Counter

Button, der bei 0 startet und die Klickanzahl mitzählt und anzeigt

## Tkinter - Widget-Konfiguration

Möglichkeiten:

- `height`
- `width`
- `borderwidth`
- `background` (Hintergrundfarbe)
- `foreground` (Textfarbe)
- `justify` (Textausrichtung, Werte: `CENTER`, `LEFT`, `RIGHT`)
- `padx`, `pady` (Abstand Rahmen zum Inhalt)

## Tkinter - Widgets

- `Label`
- `Button`
- `Frame`

## Tkinter - Beispiele

- zufälliger Sehtest

# SMTP / IMAP

## SMTP / IMAP

https://automatetheboringstuff.com/chapter16/

zur verdeckten Passworteingabe: Modul "getpass"

## SMTP / IMAP

Achtung Fehler:

falsch:

`UIDs = imapObj.search(['SINCE 05-Jul-2014'])`

richtig:

`UIDs = imapObj.search(['SINCE', '05-Jul-2014'])`

Achtung veraltet: `pyzmail` -> `pyzmail36`

Achtung: `'BODY[]'` -> `b'BODY[]` (bytes statt string)

# NumPy

## NumPy

Library zur effizienten Datenverarbeitung

Daten sind in mehrdimensionalen Arrays von Zahlen gespeichert, die resourcenschonend umgesetzt sind

Daten können z.B. Bilder, Tondateien, Messwerte und vieles anderes repräsentieren

## NumPy

NumPy Arrays vs Python Listen:

Arrays sind im Hintergrund in C implementiert, die numerischen Einträge (z.B. Integer) sind keine Python-Objekte und damit resourcenschonender.

## Importieren von NumPy

oft verkürzt als:

```python
import numpy as np
```

## NumPy

NumPy Arrays vs Python Listen:

```py
# Python - Listen (mit Verweisen auf andere Integer)
list_a = [1, 2]
list_b = [3, 4]

# NumPy - Array -
# Daten sind hierin enthalten, ohne auf Python-Integer
# zu verweisen
array_a = numpy.array(list_a)
array_b = numpy.array(list_b)

array_a + array_b # sehr schnell (da in C implementiert)
```

## Arrays

Jedes Array kann nur Daten eines Typs enthalten (z.B. nur 64-bit floats oder nur bytes)

## Arrays

Erstellen eines 2-dimensionalen Arrays:

```py
np.array([[1, 2, 3], [2, 4, 6], [3, 6, 9]])
```

Ausgabe:

```py
array([[1, 2, 3],
       [2, 4, 6],
       [3, 6, 9]])
```

## Arrays

Erstellen eines 3-dimensionalen Arrays:

```py
np.array([[[1, 2], [3, 4]], [[5, 6], [7,8]]])
```

Ausgabe:

```py
array([[[1, 2],
        [3, 4]],

       [[5, 6],
        [7, 8]]])
```

## Array Typen

Jedes Array hat einen vorgegebenen Datentyp für alle Einträge

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

## Array Typen

Typen können explizit angegeben werden:

```py
a = np.array([1], dtype='int64')
b = np.array([1], dtype='uint8')
```

Typen werden wenn möglich automatisch umgewandelt:

```py
c = a + b
c.dtype # int64
```

## Overflow

Achtung bei zu großen / zu kleinen Werten

Der Typ `int8` erlaubt nur Werte im Bereich `-128` bis `+127`

```py
np.array([127, 128, 129], dtype="int8")
```

Output:

```py
array([127, -128, -127])
```

## NumPy

Kapitel 30

- Rechnen mit Matrizen
- Darstellung von Daten (matplotlib): Graphen, Histogramme

Übungen:

- 10 mio mal Würfeln (mit 10 Würfeln)
- Gleichungslösung (Klassen, doctests, numpy)
- Lagerbestand von Produkten (2d-array) & preisliste (1d-array); gesucht: Warenwert pro Lager

