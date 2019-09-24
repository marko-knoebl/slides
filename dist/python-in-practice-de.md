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

Objekte, die z.B. `.read()` oder `.write()` unterstützen:

- Dateien (z.B. via `open()`)
- `sys.stdout`, `sys.stdin`
  - z.B. `sys.stdin.readline()`
- Antworten aus dem Netzwerk, z.B. via `urllib.request.urlopen('https://google.com')`

## File-like objects

Zeile für Zeile einlesen (geringer Speicherbedarf):

```py
with open("myfile.txt", encoding="utf-8") as file:
    for line in file:
        print(line)
```

## File-like objects

Methoden / Attribute:

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
- Speichern als CSV
- Speichern von Python-Objekten mittels pickle (und shelve)
- Speichern als XML
- Speichern von Binärdaten in eigenem Format

## CSV

## CSV schreiben

```py
import csv

data = [
    ['code', 'area', 'population'],
    ['CN', 9.6, 1386],
    ['RU', 17, 144],
    ['US', 9.8, 327]
]

with open('data.csv', 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerows(data)
```

## CSV lesen

```py
import csv

with open('countries.csv', encoding='utf-8', newline='') as csv_file:
    reader = csv.reader(csv_file)
    for row in reader:
        print(row)
```

## JSON

## JSON speichern

```py
import json

data = ["one", "two", "three"]
jsonstring = json.dumps(data)

with open("numbers.json", mode="w", encoding="utf-8") as jsonfile:
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

serialized = pickle.dumps(now)

with open("datetime.pickle", mode="wb") as picklefile:
    picklefile.write(serialized)
```

## Pickle

```py
import pickle

with open("datetime.pickle", mode="rb") as picklefile:
    serialized = picklefile.read()
earlier = pickle.loads(serialized)
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

wichtige Pakete:

- _os_
- _os.path_
- _shutil_

## os und shutil (1)

- `os.getcwd()` (aktueller Pfad)
- `os.chdir()`
- `os.listdir()`

<!-- list separator -->

- `os.walk()`

## os und shutil (2)

- `os.mkdir("foo")`
- `os.mkdir("foo/bar/baz")`

<!-- list separator -->

- `os.remove("foo.txt")` (Datei löschen)
- `os.rmdir("foo/bar/baz")` (leeren Ordner löschen)
- `shutil.rmtree()` (Ordner löschen)

<!-- list separator -->

- `os.rename("foo.txt", "bar.txt")`
- `shutil.move()` (Datei oder Ordner verschieben)
- `shutil.copy("foo.txt", "bar")` (Datei kopieren)
- `shutil.copytree()` (Ordner kopieren)

## Exkurs: allgemeine Terminal-Befehle

Direkte Ausgabe mittels `os.system`:

```py
os.system("ls .")
os.system("mkdir foo")
os.system("ls .")
```

Ergebnisse in Python einlesen mittels `os.popen`:

```py
a = os.popen("ls .").read()
print(a)
```

## Übung

Programm, das alle Textdateien in einem Ordner nach einem Begriff durchsucht und die Anzahlen angibt

# Reguläre Ausdrücke

## Reguläre Ausdrücke

Mini-Sprache, um ein Suchmuster für Text zu definieren

Beispiele einfacher Suchmuster:

- eine .com Domain: `https?://.+?\.com`
- ein HTML Heading: `<h1>.+?</h1>`
- eine Uhrzeit: `\d?\d:\d\d`

## Ausprobieren

Online: https://regexr.com/

In VS Code: Ctrl+F und Klick auf den Button _.\*_

## Sonderzeichen und Escapes

Die folgenden Zeichen haben besondere Bedeutungen:

- \
- ^
- \$
- .
- |
- ?
- \*
- \+
- ()
- []
- {}

## Sonderzeichen und Escapes

Die besondere Bedeutung umgehen wir durch Voranstellen eines Backslashes:

- `13\$`
- `9\.99€`
- `1\+1=2`

## Zeichenkategorien

- `.` : jedes Zeichen außer ein Zeilenumbruch
- `\s` : Whitespace
- `\d` : Ziffer
- `\w` : Ziffer, Buchstabe oder Unterstrich

Übung: finde alle Ziffern in einem Dokument

## Wiederholungen

