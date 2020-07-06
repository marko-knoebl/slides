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

## HTTP&#x3A; Beispiel Wikipedia

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

## HTTP&#x3A; Beispiel Wikipedia Suche (1)

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

## HTTP&#x3A; Beispiel Wikipedia Suche (2)

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

## HTTP&#x3A; Beispiel POST-Request

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

## HTTP&#x3A; Beispiel API

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

siehe auch: <https://en.wikipedia.org/wiki/List_of_HTTP_status_codes>

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

# HTTP APIs

## HTTP APIs

HTTP API / Web API = Möglichkeit, Datensätze zwischen Client und Server auszutauschen

## HTTP APIs

Standards:

- XML-RPC (1998)
- SOAP (1999)
- JSON-RPC (2005)
- REST (2000)
- GraphQL (2015)

## HTTP APIs

Anfrageformat:

- SOAP: XML
- JSON-RPC: JSON
- REST: HTTP Methode + URL (+ URL Parameter) (+ Request Body)
- GraphQL: GraphQL Abfragesprache

Antwortformat:

- SOAP: XML
- JSON-RPC: JSON
- REST: oft JSON (oder XML, ...)
- GraphQL: JSON

## JSON-RPC

RPC = remote procedure call

## JSON-RPC

Beispiel für Request-Body:

```json
{
  "jsonrpc": "2.0",
  "method": "get_todo_by_id",
  "params": { "id": 1 },
  "id": 1234
}
```

Beispiel für Response-Body:

```json
{
  "jsonrpc": "2.0",
  "error": null,
  "result": [
    { "id": 1, "title": "groceries", "completed": false }
  ],
  "id": 1234
}
```

## REST

REST = Representational State Transfer

Hauptsächlich via HTTP Requests mit diesen Methoden:

- Abfragen von Elementen via `GET`
- Hinzufügen eines Elements via `POST`
- Hinzufügen eines Elements unter einer bestimmten URL via `PUT`
- Ändern von Elementen via `PATCH`
- Ersetzen von Elementen via `PUT`
- Löschen von Elementen via `DELETE`
- alle anderen Änderungen via `POST`

## REST Beispiele

_get_: Abfrage mehrerer Elemente:

```http
GET /todos HTTP/2.0
Host: jsonplaceholder.typicode.com
```

_get_: Abfrage eines einzelnen Elements:

```http
GET /todos/2 HTTP/2.0
Host: jsonplaceholder.typicode.com
```

_get_: Abfrage von drei Elementen via Identifier:

```http
GET /rest/v2/alpha?codes=de;fr;it HTTP/2.0
Host: restcountries.eu
```

## REST Beispiele

_post_: Hinzufügen eines Eintrags:

```http
POST /todos HTTP/2.0
Host: jsonplaceholder.typicode.com
Content-Type: application/json
Content-Length: 27

{
  "title": "learn REST",
  "completed": false
}
```

## REST Beispiele

_patch_: Ändern eines Eintrags:

```http
PATCH /todos/6 HTTP/2.0
Host: jsonplaceholder.typicode.com
Content-Type: application/json
Content-Length: 23

{
  "completed": true
}
```

## REST Beispiele

_delete_: Löschen eines Eintrags:

```http
DELETE /todos/6 HTTP/2.0
Host: jsonplaceholder.typicode.com
```

## REST Beispiele

_post_: Andere Anfragen (Löschen aller erledigter Todos):

```http
POST /todos/delete_completed HTTP/2.0
Host: ...
```

## Resourcen

Beispiele für REST APIs:

- [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
- [restcountries.eu](https://restcountries.eu)
