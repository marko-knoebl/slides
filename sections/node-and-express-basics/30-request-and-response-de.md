# Request und Response

## Request und Response

Web-Entwicklung in node geschieht über Request-Handler-Funktionen, z.B.:

```js
(req, res) => {
  res.send('<h1>Hello World!</h1>\n');
};
```

## Request und Response

Ein Request Handler bekommt zwei Argumente übergeben:

- `req` - repräsentiert den eingehenden _request_
- `res` - repräsentiert die _response_ / Antwort, die wir senden werden

## Das Request-Objekt

Beispiel für ein Request-Objekt:

```json
{
  "method": "GET",
  "path": "/products/123",
  "params": { "id": "123" },
  "headers": { "user-agent": "Mozilla/5.0 (Windows ..." }
}
```

Klasse in reinem Node: [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)

Unterklasse in _express_: [Request](https://expressjs.com/en/5x/api.html#req)

## Das Response-Objekt

Klasse in reinem Node: [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)

Unterklasse in _express_: [Response](http://expressjs.com/en/5x/api.html#res)