- `a*` : Buchstabe _a_ 0 Mal oder öfter wiederholt (findet den _längsten_ String)
- `a*?` : Buchstabe _a_ 0 Mal oder öfter wiederholt (finden den _kürzesten_ String)
- `a+` : Buchstabe _a_ 1 Mal oder öfter wiederholt (findet den _längsten_ String)
- `a+?` : Buchstabe _a_ 1 Mal oder öfter wiederholt (findet den _kürzesten_ String)

Übungen:

- finde alle Zahlen, z.B. _12_ oder _0.99_
- finde allen Text innerhalb von Anführungszeichen in einem Dokument
- finde alle "Wörter", die mit `.jpeg` oder `.jpg` enden

## Gruppen

Ausdrücke können via `(...)` gruppiert werden

Beispiele:

- `(ab)+` findet Wiederholungen der Zeichenfolge _ab_
- `<(-=)+->` findet Muster der folgenden Art: `<-=-=-=-=->`

## Alternativen

`...|...|...` : Matcht eine der aufgelisteten Alternativen

Beispiel zum finden eines Bildes: `\.(jpe?g|png|gif)`

Übungen:

- finde URLs, die mit `http://` oder `https://` beginnen und mit `.com` oder `.org` enden

## Auslesen von Gruppen

Gruppen können verwendet werden, um Informationen auszulesen

Beispiel: `(\d?\d):(\d\d)` liest zwei Werte aus

## Anfang und Ende

- `\A` : Anfang eines Strings
- `\Z` : Ende eines Strings
- `^` : Anfang einer Zeile
- `$` : Ende einer Zeile

## Zeichenklassen

- `[a-z]` : beliebiges kleines ASCII-Zeichen
- `[a-zA-Z]` : beliebiges ASCII-Zeichen
- `[,;.]` : gleichwertig zu `(,|;|.)`

# Reguläre Ausdrücke in Python

## Reguläre Ausdrücke

Reguläre Ausdrücke werden verwendet, um einen Teil eines Strings, der einem bestimmten Muster entspricht, zu finden

In Python können reguläre Ausdrücke mittels des Pakets `re` behandelt werden, insbesondere:

- `re.search`
- `re.finditer`

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

match_iter = re.finditer(r"https?://.+?\.com", website_content)

for match in match_iter:
    print(match[0])
```

## Mehrfach finden

Aufgabe: finde alle URLs in einem HTML-Dokument auf der Festplatte

(Beispieldokument: z.B. Seite https://news.ycombinator.com auf Festplatte speichern)

## Einen Ausdruck und Unterausdrücke finden

```py
times = re.finditer(
    r'(\d?\d):(\d\d)',
    'The course times are 9:30 - 16:30'
)

for time in times:
    print(f"hour: {time[1]}")
    print(f"minute: {time[2]}")
```

## Kompilieren von regulären Ausdrücken

Performanceoptimierung, wenn viele reguläre Ausdrücke wiederverwendet werden:

```py
my_re = "..."

re.search(my_re, ...)
re.finditer(my_re, ...)
```

wird zu

```py
my_re = "..."
my_re_obj = re.compile(my_re)

my_re_obj.search(...)
my_re_obj.finditer(...)
```

## Beispiele

- Alle Funktionsdefinitionen in einer Python-Datei finden und deren Namen auslesen
- Geldbeträge finden und parsen
- Gleichungen erkennen und auslesen

## Resourcen

- http://automatetheboringstuff.com/chapter7/

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

aktuelle Unix-Zeit (Sekunden seit 1970-01-01 00:00:00 UTC)

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

## HTTP mit Python

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

Übung: Skript, das die eine Datei `request.httpreq` einliest und verarbeitet und eine Datei `response.httpres` generiert

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
from urllib import request

content: bytes = request.urlopen(
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

## Übungen

- web scraping: Anzahl der Google-Suchergebnisse
- web scraping: Überschriften (Headings) in einem Wikipedia Artikel
- APIs: Wetterdaten
  https://automatetheboringstuff.com/chapter14/
- Web Scraping: xkcd Downloader
  https://automatetheboringstuff.com/chapter11/

## Selenium

Installation:

```bash
pip install selenium
```

geckodriver / chromedriver / ...

geckodriver Download von:

https://github.com/mozilla/geckodriver/releases/tag/v0.23.0

Herunterladen und in einem Pfad in Pythons `sys.path` ablegen - oder im Projektverzeichnis

# HTTP

## HTTP

Hypertext Transfer Protocol

= Protokoll, auf dessen Basis Resourcen über das Netzwerk angefragt und übertragen werden können

## HTTP

Paar: Anfrage - Antwort

Anfrage: meist aus dem Browser

Antwort: kommt vom Server

HTTP Anfragen und Antworten werden wiederum über ein "niedrigeres" Protokoll übertragen, üblicherweise _TCP_.

## Experimentieren mit HTTP

Möglichkeiten:

- Browser-Tools unter "Netzwerkanalyse"
- VS Code Plugin _HTTP Client_

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

Zu Grundlagen siehe Präsentation _Datenbanken und Datenspeicherung_

# ZODB

## ZODB

Zope Object Database = Einfache Objektbank speziell für Python

## ZODB

Öffnen einer Datenbank:

```py
from ZODB import DB, FileStorage
import transaction

