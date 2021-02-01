# Routing und Redirects

## Routing

```js
app.get('/', (req, res) => {
  res.send('<h1>Home</h1>\n');
});
app.get('/about', (req, res) => {
  res.send('<h1>About</h1>\n');
});
```

andere Methoden: `.post`, `.put`, `.delete`, ...

## Routenparameter

```js
app.get('/articles/:id', (req, res) => {
  const articleId = req.params.id;
  // ...
});
```

## Redirects

```js
app.get('/home', (req, res) => {
  res.redirect('/');
});
```
