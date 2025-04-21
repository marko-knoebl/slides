# Routenparameter und Query-Parameter

## Routenparameter

Beispiel-URL: _/products/123_

```js
app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  // ...
});
```

Routenparameter sind immer Strings

## Query-Parameter

Beispiel-URL: _/products?min_rating=4&max_price=200_

```js
app.get('/products', (req, res) => {
  const minRating = Number(req.query.min_rating);
  const maxPrice = Number(req.query.max_price);
  // ...
});
```

Query-Parameter sind immer Strings
