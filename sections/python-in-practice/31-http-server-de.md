# Serverseitiges HTTP

## Exkurs: Lokalen Dateiserver mit Python betreiben

```bash
python -m http.server
```

## Python am Server - Überblick

https://docs.python.org/2/howto/webservers.html

(etwas veraltet)

## CGI, WSGI und ASGI

= Standard-Interfaces, um ein Programm auf einem Server auf einen HTTP-Request antworten zu lassen

- _CGI_: Sprachenübergreifender Standard, langsam / resourcenintensiv
- _WSGI_: Adaptierung von CGI für Python
- _ASGI_: Asynchrone Version von WSGI

## CGI

CGI (_Common Gateway Interface_): Interface zwischen Serversoftware (z.B. Apache) und Webanwendung (geschrieben in beliebiger Programmiersprache)

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
