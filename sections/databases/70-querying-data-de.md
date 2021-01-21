# Datenabfrage - Beispiele

## Alle Daten abfragen

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

## Bestimmte Spalten / Felder abfragen

SQL:

```sql
SELECT sepal_length, sepal_width FROM iris;
```

SQLAlchemy (Python):

```sql
session.query(Iris.sepal_length, Iris.sepal_width)
```

## Bestimmte Spalten / Felder abfragen

Mongo shell:

```js
db.iris.find({}, { sepal_length: 1, sepal_width: 1 });
```

Pandas:

```py
iris_data.loc[:,["sepal_length", "sepal_width"]]
```

## Bestimmte Einträge finden

SQL:

```sql
SELECT * FROM iris WHERE name='Iris-setosa';
```

SQLAlchemy (Python):

```py
session.query(Iris).filter(Iris.name="Iris-setosa")
```

## Bestimmte Einträge finden

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

pandas (Python): Eine Reihe von Einträgen auswählen:

```py
iris_data.iloc[10:20]
```

## Einträge und Felder auswählen

SQL:

```sql
SELECT sepal_length, sepal_width
FROM iris
WHERE name='Iris-setosa';
```

## Einträge und Felder auswählen

SQLAlchemy (Python):

```py
session.query(
    Iris.sepal_length, Iris.sepal_width
).filter(Iris.name="Iris-setosa")
```

## Einträge und Felder auswählen

mongo shell:

```js
db.iris.find(
  { name: 'Iris-setosa' },
  { sepal_length: 1, sepal_width: 1 }
);
```

## Einträge und Felder auswählen

pandas (Python):

```py
iris_data.loc[
    [iris_data["name"] == "Iris-setosa"],
    ["sepal_length", "sepal_width"],
]
```

## Einträge sortieren

SQL:

```sql
SELECT sepal_length, sepal_width
FROM iris
ORDER BY sepal_length;
```

## Einträge sortieren

SQLAlchemy:

```py
session.query(
    Iris.sepal_length, Iris.sepal_width
).order_by(Iris.sepal_length)
```

## Einträge sortieren

mongo shell:

```js
db.iris
  .find({}, { sepal_length: 1, sepal_width: 1 })
  .sort({ sepal_length: 1 });
```

## Einträge sortieren

pandas (Python):

```py
iris_data.loc[["sepal_length", "sepal_width"]].sort_values(
    by="sepal_length"
)
```
