# HTTP

---

## HTTP

Hypertext Transfer Protocol

= Protokoll, auf dessen Basis Resourcen über das Netzwerk angefragt und übertragen werden können

---

## HTTP

Paar: Anfrage - Antwort

Anfrage: meist aus dem Browser

Antwort: kommt vom Server

Beispiel: Siehe Browser-Tools unter "Netzwerkanalyse"

---

## HTTP-Anfrage: Beispiel

```http
GET /index.html HTTP/2.0
Host: example.com
User-Agent: Mozilla/5.0...
Content-Type: application/json
Content-Length: 23

{
  "action": "login"
}
```

---

## HTTP-Antwort: Beispiel

```http
HTTP/2.0 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 138
ETag: "3f80f-1b6-3e1cb03b"

<html>
<head>
  <title>An Example Page</title>
</head>
<body>
  Hello World, this is a very simple HTML document.
</body>
</html>
```
