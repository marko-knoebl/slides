# Das Request-Objekt

## Das Request-Objekt

Beispiel für ein Request-Objekt:

```json
{
  "url": "/",
  "method": "GET",
  "headers": {
    "user-agent": "Mozilla/5.0 (Windows ..."
  }
}
```

Klasse in reinem Node bzw in _connect_: [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)

Klasse in _express_: [Request](https://expressjs.com/de/api.html#req)

## Das Request-Objekt

Übung: Erstelle eine Website mit unterschiedlichen Antworten basierend auf der angefragten URL
