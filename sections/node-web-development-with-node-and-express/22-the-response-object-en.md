# The response object

## The response object

class in plain node / _connect_: [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)

class in _express_: [Response](https://expressjs.com/de/api.html#res)

## The response object

methods in express:

- `.send()`
- `.set()`
- `.status()`

## The response object

example:

```js
res.set({ 'Content-Type': 'text/plain' });
res.send('Date:\n' + new Date().toLocaleDateString());
```

## The response object

```js
res.status(404);
res.set({ 'Content-Type': 'text/plain' });
res.send('Document not found.\n');
```

## The response object

setting a cookie:

```js
res.cookie('a', '1');
```

or explicitly:

```js
res.set({ 'Set-Cookie': 'a=1' });
```
