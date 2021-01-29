# Das Response-Objekt

## Das Response-Objekt

Klasse in reinem Node bzw in _connect_: [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)

Klasse in _express_: [Response](https://expressjs.com/de/api.html#res)

## Das Response-Objekt

Methoden in Express:

- `.send()`
- `.set()`
- `.status()`

## Das Response-Objekt

Beispiel:

```js
res.set({ 'Content-Type': 'text/plain' });
res.send('Date:\n' + new Date().toLocaleDateString());
```

## Das Response-Objekt

```js
res.status(404);
res.set({ 'Content-Type': 'text/plain' });
res.send('Document not found.\n');
```

## Das Response-Objekt

Setzen eines Cookies:

```js
res.cookie('a', '1');
```

bzw explizit:

```js
res.set({ 'Set-Cookie': 'a=1' });
```
