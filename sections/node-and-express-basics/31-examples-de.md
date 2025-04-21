# Beispiele

## Beispiele

antworte für _/hello_ mit einer Hello World-Nachricht:

```js
app.get('/hello', (req, res) => {
  res.send('<h1>Hello World!</h1>\n');
});
```

## Beispiele

Sende eine statische Datei:

```js
app.get('/favicon.ico', (req, res) => {
  res.sendFile('public/favicon.ico');
});
```

## Beispiele

Lade Datenbankeinträge und sende sie als JSON:

```js
app.get('/api/products', async (req, res) => {
  // use a DB library for accessing the database
  const sqlQuery = 'SELECT * FROM product';
  const [results] = await db.query(sqlQuery);

  // send the results as JSON
  res.json(results);
});
```

## Beispiele

Lade einen Datenbankeintrag basierend auf einem URL-Parameter und sende ihne als JSON:

```js
app.get('/api/products/:id', async (req, res) => {
  const id = Number(req.params.id);

  const sqlQuery = 'SELECT * FROM product WHERE id = ?';
  const [results] = await db.query(sqlQuery, [id]);

  res.json(results[0]);
});
```

## Beispiele

Lade Datenbankeinträge basierend auf _Query Parametern_

Beispiel für eine angefragte URL: _/api/products?min_rating=4&max_price=200_

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

## Beispiele

Rendere eine HTML-Seite basierend auf einem Datenbankeintrag

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
