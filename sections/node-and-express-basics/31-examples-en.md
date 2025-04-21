# Examples

## Examples

send a hello world message under _/hello_:

```js
app.get('/hello', (req, res) => {
  res.send('<h1>Hello World!</h1>\n');
});
```

## Examples

send a static file:

```js
app.get('/favicon.ico', (req, res) => {
  res.sendFile('public/favicon.ico');
});
```

## Examples

get database entries and send them back as JSON:

```js
app.get('/api/products', async (req, res) => {
  // use a DB library for accessing the database
  const sqlQuery = 'SELECT * FROM product';
  const [results] = await db.query(sqlQuery);

  // send the results as JSON
  res.json(results);
});
```

## Examples

get a database entry and send it as JSON based on a URL parameter:

```js
app.get('/api/products/:id', async (req, res) => {
  const id = Number(req.params.id);

  const sqlQuery = 'SELECT * FROM product WHERE id = ?';
  const [results] = await db.query(sqlQuery, [id]);

  res.json(results[0]);
});
```

## Examples

get a database entry and send it as JSON based on _query parameters_

example request URL: _/api/products?min_rating=4&max_price=200_

```js
app.get('/api/products', async (req, res) => {
  const minRating = Number(req.query.min_rating);
  const maxPrice = Number(req.query.max_price);

  const sqlQuery =
    'SELECT * FROM product WHERE rating >= ? AND price <= ?';
  const sqlParams = [minRating, maxPrice];
  const [results] = await db.query(sqlQuery, sqlParams);

  res.json(results);
});
```

## Examples

render some HTML based on a database entry

```js
app.get('/products/:id', async (req, res) => {
  const sqlQuery = 'SELECT * FROM product WHERE id = ?';
  const sqlParams = [req.params.id];
  const [results] = await db.query(sqlQuery, sqlParams);

  // look for the "product_detail" template and render it based on
  // the retrieved data
  res.render('product_detail', {
    name: results[0].name,
    price: results[0].price,
  });
});
```
