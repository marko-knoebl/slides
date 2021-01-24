# MongoDB shell - details

## Counting

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

see: https://docs.mongodb.com/manual/reference/operator/query/
