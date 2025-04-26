# URL parameters

## URL parameters

examples of URLs with parameters:

- _/products/123_ (route parameter / path parameter)
- _/products/?min_rating=4&max_price=200_ (query parameters)

## Route parameters / path parameters

example URL: _/products/123_ (references a specific product by an ID)

```js
app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  // ...
});
```

## Query parameters

example URL: _/products?min_rating=4&max_price=200_ (filters by some criteria)

```js
app.get('/products', (req, res) => {
  const minRating = Number(req.query.min_rating);
  const maxPrice = Number(req.query.max_price);
  // ...
});
```