db = DB(FileStorage.FileStorage("dbfile.fs"))
connection = db.open()
root = connection.root()

print(root) # {}
```

## ZODB

Befüllen einer Datenbank:

```py
root["user"] = {"first_name": "Jane", "last_name": "Doe"}
root["todos"] = ["laundry", "shopping"]
transaction.commit()
```

## ZODB

Abändern von Einträgen:

Folgendes klappt nicht (ZODB bemerkt die Änderung der Elemente nicht):

```py
root["user"]["first_name"] = "John"
root["todos"].append("learn zodb")
transaction.commit()
```

## ZODB

Möglichkeiten, um Änderungen an Elementen an ZODB signalisieren:

- Eintrag neu setzen (z.B.: `root["user"] = root["user"]`)
- Verwendung der Typen `PersistentList`, `PersistentMapping` und `BTree` anstelle von Listen und Dictionaries
- Verwendung persistenter Klassen (z.B.: `class User(Persistent):`)

## ZODB

Eintrag neu setzen:

```py
root["user"]["first_name"] = "Jane"
root["todos"] = root["user"]
transaction.commit()
```

## ZODB

Verwendung der Typen `PersistentList`, `PersistentMapping` und `BTree` anstelle von Listen und Dictionaries:

```py
from persistent.list import PersistentList
from persistent.mapping import PersistentMapping
from BTrees import IOBTree

root["todos"] = PersistentList(["laundry", "shopping"])
root["todos"].append("learn zodb")

root["user"] = PersistentMapping({"first_name": "Jane", "last_name": "Doe"})
root["user"]["first_name"] = "John"
transaction.commit()
```

## ZODB

Verwendung persistenter Klassen:

```py
from persistent import Persistent

class User(Persistent):
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
```

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

## Beispiel: Todo-Anwendung

- run_server.py und (minimale) app.py
- init_db.py
- db_interface.get_all_todos

siehe courses-tutorials/python-todolist-wsgi-sqlite

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

Übung: Erstelle eine Kontaktdatenbank die automatisch SQL Strings die das Geburtsdatum beschreiben als `date`-Objekte ausliest.

## Adapter und Converter

Wir können weitere Typen speichern, indem wir sogenannte _Adapter_- und _Converer_- Funktionen schreiben. Diese zusätzlichen Typen werden üblicherweise als Bytesequenzen in der Datanbank abgelegt.

Ein _Adapter_ ist eine Funktion, die ein Python Objekt in einen SQL Wert umwandelt.

Ein _Converter_ ist eine Funktion, dien einen SQL Wert in ein Python Objekt umwandelt.

Siehe:

https://docs.python.org/3/library/sqlite3.html#using-adapters-to-store-additional-python-types-in-sqlite-databases

## Adapter und Converter

Übungen:

- Schreibe Adapter und Converter, um direkt Instanzen von Pythons `ipadress.IPv4Address` zu speichern bzw zu lesen - in SQL würden diese als kodierter Bytestring gespeichert werden

# SQLAlchemy

<!--
requirements: classes
-->

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
session.query(Artist).filter(Artist.name=="The Beatles").one()
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
entry = session.query(Song).filter(Song.title=="Help!").one()
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
session.query(Song).filter(Song.title=="Help!").delete()
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

# Arbeiten mit Excel-Dateien

## Arbeiten mit Excel-Dateien

PIP-Paket _openpyxl_

## Openpyxl

Erstellen, Speichern, Laden:

```py
import openpyxl

wb = openpyxl.Workbook()
wb.save("wb.xlsx")

