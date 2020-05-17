# HTTP APIs

## HTTP APIs

HTTP API / web API = means of transmitting data sets between a web browser and a web server

## HTTP APIs

standards:

- SOAP (not that popular anymore)
- REST
- GraphQL

## HTTP APIs

query format:

- SOAP: XML
- REST: URL + HTTP method (+ URL parameters) (+ request body)
- GraphQL: GraphQL query language

response format:

- SOAP: XML
- REST: commonly JSON (or XML, ...)
- GraphQL: JSON

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

_get_: querying three entities by identifier:

```http
GET /rest/v2/alpha?codes=de;fr;it HTTP/2.0
Host: restcountries.eu
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
