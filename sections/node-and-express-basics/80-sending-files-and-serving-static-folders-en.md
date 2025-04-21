# Sending files and serving static folders

## Sending files and serving static folders

sending just a single static file:

```js
app.get('/favicon.ico', (req, res) => {
  res.sendFile('public/favicon.ico');
});
```

## Serving static folders

specifying a folder that contains static files via middleware:

look for static content for every request:

```js
app.use(express.static('public'));
```

look for static content only if the URL starts with _/static_:

```js
app.use('/static', express.static('public'));
```
