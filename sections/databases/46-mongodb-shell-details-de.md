# MongoDB Shell - Details

## Zählen

```js
db.todos.find({ completed: false }).count();
```

## Query selectors

- `$text`
- `$regex`
- `$gt`, `$gte`, `$lt`, `$lte`
- `$in`

## Query selectors

```js
db.products.find({ name: { $text: 'fairphone' } });
db.products.find({
  category: 'phone',
  price: { $lt: 300 },
});
db.products.find({
  category: { $in: ['laptop', 'tablet'] },
  price: { $lt: 400 },
});
```

siehe: https://docs.mongodb.com/manual/reference/operator/query/

## Projektionen

Abfragen von bestimmten Feldern:

```js
db.products
  .find({ category: 'phone' })
  .project({ name: 1, price: 1 });
```

liefert nur _name_ und _price_ (und _\_id_) aller Einträge
