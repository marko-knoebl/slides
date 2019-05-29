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
from urllib import request

content: bytes = request.urlopen(
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
- web scraping: headings in a Wikipedia article
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
