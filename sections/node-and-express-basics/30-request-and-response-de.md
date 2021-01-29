# Request und Response

## Request und Response

Web-Entwicklung in node geschieht über Request-Hanlder-Funktionen, z.B.:

```js
(req, res) => {
  res.send('<h1>Hello World!</h1>\n');
};
```

## Request und Response

Ein Request Handler bekommt zwei Argumente:

- `req` - repräsentiert den eingehenden _request_ (Klasse [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage) in node, Unterklasse [Request](http://expressjs.com/en/4x/api.html#req) in express)
- `res` - repräsentiert die _response_ / Antwort, die gensendet wird (Klasse [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse) in node, Unterklasse [Response](http://expressjs.com/en/4x/api.html#res) in express)

## Übung

Übung: erstelle eine Seite, die die aktuelle Uhrzeit anzeigt

## Übung

Lösung:

```js
import express from 'express';

const app = express();

app.use((req, res) => {
  const timeString = new Date().toTimeString();
  res.send('<h1>current time: ' + timeString + '</h1>');
});

app.listen(3000);
```
