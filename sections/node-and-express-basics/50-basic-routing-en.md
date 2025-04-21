# Basic routing

## Basic routing

```js
app.get('/', (req, res) => {
  res.send('<h1>Home</h1>\n');
});
app.get('/about', (req, res) => {
  res.send('<h1>About</h1>\n');
});
```

other HTTP methods are handled via: `.post`, `.put`, `.delete`, ...
