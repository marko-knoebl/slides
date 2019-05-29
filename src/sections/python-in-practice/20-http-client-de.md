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
