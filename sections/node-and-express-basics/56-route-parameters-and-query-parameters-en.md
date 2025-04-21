# Route parameters and query parameters

## Route parameters

example URL: _/products/123_

```js
app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  // ...
});
```

route parameters are always strings

## Query parameters

example URL: _/products?min_rating=4&max_price=200_

```js
app.get('/products', (req, res) => {
  const minRating = Number(req.query.min_rating);
  const maxPrice = Number(req.query.max_price);
  // ...
});
```

query parameters are always strings
