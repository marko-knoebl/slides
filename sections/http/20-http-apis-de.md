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

## Vergleich von REST, JSON-RPC und GraphQL

- vorgegebene vs flexible Queries
- protokollabhängig vs protokollunabhängig

## Vorgegebene vs flexible Queries

**REST**, **JSON-RPC**: _Endpunkte_ / _Methoden_ sind vorgegeben (z.B. _posts_of_friends_, _suggested_friends_, ...)

**GraphQL**: Client kann eigene Query flexibel zusammenstellen

Vorteil von GraphQL: Flexibler, neue Funktionalität benötigt oft keinen zusätzlichen Backend-Code

Nachteil von GraphQL: Benötigt oft zusätzlichen Code um Zugriffe zu beschränken (z.B. Verhindern, auf Posts von vorgeschlagenen Freunden zuzugreifen)

## Protokollabhängig vs protokollunabhängig

**REST** wird üblicherweise mit HTTP verwendet, API-Aufrufe werden durch die HTTP-Methode unterschieden (_get_, _post_, ...)

**JSON-RPC** und **GraphQL** können mit anderen Protokollen verwendet werden, z.B. WebSockets

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

_get_: Abfragen mehrerer Elemente:

```http
GET /todos?userId=1&completed=false
Host: jsonplaceholder.typicode.com
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
