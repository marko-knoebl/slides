# Routing and redirects

## Routing

```js
app.get('/', (req, res) => {
  res.send('<h1>Home</h1>\n');
});
app.get('/about', (req, res) => {
  res.send('<h1>About</h1>\n');
});
```

other methods: `.post`, `.put`, `.delete`, ...

## Route parameters

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
