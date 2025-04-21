# Grundlegendes Routing

## Grundlegendes Routing

```js
app.get('/', (req, res) => {
  res.send('<h1>Home</h1>\n');
});
app.get('/about', (req, res) => {
  res.send('<h1>About</h1>\n');
});
```

andere HTTP-Methoden werden behandelt via: `.post`, `.put`, `.delete`, ...
