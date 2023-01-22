# HTTP

## HTTP

Hypertext Transfer Protocol

= protocol for requesting and transferring resources over a network

## HTTP

Pair: Request - Response

Request: from the browser (mostly)

Response: from the server

HTTP requests and responses are transferred via a _lower-level_ protocol, most commonly _TCP_

## HTTP

request format:

- request line
- header fields
- message body (optional)

response format:

- status line
- header fields
- message body (optional)

## Experimenting with HTTP

via:

- Firefox tools under _network_
- VS Code Plugin _HTTP Client_

## HTTP example: Wikipedia

Request:

```http
GET /wiki/Main_Page HTTP/2.0
Host: en.wikipedia.org
Connection: keep-alive
```

Response:

```http
HTTP/2.0 200 OK
Date: Wed, 24 Apr 2019 07:50:41 GMT
Content-Type: text/html; charset=UTF-8

<!DOCTYPE html>
<html ...
```

## HTTP example: Wikipedia search (1)

request:

```http
GET /w/index.php?search=test&title=Special:Search&go=Go HTTP/2.0
Host: en.wikipedia.org
Connection: keep-alive
```

response:

```http
HTTP/2.0 302 Found
Location: https://en.wikipedia.org/wiki/Test
Content-Length: 0
```

## HTTP example: Wikipedia search (2)

request:

```http
GET /wiki/Test HTTP/2.0
Host: en.wikipedia.org
Connection: keep-alive
```

response:

```http
HTTP/2.0 200 OK
Content-Type: text/html; charset=UTF-8

<!DOCTYPE html>
<html ...
```

## HTTP example: POST request

request:

```http
POST /submit-posting HTTP/2.0
Host: example.com
Connection: keep-alive
Content-Type: text/plain; encoding=UTF-8
Content-Length: 33

This is the post content (body)
```

response:

```http
HTTP/2.0 200 OK
Content-Type: text/html; charset=UTF-8

...
```

## HTTP example: API

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

## Important request header fields

- _`Host`_
- _`Connection`_
- `Origin`
- `Accept`
- `Accept-Encoding`
- `Cookie`
- `Cache-Control`
- `Authorization`

## Important HTTP status codes

- `200 OK`

<!-- list separator -->

- `301 Moved Permanently`
- `307 Temporary Redirect` (Redirect to other address)
- `303 See Other` (Redirect to other address, HTTP method changes is set to `GET`)
- `308 Permanent Redirect`
- `304 Not Modified` (Resource did not change since last query)

## Important HTTP status codes

- `400 Bad Request`
- `401 Unauthorized`
- `403 Forbidden`
- `404 Not Found`

<!-- list separator -->

- `500 Internal Server Error`

see also: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

## Important response header fields

- `Content-Length`
- `Content-Type`
- `Set-Cookie`
- `Location`
- `Cache-Control`

## Header field "Content-Type"

possible values:

- `text/plain; charset=utf-8`
- `text/html; charset=utf-8`
- `application/json`
- `application/javascript`
- `application/ecmascript`
- `image/jpeg`
- `image/png`
- ...

## Header field "Set-Cookie"

example:

```http
GET /
Host: www.google.com

Set-Cookie: 1P_JAR=2019-04-24-08; expires=...; path=/; domain=.google.com
Set-Cookie: IDCC=AN0-TYtU7...fo; expires=...; path=/; domain=.google.com
```