wb2 = openpyxl.load_workbook("wb.xlsx")
```

## Openpyxl

Erstellen und Abfragen von Worksheets:

```py
ws1 = wb.worksheets[0]
print(wb.sheetnames) # ["Sheet"]
ws1 = wb["Sheet"]

# new sheet 0
wb.create_sheet("Sheet2", 0)
ws2 = wb["Sheet2"]
```

## Openpyxl

Arbeiten mit Worksheets

```py
ws = wb.worksheets[0]

ws.title = "times table"
```

## Openpyxl

Arbeiten mit Zellen

```py
a1 = ws.cell(1, 1)
a1 = ws["A1"]

a1.value # None
a1.value = 3

a1.row # 1
a1.column # 1
a1.coordinate # "A1"
```

## Openpyxl

Beispiel: Erstellen der folgenden Tabelle:

| product | price | stock |
| ------- | ----- | ----- |
| apple   | 1.00  | 10    |
| banana  | 0.70  | 20    |
| pear    | 0.80  | 20    |

## Resourcen

- [openpyxl documentation - Simple usage](https://openpyxl.readthedocs.io/en/stable/usage.html)
- [openpyxl documentation - Key Classes](https://openpyxl.readthedocs.io/en/stable/#key-classes)
- [Automate the Boring Stuff with Python - Chapter 12](http://automatetheboringstuff.com/chapter12/)


# GUI

## Graphical User Interface

## GUI-Libraries für Python

- tk
- Qt
- Kivy

## tk

- Einfache UI-Library
- Anbindung an Python: tkinter
- unter Windows mit Python vorinstalliert

## Qt

- Weit verbreitete UI-Library
- Anbindungen an Python: PyQt oder PySide

## Kivy

- speziell für Python entwickelt

# Tkinter

## Tkinter

https://tkdocs.com/

## Tkinter - Ein Fenster anzeigen

```py
import tkinter

window = tkinter.Tk()

window.mainloop()
```

Ein Fenster wird als `Tk`-Objekt erstellt

Mit `mainloop()` starten wir das Programm (und warten auf Benutzerinteraktion)

## Tkinter - Text anzeigen

```py
import tkinter

window = tkinter.Tk()

hello_label = tkinter.Label(master=window, text="Hello!")
hello_label.pack()

window.mainloop()
```

## Tkinter - pack und grid

Mit `pack`: Einfache Zeilen- oder Spaltenlayouts

```py
hello_label.pack()
```

Mit `grid`: Komplexere Ausrichtungen an einem Raster sind möglich

```py
hello_label.grid(column=0, row=0)
```

## Tkinter - Elemente nachträglich ändern

```py
hello_label = tkinter.Label(master=window, text="Hello!")
hello_label.config(text="Hi!")
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

- `height` (in Pixeln oder relativ zur Schriftgröße)
- `width`
- `borderwidth`
- `background` (Hintergrundfarbe)
- `foreground` (Textfarbe)
- `justify` (Textausrichtung, Werte: `tkinter.CENTER`, `tkinter.LEFT`, `tkinter.RIGHT`)
- `padx`, `pady` (Abstand Rahmen zu Inhalt)

## Tkinter - Widgets

- `Label`
- `Button`
- `Frame`
- `Entry`

## Tkinter - Beispiele

- zufälliger Sehtest (Snellen Chart)
- Tic-Tac-Toe

# PyInstaller

## PyInstaller

Ermöglicht das erstellen von _.exe_-Dateien aus Python-Projekten

Insbesondere für GUI-Anwendungen sinnvoll

## PyInstaller - Verwendung

Installation:

```bash
pip install pyinstaller
```

## PyInstaller - Verwendung

Erstellen einer ausführbaren Anwendung:

```bash
pyinstaller app.pyw --onefile --windowed
```

Resultat: Datei _dist/app.exe_

# SMTP / IMAP

## SMTP / IMAP

https://automatetheboringstuff.com/chapter16/

(für Fehler und Korrekturen siehe nächste Folie)

zur verdeckten Passworteingabe: Modul "getpass"

## SMTP / IMAP

Fehler in der resouce:

Die query besteht aus zwei Einträgen:

~~`UIDs = imapObj.search(['SINCE 05-Jul-2014'])`~~

`UIDs = imapObj.search(['SINCE', '05-Jul-2014'])`

Neuere Version von _pyzmail_ verwenden:

~~`pyzmail`~~ → `pyzmail36`

_bytes_ statt _string_ verwenden:

~~`'BODY[]'`~~ → `b'BODY[]`

