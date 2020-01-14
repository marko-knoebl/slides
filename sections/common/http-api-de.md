# Web APIs

## Web APIs

Web API = Möglichkeit, Datensätze zwischen Browser und Server auszutauschen

## Web APIs

Standards:

- SOAP (nicht mehr weit verbreitet)
- REST
- GraphQL

## Web APIs

Abfrageformat:

- SOAP: XML
- REST: HTTP Methode + URL (+ URL Parameter) (+ Request Body)
- GraphQL: GraphQL Abfragesprache

Antwortformat:

- SOAP: XML
- REST: oft JSON (oder XML, ...)
- GraphQL: JSON

## REST

REST = Representational State Transfer

Hauptsächlich via HTTP requests mit diesen Methoden:

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
