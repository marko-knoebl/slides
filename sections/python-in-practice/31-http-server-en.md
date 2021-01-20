# Server-side HTTP

## Operating a local file server with Python

```bash
python -m http.server
```

## Overview

https://docs.python.org/2/howto/webservers.html

(info is somewhat dated)

## CGI, WSGI and ASGI

= standard interfaces for letting a program on a server reply to an HTTP request

- _CGI_: cross-language standard, slow performance
- _WSGI_: adaptation of CGI for Python
- _ASGI_: asynchronous version of WSGI

## CGI

CGI (_Common Gateway Interface_): Interface between server software (e.g. Apache) and a web application (written in any programming language)

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

## Setting cookies

```py
response_headers.append((
    "Set-Cookie", "mycookie123=abcd; Max-Age=30"
))
```

## Reading cookies

```py
try:
    current_cookies_str = environ["HTTP_COOKIE"]
except KeyError:
    ...
```

result may be: `"cookie1=one; cookie2=two"`

## Parsing cookies

```py
from http import cookies

...

mycookies = cookies.SimpleCookie()
mycookies.load(current_cookies_str)
mycookies["cookie1"].value
```

## Deleting cookies

by setting an expired cookie

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
