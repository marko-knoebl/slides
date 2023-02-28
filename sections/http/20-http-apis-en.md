# HTTP APIs

## HTTP APIs

HTTP API / web API = means of transmitting data sets between a client and a web server

## HTTP APIs

standards:

- XML-RPC (1998)
- SOAP (1999)
- JSON-RPC (2005)
- REST (2000)
- GraphQL (2015)

## HTTP APIs

request format:

- SOAP: XML
- JSON-RPC: JSON
- REST: URL + HTTP method (+ URL parameters) (+ request body)
- GraphQL: GraphQL query language

response format:

- SOAP: XML
- JSON-RPC: JSON
- REST: commonly JSON (or XML, ...)
- GraphQL: JSON

## Comparison of REST, JSON-RPC and GraphQL

- fixed vs flexible queries
- fixed protocol vs protocol agnostic

## Fixed vs flexible queries

**REST**, **JSON-RPC**: _endpoints_ / _methods_ are fixed (e.g. _posts_of_friends_, _suggested_friends_, ...)

**GraphQL**: client can construct their own query in a flexible way

Advantage of GraphQL: more flexible, new functionality may not need extra code on the backend

Disadvantage of GraphQL: may often need additional code to restrict access (e.g. prevent querying for _posts of suggested friends_)

## Fixed protocol vs protocol agnostic

**REST** is commonly associated with HTTP, distinguishing API calls by their HTTP methods (_get_, _post_, ...)

**JSON-RPC** and **GraphQL** could be used with other protocols, e.g. WebSockets

## JSON-RPC

RPC = remote procedure call

## JSON-RPC

example request body:

```json
{
  "jsonrpc": "2.0",
  "method": "get_todo_by_id",
  "params": { "id": 1 },
  "id": 1234
}
```

example response body:

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

Mostly via HTTP requests with these methods:

- querying elements via `GET`
- adding an element via `POST`
- adding an element at a specific URL via `PUT`
- modifying an element via `PATCH`
- replacing an element via `PUT`
- deleting an element via `DELETE`
- any other modification via `POST`

## REST examples

_get_: querying multiple entries:

```http
GET /todos HTTP/2.0
Host: jsonplaceholder.typicode.com
```

_get_: querying a single entity:

```http
GET /todos/2 HTTP/2.0
Host: jsonplaceholder.typicode.com
```

_get_: querying multiple entities:

```http
GET /todos?userId=1&completed=false
Host: jsonplaceholder.typicode.com
```

## REST examples

_post_: adding an entry:

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

## REST examples

_patch_: changing an entry:

```http
PATCH /todos/6 HTTP/2.0
Host: jsonplaceholder.typicode.com
Content-Type: application/json
Content-Length: 23

{
  "completed": true
}
```

## REST examples

_delete_: deleting an entry:

```http
DELETE /todos/6 HTTP/2.0
Host: jsonplaceholder.typicode.com
```

## REST examples

_post_: other request (deleting all completed todos):

```http
POST /todos/delete_completed HTTP/2.0
Host: ...
```

## Resources

example REST APIs:

- [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
- [restcountries.eu](https://restcountries.eu)
