# Querying data - examples

## Getting all data

SQL:

```sql
SELECT * FROM iris;
```

SQLAlchemy (Python):

```sql
session.query(Iris)
```

mongo shell (JS):

```js
db.iris.find({});
```

Pandas (Python): N/A

## Selecting only some columns / fields

SQL:

```sql
SELECT sepal_length, sepal_width FROM iris;
```

SQLAlchemy (Python):

```sql
session.query(Iris.sepal_length, Iris.sepal_width)
```

## Selecting only some columns / fields

Mongo shell:

```js
db.iris.find({}, { sepal_length: 1, sepal_width: 1 });
```

Pandas:

```py
iris_data.loc[:,["sepal_length", "sepal_width"]]
```

## Finding specific entries

SQL:

```sql
SELECT * FROM iris WHERE name='Iris-setosa';
```

SQLAlchemy (Python):

```py
session.query(Iris).filter(Iris.name="Iris-setosa")
```

## Finding specific entries

mongo shell:

```js
db.iris.find({ name: 'Iris-setosa' });
```

pandas (Python):

```py
iris_setosa_data = iris_data.loc[
    iris_data["name"] == "Iris-setosa"
]
```

pandas (Python): selecting a range of rows:

```py
iris_data.iloc[10:20]
```

## Combination: rows and columns

SQL:

```sql
SELECT sepal_length, sepal_width
FROM iris
WHERE name='Iris-setosa';
```

## Combination: rows and columns

SQLAlchemy (Python):

```py
session.query(
    Iris.sepal_length, Iris.sepal_width
).filter(Iris.name="Iris-setosa")
```

## Combination: rows and columns

mongo shell:

```js
db.iris.find(
  { name: 'Iris-setosa' },
  { sepal_length: 1, sepal_width: 1 }
);
```

## Combination: rows and columns

pandas (Python):

```py
iris_data.loc[
    [iris_data["name"] == "Iris-setosa"],
    ["sepal_length", "sepal_width"],
]
```

## Sorting data

SQL:

```sql
SELECT sepal_length, sepal_width
FROM iris
ORDER BY sepal_length;
```

## Sorting data

SQLAlchemy:

```py
session.query(
    Iris.sepal_length, Iris.sepal_width
).order_by(Iris.sepal_length)
```

## Sorting data

mongo shell:

```js
db.iris
  .find({}, { sepal_length: 1, sepal_width: 1 })
  .sort({ sepal_length: 1 });
```

## Sorting data

pandas (Python):

```py
iris_data.loc[["sepal_length", "sepal_width"]].sort_values(
    by="sepal_length"
)
```
