# URL-Parameter

## URL-Parameter

Beispiele für URLs mit Parametern:

- _/products/123_ (verweist über eine ID auf ein einzelnes Produkt)
- _/products?min_rating=4&max_price=200_ (filtert anhand von Kriterien)

## Routenparameter

Beispiel-URL: _/products/123_ (verweist über eine ID auf ein einzelnes Produkt)

```js
app.get('/products/:id', (req, res) => {
  const productId = Number(req.params.id);
  // ...
});
```

## Query-Parameter

Beispiel-URL: _/products?min_rating=4&max_price=200_ (filtert anhand von Kriterien)

```js
app.get('/products', (req, res) => {
  const minRating = Number(req.query.min_rating);
  const maxPrice = Number(req.query.max_price);
  // ...
});
```
