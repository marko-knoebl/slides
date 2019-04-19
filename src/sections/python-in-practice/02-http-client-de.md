# HTTP mit Python

## HTTP

- http.client.HTTP(S)Connection
- urllib
- requests

## HTTP(S)Connection

low-level interface

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

herunterladen und in einem pfad in Pythons `sys.path` ablegen - oder im aktuellen Verzeichnis (working directory)
