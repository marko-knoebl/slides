# HTTP

## HTTP

Hypertext Transfer Protocol

= Protokoll, auf dessen Basis Resourcen über das Netzwerk angefragt und übertragen werden können

## HTTP

Paar: Anfrage - Antwort

Anfrage: meist aus dem Browser

Antwort: kommt vom Server

HTTP Anfragen und Antworten werden wiederum über ein "niedrigeres" Protokoll übertragen, üblicherweise _TCP_.

## HTTP

Anfrageformat:

- Anfragezeile
- Header-Felder
- Body (optional)

Antwortformat:

- Statuszeile
- Header-Felder
- Body (optional)

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
- `Authorization`

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

## Headerfeld "Content-Type"

Mögliche Werte:

- `text/plain; charset=utf-8`
- `text/html; charset=utf-8`
- `application/json`
- `application/javascript`
- `application/ecmascript`
- `image/jpeg`
- `image/png`
- ...

## Headerfeld "Set-Cookie"

Beispiel:

```http
GET /
Host: www.google.com

Set-Cookie: 1P_JAR=2019-04-24-08; expires=...; path=/; domain=.google.com
Set-Cookie: IDCC=AN0-TYtU7...fo; expires=...; path=/; domain=.google.com
```
